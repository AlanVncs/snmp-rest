const status = {'SUCCESS': 'success', 'FAIL': 'fail'};

module.exports = (route) => {
    return {
        'status': status.FAIL,
        'timestamp': Date.now(),
        'error': {
            'code': 404,
            'text': 'Não foi possível encontrar o recurso solicitado',
            'route': route
        }
    }
}