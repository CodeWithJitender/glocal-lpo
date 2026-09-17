import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import {
	Grid2 as Grid,
	AppBar,
	Popover
} from '@mui/material';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLocation, useNavigate } from "react-router-dom";

import { useDevice } from '@/context/DeviceContext';

import { routes } from "@/utils/routesPath";

import { PhoneIcon } from "@/components/Icons";

import logo from "@/assets/images/logo.png";

import MegaMenu from "./MegaMenu";
import Menu from "./Menu";
import TrustMarquee from "./TrustMarquee";

import * as styles from "./Header.module.scss";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
	const { isMobile } = useDevice();

	const { pathname } = useLocation();

	const navigate = useNavigate();

	const navBar = useRef(null);
	const anchorEl = useRef(null);
	const scrollTriggerRef = useRef(null);

	const [menuOpen, setMenuOpen] = useState(false);
	const hoverTimeout = useRef(null);

	useEffect(() => {
		if (isMobile) {
			// Ensure navbar is visible and resets on mobile, bypassing ScrollTrigger
			gsap.set(navBar.current, { yPercent: 0 });
			return;
		}

		const nav = navBar.current;

		// Create animation to hide the nav
		const hideAnim = gsap.fromTo(
			nav,
			{ yPercent: 0 },
			{ yPercent: -100, duration: 0.40, paused: true }
		);

		// Create ScrollTrigger to toggle animation based on scroll direction
		scrollTriggerRef.current = ScrollTrigger.create({
			start: "top top",
			end: "max",
			onUpdate: (self) => {
				if (self.direction === -1 || self.scroll() <= 0) {
					// scrolling up or at the very top
					hideAnim.reverse();
				} else if (self.direction === 1 && self.scroll() > 100) {
					// scrolling down past a threshold
					hideAnim.play();
				}
			}
		});

		return () => {
			scrollTriggerRef.current?.kill();
		};
	}, [isMobile]);

	// Reset scroll and show navbar on route change
	useEffect(() => {
		// Make sure nav is visible on route change
		gsap.to(navBar.current, {
			yPercent: 0,
			duration: 0.40
		});

		// Refresh ScrollTrigger in case layout changes
		ScrollTrigger.refresh();
	}, [pathname]);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	const handleMenuOpen = () => {
		if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		hoverTimeout.current = setTimeout(() => {
			setMenuOpen(false);
		}, 150);
	};

	const handleLogoClick = () => {
		navigate("/");
	};

	return (
		<AppBar position="fixed" ref={navBar} className={styles.appBar}>
			<TrustMarquee />
			<div className={styles.mainNavContent}>
				<Grid container size={12} alignItems="center">
					<Grid
						size={{
							xs: 6,
							sm: 6,
							md: 2,
							lg: 2
						}}
						className={styles.logoContainer}
					>
						<img
							src={logo}
							className={styles.logo}
							alt="Glocal LPO"
							onClick={handleLogoClick}
						/>
					</Grid>
				{
					isMobile ? (
						<Grid
							size={{
								xs: 6,
								sm: 6,
								md: 0,
								lg: 0
							}}
							justifyContent="flex-end"
							container
							className={styles.menuContainer}
						>
							<Menu />
						</Grid>
					) : (
						<>
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 8,
									lg: 8
								}}
							>
								<div className={styles.navBar}>
									<Link
										to={routes.home.href}
										data-replace={routes.home.label}
										className={styles.headerLink}
									>
										<span>{routes.home.label}</span>
									</Link>
									<Link
										to={routes.about.href}
										data-replace={routes.about.label}
										className={styles.headerLink}
									>
										<span>{routes.about.label}</span>
									</Link>
									<Link
										to={routes.services.href}
										data-replace={routes.services.label}
										className={styles.headerLink}
										onMouseEnter={handleMenuOpen}
										onMouseLeave={handleMenuClose}
										ref={anchorEl}
									>
										<span>{routes.services.label}</span>
									</Link>
									<Link
										to={routes["contact-us"].href}
										data-replace={routes["contact-us"].label}
										className={styles.headerLink}
									>
										<span>{routes["contact-us"].label}</span>
									</Link>
									<Link
										to={routes['blog'].href}
										data-replace={routes['blog'].label}
										className={styles.headerLink}
									>
								<span>{routes['blog'].label}</span>
							</Link>
									{/* <Link
										to={routes.faq.href}
										data-replace={routes.faq.label}
										className={styles.headerLink}
									>
										<span>{routes.faq.label}</span>
									</Link> */}
								</div>
							</Grid>
							<Grid
								size={{
									xs: 0,
									sm: 0,
									md: 2,
									lg: 2
								}}
							>
								<a href="tel:+1 650 407 2112" className={styles.phoneButton}>
									<PhoneIcon />
									+1 (650) 407 2112
								</a>
							</Grid>
							<Popover
								id="simple-menu"
								anchorEl={anchorEl.current}
								open={menuOpen}
								onClose={handleMenuClose}
								disableScrollLock={true}
								disableRestoreFocus={true}
								sx={{ pointerEvents: 'none' }}
								PaperProps={{
									sx: { pointerEvents: 'auto' },
									onMouseEnter: handleMenuOpen,
									onMouseLeave: handleMenuClose,
								}}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "center",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "center",
								}}
								classes={{
									paper: styles.menuPopover,
									root: styles.menuRoot
								}}
							>
								<MegaMenu />
							</Popover>
						</>
					)
				}
			</Grid>
		</div>
	</AppBar>
);
};

export default Header;
