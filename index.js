
const fs = require('fs')
const JSON5 = require('json5')
const url = require('url')

const DB = `${__dirname}/database.json5`
const srcs = JSON5.parse(fs.readFileSync(DB))

module.exports.sources = srcs

module.exports.findExtractor = function findExtractor (link, sources = srcs) {
  const u = url.parse(link)
  return sources.find(c =>
    new RegExp(c.domain).test(`${u.host}${u.path}`) ? c : null
  )
}
