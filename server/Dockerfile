# server/Dockerfile
FROM node:14

WORKDIR /usr/src/app/server  # Change the working directory to 'server'

COPY package*.json ./

RUN ls -al /usr/src/app/server  # List the contents of the 'server' directory

RUN npm install

COPY . .

CMD ["npm", "start"]
