
const fs = require('fs')
const JSON5 = require('json5')

const DB = `${__dirname}/../database.json5`
const READ = `${__dirname}/../README.md`

const sources = JSON5.parse(fs.readFileSync(DB))
const domains = sources.map(s => '* ' + s.domain.replace(/\/.*/, '')).join('\n')

let readme = fs.readFileSync(READ, {encoding: 'utf8'})
readme = readme.replace(
  /<div id="marker" markdown="1">([\s\S]*?)<\/div>/,
  `<div id="marker" markdown="1">\n\n## ${sources.length} domains available\n\n${domains}\n\n</div>`
)

fs.writeFileSync(READ, readme)
