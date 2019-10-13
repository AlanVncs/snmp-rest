const snmp = require('snmp-native');

const snmpHost = process.env.SNMP_HOST;
const snmpCommunity = process.env.SNMP_COMMUNITY;
const snmpSysnameOid = process.env.SNMP_SYSNAME_OID;
const snmpPortasOid = [process.env.SNMP_PORTA1_OID, process.env.SNMP_PORTA2_OID];

const snmpSession = new snmp.Session({'host': snmpHost, 'community': snmpCommunity});

const portaView = require('../views/snmp/portaView');
const nomeView = require('../views/snmp/nomeView');

var snmpController = {

    // Obtem o estado da porta 
    getPorta : (portaID, res) => {
        const oid = snmpPortasOid[portaID-1];
        if(oid) {
            snmpSession.get({'oid': oid}, function (error, varbinds) {
                const stateCode = varbinds?varbinds[0].value:null;
                res.json(portaView(error, snmpHost, snmpCommunity, oid, stateCode));
            });
        }
        else {
            error = {'message': 'Esta porta não pode ser acessada'};
            res.json(portaView(error, snmpHost, snmpCommunity, 'null', 4)); // 4 - unknown
        }
    },

    // Obem o nome do switch
    getNome : (res) => {
        snmpSession.get({'oid': snmpSysnameOid}, function (error, varbinds) {
            const nome = varbinds?varbinds[0].value:null;
            res.json(nomeView(error, snmpHost, snmpCommunity, snmpSysnameOid, nome));
        });
    }
};

module.exports = snmpController;