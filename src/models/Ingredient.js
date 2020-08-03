'use strict';

const mongoose = require('mongoose');
const moment = require('moment-timezone');
const { formatDate } = require('../helpers/common');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 999
    },
    createdAt: { type: Date, default: formatDate(moment().tz('America/Mexico_City').format()) },
    updatedAt: { type: Date },
    isActive: { type: Boolean, default: true }
});

IngredientSchema.set('toObject', { getters: true, virtuals: true });

IngredientSchema.virtual('updatedAtFormat').get(function () {
    return moment(this.updatedAt).tz('America/Mexico_City').locale('es').format('LL')
});

module.exports = mongoose.model('Ingredient', IngredientSchema);