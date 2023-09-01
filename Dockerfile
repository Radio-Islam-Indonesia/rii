FROM node:18.17.1-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./ /usr/src/app

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80
CMD [ "npm", "start" ]
