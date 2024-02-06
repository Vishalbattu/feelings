# server/Dockerfile
FROM node:14

# Set the working directory
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Command to run the application
CMD ["npm", "start"]
