FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
EXPOSE 27017

RUN npm install --production --silent
COPY . .

CMD [ "npm", "start" ]
