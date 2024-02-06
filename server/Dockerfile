# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json to the container
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire server directory to the container
COPY server/ .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
