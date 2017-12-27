
const fs = require('fs')
const a = require('../')
const cheerio = require('cheerio')

describe('Extractor Test suite', function () {

  it('should test all local HTML files', function () {
    for (let dir of fs.readdirSync('test/fixtures')) {
      if (dir[0] === '.') continue

      const want = JSON.parse(fs.readFileSync(`test/fixtures/${dir}/expected.json`, 'utf8'))
      const dom = cheerio.load(fs.readFileSync(`test/fixtures/${dir}/source.htm`, 'utf8'))
      const data = a.extract(dom, want.uri)

      want.author.should.equal(data.author)
      want.date.should.equal(data.date)

      data.content.should.containEql(want.textStart)
      data.content.should.containEql(want.textMid)
      data.content.should.containEql(want.textEnd)
    }
  })

})
