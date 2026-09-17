import React from "react";
import { Container, Grid2 as Grid } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heading, Breadcrumb } from "@/components/common";
import {
  getAllPosts,
  decodeHtml,
  getExcerpt,
  getFeaturedImage,
  formatDate,
  toISO8601Date,
  toAbsoluteUrl,
  SITE_URL,
} from "@/utils/blogData";
import * as styles from "./BlogPage.module.scss";

const BlogPage = () => {
  const posts = getAllPosts();

  // CollectionPage / Blog Schema for Googlebot
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#collection`,
    name: "Glocal LPO Insights & Articles",
    description:
      "Expert insights on legal process outsourcing, paralegal services, litigation support, and back-office efficiency for U.S. law firms.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Glocal LPO",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo-b2b419b3.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: decodeHtml(post.title || "Untitled"),
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: toISO8601Date(post.date),
      dateModified: toISO8601Date(post.modified || post.date),
      image: toAbsoluteUrl(getFeaturedImage(post)),
      description:
        post.seoDescription || getExcerpt(post.excerpt || post.content || ""),
    })),
  };

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
    ],
  };

  return (
    <div className={styles.mainContainer}>
      <Helmet>
        <title>Our Blog | Glocal LPO - Legal Process Outsourcing Insights</title>
        <meta
          name="description"
          content="Expert insights on legal process outsourcing, paralegal services, litigation support, and back-office efficiency for U.S. law firms."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Glocal LPO Blog RSS Feed"
          href={`${SITE_URL}/feed.xml`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Blog | Glocal LPO - Legal Process Outsourcing Insights"
        />
        <meta
          property="og:description"
          content="Expert insights on legal process outsourcing, paralegal services, litigation support, and back-office efficiency for U.S. law firms."
        />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta
          property="og:image"
          content={`${SITE_URL}/assets/logo-b2b419b3.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Blog | Glocal LPO - Legal Process Outsourcing Insights"
        />
        <meta
          name="twitter:description"
          content="Expert insights on legal process outsourcing, paralegal services, litigation support, and back-office efficiency for U.S. law firms."
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(blogCollectionSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <section className={styles.masterHead}>
        <Container maxWidth="xl" className={styles.headingContainer}>
          <Grid
            container
            className={styles.commonContainer}
            flexDirection="column"
          >
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Our Blog' }]} />
            <Heading className={styles.lpoTitle} component="h1">
              Expert Insights For Global Success.
            </Heading>
          </Grid>
        </Container>
      </section>

      <section className={styles.blogListSection}>
        <Container maxWidth="xl">
          <div className={styles.commonContainer}>
            <Grid container spacing={4}>
              {posts.map((post) => {
                const title = decodeHtml(post.title || "Untitled");
                const excerpt =
                  post.seoDescription ||
                  getExcerpt(post.excerpt || post.content || "");
                const image = getFeaturedImage(post);
                const publishDate = formatDate(post.date);
                return (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    key={post.id || post.slug}
                  >
                    <article className={styles.blogCard}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className={styles.cardImageWrapper}
                      >
                        <img
                          src={image}
                          alt={title}
                          className={styles.cardImage}
                        />
                      </Link>
                      <div className={styles.cardContent}>
                        {publishDate && (
                          <div className={styles.publishDate}>{publishDate}</div>
                        )}
                        <h2 className={styles.postTitle}>
                          <Link to={`/blog/${post.slug}`} title={title}>
                            {title}
                          </Link>
                        </h2>
                        <p className={styles.postExcerpt}>{excerpt}</p>
                        <Link
                          to={`/blog/${post.slug}`}
                          className={styles.readMoreLink}
                        >
                          READ FULL ARTICLE →
                        </Link>
                      </div>
                    </article>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlogPage;