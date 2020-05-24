const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(
  cookieSession({
    name: "session",
    keys: ["aiudshaiushd"],

    httpOnly:false
  })
);
app.use(express.json());

app.use(authRouter);

module.exports = app;
