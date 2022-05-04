const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');
const { isCurrencyNumber } = require('../helpers/validation')

const getAllProducts = asyncHandler(async(req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
})

const getProduct = asyncHandler(async(req, res) => {

    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error('Ange ett id med korrekt format');
    }

    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(404);
        throw new Error('Kunde inte hitta produkten');
    }

    res.status(200).json(product);
})

const createProduct = asyncHandler(async(req, res) => {

    // VALIDERING  
    if (!req.body.name) {
        res.status(400);
        throw new Error('Fyll i ett namn på produkten');
    }
    if (!req.body.description) {
        res.status(400);
        throw new Error('Fyll i en beskrivning av produkten');
    }
    if (!req.body.price) {
        res.status(400);
        throw new Error('Fyll i ett pris på produkten');
    }
    if (!req.body.imgURL) {
        res.status(400);
        throw new Error('Fyll i en URL till på produktens bild');
    }
    if (!isCurrencyNumber(req.body.price.trim())) {
        res.status(400);
        throw new Error('Fyll i ett korrekt pris med punkt som decimaltecken om nödvändigt');
    }

    // Ta bort punkter från slutet av priset om nödvändigt
    if (req.body.price.slice(-1) === '.' || req.body.price.slice(-1) === ',') {
        req.body.price = req.body.price.slice(0, req.body.price.length - 1)
    }

    const product = await Product.create({
        name: req.body.name.trim(),
        description: req.body.description.trim(),
        price: req.body.price.trim(),
        imgURL: req.body.imgURL.trim()
    })

    res.status(201).json(product);
})

const updateProduct = asyncHandler(async(req, res) => {

    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error('Ange ett id med korrekt format');
    }

    const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { returnOriginal: false });

    if (!product) {
        res.status(404);
        throw new Error('Kunde inte hitta produkten');
    }

    res.status(200).json(product)
})

const deleteProduct = asyncHandler(async(req, res) => {
    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error('Ange ett id med korrekt format');
    }
    const product = await Product.findOneAndDelete({ _id: req.params.id });

    if (!product) {
        res.status(404);
        throw new Error('Kunde inte hitta produkten');
    }

    res.status(200).json(product);
})

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}