const status = {'SUCCESS': 'success', 'FAIL': 'fail'};

module.exports = (error, snmpHost, snmpCommunity, req, snmpOids) => {
    return {
        'status': error?status.FAIL:status.SUCCESS,
        'snmp_host': snmpHost,
        'snmp_community': snmpCommunity,
        'snmp_oids': snmpOids,
        'access': {
            'from': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            'route': req.url,
            'method': req.method
        },
        'timestamp': Date.now(),
        'error': error?error.message:null
    };
}