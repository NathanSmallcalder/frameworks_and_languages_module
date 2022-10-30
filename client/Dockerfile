FROM alpine

WORKDIR /app/
COPY package.json ./
RUN npm init vue@latest
RUN npm install
COPY . .
ENTRYPOINT ["npm run dev"]
