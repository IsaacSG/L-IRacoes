import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./Routes/userRoute";

const server = express();

dotenv.config();
server.use(cors());
server.use(express.json());

server.get("/health", (req, res) => {
    res.send("Tá vivo")
})

server.use(userRouter);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server listen from ${PORT}`);
})