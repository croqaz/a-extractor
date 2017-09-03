
const fs = require('fs')
const JSON5 = require('json5')
const url = require('url')

const DB = 'database.json5'
const sources = JSON5.parse(fs.readFileSync(DB))

// console.log('Sources ::', sources)

module.exports = function findExtractor (link) {
  const u = url.parse(link)
  const p = `${u.host}${u.path}`

  return sources.find(c => {
    if (typeof c.domain === 'string') {
      console.log((c.domain))
      if (new RegExp(c.domain).test(p))
        return c
    } else if (c.domain instanceof Array) {
      for (const d of c.domain) {
        if (new RegExp(d).test(p))
          return c
      }
    }
  })
}
