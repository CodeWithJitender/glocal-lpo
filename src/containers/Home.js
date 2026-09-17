import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import layerLady from '@/assets/images/layer-lady.png';

import stampIcon from '@/assets/images/layer-stamp.png';

import iconPractice from '@/assets/icons/icon-practice.png';
import iconTarget from '@/assets/icons/icon-target.png';
import iconClock from '@/assets/icons/icon-clock.png';
import iconSave from '@/assets/icons/icon-save.png';

import arrowBig from '@/assets/icons/arrow-big.png';

import precisionSectionBg from '@/assets/images/supreme-court-building.png';
import precisionSectionBgMobile from '@/assets/images/supreme-court-building-mobile.jpg';

import { Heading, LinkButton, QualityBox, Animate } from '@/components/common';

import ServiceBoxContainer from '@/components/Home/ServiceBoxContainer';
import AreaOfExpertise from '@/components/Home/AreaOfExpertise';
import FlexibleFirePower from '@/components/Home/FlexibleFirepower';
import ServiceInfo from '@/components/Home/ServiceInfo';
import UspSectionCards from '@/components/Home/UspSectionCards';
import Clients from '@/components/Home/Clients';
import SalesTalentPopup from '@/components/Home/SalesTalentPopup';
import HeroTopBanner from '@/components/Home/HeroTopBanner';

import { useDevice } from '@/context/DeviceContext';

import { routes } from '@/utils/routesPath';

