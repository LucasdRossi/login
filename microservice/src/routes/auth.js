const express = require("express");
const Auth = require("../database");

const { checkBody } = require("./middlewares");
const { RequestError } = require("../helpers");

const router = express.Router();
const auth = new Auth();

router.post("/signup", async (req, res) => {
  try {
    await auth.connect();

    checkBody(req.body, ["username", "password", "confirmation"]);

    return res.status(201).json("ok");
  } catch (error) {
    if (error instanceof RequestError)
      res.status(error.status).json({ error: error.message });
    else res.status(500).json({ error: error.message });
  } finally {
    // TODO tentar desconectar mais vezes caso retorne falso
    await auth.disconnet();
  }
});

module.exports = router;
