# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json to the container
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire client directory to the container
COPY client/ .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
