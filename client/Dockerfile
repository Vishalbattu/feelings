# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app/client

# Copy the entire client directory to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
