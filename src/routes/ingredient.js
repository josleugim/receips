'use strict';

const { listAll, create, update, getById } = require('../controllers/IngredientCtrl');

module.exports = app => {
    app.get('/api/ingredient', listAll);
    app.get('/api/ingredient/:id', getById)
    app.post('/api/ingredient', create);
    app.put('/api/ingredient', update)
}