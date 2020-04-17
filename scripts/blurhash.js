const blurhash = require('blurhash')
const fs = require('fs').promises
const path = require('path')
const Jimp = require('jimp')

const { walk, getSHA1 } = require('./utilities')

const resolve = (...segments) => path.resolve(process.cwd(), ...segments)

/**
 * @param {string} images
 * @param {string} output
 */
const entrypoint = exports.blurhash = async (
  images = 'public/assets',
  output = 'public/api/blurhash.json'
) => {
  const json = require(resolve(output))

  for await (const filepath of walk(resolve(images))) {
    const name = filepath.substring(resolve(images).length + 1).replace(/\\/g, '/')
    const buffer = await fs.readFile(filepath)
    const sha1 = getSHA1(buffer)

    if (name in json && json[name].sha1 === sha1) continue

    console.time(name)
    const fi = await Jimp.read(buffer)
    const fw = fi.getWidth()
    const fh = fi.getHeight()
    const si = fi.scaleToFit(64, 64)
    const sw = si.getWidth()
    const sh = si.getHeight()
    const hash = blurhash.encode(si.bitmap.data, sw, sh, 4, 3)

    json[name] = { fw, fh, sw, sh, hash, sha1 }
    console.timeEnd(name)
  }

  await fs.writeFile(resolve(output), JSON.stringify(json, null, 2))
}

if (!module.parent) {
  entrypoint(...process.argv.splice(2))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
