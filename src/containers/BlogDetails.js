import React from "react";
import { Container, Box, Typography, Grid2 as Grid, Card, CardContent, CardMedia } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/common";
import {
  getPostBySlug,
  getRecentPosts,
  decodeHtml,
  getFeaturedImage,
  formatDate,
  toISO8601Date,
  toAbsoluteUrl,
  SITE_URL,
} from "@/utils/blogData";

const DEFAULT_ACCENT = "#f5c074";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(slug, 3);
  const poppins = { fontFamily: "'Poppins', sans-serif" };

  if (!post) {
    return (
      <Box sx={{ bgcolor: "#0f1115", minHeight: "100vh", color: "#fff", pt: "180px" }}>
        <Helmet>
          <title>Post Not Found | Glocal LPO Blog</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <Container>
          <Typography sx={{ color: "#ff6b6b", mb: 2 }}>Post not found</Typography>
          <Typography component={Link} to="/blog" sx={{ color: DEFAULT_ACCENT, textDecoration: "underline" }}>
            Back to all articles
          </Typography>
        </Container>
      </Box>
    );
  }

  const title = decodeHtml(post.title || "Untitled");
  const authorName = post.author || "Glocal LPO";
  const publishDate = post.date ? formatDate(post.date) : "";
  const isoPublished = toISO8601Date(post.date);
  const isoModified = toISO8601Date(post.modified || post.date);

  const seoTitle = post.seoTitle || `${title} | Glocal LPO Blog`;
  const rawExcerpt = decodeHtml(post.excerpt || "");
  const seoDescription =
    post.seoDescription ||
    (rawExcerpt.length > 160 ? `${rawExcerpt.slice(0, 160).trim()}...` : rawExcerpt) ||
    "Expert legal process outsourcing and paralegal support insights by Glocal LPO.";

  const rawImage = getFeaturedImage(post);
  const featuredImageUrl = toAbsoluteUrl(rawImage);
  const canonicalUrl = `${SITE_URL}/blog/${slug}`;

  // Structured Data: BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description: seoDescription,
    image: [featuredImageUrl],
    datePublished: isoPublished,
    dateModified: isoModified,
    author: {
      "@type": "Organization",
      name: "Glocal LPO",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Glocal LPO",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo-b2b419b3.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    inLanguage: "en-US",
  };

  // Structured Data: BreadcrumbList Schema (Critical for Google indexing hierarchy)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Box sx={{ bgcolor: "#0f1115", minHeight: "100vh", color: "#fff", ...poppins }}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" type="application/rss+xml" title="Glocal LPO Blog RSS Feed" href={`${SITE_URL}/feed.xml`} />

        {/* OpenGraph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={featuredImageUrl} />
        <meta property="og:site_name" content="Glocal LPO" />
        <meta property="article:published_time" content={isoPublished} />
        <meta property="article:modified_time" content={isoModified} />
        {post.category && <meta property="article:section" content={post.category} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={featuredImageUrl} />

        {/* Google indexing directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">{JSON.stringify(blogPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Header Banner */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: "150px", md: "200px" },
          pb: { xs: 6, md: 8 },
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(90deg, rgba(7, 12, 30, 0.75) 0%, rgba(7, 12, 30, 0.5) 50%, rgba(7, 12, 30, 0.25) 100%), linear-gradient(180deg, rgba(7, 12, 30, 0.4) 0%, transparent 35%, rgba(7, 12, 30, 0.8) 100%), url(${rawImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "1000px" }}>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                ...(post.category ? [{ label: post.category }] : [{ label: 'Article' }]),
              ]}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", sm: "48px", md: "64px" },
                fontFamily: "Antonio, sans-serif",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                color: "#fff",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.65)",
                mb: 3,
              }}
            >
              {title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
              {publishDate && (
                <Typography sx={{ color: "#dec4a5", fontSize: "0.9rem", fontWeight: 600, ...poppins }}>
                  {publishDate}
                </Typography>
              )}
              {post.category && (
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.8rem",
                    bgcolor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    ...poppins,
                  }}
                >
                  {post.category}
                </Typography>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Article Content */}
      <Box sx={{ py: 10, bgcolor: "#0f1115" }}>
        <Container maxWidth="md">
          <Box
            component="article"
            sx={{
              "& p": {
                mb: 4,
                fontSize: "1.1rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.7)",
              },
              "& h2": {
                mt: 8,
                mb: 3,
                fontSize: { xs: "1.6rem", md: "2rem" },
                fontWeight: 700,
                color: "#fff",
              },
              "& h3, & h4, & h5, & h6": {
                color: "#fff",
                mt: 4,
                mb: 2,
              },
              "& a": {
                color: DEFAULT_ACCENT,
                textDecoration: "underline",
                "&:hover": { color: "#fff" },
              },
              "& ul, & ol": {
                color: "rgba(255,255,255,0.7)",
                pl: 4,
                mb: 4,
                "& li": {
                  mb: 1.5,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                },
              },
              "& img": {
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                my: 4,
              },
              "& figure": {
                mx: 0,
                my: 4,
              },
              "& hr": {
                borderColor: "rgba(255,255,255,0.1)",
                my: 6,
              },
            }}
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />

          <Box sx={{ mt: 10, pt: 6, borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
            <Typography
              component={Link}
              to="/blog"
              sx={{
                color: DEFAULT_ACCENT,
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9rem",
                letterSpacing: "1px",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              ← BACK TO ALL ARTICLES
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Internal Crawl & Discovery: Recent Articles Section */}
      {recentPosts.length > 0 && (
        <Box sx={{ py: 8, bgcolor: "#14171d", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <Container maxWidth="xl">
            <Box sx={{ mb: 5, textAlign: "center" }}>
              <Typography
                sx={{
                  color: DEFAULT_ACCENT,
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  mb: 1,
                  ...poppins,
                }}
              >
                EXPLORE MORE INSIGHTS /
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "28px", md: "38px" },
                  fontWeight: 800,
                  color: "#fff",
                  ...poppins,
                }}
              >
                Recent Articles
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {recentPosts.map((rPost) => {
                const rTitle = decodeHtml(rPost.title || "Untitled");
                const rImage = getFeaturedImage(rPost);
                const rDate = formatDate(rPost.date);
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={rPost.id || rPost.slug}>
                    <Card
                      component="article"
                      sx={{
                        bgcolor: "#1a1d24",
                        borderRadius: "0px",
                        border: "1px solid rgba(255,255,255,0.05)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                        <Link to={`/blog/${rPost.slug}`} style={{ textDecoration: "none" }}>
                          <CardMedia
                            component="img"
                            image={rImage}
                            alt={rTitle}
                            sx={{
                              filter: "brightness(0.85)",
                              mb: 2,
                              width: "100%",
                              height: "auto",
                              display: "block",
                              transition: "0.3s",
                              "&:hover": { filter: "brightness(1)" },
                            }}
                          />
                        </Link>

                        {rDate && (
                          <Typography
                            sx={{
                              color: "rgba(255,255,255,0.4)",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                              mb: 1.5,
                              ...poppins,
                            }}
                          >
                            {rDate}
                          </Typography>
                        )}

                        <Typography
                          variant="h4"
                          component="h3"
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            lineHeight: 1.4,
                            height: "2.8em",
                            mb: 2,
                            overflow: "hidden",
                            ...poppins,
                            "& a": {
                              color: "#fff",
                              textDecoration: "none",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              lineHeight: 1.4,
                              transition: "0.2s color",
                              "&:hover": { color: DEFAULT_ACCENT },
                            },
                          }}
                        >
                          <Link to={`/blog/${rPost.slug}`} title={rTitle}>
                            {rTitle}
                          </Link>
                        </Typography>

                        <Box sx={{ mt: "auto" }}>
                          <Typography
                            component={Link}
                            to={`/blog/${rPost.slug}`}
                            sx={{
                              color: DEFAULT_ACCENT,
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              textDecoration: "none",
                              display: "inline-block",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            READ ARTICLE →
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default BlogDetails;