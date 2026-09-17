import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import renderer from './renderer';
import apiRouter from "./api";

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// Serve assets from '/assets/' prefix
app.use('/assets', express.static(path.join(__dirname, '')));

// Serve static landing pages from the built output directory
// We enforce a trailing slash redirect so relative assets (like css/style.css) resolve correctly.
const staticPages = [
  'real-state-litigation-support',
  'personal-injury',
  'criminal-law',
  'bundle-offer',
  'real-estate',
  'family-law',
  'estate-planning-probate'
];

staticPages.forEach(page => {
  app.use(`/${page}`, (req, res, next) => {
    const originalPath = req.originalUrl.split('?')[0];
    if (originalPath === `/${page}`) {
      const search = req.originalUrl.slice(originalPath.length);
      return res.redirect(301, `/${page}/${search}`);
    }
    next();
  }, express.static(path.join(__dirname, page)));
});
// ============================================================
// Static Sitemap — blog routes are derived automatically from
// blogData.js, so adding a new post there is all you need.
// ============================================================
import { BLOG_POSTS, toISO8601Date, toRFC822Date, decodeHtml, getExcerpt } from '@/utils/blogData';

const BASE_URL = 'https://www.glocallpo.com';

const staticRoutes = [
	"/",
	"/about",
	"/services",
	"/contact-us",
	"/privacy-policy",
	"/personal-injury",
	"/bundle-offer",
	"/criminal-law",
	"/blog",
];

const serviceRoutes = [
	"business-litigation-support",
	"personal-injury",
	"employee-law",
	"workers-compensation",
	"estate-planning-probate",
	"real-estate-litigation",
	"family-law",
	"immigration",
	"intellectual-property",
	"criminal-law",
	"bankruptcy",
	"contracts",
];

app.get('/sitemap.xml', (req, res) => {
	const today = new Date().toISOString().split('T')[0];

	const allStaticRoutes = [...staticRoutes, ...serviceRoutes.map(id => `/services/${id}`)];

	const blogEntries = BLOG_POSTS.map(post => {
		const cleanTitle = decodeHtml(post.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${toISO8601Date(post.modified || post.date)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${BASE_URL}/assets/logo-b2b419b3.png</image:loc>
      <image:title>${cleanTitle}</image:title>
    </image:image>
  </url>`;
	}).join('');

	const staticEntries = allStaticRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : route === '/blog' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route === '/blog' ? '0.8' : '0.7'}</priority>
  </url>`).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticEntries}
${blogEntries}
</urlset>`;

	res.set('Content-Type', 'application/xml');
	res.set('Cache-Control', 'public, max-age=3600');
	res.send(sitemap);
});

// Dynamic RSS 2.0 Feed for Google News & Search discovery
app.get(['/feed.xml', '/rss.xml', '/feed'], (req, res) => {
	const items = BLOG_POSTS.map(post => {
		const title = decodeHtml(post.title || 'Untitled');
		const desc = post.seoDescription || getExcerpt(post.excerpt || post.content || '');
		const rfcDate = toRFC822Date(post.date);
		const cat = post.category || 'Legal Process Outsourcing';

		return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${rfcDate}</pubDate>
      <category><![CDATA[${cat}]]></category>
      <description><![CDATA[${desc}]]></description>
    </item>`;
	}).join('\n');

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Glocal LPO Insights &amp; Articles</title>
    <link>${BASE_URL}/blog</link>
    <description>Expert insights on legal process outsourcing, paralegal services, litigation support, and back-office efficiency for U.S. law firms.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/assets/logo-b2b419b3.png</url>
      <title>Glocal LPO</title>
      <link>${BASE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

	res.set('Content-Type', 'application/xml');
	res.set('Cache-Control', 'public, max-age=1800');
	res.send(rss);
});

app.get('/robots.txt', (req, res) => {
	res.sendFile(path.resolve(__dirname,  'robots.txt'));
});

// API for contact
app.use("/api", apiRouter)

// Handle all other requests with SSR
app.use(renderer);

// Don't start the server manually if running in Vercel
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
export default app;

