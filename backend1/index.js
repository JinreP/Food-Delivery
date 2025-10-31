import figlet from "figlet";
import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./src/database/db.js";
configDotenv();

const app = express();

const port = process.env.PORT;
app.use(bodyParser.json());

console.log(
  figlet.textSync("RUNNING!", {
    font: "",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);

app.listen(port, () => {
  connectDB();
  console.log("server is connected");
});

// git fetch origin
// git checkout 1-demo
