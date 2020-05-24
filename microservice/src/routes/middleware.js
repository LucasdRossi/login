const { RequestError } = require("../helpers");
const Auth = require("../database");

module.exports = {
  checkBody(body, expected) {
    for (let item of expected) {
      if (!body[item]) {
        throw new RequestError(400, `Expecting a ${item}`);
      }
    }

    if (Object.keys(body).length !== expected.length) {
      throw new RequestError(
        400,
        `Expecting ${expected.length} values but got ${
          Object.keys(body).length
        }`
      );
    }
  },
  async requireAuth(req, res, next) {
    if (!req.session.userId) {
      res.status(401).json({ error: "User is not logged in" });
    } else {
      const auth = new Auth();
      const { userId } = req.session;
      try {
        await auth.connect();

        const exist = await auth.getByAttrs({ id: parseInt(userId) });

        if (!exist) {
          req.session.userId = null;
          throw new RequestError(404, `Cannot find user`);
        }

        next();
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
    }
  },
};
