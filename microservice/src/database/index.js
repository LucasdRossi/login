const { Client } = require("pg");
const crypto = require("crypto");

const dbConfig = require("../config/postgres");
const { makeParams } = require("../helpers");

module.exports = class Auth {
  constructor() {
    this.db = new Client(dbConfig);
  }

  async connect() {
    console.log("=> LOG: connecting to the db");
    try {
      await this.db.connect();
    } catch (err) {
      throw new Error("Error connecting to the database");
    }
  }

  async disconnet() {
    console.log("=> LOG: disconnecting from the db");
    try {
      await this.db.end();
    } catch (err) {
      throw new Error("Error disconnecting from the database");
    }
  }

  async delete(id) {
    const name = "delete-user";
    const text = "DELETE FROM users WHERE id = $1";
    const values = [id];

    const query = { name, text, values };

    console.log("=> LOG: sending query");
    console.log(query);
    await this.db.query(query);
    console.log(`=> LOG: query "${name}" successfully executed`);
  }

  async create(user) {
    let { username, password } = user;

    const salt = crypto.randomBytes(8).toString("hex");
    let hashed = crypto.scryptSync(password, salt, 64); // buffer
    hashed = hashed.toString("hex");

    const name = "insert-user";
    const text = "INSERT INTO users(username, password) VALUES($1, $2)";
    const values = [username, `${hashed}.${salt}`];

    const query = { name, text, values };

    console.log("=> LOG: sending query");
    console.log(query);
    await this.db.query(query);
    console.log(`=> LOG: query "${name}" successfully executed`);
  }

  async getByAttrs(attrs = {}) {
    const [params, values] = makeParams(attrs);
    const name = "select-attrs";
    const text = attrs
      ? `SELECT * FROM users WHERE ${params.join(" and ")}`
      : "SELECT * FROM users";

    const query = { name, text, values };

    console.log("=> LOG: sending query");
    console.log(query);
    let { rows } = await this.db.query(query);
    console.log(`=> LOG: receiving data from query "${name}"`);
    rows = rows[0];
    console.log(rows);

    return rows;
  }

  comparePassword(attempt, password) {
    const [hashed, salt] = password.split(".");

    let hashedAttempt = crypto.scryptSync(attempt, salt, 64); // buffer
    hashedAttempt = hashedAttempt.toString("hex");

    return hashed === hashedAttempt;
  }
};
