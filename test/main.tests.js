
const a = require('../')

describe('Extractor Test suite', function () {

  it('should have an Array database', function () {
    a.sources.should.be.an.Array()
    a.sources.length.should.be.an.aboveOrEqual(5)
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
