
const blogFloderName = 'doc'
const blogName = process.env.BLOG_NAME ? decodeURI(process.env.BLOG_NAME) : 'Nextjs Blog';
const blogTitle = process.env.BLOG_TITLE ? decodeURI(process.env.BLOG_TITLE) : 'Blog Title';
const footerText = process.env.BLOG_FOOTER_TEXT ? decodeURI(process.env.BLOG_FOOTER_TEXT) : 'I am the footer';
const locale = 'en-US'

export const globalData = {
  blogName,
  blogTitle,
  footerText,
  blogFloderName,
  locale
}