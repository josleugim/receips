'use strict';
const Recipe = require('../models/Recipe');
const moment = require('moment-timezone');
const { formatDate } = require('../helpers/common');
const { estimateIngredientsCost } = require('../helpers/recipe');

const listAll = async(req, res) => {
    const query = {
        isActive: true
    };

    const projection = {
        title: 1,
        recipeId: 1,
        ingredients: 1,
        updatedAtFormat: 1
    }

    const recipes = await Recipe
        .find(query, projection)
        .sort({ _id: -1 })
        .populate({
            path: 'ingredients.ingredientId',
            model: 'Ingredient'
        })
        .catch(err => console.error(err));

    const recipesWithCost = await estimateIngredientsCost(recipes);

    res.status(200).json({ success: true, recipes: recipesWithCost })
};

const create = async(req, res) => {
    if (req.body.ingredients.length <= 0) { return res.status(404).json({ success: true, message: 'Ingredients required' }) }

    const data = {
        updatedAt: formatDate(moment().tz('America/Mexico_City').format())
    };

    if (req.body.title) {
        data.title = req.body.title;
    }

    if (req.body.recipeId) {
        data.recipeId = req.body.recipeId;
    }

    if (req.body.ingredients) {
        data.ingredients = req.body.ingredients;
    }

    const recipe = await Recipe.create(data);
    res.status(201).json({ success: true, recipe: recipe })
}

module.exports = {
    listAll,
    create
}