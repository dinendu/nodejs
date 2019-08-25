FROM node:10.0
run mkdir /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8080
CMD npm start 
