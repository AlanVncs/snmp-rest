const status = {'SUCCESS': 'success', 'FAIL': 'fail'};

module.exports = (error, snmpHost, snmpCommunity, snmpOid, nome) => {

    var response = {
        'status': null,
        'snmp_host': snmpHost,
        'snmp_community': snmpCommunity,
        'snmp_oid': snmpOid,
        'timestamp': Date.now()
    }
    
    if(error){
        response.status = status.FAIL;
        response.error = error.message;
    }
    else {
        response.status = status.SUCCESS;
        response.data = {'nome': nome};
    }

    return response;
}