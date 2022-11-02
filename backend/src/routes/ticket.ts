import express from 'express';
//controllers
import {createTicket} from "../controllers/ticket"

const router = express.Router()

router.post("/order", createTicket)


export default router
