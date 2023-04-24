import { Router } from 'express';
import usersController from '../controllers/user.controller';

const router = Router();

router.post('/', usersController.registerNewUser);

export default router;
