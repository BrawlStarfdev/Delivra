import fs from "fs";
import url from "url";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

// NOTE: We need to original website domain in order to check the accessbility of website local resources
//       EX: href="/css/js_quiz.asp"
const websiteDomain = "http://127.0.0.1";

// NOTE: key will be url and value will be status - True/False
const cache = {};

// NOTE: Check the url if it's accessible or not
const testUrl = (href) => {
  const parsedUrl = url.parse(href);
  let fetchUrl = parsedUrl.href;

  // NOTE: Website local resource case
  //       EX: href="/css/js_quiz.asp"
  if (!parsedUrl.host || parsedUrl.href === parsedUrl.path) {
    fetchUrl = websiteDomain + fetchUrl;
  }

  // NOTE: Check if url has been tested already
  if (cache[fetchUrl] !== undefined) {
    console.log(
      `${fetchUrl} has been already tested and status is : `,
      cache(fetchUrl)
    );
    return cache[fetchUrl];
  }

  fetch(fetchUrl)
    .then((res) => {
      // NOTE: Store response status as value with url as key
      cache[fetchUrl] = res.status === 200;
      console.log(`Fetch status from ${fetchUrl} :`, res.status);
      return cache[fetchUrl];
    })
    .catch((err) => {
      console.log(`Fetch failed from ${fetchUrl}`);
      cache[fetchUrl] = false;
      return false;
    });
};

JSDOM.fromFile("sample.html", {}).then((dom) => {
  // NOTE: Retrieve all anchor/link dom elements
  const links = dom.window.document.querySelectorAll("a");

  for (let link of links) {
    //NOTE: Extract all hrefs from the anchor/link tags
    const href = link.attributes.href.value;
    testUrl(href);
  }
});
