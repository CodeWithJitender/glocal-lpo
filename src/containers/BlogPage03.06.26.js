import React from "react";
import { Container, Grid2 as Grid, Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import blogHeroImg from "@/assets/images/blog-hero-cinematic.jpg"; 

const WP_BASE = "https://beige-starling-331798.hostingersite.com";
const DEFAULT_ACCENT = "#f5c074";
const PER_PAGE = 9;

const decodeHtml = (input = "") => {
  if (typeof window === "undefined") return input.replace(/<[^>]+>/g, "");
  const txt = document.createElement("textarea");
  txt.innerHTML = input;
  return txt.value.replace(/<[^>]+>/g, "");
};

const getExcerpt = (html = "") => {
  const text = decodeHtml(html).trim();
  if (!text) return "Read the full article for details.";
  return text.length > 140 ? `${text.slice(0, 140)}...` : text;
};

const getFeaturedImage = (post) =>
  post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || blogHeroImg;

const BlogPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(null);
  const poppins = { fontFamily: "'Poppins', sans-serif" };
  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `${WP_BASE}/wp-json/wp/v2/posts?_embed&per_page=${PER_PAGE}&page=${page}`
        );
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();
        setPosts(data);
        const headerTotalPages = res.headers?.get?.("X-WP-TotalPages");
        if (headerTotalPages) {
          const parsed = parseInt(headerTotalPages, 10);
          if (!Number.isNaN(parsed)) setTotalPages(parsed);
        } else {
          setTotalPages(data.length < PER_PAGE ? page : null);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [page]);

  return (
    <Box sx={{ bgcolor: "#0f1115", minHeight: "100vh", color: "#fff", ...poppins }}>
      <Helmet>
        <title>Our Blog | Glocal LPO</title>
      </Helmet>

      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: "140px", md: "280px" },
          pb: { xs: 8, md: 12 },
          minHeight: "550px",
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.1) 100%), url(${blogHeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "800px", textAlign: "left" }}>
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
              INSIGHTS & ARTICLES /
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "48px", md: "84px" },
                fontWeight: 800,
                lineHeight: 1,
                color: "#fff",
                mb: 3,
                ...poppins,
              }}
            >
              Expert Insights <br />
              For Global <br />
              Success.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                color: "rgba(255,255,255,0.7)",
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: "600px",
                ...poppins,
              }}
            >
              Strategies and updates on business support, <br />
              legal operations, and back-office efficiency.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 12, bgcolor: "#0f1115" }}>
        <Container maxWidth="xl">
          {loading && (
            <Typography sx={{ color: "rgba(255,255,255,0.7)", textAlign: "center" }}>
              Loading blog posts...
            </Typography>
          )}
          {error && (
            <Typography sx={{ color: "#ff6b6b", textAlign: "center" }}>
              {error}
            </Typography>
          )}
          {!loading && !error && posts.length === 0 && (
            <Typography sx={{ color: "rgba(255,255,255,0.7)", textAlign: "center" }}>
              No blog posts found.
            </Typography>
          )}

          {!loading && !error && posts.length > 0 && (
            <>
              <Grid container spacing={4}>
                {posts.map((post) => {
                  const title = decodeHtml(post?.title?.rendered || "Untitled");
                  const excerpt = getExcerpt(post?.excerpt?.rendered || "");
                  const category = post?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Article";
                  const image = getFeaturedImage(post);
                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                      <Card
                        sx={{
                          bgcolor: "#1a1d24",
                          borderRadius: "0px",
                          border: "1px solid rgba(255,255,255,0.05)",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardContent sx={{ p: 4, flexGrow: 1 }}>
                          <Typography
                            sx={{
                              color: DEFAULT_ACCENT,
                              fontWeight: 700,
                              fontSize: "0.75rem",
                              mb: 3,
                              pb: 1,
                              textTransform: "uppercase",
                              letterSpacing: "1.5px",
                              borderBottom: `2px solid ${DEFAULT_ACCENT}`,
                              display: "inline-block",
                              ...poppins,
                            }}
                          >
                            {category}
                          </Typography>

                          <CardMedia
                            component="img"
                            // height="200"
                            image={image}
                            alt={title}
                            sx={{ filter: "brightness(0.8)", mb: 3 }}
                          />

                          <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", mb: 2, height: "64px", overflow: "hidden", display: "-webkit-box",
    WebkitLineClamp: 2, WebkitBoxOrient: "vertical", ...poppins }}>
                            {title}
                          </Typography>

                          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", mb: 2, height: "64px", overflow: "hidden", display: "-webkit-box",
    WebkitLineClamp: 3, WebkitBoxOrient: "vertical", ...poppins }}>
                            {excerpt}
                          </Typography>

                          <Typography
                            component={Link}
                            to={`/blog/${post.slug}`}
                            sx={{
                              mt: "auto",
                              color: "#fff",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              textDecoration: "underline",
                              display: "inline-block",
                              transition: "0.3s",
                              "&:hover": { color: DEFAULT_ACCENT },
                            }}
                          >
                            READ FULL ARTICLE
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 6 }}>
                <Button
                  variant="outlined"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  sx={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
                >
                  Previous
                </Button>

                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
                  Page {page}
                  {totalPages ? ` of ${totalPages}` : ""}
                </Typography>

                <Button
                  variant="outlined"
                  onClick={() => setPage((p) => p + 1)}
                  disabled={totalPages ? page >= totalPages : false}
                  sx={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}
                >
                  Next
                </Button>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default BlogPage;