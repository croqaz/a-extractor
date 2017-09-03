
const fs = require('fs')
const JSON5 = require('json5')

const DB = `${__dirname}/database.json5`
const sources = JSON5.parse(fs.readFileSync(DB))

const comparator = (a, b) => {
  let ad, bd
  if (typeof a.domain === 'string') {
    ad = a.domain
  } else if (a.domain instanceof Array) {
    ad = a.domain.join(',')
  }
  if (typeof b.domain === 'string') {
    bd = b.domain
  } else if (b.domain instanceof Array) {
    bd = b.domain.join(',')
  }
  return ad > bd
}
sources.sort(comparator)

fs.writeFileSync(DB, JSON5.stringify(sources, null, 2))
