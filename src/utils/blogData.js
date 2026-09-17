/**
 * Re-export all blog posts and helpers from the modular src/data/blogs structure.
 * This maintains full backward compatibility across the entire project.
 */
export {
	SITE_URL,
	BLOG_POSTS,
	getAllPosts,
	getPostBySlug,
	getRecentPosts,
	getExcerpt,
	formatDate,
	decodeHtml,
	getFeaturedImage,
	toISO8601Date,
	toRFC822Date,
	toAbsoluteUrl,
} from '@/data/blogs';

export { default } from '@/data/blogs';
