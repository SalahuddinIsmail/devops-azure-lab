FROM node:18

WORKDIR /app

COPY app/package*.json ./
RUN npm install

COPY app/ .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]

