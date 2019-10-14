FROM node:current-alpine
RUN mkdir -p /snmp-rest/src
WORKDIR /snmp-rest
VOLUME ./src
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install -y
EXPOSE 5000
ENTRYPOINT ["npm", "start"]