// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
const blurhash = require('blurhash')
const { createCanvas, loadImage } = require('canvas')
const fs = require('fs').promises
const path = require('path')

const BASE_URL = path.join(process.cwd(), 'public')

/**
 * @param {string} directory
 */
async function * walk (directory) {
  const stats = await fs.opendir(path.resolve(BASE_URL, directory))

  for await (const stat of stats) {
    if (stat.isDirectory()) {
      yield * walk(path.join(directory, stat.name))
    } else if (stat.isFile()) {
      yield path.join(directory, stat.name)
    }
  }
}

const entrypoint = async (directory = 'assets', output = 'api/blurhash.json') => {
  const result = {}

  for await (const filename of walk(directory)) {
    const filepath = path.join(BASE_URL, filename)
    console.log(filepath)

    console.time('load')
    const image = await loadImage(filepath)
    const canvas = createCanvas(image.width, image.height)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(image, 0, 0)
    const data = ctx.getImageData(0, 0, image.width, image.height).data
    console.timeEnd('load')

    console.time('blur')
    const hash = blurhash.encode(data, image.width, image.height, 4, 3)
    console.timeEnd('blur')

    const key = filename.substring(directory.length + 1).replace(/\\/g, '/')
    result[key] = {
      width: image.width,
      height: image.height,
      hash,
    }
  }

  await fs.writeFile(path.join(BASE_URL, output), JSON.stringify(result, null, 2))
}

entrypoint(...process.argv.splice(2))
  .catch(console.error)
