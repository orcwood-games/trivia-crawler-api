import Router from 'express';
import { get } from '../../controllers/game';
import { auth } from "../../helpers/auth";

const router = Router();

router.use(auth);

router.get("/", get);

export default router;