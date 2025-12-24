FROM node:20-alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8080
CMD ["node", "index.js"]
