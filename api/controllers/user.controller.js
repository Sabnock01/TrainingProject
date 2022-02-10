const { User } = require('../models');

module.exports = {
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
            const { name, birthDate, deathDate, nationality } = req.body;

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

            const currentUser = `${user.dataValues.name} ${user.dataValues.birthDate} ${user.dataValues.deathDate} ${user.dataValues.nationality}`;
            const updatedUser = `${name} ${birthDate} ${deathDate} ${nationality}`;

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