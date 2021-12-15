const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students-controller');
const validationsCreate = require('../validations/students-validations/validations-create');
const validationsUpdate = require('../validations/students-validations/validations-update');

router.get('/students', studentsController.read_students);
router.post('/students', validationsCreate, studentsController.add_students);
router.delete('/students/:id',studentsController.delete_students);
router.put('/students/:id', validationsUpdate, studentsController.update_students);

module.exports = router;