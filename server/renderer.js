import fs from 'fs';
import path from 'path';
import React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import CssBaseline from '@mui/material/CssBaseline';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { ChunkExtractor } from '@loadable/server';

import theme from '@/theme';
import App from '@/App';

import { DeviceProvider } from '@/context/DeviceContext';

import createEmotionCache from '../createEmotionCache';

export default async (req, res) => {
	const cache = createEmotionCache();
	const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

	const userAgent = req.headers['user-agent'] || '';

	const deviceInfo = getSelectorsByUserAgent(userAgent)

	const statsFile = path.resolve(process.cwd(), 'build/public/loadable-stats.json');

	if (process.env.NODE_ENV !== 'production') {
		try {
			delete eval('require').cache[statsFile];
		} catch (e) {
			// statsFile might not be loaded in require.cache yet
		}
	}

	if (!fs.existsSync(statsFile)) {
		return res.status(503).send(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>Compiling...</title>
					<meta http-equiv="refresh" content="2">
					<style>
						body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #070c1e; color: #fff; text-align: center; }
						.box { padding: 30px 40px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }
						h2 { margin: 0 0 10px; color: #dcb386; font-size: 24px; }
						p { margin: 0; color: #aaa; font-size: 15px; }
					</style>
				</head>
				<body>
					<div class="box">
						<h2>Compiling Assets...</h2>
						<p>Please wait a moment. The page will reload automatically.</p>
					</div>
				</body>
			</html>
		`);
	}

	const extractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });

	const helmetContext = {};

  const jsx = extractor.collectChunks(
		<DeviceProvider value={deviceInfo}>
			<CacheProvider value={cache}>
				<ThemeProvider theme={theme}>
					<StaticRouter location={req.url}>
						<CssBaseline />
						<App helmetContext={helmetContext} />
					</StaticRouter>
				</ThemeProvider>
			</CacheProvider>
		</DeviceProvider>
  );

	let content = "";
	content = renderToString(jsx);
	const { helmet } = helmetContext;

	// Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(content);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const html = `
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
		<meta name="google-site-verification" content="MfZYqA6YszOfmYIq5RiiniJOur7YksOt05bEORUhX_c" />
		<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
(new Date()).getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6VW4CWD');</script>
<!-- End Google Tag Manager -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17995078646"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17995078646');
</script>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
				<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link rel="preconnect" href="https://cdnjs.cloudflare.com" />
				<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
				<link rel="icon" type="image/png" href="/assets/favicon.png">
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<link rel="alternate" type="application/rss+xml" title="Glocal LPO Blog RSS Feed" href="https://www.glocallpo.com/feed.xml">
				<link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.glocallpo.com/sitemap.xml">
				${helmet.title.toString() || '<title>Glocal LPO</title>'}
				${helmet.meta.toString()}
				${helmet.link.toString()}
				${helmet.script.toString()}
				${extractor.getLinkTags()}
				${extractor.getStyleTags()}
				${emotionCss}
      </head>
      <body>
	  <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6VW4CWD"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        <div id="root">${content}</div>
				<div id="menu-root"></div>
				<script>
          window.__DEVICE_INFO__ = ${JSON.stringify(deviceInfo)};
        </script>
				${extractor.getScriptTags()}
      </body>
    </html>
  `;

  res.status(200).send(html);
};
