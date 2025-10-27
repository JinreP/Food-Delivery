import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";
import { categoryRoute } from "./routes/routes.js";

configDotenv();

const app = express();

const port = process.env.PORT;
app.use(bodyParser.json());

app.use("/Food", categoryRoute);

app.listen(port, () => {
  connectDB();
  console.log(`server is connected http://localhost:${port}`);
});










