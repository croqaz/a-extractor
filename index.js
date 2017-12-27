
const fs = require('fs')
const JSON5 = require('json5')
const url = require('url')

const DB = `${__dirname}/database.json5`
const srcs = JSON5.parse(fs.readFileSync(DB))

function findExtractor (link, sources = srcs) {
  /**
    Each entry in the source must contain: author, date and content.
    The selectors must be in one of the forms:
   - selector string
   - object { selector: '...', [attr: '...' || data: '...'] }
   */
  const u = url.parse(link)
  return sources.find(c =>
    new RegExp(c.domain).test(`${u.host}${u.path}`) ? c : null
  )
}

function extract ($, link, sources = srcs) {
  /**
   * The DOM must be a Cheerio object, jQuery, or similar.
   */
  const aex = findExtractor(link)
  if (!aex) {
    return {}
  }
  const dict = {}
  const $text = $(aex.content)
  if ($text.length === 1) {
    dict.content = $text.html()
  } else if ($text.length > 1) {
    dict.content = $text
      .map((i, a) => $(a).html())
      .get()
      .join('<br>\n')
  }
  if (aex.author) {
    try {
      dict.author = selectOne($, aex.author)
    } catch (err) {
      console.error(err)
    }
  }
  if (aex.date) {
    try {
      dict.date = selectOne($, aex.date)
    } catch (err) {
      console.error(err)
    }
  }
  return dict
}

function selectOne ($, aex) {
  /**
    The selector must be in one of the forms:
   - selector string
   - object { selector: '...', [attr: '...' || data: '...'] }
   */
  if (typeof (aex) === 'string') {
    return $(aex).text().trim()
  }
  if (!aex.selector) {
    return ''
  }
  let val
  if (aex.attr) {
    val = $(aex.selector).attr(aex.attr)
  } else if (aex.data) {
    val = $(aex.selector).data(aex.data)
  } else {
    val = $(aex.selector).text()
  }
  return val ? val.trim() : ''
}

module.exports = {
  sources: srcs,
  findExtractor,
  selectOne,
  extract
}
