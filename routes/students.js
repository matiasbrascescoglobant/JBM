const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students-controller');
const validationsCreate = require('../validations/students-validations/validations-create');
const validationsUpdate = require('../validations/students-validations/validations-update');

router.get('/', studentsController.read_students);
router.post('/', validationsCreate, studentsController.add_students);
router.delete('/:id',studentsController.delete_students);
router.put('/:id', validationsUpdate, studentsController.update_students);

module.exports = router;