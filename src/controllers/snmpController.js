var snmp = require('snmp-native');

const snmp_host = process.env.SNMP_HOST;
const snmp_community = process.env.SNMP_COMMUNITY;
const snmp_sysname_oid = process.env.SNMP_SYSNAME_OID;
const snmp_portas_oid = [process.env.SNMP_PORTA1_OID, process.env.SNMP_PORTA2_OID];

var snmpSession = new snmp.Session({'host': snmp_host, 'community': snmp_community});



var snmpController = {
    getPorta : (portaID, res) => {
        if(snmp_portas_oid[portaID]) {
            snmpSession.get({'oid': snmp_portas_oid[portaID] }, function (error, varbinds) {
                if (error) {} else {
                    viewCallback({'value' : varbinds[0].value});
                }
            });
        }
        else {
            viewCallback({'text': 'Esta porta não pode ser consultada'});
        }
    }
};

module.exports = snmpController;