import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import blogHeroImg from "@/assets/images/blog-hero-cinematic.jpg"; 

const WP_BASE = "https://beige-starling-331798.hostingersite.com";
const DEFAULT_ACCENT = "#f5c074";

const decodeHtml = (input = "") => {
  if (typeof window === "undefined") return input.replace(/<[^>]+>/g, "");
  const txt = document.createElement("textarea");
  txt.innerHTML = input;
  return txt.value.replace(/<[^>]+>/g, "");
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getFeaturedImage = (post) =>
  post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || blogHeroImg;

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const poppins = { fontFamily: "'Poppins', sans-serif" };
  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${WP_BASE}/wp-json/wp/v2/posts?slug=${slug}&_embed=1`);
        if (!res.ok) throw new Error("Failed to load post");
        const data = await res.json();
        if (!data.length) throw new Error("Post not found");
        setPost(data[0]);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);
  if (loading) {
    return (
      <Box sx={{ bgcolor: "#0f1115", minHeight: "100vh", color: "#fff", pt: "180px" }}>
        <Container>
          <Typography>Loading article...</Typography>
        </Container>
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box sx={{ bgcolor: "#0f1115", minHeight: "100vh", color: "#fff", pt: "180px" }}>
        <Container>
          <Typography sx={{ color: "#ff6b6b", mb: 2 }}>{error || "Post not found"}</Typography>
          <Typography component={Link} to="/blog" sx={{ color: DEFAULT_ACCENT, textDecoration: "underline" }}>
            Back to all articles
          </Typography>
        </Container>
      </Box>
    );
  }

  const title = decodeHtml(post?.title?.rendered || "Untitled");
  const category = post?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Article";
  const authorName = post?._embedded?.author?.[0]?.name || "Glocal LPO Team";
  const publishDate = post?.date ? formatDate(post.date) : "";
  const seoTitle = post?.yoast_head_json?.title || `${title} | Glocal LPO Blog`;
  const seoDescription = post?.yoast_head_json?.description || decodeHtml(post?.excerpt?.rendered || "");
  const featuredImage = getFeaturedImage(post);

  return (
    <Box sx={{ bgcolor: "#0f1115", minHeight: "100vh", color: "#fff", ...poppins }}>
      <Helmet>
        <title>{seoTitle}</title>
        {seoDescription ? <meta name="description" content={seoDescription} /> : null}
      </Helmet>

      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: "140px", md: "280px" },
          pb: { xs: 8, md: 10 },
          minHeight: "450px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.2) 100%), url(${featuredImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "900px" }}>
            <Typography
              sx={{
                color: DEFAULT_ACCENT,
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                mb: 2,
                ...poppins,
              }}
            >
              {category} /
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", md: "64px" },
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#fff",
                mb: 4,
                ...poppins,
              }}
            >
              {title}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ bgcolor: DEFAULT_ACCENT, mr: 2, fontWeight: 700, display:"none" }}>
                {(authorName || "G").charAt(0).toUpperCase()}
              </Avatar>
              <Box>
                <Typography sx={{ display:"none", fontWeight: 600, fontSize: "1rem", ...poppins }}>{authorName}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", ...poppins }}>
                  {publishDate}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, bgcolor: "#0f1115" }}>
        <Container maxWidth="md">     

          <Box
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
                fontSize: "2rem",
                fontWeight: 700,
                color: "#fff",
              },
              "& h3, & h4, & h5, & h6": {
                color: "#fff",
              },
              "& a": {
                color: DEFAULT_ACCENT,
              },
              "& img": {
                maxWidth: "100%",
                height: "auto",
              },
            }}
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered || "" }}
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
    </Box>
  );
};

export default BlogDetails;