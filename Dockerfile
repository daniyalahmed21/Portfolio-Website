# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Vite app
RUN npm run build

# Expose Cloud Run port
EXPOSE 8080

# Start server
CMD ["npm", "run", "start"]
