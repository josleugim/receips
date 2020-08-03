'use strict';

const { listAll, create, update } = require('../controllers/IngredientCtrl');

module.exports = app => {
    app.get('/api/ingredient', listAll);
    app.post('/api/ingredient', create);
    app.put('/api/ingredient', update)
}