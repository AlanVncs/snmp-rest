var snmp = require('snmp-native');

const snmp_host = process.env.SNMP_HOST;
const snmp_community = process.env.SNMP_COMMUNITY;
const snmp_sysname_oid = process.env.SNMP_SYSNAME_OID;
const snmp_porta1_oid = process.env.SNMP_PORTA1_OID;
const snmp_porta2_oid = process.env.SNMP_PORTA2_OID;

var session = new snmp.Session({ host: snmp_host, community: snmp_community});


session.get({ oid: snmp_porta1_oid }, function (error, varbinds) {
    if (error) {
        console.log('Fail :(');
    } else {
        console.log(varbinds[0].oid + ' = ' + varbinds[0].value + ' (' + varbinds[0].type + ')');
    }
});