/*
 *  Title: Test for old /en/ MDN URLs.
 *
 *  Example 1: All URLs using MDN links, which contain "/en/" as locale should be replaced by
 *  "/en-US/" URLs. E.g. <a href="/en/docs/CSS">CSS</a> should rather be
 *  <a href="/en-US/docs/Web/CSS">CSS</a>.
 *
 *  Implementation notes: This test checks whether a link's 'href' attribute starts with "/en/".
 *  It does not check whether the link is an internal MDN link, nor does it check different
 *  locales than the English one.
 */

const ERROR = require('./doctests.js').ERROR;

exports.oldURLs = {
  name: "old_en_urls",
  desc: "old_en_urls_desc",
  check: function checkOldURLs(rootElement) {
    let links = rootElement.querySelectorAll("a[href^='/en/' i]");
    let matches = [];

    for (let i = 0; i < links.length; i++) {
      matches.push({
        msg: links[i].outerHTML,
        type: ERROR
      });
    }

    return matches;
  }
};
