module.exports = (app) => {
    const types = require('../controllers/type.controller.js');

    app.get('/types', types.allTypes);
}
