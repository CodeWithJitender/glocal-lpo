import React, { useState } from 'react';
import { Container, Grid2 as Grid } from '@mui/material';

import {
	Heading,
	LinkButton,
	QualityBox,
	Animate,
	Modal,
	Breadcrumb,
} from '@/components/common';

import AboutKunal from '@/components/About/AboutKunal';
import AboutDeepti from '@/components/About/AboutDeepti';
import AboutSrishti from '@/components/About/AboutSrishti';

import { useDevice } from '@/context/DeviceContext';

import { routes } from '@/utils/routesPath';

import eliteExpert from '@/assets/icons/elite-expert.png';
import dataSecurity from '@/assets/icons/data-security.png';
import techDrivenEfficency from '@/assets/icons/tech-driven-efficency.png';
import costAdvantage from '@/assets/icons/cost-advantage.png';
import linkedIcon from '@/assets/icons/about-linkedin-icon.png';

import kunalProfilePic from '@/assets/images/kunal-profile-pic.jpg';
import srishtiProfilePic from '@/assets/images/srishti-profile-pic.jpg';
import deeptiProfilePic from '@/assets/images/deepti-profile-pic.jpg';
import legalStamp from '@/assets/images/about-legal-stamp.png';

import * as styles from './About.module.scss';
import { Helmet } from 'react-helmet-async';

