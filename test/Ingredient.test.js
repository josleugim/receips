'use strict';
const chai = require('chai');
const expect = chai.expect;
const should = require('chai').should();
const {estimateIngredientsCost} = require('../src/helpers/recipe');
const faker = require('faker');

describe('Ingredients', () => {
    it ('should return recipes with cost', () => {
        const recipes = [
            {
                title: 'Salmón al horno',
                ingredients: [
                    {
                        unit: "kg",
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        ingredientId: {
                            name: faker.commerce.product(),
                            unitPrice: faker.commerce.price(),
                            kilogramPrice: faker.commerce.price()
                        }
                    },
                    {
                        unit: "unidad",
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        ingredientId: {
                            name: faker.commerce.product(),
                            unitPrice: faker.commerce.price(),
                            kilogramPrice: faker.commerce.price()
                        }
                    },
                    {
                        unit: "unidad",
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        ingredientId: {
                            name: faker.commerce.product(),
                            unitPrice: faker.commerce.price(),
                            kilogramPrice: faker.commerce.price()
                        }
                    },
                    {
                        unit: "unidad",
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        ingredientId: {
                            name: faker.commerce.product(),
                            unitPrice: faker.commerce.price(),
                            kilogramPrice: faker.commerce.price()
                        }
                    },
                    {
                        unit: "unidad",
                        quantity: faker.random.number({ min: 1, max: 9 }),
                        ingredientId: {
                            name: faker.commerce.product(),
                            unitPrice: faker.commerce.price(),
                            kilogramPrice: faker.commerce.price()
                        }
                    }
                ]
            }
        ];

        const recipesWithCost = estimateIngredientsCost(recipes);
        const firstRecipe = recipesWithCost[0];
        firstRecipe.should.have.property('cost').and.to.be.a('number');
    })
})