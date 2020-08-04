'use strict';

const estimateIngredientsCost = (recipes) => {
    return recipes.map(recipe => {
        const ingredients = recipe.ingredients.map(ingredient => {
            const customIngredient = {
                name: ingredient.ingredientId.name,
                unit: ingredient.unit,
                quantity: ingredient.quantity
            };

            switch (ingredient.unit) {
                case 'unidad':
                    customIngredient.cost = Number(ingredient.ingredientId.unitPrice) * Number(ingredient.quantity);
                    break;
                case 'kg':
                    customIngredient.cost = Number(ingredient.ingredientId.kilogramPrice) * Number(ingredient.quantity);
            }

            return customIngredient
        });

        return {
            title: recipe.title,
            ingredients: ingredients,
            cost: ingredients.reduce((acc, ingredient) => {
                acc = acc + ingredient.cost;
                return acc
            },0),
            updatedAtFormat: recipe.updatedAtFormat
        }
    })
}

module.exports = {
    estimateIngredientsCost
}