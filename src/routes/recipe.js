'use strict';
const { listAll, create } = require('../controllers/RecipeCtrl');

module.exports = app => {
    app.get('/api/recipe', listAll);
    app.post('/api/recipe', create);
}