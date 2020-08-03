'use strict';
const Ingredient = require('../models/Ingredient');
const moment = require('moment-timezone');
const { formatDate } = require('../helpers/common');

const listAll = async (req, res) => {
    const query = {
        isActive: true
    };

    const ingredients = await Ingredient
        .find(query)
        .sort({ name: -1 })
        .catch(e => console.error(e));

    res.status(200).json({ success: true, ingredients: ingredients });
}

const create = async (req, res) => {
    const data = {
        updatedAt: formatDate(moment().tz('America/Mexico_City').format())
    };

    if (req.body.name) {
        data.name = req.body.name;
    }

    if (req.body.kilogramPrice) {
        data.kilogramPrice = req.body.kilogramPrice;
    }

    if (req.body.unitPrice) {
        data.unitPrice = req.body.unitPrice;
    }

    const ingredient = await Ingredient.create(data);
    res.status(201).json({ success: true, ingredient: ingredient.toObject() })
};

const update = async (req, res) => {
    if (!req.body.id) { return res.status(404).json({ success: false, message: 'Incorrect data' }) }

    const data = {
        updatedAt: formatDate(moment().tz('America/Mexico_City').format())
    };

    if (req.body.name) {
        data.name = req.body.name;
    }

    if (req.body.kilogramPrice) {
        data.kilogramPrice = req.body.kilogramPrice;
    }

    if (req.body.unitPrice) {
        data.unitPrice = req.body.unitPrice;
    }

    const ingredient = await Ingredient
        .findByIdAndUpdate(req.body.id, data, { new: true })
        .catch(err => console.error(err));

    res.status(200).json({ success: true, ingredient: ingredient })
}

const getById = async (req, res) => {
    if (!req.params.id) { return res.status(404).json({ success: false, message: 'No ID provided' }) }

    const ingredient = await Ingredient
        .findById(req.params.id, { name: 1, unitPrice: 1, kilogramPrice: 1 })
        .catch(err => console.error(err));

    res.status(200).json({ success: true, ingredient: ingredient });
}

module.exports = {
    listAll,
    create,
    update,
    getById
}