import express from 'express';
// controllers
import { getPlaces } from '../controllers/place';

const router = express.Router();

router.get("/", getPlaces)

export default router;