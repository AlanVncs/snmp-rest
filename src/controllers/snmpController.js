const snmp = require('snmp-native');

const snmp_host = process.env.SNMP_HOST;
const snmp_community = process.env.SNMP_COMMUNITY;
const snmp_sysname_oid = process.env.SNMP_SYSNAME_OID;
const snmp_portas_oid = [process.env.SNMP_PORTA1_OID, process.env.SNMP_PORTA2_OID];

const snmpSession = new snmp.Session({'host': snmp_host, 'community': snmp_community});

const portaView = require('../views/snmp/portaView');

var snmpController = {

    // Obtem o estado da porta 
    getPorta : (portaID, res) => {
        const oid = snmp_portas_oid[portaID-1];
        if(oid) {
            snmpSession.get({'oid': oid}, function (error, varbinds) {
                const stateCode = varbinds?varbinds[0]:null;
                res.json(portaView(error, snmp_host, snmp_community, oid, stateCode));
            });
        }
        else {
            error = {'message': 'Esta porta não pode ser acessada'};
            res.json(portaView(error, snmp_host, snmp_community, 'null', 4)); // 4 - unknown
        }
    },

    // Obem o nome do switch
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