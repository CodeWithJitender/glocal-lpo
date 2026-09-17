/* global __webpack_public_path__ */
if (typeof window !== 'undefined') {
	if (window.location.hostname.includes('github.io')) {
		// eslint-disable-next-line no-undef
		__webpack_public_path__ = '/lpo-new/assets/';
	} else {
		// eslint-disable-next-line no-undef
		__webpack_public_path__ = '/assets/';
	}
}

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { loadableReady } from '@loadable/component';

import createEmotionCache from './createEmotionCache';

import { DeviceProvider } from '@/context/DeviceContext';

import theme from '@/theme';

import App from '@/App';

const cache = createEmotionCache();

const deviceInfo = (window).__DEVICE_INFO__;

loadableReady(() => {
	hydrateRoot(
		document.getElementById('root'),
		<DeviceProvider value={deviceInfo}>
			<CacheProvider value={cache}>
				<ThemeProvider theme={theme}>
					<BrowserRouter
						basename={window.location.hostname.includes('github.io') ? '/lpo-new' : '/'}
						future={{
							v7_startTransition: true,
							v7_relativeSplatPath: true
						}}
					>
						<CssBaseline />
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</CacheProvider>
		</DeviceProvider>
	);
});

