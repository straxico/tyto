FROM mhart/alpine-node:12 AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:12
WORKDIR /app

COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/package.json ./package.json

RUN yarn install --no-cache --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD [ "yarn","server"]