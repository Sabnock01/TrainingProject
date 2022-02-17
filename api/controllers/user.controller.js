const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { User } = require('../models');
const { generateAccessToken } = require('../helpers/user.helper');

module.exports = {
    signIn: async (req, res) => {
        const {
            inputEmail,
            inputPassword,
        } = req.body.body;

        const user = await User.findOne({
            where: {
                email: inputEmail
            },
        });

        if (user) {
            bcrypt.compare(
                inputPassword,
                user.password,
                async (err, data) => {
                    if (err) {
                        throw err;
                    }
                    if (data) {
                        const token = jwt.sign(user, process.env.JWT_KEY);
                        return res.status(200).json({token, user});
                    } else {
                        return res.status(401).json({ message: "Password does not match." });
                    }
                }
            )
        } else {
            return res.status(401).json({ message: "No user found." });
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await User.findAll();
            return res.send(users);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    create: async (req, res) => {
        try {
            const user = await User.create({...req.body});
            return res.status(201).send(user);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findOne({
                where: {
                    id
                }
            });

            if (!user) {
                return res.status(404).send({ error: `User with Id ${id} not found!` });
            }

            return res.status(200).send(user);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    update: async (req, res) => {
        try {
            const { name, email } = req.body;

            const id = req.params.id;
            const user = await User.findOne({
                where: {
                    id
                }
            });

            if (!user) {
                return res.status(404).send({ error: `User with Id ${id} not found!` });
            }

            let updates = { ...req.body };

            const currentUser = `${user.dataValues.name} ${user.dataValues.email}`;
            const updatedUser = `${name} ${email}`;

            if (currentUser !== updatedUser) {
                updates = {
                    ...updates
                };
            }

            const updated = await user.update(updates);

            return res.status(200).send(updated);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findOne({
                where: {
                    id
                }
            });

            if (!user) {
                return res.status(404).send({ error: `User with Id ${id} not found!` });
            }

            await User.destroy({ where: { id } });

            return res.status(200).send({ user });
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
}