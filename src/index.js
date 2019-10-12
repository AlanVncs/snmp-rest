var snmpController = require('./controllers/snmpController');





const express = require('express');

const app = express();

app.get('/', snmpController.getIndex);

// app.get('/nome', (req, res) => {
//     res.send('Nome do Switch');
// });

// app.get('/nome', (req, res) => {
//     res.send('Nome do Switch');
// });

// app.get('/nome', (req, res) => {
//     res.send('Nome do Switch');
// });

app.listen(5000);




