import postNew from './how-outsourced-immigration-paralegal-services-save-time-and-reduce-legal-costs';
import post1 from './why-us-law-firms-are-outsourcing-paralegal-services-in-2026';
import post2 from './hiring-right-legal-process-outsourcing-partner';
import post3 from './data-security-in-legal-process-outsourcing';
import post4 from './litigation-support-outsourcing-for-personal-injury-law-firms';

import blogHeroImg from '@/assets/images/blog-hero-cinematic.jpg';

export const SITE_URL = 'https://www.glocallpo.com';

/**
 * List of all blog posts (ordered with newest first).
 */
export const BLOG_POSTS = [
	postNew,
	post1,
	post2,
	post3,
	post4,
];

/**
 * Convert a DD-MM-YYYY date string to ISO 8601 (YYYY-MM-DD)
 * Required for sitemap <lastmod> and Schema.org JSON-LD (datePublished / dateModified)
 */
export const toISO8601Date = (dateStr = '') => {
	if (!dateStr) return new Date().toISOString().split('T')[0];
	const parts = dateStr.trim().split('-');
	if (parts.length === 3 && parts[2].length === 4) {
		return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
	}
	return dateStr.split('T')[0];
};

/**
 * Convert DD-MM-YYYY to RFC 822 date format for RSS 2.0 <pubDate>
 * Example output: "Mon, 24 Aug 2026 00:00:00 GMT"
 */
export const toRFC822Date = (dateStr = '') => {
	if (!dateStr) return new Date().toUTCString();
	const parts = dateStr.trim().split('-');
	if (parts.length === 3 && parts[2].length === 4) {
		const date = new Date(Date.UTC(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10)));
		return date.toUTCString();
	}
	const parsed = new Date(dateStr);
	return isNaN(parsed.getTime()) ? new Date().toUTCString() : parsed.toUTCString();
};

/**
 * Ensure image or asset URL is a fully qualified absolute URL.
 * Required for OpenGraph, Twitter Cards, RSS enclosure, and Schema.org Article image.
 */
export const toAbsoluteUrl = (pathOrUrl = '') => {
	if (!pathOrUrl) return `${SITE_URL}/assets/logo-b2b419b3.png`;
	if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
		return pathOrUrl;
	}
	const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
	return `${SITE_URL}${cleanPath}`;
};

/**
 * Format a DD-MM-YYYY date string to "Month Day, Year" (e.g. "August 24, 2026").
 */
export const formatDate = (dateStr = '') => {
	if (!dateStr) return '';
	const parts = dateStr.split('-');
	if (parts.length !== 3) return dateStr;
	const [day, month, year] = parts;
	const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

/**
 * Decode HTML entities and strip HTML tags. Works reliably on both server and client.
 */
export const decodeHtml = (input = '') => {
	if (!input) return '';
	let text = input.replace(/<[^>]+>/g, ' ');
	text = text
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, ' ')
		.replace(/&mdash;/g, '—')
		.replace(/&ndash;/g, '–')
		.replace(/&hellip;/g, '...')
		.replace(/&#8217;/g, "'")
		.replace(/&#8216;/g, "'")
		.replace(/&#8220;/g, '"')
		.replace(/&#8221;/g, '"')
		.replace(/\[&hellip;\]/g, '...')
		.replace(/\s+/g, ' ')
		.trim();
	return text;
};

/**
 * Get a clean excerpt for SEO and listing cards.
 */
export const getExcerpt = (html = '') => {
	const text = decodeHtml(html);
	if (!text) return 'Read the full article for details.';
	return text.length > 150 ? `${text.slice(0, 150).trim()}...` : text;
};

/**
 * Get featured image for a post with cinematic fallback.
 */
export const getFeaturedImage = (post) => post?.featuredImage || blogHeroImg;

/**
 * Get all blog posts.
 */
export const getAllPosts = () => BLOG_POSTS;

/**
 * Find a blog post by its slug.
 */
export const getPostBySlug = (slug) =>
	BLOG_POSTS.find((post) => post.slug === slug) || null;

/**
 * Get recent / related posts for internal linking and crawling.
 */
export const getRecentPosts = (excludeSlug = '', limit = 3) => {
	return BLOG_POSTS.filter((post) => post.slug !== excludeSlug).slice(0, limit);
};

export default BLOG_POSTS;
