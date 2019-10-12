var snmp = require('snmp-native');

const snmp_host = process.env.SNMP_HOST;
const snmp_community = process.env.SNMP_COMMUNITY;
const snmp_sysname_oid = process.env.SNMP_SYSNAME_OID;
const snmp_porta1_oid = process.env.SNMP_PORTA1_OID;
const snmp_porta2_oid = process.env.SNMP_PORTA2_OID;

var session = new snmp.Session({'host': snmp_host, 'community': snmp_community});


function getValue(oid){
    return new Promise((resolve, reject) => {
        session.get({'oid': oid }, function (error, varbinds) {
            if (error) {
                console.log('Fail :(');
                reject('Fail :(');
            } else {
                console.log(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
                resolve(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
            }
        });

    });
};

async function getName(){
    try{
        return await getValue(snmp_sysname_oid);
    }
    catch(e){
        console.log("Deu ruim papai");
    }
}

console.log('<' + getName() + '>');



// var snmpController = require('./controllers/snmpController');

// console.log(snmpController.getName());





// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello F');
// });

// app.get('/nome', (req, res) => {
//     res.send('Nome do Switch');
// });

// app.get('/nome', (req, res) => {
//     res.send('Nome do Switch');
// });

// app.get('/nome', (req, res) => {
//     res.send('Nome do Switch');
// });

// app.listen(5000);




