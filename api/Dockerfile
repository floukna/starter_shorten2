FROM node:12.12.0-alpine

WORKDIR /home/app/api

# ENV PATH /home/app/api/node_modules/.bin:$PATH

COPY package*.json ./
RUN yarn
COPY . .

EXPOSE 3001

# CMD [ "yarn", "run-dev" ]