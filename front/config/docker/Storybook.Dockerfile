FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build:icon
RUN yarn build:fontIcons
RUN yarn build-storybook
# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:12
WORKDIR /app
RUN yarn global add http-server
COPY --from=builder /app/storybook ./storybook
EXPOSE 8080
WORKDIR /app/storybook
CMD [ "http-server"]