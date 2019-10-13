const status = {'SUCCESS': 'success', 'FAIL': 'fail'};
const states = {'1' : 'up', '2' : 'down', '3' : 'testing', '4' : 'unknown', '5' : 'dormant', '6' : 'notPresent', '7' : 'lowerLayerDown'};

module.exports = (error, host, community, oid, stateCode) => {
    
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
                'stateCode': stateCode,
                'stateText': states[stateCode]
            }
        }
    }
}