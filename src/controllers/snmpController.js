const snmp = require('snmp-native');

const snmpHost = process.env.SNMP_HOST;
const snmpCommunity = process.env.SNMP_COMMUNITY;
const snmpSysnameOid = process.env.SNMP_SYSNAME_OID;
const snmpPortasOid = [process.env.SNMP_PORTA1_OID, process.env.SNMP_PORTA2_OID];

const snmpSession = new snmp.Session({'host': snmpHost, 'community': snmpCommunity});

const portaView = require('../views/snmp/portaView');
const nomeView = require('../views/snmp/nomeView');
const indexView = require('../views/snmp/indexView');

var snmpController = {

    // Obtém o estado da porta 
    getPorta : (portaID, res) => {
        const oid = snmpPortasOid[portaID-1];
        if(oid) {
            snmpSession.get({'oid': oid}, function (error, varbinds) {
                const stateCode = varbinds?varbinds[0].value:null;
                res.json(portaView(error, snmpHost, snmpCommunity, oid, stateCode, portaID));
            });
        }
        else {
            error = {'message': 'Esta porta não pode ser acessada'};
            res.json(portaView(error, snmpHost, snmpCommunity, null, null, null));
        }
    },

    // Obtém o nome do switch
    getNome : (res) => {
        snmpSession.get({'oid': snmpSysnameOid}, function (error, varbinds) {
            const nome = varbinds?varbinds[0].value:null;
            res.json(nomeView(error, snmpHost, snmpCommunity, snmpSysnameOid, nome));
        });
    },

    // Obtém todos os dados
    getAll : (res) => {
        oids = [snmpSysnameOid, snmpPortasOid[0], snmpPortasOid[1]];
        snmpSession.getAll({'oids': oids, 'abortOnError' : true}, function (error, varbinds) {

            const nome = varbinds?varbinds[0].value:null;
            const stateCode1 = varbinds?varbinds[1].value:null;
            const stateCode2 = varbinds?varbinds[2].value:null;

            res.json(indexView(error, snmpHost, snmpCommunity, oids, nome, stateCode1, stateCode2));
        });
    }
};

module.exports = snmpController;