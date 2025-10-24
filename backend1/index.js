import figlet from "figlet";
import { configDotenv } from "dotenv";
import express from "express";
import bodyParser from "body-parser";

configDotenv();

const app = express();

const port = process.env.PORT;
app.use(bodyParser.json());

console.log(
  figlet.textSync(" AAAAA!", {
    font: "",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);

console.log(
  figlet.textSync("DDDD!", {
    font: "",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);
app.listen(port, () => {
  console.log("server is connected");
});

// git fetch origin
// git checkout 1-demo
