FROM node:18.13.0-alpine

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm install

COPY public/ src/ ./

USER node

CMD npm start
