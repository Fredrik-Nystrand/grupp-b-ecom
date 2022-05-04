const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Order = require("../models/orderModel");

const createOrder = asyncHandler(async(req, res) => {
    console.log(req.body);
    const userId = req.user.id;
    const { cart, totalPrice } = req.body;

    const order = await Order.create({
        user: userId,
        cart,
        totalPrice,
    });

    if (order) {
        res.status(201).json(order);
    } else {
        res.status(400);
        throw new Error("Kunde inte skapa en order, felaktigt angiven information");
    }
});

const getOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find({ user: req.user.id });

    res.status(200).json({ orders });
});

const getSingleOrder = asyncHandler(async(req, res) => {
    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error("Ange ett id med korrekt format");
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
        res.status(404);
        throw new Error("Kunde inte hitta någon order");
    }

    res.status(200).json({ order });
});

const updateOrder = asyncHandler(async(req, res) => {
    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error("Ange ett id med korrekt format");
    }

    const order = await Order.findOneAndUpdate({ _id: req.params.id }, req.body, {
        returnOriginal: false,
    });

    if (!order) {
        res.status(404);
        throw new Error("Kunde inte hitta ordern");
    }

    res.status(200).json(order);
});

const deleteOrder = asyncHandler(async(req, res) => {
    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error("Ange ett id med korrekt format");
    }

    const order = await Order.findOneAndDelete({ _id: req.params.id });

    if (!order) {
        res.status(404);
        throw new Error("Kunde inte hitta ordern");
    }

    res.status(200).json(order.id);
});

module.exports = {
    createOrder,
    getOrders,
    getSingleOrder,
    updateOrder,
    deleteOrder,
};