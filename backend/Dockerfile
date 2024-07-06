FROM node:20

COPY dist /app/dist
COPY schemas /app/schemas
COPY _data /app/_data
COPY package.json /app/package.json

RUN cd /app && npm install --omit=dev

EXPOSE 3000
ENTRYPOINT ["node", "/app/dist/index.js"]