FROM node

WORKDIR /usr/src/pj26-devnology-back-end

COPY . .

RUN npm i

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
