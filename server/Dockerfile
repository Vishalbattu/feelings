# server/Dockerfile
FROM node:14

WORKDIR /usr/src/app/server  # Set the working directory for the server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
