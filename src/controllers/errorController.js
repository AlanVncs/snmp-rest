const error404View = require('../views/error/error404View');

var errorController = {
    get404 : (req, res) => {
        res.status(404).json(error404View(req.url));
    }
};

module.exports = errorController;