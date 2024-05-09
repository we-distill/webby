import * as cheerio from "cheerio";
import fs from 'fs'

const limit = 10
const depth = 1

async function fetchPage(url: string) {
  console.log(`Loading site: ${url}`);
  const response = await fetch(url);
  const html = await response.text();
  return html
}   

const url = process.argv[2];
if (!url) {
  console.error("Please provide a URL");
  process.exit(1);
}

const html = await fetchPage(url);
console.log('got html', html.length);

const $ = cheerio.load(html);

const links = $('a').length
console.log('links', links);