const { Project } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const projects = await Project.findAll();

      return res.send(projects);
    } catch (e) {
      console.log(e);

      return res.sendStatus(500);
    }
  },
  getAllForUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const projects = await Project.findAll({ where: { lead_id: userId } });

      if (projects.length === 0) {
        return res.status(404).send({ error: `No projects for User Id ${userId} found!` });
      }

      return res.send(projects);
    } catch (e) {
      console.log(e);

      return res.sendStatus(500);
    }
  },
  create: async (req, res) => {
    try {
      const project = await Project.create({ ...req.body });

      return res.status(201).send(project);
    } catch (e) {
      console.log(e);

      return res.sendStatus(500);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findOne({ where: { id } });

      if (!project) {
        return res.status(404).send({ error: `Project with Id ${id} not found!` });
      }

      return res.status(200).send(project);
    } catch (e) {
      console.log(e);

      return res.sendStatus(500);
    }
  },
  update: async (req, res) => {
    try {
      const { name, leadId } = req.body;

      const { id } = req.params;
      const project = await Project.findOne({ where: { id } });

      if (!project) {
        return res.status(404).send({ error: `Project with Id ${id} not found!` });
      }

      let updates = { ...req.body };

      const currentProject = `${project.dataValues.name} ${project.dataValues.leadId}`;
      const updatedProject = `${name} ${leadId}`;

      if (currentProject !== updatedProject) {
        updates = { ...updates };
      }

      const updated = await project.update(updates);

      return res.status(200).send(updated);
    } catch (e) {
      console.log(e);

      return res.sendStatus(500);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Project.findOne({ where: { id } });

      if (!project) {
        return res.status(404).send({ error: `Project with Id ${id} not found!` });
      }

      await Project.destroy({ where: { id } });

      return res.status(200).send({ project });
    } catch (e) {
      console.log(e);

      return res.sendStatus(500);
    }
  }
};
