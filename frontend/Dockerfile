FROM node:14.15.2-alpine3.12 AS build

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD . .

RUN npm run build

CMD [ "npm", "run", "serve" ]

FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]