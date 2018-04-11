# 📃 Article extractor

  > Database of expressions used for extracting content from blogs and articles.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][build-image]][build-url]
  [![Standard Style Guide][style-image]][style-url]


The main database is [JSON5](http://json5.org) format, a strict subset of Javascript, also available as a normal JSON, for convenience.

The extraction expressions are [Cheerio](https://cheerio.js.org), similar with jQuery.

The targeted information is:
- **the author**
- **the date** when the article was written
- and of course, the article text, as clean as possible

This project is designed to be used with [Clean-Mark](https://github.com/croqaz/clean-mark), but you can use it however you want.

<div id="marker" markdown="1">

## 86 domains available

* abcnews.go.com
* aeon.co
* agroinfo.ro
* arenait.net
* arstechnica.com
* articles.latimes.com
* artsy.net
* bbc.com
* beta.theglobeandmail.com
* bigthink.com
* bindiribli.ro
* bossfeed.net
* businessinsider.com
* collectivelyconscious.net
* curentul.info
* dailymail.co.uk
* deepdotweb.com
* digi24.ro
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
* gnosticwarrior.com
* hackread.com
* hbr.org
* hotnews.ro
* howtogeek.com
* huffingtonpost.com
* info.localytics.com
* infoalert.ro
* irishmirror.ie
* isgp-studies.com
* jamesclear.com
* jurnalul.ro
* latimes.com
* life.ro
* mashable.com
* merckmanuals.com
* money.cnn.com
* nautil.us
* nbcnews.com
* ncbi.nlm.nih.gov
* neonnettles.com
* news.com.au
* newscientist.com
* newyorker.com
* nytimes.com
* nzherald.co.nz
* observator.tv
* pri.org
* qz.com
* romaniaa.ro
* rt.com
* rts.earth
* smh.com.au
* start-up.ro
* stiri.tvr.ro
* stirileprotv.ro
* techcrunch.com
* techradar.com
* telegraph.co.uk
* theatlantic.com
* theguardian.com
* theliberal.ie
* thenextweb.com
* theverge.com
* thrillist.com
* torrentfreak.com
* usatoday.com
* usnews.com
* vox.com
* wakingtimes.com
* wall-street.ro
* washingtonpost.com
* weforum.org
* wsj.com
* yahoo.com
* ziare.com

</div>

## Important

[Clean-Mark](https://github.com/croqaz/clean-mark) already has algorithms to extract most of the info, if the website is SEO friendly, eg: it respects schema.org/Article, or Microformats, or the Open Graph protocol.<br>
But it's not a perfect tool 🤖  and it needs help from us humans 🙄

## Contributions

We ❤️ contributions !!!

Want to report a bug, request a feature, or contribute? Things can only be contributed via the [A-Extractor GitHub](https://github.com/croqaz/a-extractor) repository.

* [Submit a bug report](https://github.com/croqaz/a-extractor/issues?labels=bug)
* [Submit a feature request](https://github.com/croqaz/a-extractor/issues?labels=enhancement)
* [Submit a pull request](https://github.com/croqaz/a-extractor/pulls)

The "fork-and-pull" Git workflow:

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Work on your fork
    1. Make your changes and additions
    2. Change or add tests if needed
    3. Run tests and make sure they pass
    4. Add changes to README.md if needed
4. Commit changes to your own branch
5. **Make sure** you merge the latest from "upstream" and resolve conflicts if there is any
6. Push your work back up to your fork
7. Submit a Pull request so that we can review your changes

-----

## License

[MIT](LICENSE) © Cristi Constantin.


[npm-image]: https://img.shields.io/npm/v/a-extractor.svg
[npm-url]: https://www.npmjs.com/package/a-extractor
[downloads-image]: https://img.shields.io/npm/dm/a-extractor.svg
[downloads-url]: https://npmjs.org/package/a-extractor
[build-image]: https://travis-ci.org/croqaz/a-extractor.svg?branch=master
[build-url]: https://travis-ci.org/croqaz/a-extractor
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
