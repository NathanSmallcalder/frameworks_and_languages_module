FROM node:alpine

WORKDIR /app/
COPY package.json ./
RUN npm install express
RUN npm install cors

COPY . .

ENTRYPOINT ["node", "server.js"]
