#STRICT EQUALITY BUILD IMAGE
FROM node:18-alpine
# Set the working directory
WORKDIR /usr/src/app
# Copy dependency definitions
COPY package*.json ./
# Clean, production-only installation. No bloat.
RUN npm ci --only=production
# Copy the core logic
COPY . .
# Expose the Ramanujan Port
EXPOSE 3011
#The execution command
CMD ["node", "server.js"]