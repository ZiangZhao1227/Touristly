import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
// middlewares
import loggerHandler from "./middlewares/logger";
import errorHandler from "./middlewares/error";
// routes
import placeRouter from "./routes/place";
import activityRouter from "./routes/activity";
import eventRouter from "./routes/event";
import ticketRouter from "./routes/ticket"

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())
app.use(helmet());
app.use(loggerHandler);

app.use("/api/v1/places", placeRouter)
app.use("/api/v1/activities", activityRouter)
app.use("/api/v1/events", eventRouter)
app.use("/api/v1/tickets", ticketRouter)

app.use(errorHandler.unknownEndpoint);
app.use(errorHandler.generalError);

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}!`);
});