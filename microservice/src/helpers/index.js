class RequestError extends Error {
  constructor(status, message, ...params) {
    super(...params);

    this.message = message;
    this.status = status;
  }
}

module.exports = {
  RequestError,
};
