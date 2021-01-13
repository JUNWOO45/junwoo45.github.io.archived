const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/pages/index.js"))),
  "component---src-templates-journal-template-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/templates/journal-template.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/templates/page-template.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/templates/post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/ns/Documents/junwoo45/junwoo45.github.io/src/templates/tags.js")))
}

