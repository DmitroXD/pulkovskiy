FROM node:23-apline

ENV NODE_ENV=production
ARG FRONTEND_PORT

RUN mkdir /frontend
WORKDIR /frontend

COPY package.json .
RUN npm install

COPY . .

CMD npm run start