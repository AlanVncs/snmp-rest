var router = require('express').Router();
var snmpController = require('../controllers/snmpController');

// Números de 00 a 99 (Necessariamento com 2 dígitos)
const portaRegex = /^\/porta([0-9][1-9]|[1-9][1-9])$/;

router.get(portaRegex, (req, res, next) => {
    const portaID = req.params[0];
    snmpController.getPorta(portaID, res);
});

router.get('/nome', (req, res, next) => {
    snmpController.getNome(res);
});

module.exports = router;