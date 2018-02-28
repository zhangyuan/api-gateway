FROM node:9

WORKDIR /app

COPY . /app

COPY package.json package-lock.json /app/

RUN npm install

COPY index.js /app

CMD ["./entrypoint.sh"]