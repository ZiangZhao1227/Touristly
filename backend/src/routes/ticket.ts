import express from 'express';
//controllers
import { createTicket, getTickets } from "../controllers/ticket"

const router = express.Router()

router.post("/order", createTicket)

router.get("/",getTickets)


export default router
