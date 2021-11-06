FROM node:10.16.0

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9090

CMD ["npm", "run", "dev-server"]
