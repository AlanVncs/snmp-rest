const app = require('express')();
const snmpRouter = require('./routes/snmpRouter');
const errorRouter = require('./routes/errorRouter');
const port = process.env.PORT || 5000;

app.use(snmpRouter, errorRouter);

app.listen(port);