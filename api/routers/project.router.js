const { Router } = require('express');
const controller = require('../controllers/project.controller');

const router = Router();

router.get('/', controller.getAll);
// router.get('/:userId', controller.getAllForUser);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;