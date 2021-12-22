const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students-controller');
import authUserMiddleware from '../middlewares/auth';
import isAuthorized from '../middlewares/authorized-admin-role';
const validationsCreate = require('../validations/students-validations/validations-create');
const validationsUpdate = require('../validations/students-validations/validations-update');

router.get('/', [authUserMiddleware, isAuthorized], studentsController.read_students);
router.post('/', [authUserMiddleware, validationsCreate], studentsController.add_students);
router.delete('/:id', [authUserMiddleware, isAuthorized], studentsController.delete_students);
router.put('/:id', [authUserMiddleware, validationsUpdate], studentsController.update_students);

export default router;