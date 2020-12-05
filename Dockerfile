# TODO: setup dockerfile to copy from app/lessons and start up both frontend and backend
FROM node:10

RUN mkdir -p /webui
WORKDIR /webui

COPY ./webui .
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build

EXPOSE 3000


CMD ["npm", "start"]