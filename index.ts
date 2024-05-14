import * as cheerio from "cheerio";
import fs from "fs";

// how many links per page to fetch
const limitPerPage = 10

// how deep to traverse from the initial page
const maxDepth = 2

// limit to prevent us from getting too crazy
const globalMax = 100
let globalCounter = 0

async function fetchPage(url: string) {
  if (++globalCounter >= globalMax) throw new Error('reached global max')

  console.log(`Loading site: ${url}`);
  const response = await fetch(url);
  const html = await response.text();
  console.log('got', Math.round(html.length / 1024), 'kb of html');

  processPage(url, html);
  return html
}

function processPage(url: string, html: string) {
  const $ = cheerio.load(html);

  // clean up the page
  ['script', '.vector-header', 'nav', '#p-lang-btn'].forEach((selector) => {
    $(selector).remove()
  })

  // loop through all stylesheet links and fix their urls
  const domain = new URL(url).origin
  $('link[rel="stylesheet"]').each((i, el) => {
    const href = $(el).attr('href')
    if (href?.startsWith('/')) $(el).attr('href', domain + href)
  })

  // output html
  if (!fs.existsSync('output')) fs.mkdirSync('output')
  fs.writeFileSync('output/page.html', $.html())

  // fetch all links that start with /wiki/
  const links = $('a[href^="/wiki/"]')
  const linkUrls = links.map((i, el) => {
    return $(el).attr('href');
  }).get().slice(0, limitPerPage)

  console.log('links', linkUrls);
}

const url = process.argv[2];
if (!url) {
  console.error("Please provide a URL");
  process.exit(1);
}

await fetchPage(url);
if (globalCounter > 1) console.log('fetched count:', globalCounter)


