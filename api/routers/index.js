const { Router } = require("express");
const userRouter = require("./user.router");
const projectRouter = require("./project.router");
const taskRouter = require("./task.router");

const router = Router();

router.use("/users", userRouter);
router.use("/projects", projectRouter);
router.use("/tasks", taskRouter);

module.exports = router;
