const baseView = require('./baseView');

const states = {'1' : 'up', '2' : 'down', '3' : 'testing', '4' : 'unknown', '5' : 'dormant', '6' : 'notPresent', '7' : 'lowerLayerDown'};

module.exports = (error, snmpHost, snmpCommunity, req, snmpOids, nome, stateCodePorta1, stateCodePorta2) => {

    var response = baseView(error, snmpHost, snmpCommunity, req, snmpOid?[snmpOid]:[]);
    
    if(!error){
        response.data = {
            'nome': nome,
            'portas': [
                {
                    'porta': '01',
                    'state_code': stateCodePorta1,
                    'state_text': states[stateCodePorta1]
                },
                {
                    'porta': '02',
                    'state_code': stateCodePorta2,
                    'state_text': states[stateCodePorta2]
                }
            ]
        };
    }

    return response;
}