

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/routes.js";
import Connection from "./database/db.js";   

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

// DB connect
Connection();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});