import express from 'express';
import helmet from 'helmet';
import router from './routes';
import cors from "cors";
import morgan from "morgan";

import authUserMiddleware from './middlewares/auth';
const app = express();

app.use(helmet());

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());
app.use(router);

app.use(authUserMiddleware);

app.get('/protected/resource', (req, res) => {
  res.send({
    message: 'protected route'
  });
});

app.get('/profile', (req, res) => {
  res.send({
    message: `Welcome ${req.user.username} your email is ${req.user.email}. Role ${req.user.role}`
  });
});

app.use('/', (req, res) => {
  res.send({
    message: 'Hello jwt'
  });
});
export default app;