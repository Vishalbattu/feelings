# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /usr/src/app/server
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define the command to run the application
CMD ["node", "index.js"]
