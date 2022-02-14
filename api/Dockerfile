FROM node:14.15.2-alpine3.12

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD . .

CMD [ "npm", "run", "serve" ]