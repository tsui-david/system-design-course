# TODO: setup dockerfile to copy from app/lessons and start up both frontend and backend
FROM node:10

RUN mkdir -p /webui
WORKDIR /webui

ENV PORT 3000
ENV HOST 0.0.0.0

COPY ./webui/package.json .
COPY ./webui/package-lock.json .

RUN npm install
RUN npm install react-scripts@4.0.0 -g --silent

COPY ./webui .

CMD ["npm", "start"]