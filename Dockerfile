FROM ubuntu:16.04

RUN apt-get update && \
  apt-get install -y  curl && \
  curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs

COPY ./backend /home/
WORKDIR /home

RUN npm i express mysql2 morgan cors swagger-jsdoc swagger-ui-express dotenv 
RUN npm i nodemon @babel/core @babel/cli @babel/preset-env @babel/node -D
CMD [ "npm", "start" ]