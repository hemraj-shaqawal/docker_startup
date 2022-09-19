FROM node:alpine

WORKDIR /usr/startup

COPY ./package.json ./

RUN npm i

COPY . .

CMD ["npm","start"]