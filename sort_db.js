
const fs = require('fs')
const JSON5 = require('json5')

const DB = `${__dirname}/database.json5`
const sources = JSON5.parse(fs.readFileSync(DB))

sources.sort((a, b) => a.domain > b.domain)

fs.writeFileSync(DB, JSON5.stringify(sources, null, 2))
