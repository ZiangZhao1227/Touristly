import express from 'express';
// controllers
import { getEvents } from '../controllers/event';

const router = express.Router();

router.get("/", getEvents)

export default router;