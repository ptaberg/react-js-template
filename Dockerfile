FROM node:alpine

LABEL maintainer="Vic Shóstak <truewebartisans@gmail.com>"

WORKDIR /frontend
COPY ["package*.json", "src", "./"]
RUN npm i -s --only=production && npm run build
