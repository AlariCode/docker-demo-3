FROM node:14-alpine
WORKDIR /opt/app
ADD index.js .
CMD ["node", "./index.js"]