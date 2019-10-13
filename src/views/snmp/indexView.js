const status = {'SUCCESS': 'success', 'FAIL': 'fail'};
const states = {'1' : 'up', '2' : 'down', '3' : 'testing', '4' : 'unknown', '5' : 'dormant', '6' : 'notPresent', '7' : 'lowerLayerDown'};

module.exports = (error, snmpHost, snmpCommunity, snmpOids, nome, stateCodePorta1, stateCodePorta2) => {

    var response =  {
        'status': null,
        'snmp_host': snmpHost,
        'snmp_community': snmpCommunity,
        'snmp_oids': snmpOids,
        'timestamp': Date.now()
    };
    
    if(error){
        response.status = status.FAIL;
        response.error = error.message;
    }
    else {
        response.status = status.SUCCESS;
        response.data = {
            'nome': nome,
            'portas': [
                {
                    'porta': '1',
                    'state_code': stateCodePorta1,
                    'state_text': states[stateCodePorta1]
                },
                {
                    'porta': '2',
                    'state_code': stateCodePorta2,
                    'state_text': states[stateCodePorta2]
                }
            ]
        };
    }

    return response;
}