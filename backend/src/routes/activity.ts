import express from 'express';
// controllers
import { getActivities } from '../controllers/activity';

const router = express.Router();

router.get("/", getActivities)

export default router;