<h1 align="center">
  Article extractor
  <br>
</h1>

This is a database of expressions used for extracting content from blogs and articles.

The database format is [JSON5](http://json5.org), a strict subset of Javascript, that can be converted to normal JSON.
The extraction expressions are [Cheerio](https://cheerio.js.org), very similar with jQuery.
The targeted informations are: **the title** of the article, **the author**, **the date** when the article was written, and of course, the article text, as clean as possible.

This project is designed to be used with [Clean-Mark](https://github.com/croqaz/clean-mark) and the [Clean-Mark-GUI](https://github.com/croqaz/clean-mark-gui), but you can use it however you want.

## Important

Clean-Mark already has algorithms to extract most of the info, if the website is SEO friendly, eg: it respects schema.org/Article, or Microformats, or the Open Graph protocol.
But it's not a perfect tool 🤖  and it needs help from humans 🙄.
