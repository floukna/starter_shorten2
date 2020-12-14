FROM node:14.4.0-alpine

WORKDIR /home/app/front

ENV PATH /home/app/front/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000