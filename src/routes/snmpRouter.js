var router = require('express').Router();
var snmpController = require('../controllers/snmpController');

// Números de 00 a 99 (Necessariamento com 2 dígitos)
const portaRegex = /^\/porta([0-9][1-9]|[1-9][1-9])$/;
const postPortaRegex = /^\/porta([0-9]*[1-9][0-9]*)\/([0-9]*[1-9][0-9]*)$/;

router.get(portaRegex, (req, res, next) => {
    const portaID = req.params[0];
    snmpController.getPorta(portaID, req, res);
});

router.post(postPortaRegex, (req, res, next) => {
    const portaID = req.params[0];
    const stateCode = req.params[1];
    snmpController.postPorta(portaID, stateCode, req, res);
});

router.get('/nome', (req, res, next) => {
    snmpController.getNome(req, res);
});

router.get('/', (req, res, next) => {
    snmpController.getAll(req, res);
});

module.exports = router;