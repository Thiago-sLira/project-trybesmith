import { Router } from 'express';
import usersController from '../controllers/user.controller';
import validateNewUser from '../middlewares/validateNewUser';

const router = Router();

router.post('/', validateNewUser, usersController.registerNewUser);

export default router;
