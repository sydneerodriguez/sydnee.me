const crypto = require('crypto')
const fs = require('fs').promises
const path = require('path')

/** @param {string} directory */
exports.walk = async function * walk (directory) {
  const stats = await fs.opendir(directory)

  for await (const stat of stats) {
    if (stat.isDirectory()) {
      yield * walk(path.join(directory, stat.name))
    } else if (stat.isFile()) {
      yield path.join(directory, stat.name)
    }
  }
}

exports.getSHA1 = (buffer) =>
  crypto.createHash('sha1').update(buffer).digest('base64')
