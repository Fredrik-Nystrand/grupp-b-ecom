const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// SKAPA NY ANVÄNDARE
const createUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;

    if (!name) {
        res.status(400);
        throw new Error("Ange ett namn på användaren");
    }
    if (!email) {
        res.status(400);
        throw new Error("Ange en email till användaren");
    }
    if (!password) {
        res.status(400);
        throw new Error("Ange ett lösenord till användaren");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("En användare med angiven email existerar redan");
    }

    //Hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Skapa användare
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        });
    } else {
        res.status(400);
        throw new Error(
            "Kunde inte skapa användaren, felaktigt angiven information"
        );
    }
});

// SKAPA NY ADMIN
const createAdmin = asyncHandler(async(req, res) => {
    const currentUser = await User.findById(req.user.id);

    if (!currentUser.isAdmin) {
        res.status(401);
        throw new Error("Användaren är inte admin");
    }

    const { name, email, password } = req.body;

    if (!name) {
        res.status(400);
        throw new Error("Ange ett namn på användaren");
    }
    if (!email) {
        res.status(400);
        throw new Error("Ange en email till användaren");
    }
    if (!password) {
        res.status(400);
        throw new Error("Ange ett lösenord till användaren");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("En användare med angiven email existerar redan");
    }

    //Hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Skapa användare
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        isAdmin: true,
    });

    if (user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user.id),
        });
    } else {
        res.status(400);
        throw new Error(
            "Kunde inte skapa användaren, felaktigt angiven information"
        );
    }
});

// LOGGA IN ANVÄNDARE
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("felaktigt angiven information");
    }
});

// UPPDATERA ANVÄNDARE
const updateUser = asyncHandler(async(req, res) => {
    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error("Ange ett id med korrekt format");
    }

    const currentUser = await User.findById(req.user.id);

    if (!currentUser.isAdmin && currentUser.id !== req.params.id) {
        res.status(401);
        throw new Error("Användaren har inte behörighet");
    }

    if (req.body.hasOwnProperty("email")) {
        const emailExists = await User.findOne({ email: req.body.email });

        if (emailExists) {
            res.status(400);
            throw new Error("En användare med angiven email existerar redan");
        }
    }

    if (req.body.hasOwnProperty("isAdmin")) {
        if (!currentUser.isAdmin) {
            res.status(401);
            throw new Error("Användaren har inte behörighet");
        }
    }

    if (req.body.hasOwnProperty("password")) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        req.body.password = hashedPassword;
    }

    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        returnOriginal: false,
    });

    if (!user) {
        res.status(404);
        throw new Error("Kunde inte hitta användaren");
    }

    res.status(200).json(user);
});

// RADERA ANVÄNDARE
const deleteUser = asyncHandler(async(req, res) => {
    if (req.params.id.length !== 24) {
        res.status(400);
        throw new Error("Ange ett id med korrekt format");
    }

    const currentUser = await User.findById(req.user.id);

    if (!currentUser.isAdmin && currentUser.id !== req.params.id) {
        res.status(401);
        throw new Error("Användaren har inte behörighet");
    }

    const user = await User.findOneAndDelete({ _id: req.params.id }).select(
        "-password"
    );

    if (!user) {
        res.status(404);
        throw new Error("Kunde inte hitta användaren");
    }

    res.status(200).json(user.id);
});

// GENERERA JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    createAdmin,
};