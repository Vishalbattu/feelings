# server/Dockerfile
FROM node:14

WORKDIR /usr/src/app/server  # Change the working directory to 'server'

COPY package*.json ./

RUN ls -al  # Add this line to list the contents of the current directory

RUN npm install

COPY . .

CMD ["npm", "start"]
