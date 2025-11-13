import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import { connectDB } from "./database/db.js";
import { categoryRoute } from "./routes/foodCategory.js"; 
import { foodRoute } from "./routes/foodRoute.js";
import { userRoute } from "./routes/usersRoute.js";
import { foodOrderRoute } from "./routes/foodOrder.js";

configDotenv();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

const port = process.env.PORT;
app.use(bodyParser.json());

app.use("/category", categoryRoute);
app.use("/foods", foodRoute);
app.use("/user", userRoute);
app.use("/order", foodOrderRoute)
app.listen(port, () => {
  connectDB();
  console.log(`server is connected http://localhost:${port}`);
});
