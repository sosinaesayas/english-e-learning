// Jest's Node test environment doesn't expose the global `crypto` that newer
// Node runtimes provide out of the box — @nestjs/schedule and the MongoDB
// driver both call crypto.randomUUID() during module init, so polyfill it.
if (typeof global.crypto === "undefined") {
  global.crypto = require("node:crypto").webcrypto;
}
