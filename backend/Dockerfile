FROM node:latest
WORKDIR /app/backend
COPY . .
RUN npm install
RUN npm install -g nodemon
EXPOSE 3000
CMD ["nodemon", "app.js"]