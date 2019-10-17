// Services
const dbDriver = require('../services/dbService')('erros');

// Views
const error404View = require('../views/error/error404View');

var errorController = {
    get404 : (req, res) => {
        const response = error404View(req.url);
        dbDriver.insert(response);
        res.status(404).json(response);
    }
};

module.exports = errorController;