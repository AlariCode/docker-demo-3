FROM node:14-alpine
RUN apk add curl
WORKDIR /opt/app
ADD index.js .
CMD ["node", "./index.js"]