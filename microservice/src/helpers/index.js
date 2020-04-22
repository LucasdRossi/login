class RequestError extends Error {
  constructor(status, message, ...params) {
    super(...params);

    this.message = message;
    this.status = status;
  }
}

module.exports = {
  RequestError,
  makeParams(attrs) {
    const keys = Object.keys(attrs);
    const params = [];
    const values = [];
    let cont = 1;

    for (let key of keys) {
      params.push(`${key} = $${cont}`);
      values.push(attrs[key]);
      cont += 1;
    }

    return [params, values];
  },
};
