const snmp = require('snmp-native');

const snmp_host = process.env.SNMP_HOST;
const snmp_community = process.env.SNMP_COMMUNITY;
const snmp_sysname_oid = process.env.SNMP_SYSNAME_OID;
const snmp_portas_oid = [process.env.SNMP_PORTA1_OID, process.env.SNMP_PORTA2_OID];

var snmpSession = new snmp.Session({'host': snmp_host, 'community': snmp_community});



var snmpController = {
    getPorta : (portaID, res) => {
        if(snmp_portas_oid[portaID-1]) {
            snmpSession.get({'oid': snmp_portas_oid[portaID-1]}, function (error, varbinds) {
                if (error) {
                    res.json({'text': 'Erro ao acessar o switch'});
                } else {
                    res.json({'value' : varbinds[0].value});
                }
            });
        }
        else {
            res.json({'text': 'Esta porta não pode ser consultada'});
        }
    },
    getNome : (res) => {
        snmpSession.get({'oid': snmp_sysname_oid}, function (error, varbinds) {
            if (error) {
                res.json({'text': 'Erro ao acessar o switch'});
            } else {
                res.json({'nome' : varbinds[0].value});
            }
        });
    }
};

module.exports = snmpController;