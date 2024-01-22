FROM node:20

WORKDIR /app

COPY package*.json ./

# Run npm install to install dependencies
RUN npm install

# Run npm audit fix to fix vulnerabilities
# RUN npm audit fix --force

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Define environment variable
ENV NODE_ENV production

# Build the app
RUN npm run build

# Run the production server
CMD ["npm", "start"]
