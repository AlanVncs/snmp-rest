const status = {'SUCCESS': 'success', 'FAIL': 'fail'};

module.exports = (error, host, community, oid, nome) => {
    
    // Fail
    if(error){
        return {
            'status': status.FAIL,
            'host': host,
            'community': community,
            'oid': oid,
            'timeStamp': Date.now(),
            'error': error.message
        }
    }

    // Success
    else {
        return {
            'status': status.SUCCESS,
            'host': host,
            'community': community,
            'oid': oid,
            'timeStamp': Date.now(),
            'data': {
                'nome': nome
            }
        }
    }
}