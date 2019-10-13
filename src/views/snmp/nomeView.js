const status = {'SUCCESS': 'success', 'FAIL': 'fail'};

module.exports = (error, snmpHost, snmpCommunity, snmpOid, nome) => {

    var response = {
        'status': status.FAIL,
        'snmp_host': snmpHost,
        'snmp_community': snmpCommunity,
        'snmp_oid': snmpOid,
        'timestamp': Date.now()
    }
    
    if(error){
        response.error = error.message;
    }
    else {
        response.data = {'nome': nome};
    }

    return response;
}