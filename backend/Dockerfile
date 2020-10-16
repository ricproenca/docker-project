FROM node:14.13.1-alpine3.12

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .