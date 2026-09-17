const fs = require("fs");

const BASE_URL = "https://www.glocallpo.com";

// Static routes (match your App.js)
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/contact-us",
  "/privacy-policy",
  "/thank-you",
  "/personal-injury",
  "/bundle-offer",
  "/criminal-law",
];

// Dynamic service routes (IMPORTANT)
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

// Convert dynamic routes
const dynamicRoutes = serviceRoutes.map(
  (id) => `/services/${id}`
);

const allRoutes = [...staticRoutes, ...dynamicRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (url) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${url === "/" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("✅ Sitemap generated!");