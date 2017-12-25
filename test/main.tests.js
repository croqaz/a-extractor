
const a = require('../')
const cheerio = require('cheerio')

describe('Extractor Test database', function () {

  it('should have an Array database', function () {
    a.sources.should.be.an.Array()
    a.sources.length.should.be.an.aboveOrEqual(75)
  })

  it('should find Farnamstreetblog.com', function () {
    const found = a.findExtractor('http://farnamstreetblog.com/2017/asd')
    found.domain.should.equal('farnamstreetblog.com/\\d+/')
  })

  it('should find Yahoo News', function () {
    const found = a.findExtractor('http://www.yahoo.com/news/asd')
    found.content.should.equal('article[itemprop="articleBody"]')
  })

})

describe('Selection Test suite', function () {

  $ = cheerio.load('<p id="first" data-hello="yes">Hello world</p><p class="second" data-hello="no">Goodbye world</p>')

  it('should expose selectOne and extract', function () {
    // Basic assumptions
    a.selectOne.should.be.a.Function()
    a.extract.should.be.a.Function()
  })

  it('select one string', function () {
    a.selectOne($, '#first').should.equal('Hello world')
    a.selectOne($, '.second').should.equal('Goodbye world')
    a.selectOne($, 'p').should.equal('Hello worldGoodbye world')
  })

  it('select an object', function () {
    a.selectOne($, {selector: '#first'}).should.equal('Hello world')
    a.selectOne($, {selector: '.second'}).should.equal('Goodbye world')
    a.selectOne($, {selector: '#first', attr: 'data-hello'}).should.equal('yes')
    a.selectOne($, {selector: '.second', attr: 'data-hello'}).should.equal('no')
  })

})
