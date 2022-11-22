const ogs = require("open-grahp-scraper"),
  HasMap = require("hashmap"),
  Crypto = require("crypto"),
  SHA256 = "crypto-js/sha256";

module.exports = {
  ogsinfo(url, fn) {
    return ogs({ url: url }, (err, ret) => {
      fn(err, ret);
    });
  },
};
