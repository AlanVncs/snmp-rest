const app = require('express')();
const snmpRouter = require('./routes/snmpRouter');
const port = process.env.PORT || 5000;

app.use(snmpRouter);

app.listen(port);