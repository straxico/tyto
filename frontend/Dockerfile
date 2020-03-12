FROM mhart/alpine-node
WORKDIR /app
COPY . .
RUN npm install
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]
