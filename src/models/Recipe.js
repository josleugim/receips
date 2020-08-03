'use strict';

const mongoose = require('mongoose');
const moment = require('moment-timezone');
const { formatDate } = require('../helpers/common');

const RecipeSchema = new mongoose.Schema({
    recipeId: { type: mongoose.Schema.Types.ObjectId },
    title: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient',
            required: true
        }
    ],
    createdAt: { type: Date, default: formatDate(moment().tz('America/Mexico_City').format()) },
    updatedAt: { type: Date },
    isActive: { type: Boolean, default: true }
})

RecipeSchema.set('toObject', { getters: true, virtuals: true });

RecipeSchema.virtual('updatedAtFormat').get(function () {
    return moment(this.updatedAt).tz('America/Mexico_City').locale('es').format('LL')
});

module.exports = mongoose.model('Recipe', RecipeSchema);