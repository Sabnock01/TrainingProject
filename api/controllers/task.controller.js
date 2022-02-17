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
            const { userId } = req.params;
            const tasks = await Task.findAll({
                where: {
                    user_id: userId
                }
            })
            if (tasks.length === 0) {
                return res.status(404).send({ error: `No tasks for User Id ${userId} found!` });
            }
            return res.send(tasks);
        } catch (e) {
            console.log(e);
            return res.sendStatus(500);
        }
    },
    getAllForProject: async (req, res) => {
        try {
            const { projectId } = req.params;
            const tasks = await Task.findAll({
                where: {
                    project_id: projectId
                }
            })
            if (tasks.length === 0) {
                return res.status(404).send({ error: `No tasks for Project Id ${projectId} found!` });
            }
            return res.send(tasks);
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
            const { projectId, userId, summary, description, status } = req.body;

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

            const currentTask = `${task.dataValues.projectId} ${task.dataValues.userId} ${task.dataValues.summary} ${task.dataValues.description} ${task.dataValues.status}`;
            const updatedTask = `${projectId} ${userId} ${summary} ${description} ${status}`;

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