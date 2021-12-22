import { Router } from 'express';
import debug from 'debug';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../services/user-service';

const log = debug('globant:auth');
const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    log(email, password);
    
    const user = await findUserByEmail(email);

    if(!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send({
            message: 'Wrong credentials'
        });
    }

    const token = jwt.sign({
        email: user.email,
        username: user.username,
        role: user.role
    }, process.env.JWT_SECRET);

    res.send({
        mesassge: 'login: ok',
        token
    });
});

export default router;
