"use strict";
const tenpay = require("tenpay");
const TENDPAYSDK = Symbol("Application#tenpaysdk");
module.exports = {
  get tenpay() {
    if (this[TENDPAYSDK]) return this[TENDPAYSDK];
    this[TENDPAYSDK] = new tenpay(this.config.tenpay);
    return this[TENDPAYSDK];
  },
};
