FROM node:16

WORKDIR /usr/server

COPY package*.json ./
RUN npm install
COPY . .
# SERVER_PORT: 3001
EXPOSE 3001

CMD ["npm", "run", "server"]