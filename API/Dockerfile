FROM ubuntu:18.04

RUN apt update &&\
  apt install

RUN apt install curl -y

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt install nodejs -y

RUN mkdir /code/

WORKDIR /code/

COPY package.json ./

RUN npm install

CMD ["npm", "run", "dev"]
