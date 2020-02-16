const express = require('express');
const router = express.Router();
const ctrl = require('./todo.ctrl');

router.post('/', ctrl.create);

router.get('/', ctrl.index);

router.get('/:id', ctrl.show);

router.put('/:id', ctrl.update);

router.delete('/:id', ctrl.destroy);

module.exports = router;