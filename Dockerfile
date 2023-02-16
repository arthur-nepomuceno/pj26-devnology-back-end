FROM node

WORKDIR /usr/src/pj26-devnology-back-end

COPY . .

RUN npm i

RUN npx prisma generate

EXPOSE 5000

CMD [ "npm", "start" ]
