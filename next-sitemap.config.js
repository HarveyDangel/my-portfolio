// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || "https://harb-coded.vercel.app/", // replace with your site
  generateRobotsTxt: true, // also generate robots.txt
  sitemapSize: 5000, // splits if you have many pages
};
