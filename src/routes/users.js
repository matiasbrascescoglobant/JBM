import { Router } from 'express';
import authUserMiddleware from '../middlewares/auth';
import isAuthorized from '../middlewares/authorized-admin-role';
const router = Router();
const usersController = require('../controllers/users-controller');
const validationsCreateUser = require('../validations/users-validations/validations-create');
const validationsUpdateUser = require('../validations/users-validations/validations-update');

router.get('/', [authUserMiddleware, isAuthorized], usersController.read_users);
router.post('/', validationsCreateUser, usersController.add_users);
router.delete('/:id', [authUserMiddleware, isAuthorized], usersController.delete_users);
router.put('/:id', [authUserMiddleware, validationsUpdateUser], usersController.update_users);

export default router;