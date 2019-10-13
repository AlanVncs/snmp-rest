var router = require('express').Router();
var snmpController = require('../controllers/snmpController');

// /porta{N > 0}
router.get(/^\/porta([0-9]*[1-9]+[0-9]*)$/, (req, res, next) => {
    const portaID = req.params[0];
    snmpController.getPorta(portaID, res);
});

module.exports = router;