const { Router } = require('express');
const controller = require('../controllers/user.controller');

const router = Router();

router.post('/signIn', controller.signIn);
router.post('/getNewToken', controller.getNewAccessToken);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;