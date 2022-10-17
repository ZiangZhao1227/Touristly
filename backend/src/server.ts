import express from "express";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
    
app.use(cors())
app.use(express.json())
    
app.listen(port, () => {
    console.log(`Backend server is running on port ${port}!`);
});