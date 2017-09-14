<h1 align="center">
  Article extractor
  <br>
</h1>

This is a database of expressions used for extracting content from blogs and articles.

The database format is [JSON5](http://json5.org), a strict subset of Javascript, also available as a normal JSON.

The extraction expressions are [Cheerio](https://cheerio.js.org), similar with jQuery.

The targeted information is:
- **the title** of the article
- **the author**
- **the date** when the article was written
- and of course, the article text, as clean as possible

This project is designed to be used with [Clean-Mark](https://github.com/croqaz/clean-mark) and the [Clean-Mark-GUI](https://github.com/croqaz/clean-mark-gui), but you can use it however you want.

<div id="marker" markdown="1">

## 67 domains available

* abcnews.go.com
* agroinfo.ro
* arenait.net
* arstechnica.com
* articles.latimes.com
* bbc.com
* beta.theglobeandmail.com
* bigthink.com
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
* hotnews.ro
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
* news.com.au
* newscientist.com
* nytimes.com
* nzherald.co.nz
* observator.tv
* pri.org
* romaniaa.ro
* smh.com.au
* start-up.ro
* stiri.tvr.ro
* stirileprotv.ro
* techcrunch.com
* techradar.com
* telegraph.co.uk
* theguardian.com
* thenextweb.com
* thrillist.com
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

[Clean-Mark](https://github.com/croqaz/clean-mark) already has algorithms to extract most of the info, if the website is SEO friendly, eg: it respects schema.org/Article, or Microformats, or the Open Graph protocol.<br>
But it's not a perfect tool 🤖  and it needs help from humans 🙄

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

Made by :copyright: :registered: :radio_button:

Released under the [MIT license](https://raw.githubusercontent.com/croqaz/a-extractor/master/LICENSE).
