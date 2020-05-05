const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    keys: ["aiJsdij1098jdjs901928djaASd93"], // random string
  })
);

app.use(authRouter);

module.exports = app;
