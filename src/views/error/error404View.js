const status = {'SUCCESS': 'success', 'FAIL': 'fail'};

module.exports = (req) => {
    return {
        'status': status.FAIL,
        'timestamp': Date.now(),
        'access': {
            'from': req.connection.remoteAddress,
            'route': req.url,
            'method': req.method
        },
        'error': {
            'code': 404,
            'text': 'Não foi possível encontrar o recurso solicitado',
        }
    }
}