import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import allIn from "./routes/index.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", allIn);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
