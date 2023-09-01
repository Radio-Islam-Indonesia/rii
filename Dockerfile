FROM node:18.17.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
COPY ./package-lock.json /usr/src/app/
RUN npm install && npm cache clean --force

COPY ./ /usr/src/app
RUN npm run build

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80
CMD [ "npm", "start" ]
