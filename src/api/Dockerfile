FROM node:23-alpine

ENV NODE_ENV=production
ARG API_PORT

RUN mkdir /frontend
WORKDIR /frontend

COPY package.json .
RUN npm install

COPY . .

CMD npm run start:prod