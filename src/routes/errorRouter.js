var router = require('express').Router();
var errorController = require('../controllers/errorController');

// Ultimo match depois de tentar todas as estabelecidas
router.all('/*', (req, res, next) => {
    errorController.get404(req, res);
});

module.exports = router;