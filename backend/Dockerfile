FROM node:latest
WORKDIR /app/backend
COPY . .
# RUN chown -R appuser .
# USER appuser

RUN npm install
RUN npm install -g nodemon

# To install ffmpeg for movies
RUN set -x
RUN apt-get update
RUN apt-get dist-upgrade
RUN apt-get install -y --no-install-recommends ffmpeg  

# Setting up volumes to be sudo
# RUN chown -R $(whoami):$(whoami) ./public/uploads
# RUN chown -R $(whoami):$(whoami) ./public/videos
# RUN chmod -R 777 ./public/uploads
# RUN chmod -R 777 ./public/videos



EXPOSE 3000
CMD ["nodemon", "app.js"]