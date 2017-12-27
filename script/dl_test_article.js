
const fs = require('fs')
const url = require('url')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const Minimize = require('minimize')

saveArticle(process.argv[2])

async function saveArticle (link) {
  const host = url.parse(link).hostname
  const p = `test/fixtures/${host}`
  if (fs.existsSync(p)) {
    console.error(`Existing host: ${host}`)
    return
  }
  fs.mkdirSync(p)
  console.log('Created folder:', p)
  const html = await fetchArticle(link)
  fs.writeFileSync(`${p}/source.htm`, html)
  fs.writeFileSync(`${p}/expected.json`, `{
  "uri": "${link}",
  "author": "...",
  "date": "2017...",
  "textStart": "....",
  "textMid": "...",
  "textEnd": "..."
}`)
  console.log('Saved article:', link)
}

async function fetchArticle (link) {
  let html
  try {
    html = await fetch(link)
    html = await html.text()
  } catch (err) {
    console.error(`Error fetching: ${err.message}`)
    return
  }
  const $ = cheerio.load(html)
  $('script').remove()
  $('style').remove()
  $('link').remove()
  $('iframe').remove()
  return new Minimize({ quotes: true }).parse($.html())
}
