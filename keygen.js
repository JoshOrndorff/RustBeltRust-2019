// ~/.yarn/bin/browserify keygen.js > keygen-bundle.js

let util = require('@polkadot/util');
let util_crypto = require('@polkadot/util-crypto');
let keyring = require('@polkadot/keyring');

window.util = util;
window.util_crypto = util_crypto;
window.keyring = keyring;

let outputBox = document.getElementById("output");
document.getElementById("generate").addEventListener("click", () => {
  // Following Shawn's suggestion from
  // https://github.com/substrate-developer-hub/substrate-developer-hub.github.io/pull/257#issuecomment-536347508
  let m = util_crypto.mnemonicGenerate();
  let a = util_crypto.mnemonicToSeed(m);
  let s = util.u8aToHex(a);
  let ss58 = util_crypto.encodeAddress(s);
  outputBox.value = `${m}\n${s}\n${ss58}`;
});
