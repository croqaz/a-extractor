<h1 align="center">
  Article extractor
  <br>
</h1>

This is a database of expressions used for extracting content from blogs and articles.

The database format is [JSON5](http://json5.org), a strict subset of Javascript, that can be converted to normal JSON.
The extraction expressions are [Cheerio](https://cheerio.js.org), very similar with jQuery.

The targeted information is:
- **the title** of the article
- **the author**
- **the date** when the article was written
- and of course, the article text, as clean as possible

This project is designed to be used with [Clean-Mark](https://github.com/croqaz/clean-mark) and the [Clean-Mark-GUI](https://github.com/croqaz/clean-mark-gui), but you can use it however you want.

<div id="marker" markdown="1">

## 53 domains available

* abcnews.go.com
* arstechnica.com
* articles.latimes.com
* bbc.com
* bigthink.com
* bossfeed.net
* businessinsider.com
* curentul.info
* dailymail.co.uk
* deepdotweb.com
* earthsky.org
* edition.cnn.com
* engadget.com
* express.co.uk
* farnamstreetblog.com
* fastcompany.com
* finesociety.ro
* firstpost.com
* foxnews.com
* galacticconnection.com
* gandeste.org
* gazetadambovitei.ro
* howtogeek.com
* huffingtonpost.com
* info.localytics.com
* infoalert.ro
* isgp-studies.com
* jurnalul.ro
* latimes.com
* life.ro
* mashable.com
* merckmanuals.com
* money.cnn.com
* nbcnews.com
* neonnettles.com
* nytimes.com
* observator.tv
* pri.org
* romaniaa.ro
* start-up.ro
* techcrunch.com
* techradar.com
* telegraph.co.uk
* theguardian.com
* thenextweb.com
* usatoday.com
* usnews.com
* wall-street.ro
* washingtonpost.com
* weforum.org
* wsj.com
* yahoo.com
* ziare.com

</div>

## Important

Clean-Mark already has algorithms to extract most of the info, if the website is SEO friendly, eg: it respects schema.org/Article, or Microformats, or the Open Graph protocol.
But it's not a perfect tool 🤖  and it needs help from humans 🙄.
