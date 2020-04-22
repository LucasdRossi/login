const express = require("express");
const Auth = require("../database");

const { checkBody } = require("./middlewares");
const { RequestError } = require("../helpers");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const auth = new Auth();
  try {
    await auth.connect();

    checkBody(req.body, ["username", "password", "confirmation"]);

    let { username, password, confirmation } = req.body;
    username = username[0].toUpperCase() + username.substring(1);

    if (password !== confirmation) {
      throw new RequestError(400, "Passwords must match");
    }

    const exist = await auth.getByAttrs({ username });

    if (exist.length !== 0) {
      throw new RequestError(400, `Username ${username} is already registered`);
    }

    // TODO auth.create
    await auth.create({ username, password });
    console.log(`=> LOG: ${username} registered`);

    // TODO adicionar id na session
    return res.status(201).json({ success: `${username} is now registered` });
  } catch (error) {
    console.log(`=> ERROR: ${error.message}`);
    if (error instanceof RequestError) {
      res.status(error.status).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  } finally {
    await auth.disconnet();
  }
});

module.exports = router;