import * as styles from './Home.module.scss';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	const { isMobile } = useDevice();

	return (
		<>
			<Helmet>
				<title>Top Legal Process Outsourcing Company | Glocal LPO</title>
				<meta
					name="description"
					content="Searching for reliable legal process outsourcing companies in the US? Glocal LPO provides scalable LPO services, including research and litigation support."
				/>
				<meta
					name="keywords"
					content="legal process outsourcing companies, paralegal services provider, legal outsourcing firms, lpo service"
				/>
				<link rel="canonical" href="https://www.glocallpo.com/" />
			</Helmet>
			<section className={styles.masterHead}>
				<Container maxWidth="xl" className={styles.topBannerContainer}>
					<HeroTopBanner />
				</Container>
				<Container maxWidth="xl" className={styles.mainHeroContainer}>
					<Grid container spacing={2} className={styles.commonContainer}>
						<Grid container size={{ md: 12, lg: 8, xl: 8 }} alignItems="flex-start">
							<Grid size={{ sm: 12, md: 8, xl: 8 }}>
								<Heading variant="secondary" direction="down">
									Your Trusted Legal Ally
								</Heading>
								<Heading className={styles.lpoTitleBig} direction="up" component="h1">
									Fueling Your Legal <br /> Prowess with <br /> Expert Legal{' '}
									<br /> Process <br /> Outsourcing
								</Heading>
							</Grid>
							<Grid
								size={{ sm: 12, md: 4, xl: 4 }}
								className={styles.lpoSubtitle}
							>
								<Animate.FadeUp>
									Every motion. <br />
									Every clause. <br />
									Every precedent — watertight, <br />
									because we wrote it.
								</Animate.FadeUp>
							</Grid>
						</Grid>
						<Grid
							size={{ md: 12, lg: 4, xl: 4 }}
							className={styles.handleDetail}
						>
							<img src={layerLady} className={styles.ladyImage} alt="" />
							<div className={styles.detailCard}>
								<Animate.FadeUp direction="down">
									<h2 className={styles.detailHeading}>
										We Handle <br />
										the Details. <br />
										<span>
											You Win <br />
											the Cases.
										</span>
									</h2>
								</Animate.FadeUp>
								<Animate.FadeUp direction="up" className={styles.detail}>
									We are a premier paralegal support powerhouse, built to
									amplify efficiency, precision, and strategy for attorneys and
									law firms.
									<br />
									<br />
									From high-stakes litigation to meticulous contract drafting,
									we handle the complex, time-consuming documentation so that
									attorneys can focus on strategy, advocacy, and winning cases.
								</Animate.FadeUp>
								<Animate.FadeUp
									direction="up"
									className={styles.detailLink}
									element={Link}
									elementProps={{
										to: routes.about.href,
									}}
								>
									there's more to us
									<img src={arrowBig} alt="" className={styles.arrowIcon} />
								</Animate.FadeUp>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceSection}>
				<div className={styles.sectionBackground}>
					{/* <img
						src={isMobile ? precisionSectionBgMobile : precisionSectionBg}
						alt=""
					/> */}
				</div>
				<Container maxWidth="xl" className={styles.precisionSection}>
					<Grid
						container
						columnSpacing={12}
						alignItems="flex-start"
						className={styles.commonContainer}
					>
						<Grid
							container
							size={{
								xs: 12,
								sm: 12,
								md: 12,
								lg: 6,
							}}
							spacing={0}
							alignSelf="flex-start"
						>
							<Heading variant="secondary" direction="down">
								Built for Modern Legal Law Firms
							</Heading>
							<Heading direction="up">
								Built for Modern Legal Law Firms
								{/* The Right Hands Behind Every Legal Move. */}
							</Heading>
							<Animate.FadeUp direction="up" className={styles.serviceText}>
								We are not just paper pushers—we are the backbone of every
								well-prepared case, ensuring watertight filings, seamless
								compliance, and ironclad legal groundwork.
							</Animate.FadeUp>
							{!isMobile && (
								<div className={styles.serviceLink}>
									<LinkButton to={routes['contact-us'].href} delay="100ms">
										SCHEDULE A STRATEGY CALL WITH US
									</LinkButton>
								</div>
							)}
						</Grid>
						<Grid
							size={{
								xs: 12,
								sm: 12,
								md: 12,
								lg: 6,
							}}
							spacing={0}
							container
						>
							<QualityBox
								icon={iconSave}
								heading="Foolproof Documentation"
								text="Every document is drafted, reviewed, and refined to perfection."
								direction="right"
								delay="100ms"
							/>
							<QualityBox
								icon={iconClock}
								heading="Time-Saving Efficiency"
								text="We handle the heavy lifting, so attorneys can focus on strategy and advocacy."
								direction="left"
								delay="200ms"
							/>
							<QualityBox
								icon={iconTarget}
								heading="Unmatched Accuracy"
								text="No loopholes. No errors. Just seamless legal support."
								direction="right"
								delay="300ms"
							/>
							<QualityBox
								icon={iconPractice}
								heading="Versatile Practices"
								text="From litigation to compliance, we cover every legal need with precision."
								direction="left"
								delay="400ms"
							/>
						</Grid>
					</Grid>

					{isMobile && (
						<div className={styles.serviceLink}>
							<LinkButton to={routes['contact-us'].href} delay="100ms">
								SCHEDULE A STRATEGY CALL WITH US
							</LinkButton>
						</div>
					)}
				</Container>
			</section>
			<section className={styles.legalSupportSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={{ xs: 12, sm: 8 }} className={styles.legalSupportItem}>
						<div className={styles.legalSupportHeading}>
							<Heading className={styles.headingSection1} direction="down">
								{/* Legal Support That's */}
								Expert Legal Drafting with
							</Heading>
							<Heading direction="up">
								{/* Sharp, Seamless, and Smart. */}AI Powered Legal Research
							</Heading>
						</div>
						<Animate.FadeUp direction="up" className={styles.legalSupportText}>
							Whether it's a high-stakes litigation or a watertight contract, we
							handle it like a grandmaster plays chess—three moves ahead, with a
							checkmate always in sight.
						</Animate.FadeUp>
						<Animate.ScaleIn className={styles.legalSupportIcon}>
							<img src={stampIcon} className={styles.stampIcon} alt="" />
						</Animate.ScaleIn>
						<Animate.FadeUp direction="up" className={styles.legalSupportLink}>
							Here's what we do best!
						</Animate.FadeUp>
					</Grid>
				</Grid>
			</section>
			<ServiceInfo />
			<AreaOfExpertise />
			<section className={styles.serviceWeOfferContainer}>
				<Grid container>
					<ServiceBoxContainer />
				</Grid>
			</section>
			<section className={styles.uspSection}>
				<Grid container size={12} justifyContent="center">
					<Grid size={{ xs: 11, md: 8 }}>
						<div className={styles.useSectionHeading}>
							<Heading variant="secondary" direction="down">
								Tailored Solutions.
							</Heading>
							<Heading direction="up">
								Global Standards.
							</Heading>
						</div>
						<Animate.FadeUp direction="up" className={styles.uspSectionText}>
							Elite expertise, seamless management, and watertight
							security—built to deliver, every time.
						</Animate.FadeUp>
					</Grid>
				</Grid>
				<UspSectionCards />
			</section>
			<Clients />
			<FlexibleFirePower />
			{/* <SalesTalentPopup /> */}
		</>
	);
};

export default Home;
