const { Task } = require('../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const tasks = await Task.findAll();
            return res.send(tasks);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    getAllForUser: async (req, res) => {
        try {
            console.log(req.params);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    getAllForProject: async (req, res) => {
        try {
            console.log(req.params);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    create: async (req, res) => {
        try {
            const task = await Task.create({...req.body});
            return res.status(201).send(task);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const task = await Task.findOne({
                where: {
                    id
                }
            });

            if (!task) {
                return res.status(404).send({ error: `Task with Id ${id} not found!` });
            }

            return res.status(200).send(task);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    update: async (req, res) => {
        try {
            const { name, birthDate, deathDate, nationality } = req.body;

            const id = req.params.id;
            const task = await Task.findOne({
                where: {
                    id
                }
            });

            if (!task) {
                return res.status(404).send({ error: `Task with Id ${id} not found!` });
            }

            let updates = { ...req.body };

            const currentTask = `${task.dataValues.name} ${task.dataValues.birthDate} ${task.dataValues.deathDate} ${task.dataValues.nationality}`;
            const updatedTask = `${name} ${birthDate} ${deathDate} ${nationality}`;

            if (currentTask !== updatedTask) {
                updates = {
                    ...updates
                };
            }

            const updated = await task.update(updates);

            return res.status(200).send(updated);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const task = await Task.findOne({
                where: {
                    id
                }
            });

            if (!task) {
                return res.status(404).send({ error: `Task with Id ${id} not found!` });
            }

            await Task.destroy({ where: { id } });

            return res.status(200).send({ task });
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
}