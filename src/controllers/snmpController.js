// SNMP
const snmp = require('snmp-native');
const snmpHost = process.env.SNMP_HOST;
const snmpCommunity = process.env.SNMP_COMMUNITY;
const snmpSysnameOid = process.env.SNMP_SYSNAME_OID;
const snmpPortasOid = [process.env.SNMP_PORTA1_OID, process.env.SNMP_PORTA2_OID];
const snmpSession = new snmp.Session({'host': snmpHost, 'community': snmpCommunity});

// Views
const PortaView = require('../views/snmp/portaView');
const NomeView = require('../views/snmp/nomeView');
const IndexView = require('../views/snmp/indexView');

// Services
const dbDriver = require('../services/dbService')('consultas');


var snmpController = {
    getPorta : (portaID, req, res) => {
        const oid = snmpPortasOid[portaID-1];
        if(oid) {
            snmpSession.get({'oid': oid}, function (error, varbinds) {
                const stateCode = varbinds?varbinds[0].value:null;
                const response = PortaView(error, snmpHost, snmpCommunity, req.url, oid, stateCode, portaID);
                dbDriver.insert(response);
                res.json(response);
            });
        }
        else {
            error = {'message': 'Esta porta não pode ser acessada'};
            const portaJson = PortaView(error, snmpHost, snmpCommunity, req.url);
            dbDriver.insert(portaJson);
            res.json(portaJson);
        }
    },

    getNome : (req, res) => {
        snmpSession.get({'oid': snmpSysnameOid}, function (error, varbinds) {
            const nome = varbinds?varbinds[0].value:null;
            const response = NomeView(error, snmpHost, snmpCommunity, req.url, snmpSysnameOid, nome);
            dbDriver.insert(response);
            res.json(response);
        });
    },

    getAll : (req, res) => {
        oids = [snmpSysnameOid, snmpPortasOid[0], snmpPortasOid[1]];
        snmpSession.getAll({'oids': oids, 'abortOnError' : true}, function (error, varbinds) {
            const nome = varbinds?varbinds[0].value:null;
            const stateCode1 = varbinds?varbinds[1].value:null;
            const stateCode2 = varbinds?varbinds[2].value:null;
            const response = IndexView(error, snmpHost, snmpCommunity, req.url, oids, nome, stateCode1, stateCode2);
            dbDriver.insert(response);
            res.json(response);
        });
    }
};

module.exports = snmpController;