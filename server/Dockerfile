# server/Dockerfile
FROM node:14

WORKDIR /usr/src/app  # Change the working directory to the root

COPY package*.json ./

# Print the current working directory and list its contents
RUN pwd && ls -al

WORKDIR /usr/src/app/server  # Change the working directory to 'server'

# Print the current working directory and list its contents
RUN pwd && ls -al

RUN npm install

COPY . .

CMD ["npm", "start"]
