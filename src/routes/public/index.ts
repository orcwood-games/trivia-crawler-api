import Router from 'express';
import { login } from '../../controllers/login.ts'

const router = Router();

router.post("/login", login);

export default router;