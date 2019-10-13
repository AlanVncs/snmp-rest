const status = {'SUCCESS': 'success', 'FAIL': 'fail'};
const states = {'1' : 'up', '2' : 'down', '3' : 'testing', '4' : 'unknown', '5' : 'dormant', '6' : 'notPresent', '7' : 'lowerLayerDown'};

module.exports = (error, snmpHost, snmpCommunity, snmpOid, stateCode) => {

    var response =  {
        'status': status.FAIL,
        'snmp_host': snmpHost,
        'snmp_community': snmpCommunity,
        'snmp_oid': snmpOid,
        'timestamp': Date.now(),
        'error': error.message
    };
    
    if(error){
        response.error = error.message;
    }
    else {
        response.data = {
            'state_code': stateCode,
            'state_text': states[stateCode]
        };
    }

    return response;
}