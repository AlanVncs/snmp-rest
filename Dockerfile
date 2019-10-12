FROM node:current-alpine
RUN mkdir -p /snmp/src
WORKDIR /snmp
VOLUME ./src
COPY ./package.json ./
RUN npm install -y
EXPOSE 80
ENTRYPOINT ["npm", "start"]