const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.glocallpo.com";

// Static routes
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

// Dynamic service routes
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

/**
 * Convert DD-MM-YYYY to YYYY-MM-DD for sitemap <lastmod>
 */
function toISODate(dateStr) {
  if (!dateStr) return new Date().toISOString().split("T")[0];
  const parts = dateStr.trim().split("-");
  if (parts.length === 3 && parts[2].length === 4) {
    return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
  }
  return dateStr.split("T")[0];
}

/**
 * Convert DD-MM-YYYY to RFC 822 date for RSS <pubDate>
 */
function toRFC822(dateStr) {
  if (!dateStr) return new Date().toUTCString();
  const parts = dateStr.trim().split("-");
  if (parts.length === 3 && parts[2].length === 4) {
    const d = new Date(Date.UTC(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10)));
    return d.toUTCString();
  }
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date().toUTCString() : parsed.toUTCString();
}

/**
 * Strip HTML tags and clean entity text
 */
function cleanText(input = "") {
  return input
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&hellip;/g, "...")
    .replace(/\[&hellip;\]/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Automatically discover and extract full blog metadata from src/data/blogs/
 */
function extractBlogPosts() {
  const blogsDir = path.join(__dirname, "src", "data", "blogs");
  if (!fs.existsSync(blogsDir)) {
    console.warn(`⚠️ Blogs directory not found at ${blogsDir}`);
    return [];
  }

  const files = fs.readdirSync(blogsDir);
  const blogPosts = [];

  for (const file of files) {
    if (!file.endsWith(".js") || file === "index.js") continue;

    const filePath = path.join(blogsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const slugMatch = content.match(/slug:\s*['"`]([^'"`]+)['"`]/);
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const dateMatch = content.match(/date:\s*['"`]([^'"`]+)['"`]/);
    const modifiedMatch = content.match(/modified:\s*['"`]([^'"`]+)['"`]/);
    const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)['"`]/);
    const seoDescMatch = content.match(/seoDescription:\s*['"`]([^'"`]+)['"`]/);
    const excerptMatch = content.match(/excerpt:\s*`([^`]+)`/);

    if (slugMatch && slugMatch[1]) {
      const slug = slugMatch[1].trim();
      const rawDate = dateMatch ? dateMatch[1].trim() : "";
      const rawModified = modifiedMatch ? modifiedMatch[1].trim() : rawDate;
      const title = titleMatch ? cleanText(titleMatch[1]) : "Article";
      const category = categoryMatch ? categoryMatch[1].trim() : "Legal Process Outsourcing";
      const description = seoDescMatch && seoDescMatch[1]
        ? cleanText(seoDescMatch[1])
        : excerptMatch && excerptMatch[1]
        ? cleanText(excerptMatch[1])
        : "Expert legal insights from Glocal LPO.";

      blogPosts.push({
        slug,
        title,
        date: rawDate,
        modified: rawModified,
        isoLastMod: toISODate(rawModified || rawDate),
        rfcPubDate: toRFC822(rawDate),
        category,
        description,
        sourceFile: file,
      });
    }
  }

  // Sort newest first by lastmod date
  blogPosts.sort((a, b) => (b.isoLastMod > a.isoLastMod ? 1 : -1));

  return blogPosts;
}

function generateFiles() {
  const today = new Date().toISOString().split("T")[0];
  const blogPosts = extractBlogPosts();

  console.log(`Found ${blogPosts.length} blog post file(s) in src/data/blogs/:`);
  blogPosts.forEach((b) => console.log(`  - /blog/${b.slug} [${b.isoLastMod}] (${b.sourceFile})`));

  // 1. Generate Sitemap XML (with image & lastmod extensions)
  const dynamicRoutes = serviceRoutes.map((id) => `/services/${id}`);
  const allStaticRoutes = [...staticRoutes, ...dynamicRoutes].map((url) => ({
    url,
    lastmod: today,
    changefreq: url === "/" ? "weekly" : "monthly",
    priority: url === "/" ? "1.0" : "0.7",
  }));

  const allBlogRoutes = blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.isoLastMod,
    changefreq: "weekly",
    priority: "0.9",
    title: post.title,
  }));

  const allRoutes = [...allStaticRoutes, ...allBlogRoutes];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes
  .map((route) => {
    let entry = `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;
    if (route.url.startsWith("/blog/")) {
      entry += `
    <image:image>
      <image:loc>${BASE_URL}/assets/logo-b2b419b3.png</image:loc>
      <image:title>${route.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</image:title>
    </image:image>`;
    }
    entry += `\n  </url>`;
    return entry;
  })
  .join("\n")}
</urlset>
`;

  const publicSitemapPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(publicSitemapPath, sitemapXml.trim() + "\n", "utf-8");
  console.log(`✅ Sitemap successfully generated with ${allRoutes.length} URLs at ${publicSitemapPath}`);

  // 2. Generate RSS 2.0 Feed XML (for Google News & instant indexing discovery)
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
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
${blogPosts
  .map(
    (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <pubDate>${post.rfcPubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <description><![CDATA[${post.description}]]></description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;

  const publicFeedPath = path.join(__dirname, "public", "feed.xml");
  const publicRssPath = path.join(__dirname, "public", "rss.xml");
  fs.writeFileSync(publicFeedPath, rssXml.trim() + "\n", "utf-8");
  fs.writeFileSync(publicRssPath, rssXml.trim() + "\n", "utf-8");
  console.log(`✅ RSS Feed generated at ${publicFeedPath} and ${publicRssPath}`);
}

generateFiles();