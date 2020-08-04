'use strict';

const mongoose = require('mongoose');
const IngredientModel = require('../models/Ingredient');
const faker = require('faker');

mongoose.connect(
    process.env.DB,
    { useNewUrlParser: true }
);

const seedIngredients = async () => {
    const productName = faker.commerce.product()
    const ingredient = await IngredientModel.findOne({ name: productName })
        .catch(err => console.error(err));
    if (!ingredient) {
        console.log('Seeding...');
        const ingredientData = {
            name: productName,
            unitPrice: faker.commerce.price(),
            kilogramPrice: faker.commerce.price()
        }

        IngredientModel.create(ingredientData)
            .then(() => console.log('Seed done'))
            .catch(err => console.error(err))
    }
};

seedIngredients()
