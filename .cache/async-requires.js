// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-journal-template-js": () => import("./../../../src/templates/journal-template.js" /* webpackChunkName: "component---src-templates-journal-template-js" */),
  "component---src-templates-page-template-js": () => import("./../../../src/templates/page-template.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---src-templates-post-js": () => import("./../../../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-tags-js": () => import("./../../../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */)
}

