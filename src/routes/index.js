import { Router } from 'express';
import authRouter from './auth';
import usersRouter from './users';
import studentsRouter from './students';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/students', studentsRouter);

export default router;