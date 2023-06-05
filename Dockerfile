FROM node:18

WORKDIR /app-ecomm

ARG PORT=3000

EXPOSE $PORT

COPY . .

RUN npm i

ENTRYPOINT npm start