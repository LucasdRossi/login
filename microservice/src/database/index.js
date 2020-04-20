const { Client } = require("pg");
const dbConfig = require("../config/postgres");

module.exports = class Auth {
  constructor() {
    this.db = new Client(dbConfig);
    this.connected = false;
  }

  async connect() {
    try {
      await this.db.connect();
      this.connected = true;
    } catch (err) {
      this.connected = false;
    }

    return this.connected;
  }

  async disconnet() {
    if (!this.connected) {
      this.db.disconnet();
      this.connected = false;
    }

    return !this.connected;
  }
};
