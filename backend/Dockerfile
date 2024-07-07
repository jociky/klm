FROM node:20

RUN mkdir /app
RUN chown -R node:node /app

COPY dist /app/dist
COPY schemas /app/schemas
COPY _data /app/_data
COPY package.json /app/package.json

RUN cd /app && npm install --omit=dev

USER node

EXPOSE 3000
ENTRYPOINT ["node", "/app/dist/index.js"]