const About = () => {
	const { isMobile } = useDevice();

	const [toggleModal, setToggleModal] = useState(false);
	const [modalInfo, setModalInfo] = useState('');

	const handleModalOpen = (name = '') => {
		setToggleModal(!toggleModal);
		setModalInfo(name);
	};

	const renderModelContent = () => {
		if (modalInfo === 'kunal') {
			return <AboutKunal />;
		}

		if (modalInfo === 'deepti') {
			return <AboutDeepti />;
		}

		return <AboutSrishti />;
	};

	return (
		<div className={styles.mainSection}>
			<Helmet>
				<title>About Us | Glocal LPO</title>
				<meta name="description" content="Learn about Glocal LPO — a premier legal process outsourcing company helping law firms with paralegal support, legal research, and document drafting." />
				<meta name="keywords" content="about Glocal LPO, legal process outsourcing company, LPO services" />
			</Helmet>
			<section className={styles.masterHead}>
				<Container maxWidth="xl" className={styles.headingContainer}>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
						<Heading className={styles.lpoTitle} component="h1">
							Offshore Paralegal Support for Top Law Firms
						</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
				<Grid container justifyContent={{ xs: 'left', md: 'flex-end' }}>
					<Grid size={{ md: 12, lg: 5 }}>
						<Animate.FadeUp direction="up" className={styles.aboutHeading}>
							At Glocal LPO, we redefine legal process outsourcing—bringing
							efficiency, accuracy, and expertise to the forefront.
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							We deliver end-to-end litigation and managed services, covering
							document review, contract management, legal research, and
							compliance solutions with absolute precision. We don't just
							support your legal operations; we optimize, streamline, and
							elevate them.
						</Animate.FadeUp>

						<div className={styles.btnGroup}>
							<LinkButton to={routes['contact-us'].href} delay="200ms">
								SCHEDULE A STRATEGY CALL WITH US
							</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.newEraSection}>
				<div className={styles.aboutStamp}>
					<img src={legalStamp} alt="" />
				</div>
				<Container maxWidth="xl">
					<Grid container columnSpacing={10} alignItems="flex-start">
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
							flexDirection="column"
						>
							<Heading variant="secondary">
								{/* The New Era of Legal Outsourcing */}
								Strategic Litigation Support
							</Heading>
							<Heading>
								{/* Built for Compliance & Scale. */}
								Built to Scale with Compliance
							</Heading>
							<div className={styles.newEraText}>
								In a world where speed wins cases, we move faster.
								<br />
								<br />
								The legal landscape is evolving across the USA, UK, and Canada.
								With rising data privacy concerns, regulatory scrutiny, and
								complex compliance mandates, traditional legal processes are no
								longer enough. Businesses today need smarter, scalable legal
								solutions.
							</div>
							<div className={styles.weAreStepIn}>That's where we step in.</div>
							<LinkButton to={routes['contact-us'].href} delay="200ms">
								SCHEDULE A STRATEGY CALL WITH US
							</LinkButton>
							{isMobile && (
								<>
									<br />
									<br />
								</>
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
								icon={eliteExpert}
								heading="Elite Expertise, Global Reach"
								text="Teams trained by top US, UK, and Canadian law firms, delivering precision-driven legal support."
								direction="right"
								delay="100ms"
							/>
							<QualityBox
								icon={dataSecurity}
								heading="Ironclad Data Security"
								text="End-to-end encryption, strict compliance protocols, and watertight confidentiality—your data stays protected, always."
								direction="left"
								delay="200ms"
							/>
							<QualityBox
								icon={techDrivenEfficency}
								heading="Tech-Driven Efficiency"
								text="We leverage cutting-edge legal tech, AI-powered research, and secure cloud solutions for seamless execution."
								direction="right"
								delay="300ms"
							/>
							<QualityBox
								icon={costAdvantage}
								heading="Versatile Practices"
								text="From litigation to compliance, we cover every legal need with precision."
								direction="left"
								delay="400ms"
							/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.metricsContainer}>
				<Grid
					container
					justifyContent="center"
					className={styles.metricsContentContainer}
				>
					<Grid
						container
						size={11}
						columnSpacing={4}
						rowSpacing={{ xs: 3, sm: 3 }}
					>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size: {
									sm: 12,
									md: 6,
									lg: 3,
								},
								container: true,
								justifyContent: 'center',
							}}
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>99%</div>
								<div className={styles.metricsTitle}>
									Accuracy in Legal Documentation & Case Support
								</div>
							</div>
							<div className={styles.metricsText}>
								<span>
									Precision-driven processes to keep your cases watertight.
								</span>
							</div>
						</Animate.FadeUp>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size: {
									sm: 12,
									md: 6,
									lg: 3,
								},
								container: true,
								justifyContent: 'center',
							}}
							delay="100ms"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>24/7</div>
								<div className={styles.metricsTitle}>
									Operational Support Across Time Zones
								</div>
							</div>
							<div className={styles.metricsText}>
								<span>Because legal deadlines don't wait. Neither do we.</span>
							</div>
						</Animate.FadeUp>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size: {
									sm: 12,
									md: 6,
									lg: 3,
								},
								container: true,
								justifyContent: 'center',
							}}
							delay="200ms"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>180+</div>
								<div className={styles.metricsTitle}>
									Expert Paralegals & Legal Professionals
								</div>
							</div>
							<div className={styles.metricsText}>
								<span>
									Trained by top law firms, delivering unmatched expertise.
								</span>
							</div>
						</Animate.FadeUp>
						<Animate.FadeUp
							direction="up"
							element={Grid}
							elementProps={{
								size: {
									sm: 12,
									md: 6,
									lg: 3,
								},
								container: true,
								justifyContent: 'center',
							}}
							delay="300ms"
						>
							<div className={styles.metricsItem}>
								<div className={styles.metricsHeading}>100%</div>
								<div className={styles.metricsTitle}>
									Data Security & Confidentiality Compliance
								</div>
							</div>
							<div className={styles.metricsText}>
								<span>
									Your sensitive information stays protected, no exceptions.
								</span>
							</div>
						</Animate.FadeUp>
					</Grid>
					<Grid size={12} className={styles.precisionTextContainer}>
						<div className={styles.precisionText}>
							<div>
								Powering Law Firms with Smart, Scalable Legal Support,&nbsp;
							</div>
							<div>
								Powering Law Firms with Smart, Scalable Legal Support,&nbsp;
							</div>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.aboutFounder}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid
						size={12}
						justifyContent="center"
						className={styles.commonContainer}
					>
						<Heading className={styles.meetTheTeamHeading}>
							Meet the Team
						</Heading>
					</Grid>
					<Grid
						size={12}
						container
						justifyContent="center"
						alignItems="flex-start"
						className={styles.commonContainer}
						spacing={3}
					>
						{[
							{
								id: 'kunal',
								name: 'Kunal Jaggi',
								tagline: 'Visionary Behind Glocal LPO',
								designation: 'Founder & CEO, Glocal LPO',
								bio: 'Kunal Jaggi is the visionary Founder & CEO behind Glocal LPO, backed by over 20 years of entrepreneurial and operational leadership.',
								image: kunalProfilePic,
								linkedin: 'https://www.linkedin.com/in/kunal-jaggi-0b5a182/',
							},
							{
								id: 'srishti',
								name: 'Srishti Khatri',
								tagline: 'Driving Energy Behind Service Excellence',
								designation: 'VP - Sales & Marketing, Glocal LPO',
								bio: 'Srishti Khatri is a dynamic leader with over a decade of experience in sales, marketing, and business development.',
								image: srishtiProfilePic,
								linkedin: 'https://www.linkedin.com/in/srishti-khatri-a13a86119/',
							},
							{
								id: 'deepti',
								name: 'Deepti Sisodiya',
								tagline: 'Strategic Architect of Growth & Expansion',
								designation: 'Business Head. Glocal LPO',
								bio: 'Deepti is the driving force behind Glocal LPO, turning Kunal\'s vision into reality, leveraging deep sales and marketing expertise.',
								image: deeptiProfilePic,
								linkedin: 'https://www.linkedin.com/in/deepti-sisodiya-b87170236/',
							},
						].map((member) => (
							<Grid
								size={{ xs: 12, sm: 6, md: 4 }}
								key={member.id}
								className={styles.teamColumn}
							>
								<div
									className={styles.teamCard}
									onClick={() => handleModalOpen(member.id)}
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											handleModalOpen(member.id);
										}
									}}
								>
									<div className={styles.cardImageWrapper}>
										<img
											src={member.image}
											alt={member.name}
											className={styles.cardImage}
										/>
									</div>

									<div className={styles.cardContent}>
										<div className={styles.cardHeader}>
											<div className={styles.headerInfo}>
												<div className={styles.founderTitle}>
													{member.tagline}
												</div>
												<div className={styles.name}>{member.name}</div>
												<div className={styles.designation}>
													{member.designation}
												</div>
											</div>
											<div className={styles.socialFootprint}>
												<a
													href={member.linkedin}
													target="_blank"
													rel="noopener noreferrer nofollow"
													onClick={(e) => e.stopPropagation()}
													className={styles.linkedinLink}
													aria-label={`${member.name} LinkedIn Profile`}
												>
													<img
														src={linkedIcon}
														alt="LinkedIn"
														className={styles.linkedinIcon}
													/>
												</a>
											</div>
										</div>

										<div className={styles.bioText}>
											{member.bio}
										</div>

										<div className={styles.actionWrapper}>
											<button
												type="button"
												className={styles.viewProfileBtn}
												onClick={(e) => {
													e.stopPropagation();
													handleModalOpen(member.id);
												}}
											>
												<span>View Profile</span>
												<span className={styles.btnArrow}>→</span>
											</button>
										</div>
									</div>
								</div>
							</Grid>
						))}
					</Grid>
				</Container>
			</section>
			<Modal open={toggleModal} onClose={handleModalOpen}>
				{renderModelContent()}
			</Modal>
		</div>
	);
};

export default About;
