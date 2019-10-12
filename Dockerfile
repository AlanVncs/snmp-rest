FROM node:current-alpine
RUN mkdir -p /snmp-rest/src
WORKDIR /snmp-rest
VOLUME ./src
COPY ./package.json ./
RUN npm install -y
EXPOSE 80
ENTRYPOINT ["npm", "start"]