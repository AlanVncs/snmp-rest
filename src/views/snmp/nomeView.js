const baseView = require('./baseView');

module.exports = (error, snmpHost, snmpCommunity, req, snmpOid, nome) => {

    var response = baseView(error, snmpHost, snmpCommunity, req, snmpOid?[snmpOid]:[]);
    
    if(!error){
        response.data = {'nome': nome};
    }

    return response;
}