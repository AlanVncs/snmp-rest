const baseView = require('./baseView');

const states = {'1' : 'up', '2' : 'down', '3' : 'testing', '4' : 'unknown', '5' : 'dormant', '6' : 'notPresent', '7' : 'lowerLayerDown'};

module.exports = (error, snmpHost, snmpCommunity, req, snmpOid, stateCode, porta) => {

    var response = baseView(error, snmpHost, snmpCommunity, req, snmpOid?[snmpOid]:[]);
    
    if(!error){
        response.data = {
            'porta': porta,
            'state_code': stateCode,
            'state_text': states[stateCode]
        };
    }

    return response;
}