FROM node:lts-alpine
RUN npm install -g http-server

WORKDIR /client

COPY package*.json ./

RUN apk update
RUN apk add python3 alpine-sdk
RUN npm install --force
RUN npm install sass-loader sass css-loader --save-dev -g
RUN npm install @vue/cli@3.7.0 -g

COPY . .

RUN npm run build

EXPOSE 80
CMD [ "http-server", "dist", "-p 80" ]