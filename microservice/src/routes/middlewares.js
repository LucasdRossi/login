const { RequestError } = require("../helpers");

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
};
