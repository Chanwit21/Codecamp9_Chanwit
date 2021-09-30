class Customerror extends Error {
  constructor(message, _code) {
    super(message);
    this.code = _code;
  }
}

module.exports = Customerror;
