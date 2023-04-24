import { Router } from 'express';

const router = Router();

router.post('/', usersController.registerNewUser);

export default router;