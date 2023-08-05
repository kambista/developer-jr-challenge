const {Router} = require('express');
const router = Router();
const controller = require('../controllers/task.controller');

router.get('/', controller.gettasks);
router.post('/', controller.posttasks);
router.delete('/:id', controller.deletetask);

module.exports = router;

