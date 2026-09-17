import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

import logo from '@/assets/images/logo.png';
import hippaLogo from '@/assets/images/hipaa-compliant.png';
import iso27001Logo from '@/assets/images/iso-27001-logo.png';
import iso9001Logo from '@/assets/images/iso-9001-logo.png';

import { Instagram, LinkedIn } from '@/components/Icons';

import { useDevice } from '@/context/DeviceContext';

import { routes } from '@/utils/routesPath';

import Animate from './Animate';
import NaturalLanguageForm from './NaturalLanguageForm';

import * as styles from './Footer.module.scss';
import * as stylesContact from "../../containers/ContactUs.module.scss";
import { ContactForm } from '@/components/common';

const Footer = () => {
	const { isMobile } = useDevice();

	React.useEffect(() => {
		window._linkedin_partner_id = "9816524";
		window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
		window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

		(function(l) {
			if (!l) {
				window.lintrk = function(a,b) { window.lintrk.q.push([a,b]) };
				window.lintrk.q=[];
			}
			var s = document.getElementsByTagName("script")[0];
			var b = document.createElement("script");
			b.type = "text/javascript";
			b.async = true;
			b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
			if (s && s.parentNode) {
				s.parentNode.insertBefore(b, s);
			} else {
				document.head.appendChild(b);
			}
		})(window.lintrk);
	}, []);

	return (
		<>
			<section className={styles.letsWinTogetherSection}>
				<Grid container size={12} justifyContent="center">
					<Grid
						container
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 9,
						}}
						alignItems="center"
					>
						<Grid
							size={{
								xs: 12,
								sm: 12,
								md: 12,
								lg: 3,
							}}
						>
							<Animate.FadeUp
								direction="down"
								className={styles.infoSmallSection}
							>
								Let's get our A game to the court.
							</Animate.FadeUp>
							<Animate.FadeUp direction="up" className={styles.infoBigSection}>
								{!isMobile && (
									<div className={styles.infoHeading1}>
										Your Victory,
									</div>
								)}
								<div className={styles.infoHeading2}>
									{isMobile && "Your Victory,  "}Our Expertise.
								</div>
							</Animate.FadeUp>
						</Grid>
						<NaturalLanguageForm />
					</Grid>
				</Grid>
			</section>
			<section className={styles.complianceLogo}>
				<Grid size={12} container justifyContent="center">
					<Grid
						size={{
							md: 12,
							lg: 6,
						}}
						className={styles.complianceLogoContainer}
					>
						<img src={iso9001Logo} alt="" className={styles.logoImage} />
						<img src={iso27001Logo} alt="" className={styles.logoImage} />
						<img src={hippaLogo} alt="" className={styles.logoImage} />
					</Grid>
				</Grid>
			</section>
			<section className={styles.footer}>
				<Grid
					size={{
						xs: 12,
						sm: 12,
						md: 12,
						lg: 8,
					}}
					container
					justifyContent="center"
					className={styles.footerSection}
				>
					<Grid size={12} className={styles.logoContainer}>
						<Link to="/">
							<img src={logo} className={styles.logo} alt="Glocal LPO" />
						</Link>
					</Grid>
					<Grid
						size={12}
						className={styles.socialMedia}
						justifyContent="center"
						container
					>
						<a
							href="https://www.linkedin.com/company/glocal-lpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
							aria-label="LinkedIn"
						>
							<LinkedIn />
						</a>
						<a
							href="https://www.instagram.com/glocal.lpo/"
							rel="noopener noreferrer nofollow"
							className={styles.socialIcons}
							target="_blank"
							aria-label="Instagram"
						>
							<Instagram />
						</a>
					</Grid>
					<Grid size={12}>
						<div className={styles.navBar}>
							<Link
								to={routes.home.href}
								data-replace={routes.home.label}
								className={styles.footerLink}
							>
								<span>{routes.home.label}</span>
							</Link>
							<Link
								to={routes.about.href}
								data-replace={routes.about.label}
								className={styles.footerLink}
							>
								<span>{routes.about.label}</span>
							</Link>
							<Link
								to={routes.services.href}
								data-replace={routes.services.label}
								className={styles.footerLink}
							>
								<span>{routes.services.label}</span>
							</Link>
							<Link
								to={routes['contact-us'].href}
								data-replace={routes['contact-us'].label}
								className={styles.footerLink}
							>
								<span>{routes['contact-us'].label}</span>
							</Link>
							<Link
								to={routes['blog'].href}
								data-replace={routes['blog'].label}
								className={styles.footerLink}
							>
								<span>{routes['blog'].label}</span>
							</Link>
							{/* <Link
								to={routes.faq.href}
								data-replace={routes.faq.label}
								className={styles.footerLink}
							>
								<span>{routes.faq.label}</span>
							</Link> */}
						</div>
					</Grid>
				</Grid>
				<section className={stylesContact.formSection} >
					<ContactForm section="contact" />
				</section>

				<Grid
					size={12}
					container
					className={`${styles.copyrightContainer} ${styles.extraPaddingContainer}`}
					alignItems="center"
					justifyContent="center"
					
				>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
						}}
						className={styles.copyrightText}
					>
						<span className={styles.addressHeading}>US Headquarters:</span>
						<a
							href="https://g.co/kgs/2Gbqrfo"
							rel="noopener noreferrer nofollow"
							target="_blank"
							className={styles.address}
						>
							3422 Old Capitol Trail, Wilmington DE 19808, USA
						</a>
					</Grid>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
						}}
						className={styles.copyrightText}
					>
						<span className={styles.addressHeading}>Office Operations:</span>
						<a
							href="https://maps.app.goo.gl/fcKELWVYECAgTAdRA"
							rel="noopener noreferrer nofollow"
							target="_blank"
							className={styles.address}
						>
							B-73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India
						</a>
					</Grid>
					<Grid
						size={{
							xs: 12,
							sm: 12,
							md: 12,
							lg: 4,
						}}
						className={styles.copyrightText}
					>
						<a href="tel:+16504072112" className={styles.addressHeading}>
							{' '}
							+1 (650) 407 2112
						</a>
						<a href="mailto:info@glocallpo.com">info@glocallpo.com</a>
					</Grid>
				</Grid>
				<Grid
					size={12}
					className={styles.copyrightContainer}
					alignItems="center"
				>
					&copy; 2025 Glocal LPO. All Rights Reserved.
				</Grid>
				<noscript>
					<img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=9816524&fmt=gif" />
				</noscript>
			</section>
		</>
	);
};

export default Footer;
