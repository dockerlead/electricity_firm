FROM node:12
RUN mkdir -p /usr/src/app
RUN apt update -y \
    apt install nano -y
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
EXPOSE 4200
CMD ["npm", "start"]