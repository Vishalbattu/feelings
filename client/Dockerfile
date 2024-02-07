# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire client directory to the container
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

# Updated CMD line for debugging
CMD ["bash", "-c", "while true; do sleep 10; done"]
