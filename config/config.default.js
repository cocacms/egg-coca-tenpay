"use strict";

exports.tenpay = {
  appid: "",
  mchid: "",
  partnerKey: "",
  pfx: "",
  notify_url: "",
  spbill_create_ip: "",
};

exports.bodyParser = {
  enableTypes: ["json", "form", "text"],
  extendTypes: {
    text: ["text/xml", "application/xml"],
  },
};
