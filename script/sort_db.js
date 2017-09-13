
const fs = require('fs')
const JSON5 = require('json5')

const DB = `${__dirname}/../database.json5`
const sources = JSON5.parse(fs.readFileSync(DB))

sources.sort((a, b) =>
  (a.domain > b.domain) ? 1 : (a.domain < b.domain) ? -1 : 0
)

// Write JSON5
fs.writeFileSync(DB, JSON5.stringify(sources, null, 2))
// Write JSON
fs.writeFileSync(DB.slice(0, -1), JSON.stringify(sources, null, 2))
