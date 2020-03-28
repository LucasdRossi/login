require("dotenv/config");
const express = require("express");
const cookieSession = require("cookie-session");

const authRouter = require("./routes/auth");

const app = express();

const PORT = 4000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(
  cookieSession({
    keys: ["aiJsdij1098jdjs901928djaASd93"] // random string
  })
);

app.use(authRouter);

app.listen(PORT, HOST, () => console.log(`=> listening to ${HOST}:${PORT}`));
