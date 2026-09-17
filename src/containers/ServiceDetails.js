import React, { useState } from "react";
import {
	Container,
	Grid2 as Grid
} from "@mui/material";
import { useLocation } from "react-router-dom";

import {
	Heading,
	LinkButton,
	ServiceCard,
	Carousel,
	Animate,
	ContactForm,
	Breadcrumb
} from '@/components/common';

import NotFound from "@/containers/NotFound";

import ServiceTypeBox from "@/components/Services/ServiceTypeBox";
import ServiceClipAnimation from "@/components/Services/ServiceClipAnimation";
import AccordianItem from "@/components/Services/AccordianItem";
import OurProcess from "@/components/Services/OurProcess";

import { useDevice } from '@/context/DeviceContext';

import { serviceCards, servicesInfo } from "@/utils/serviceInfo";
import { routes } from "@/utils/routesPath";

import expertiseSeal from "@/assets/images/confidential-seal.png";

import * as styles from "./ServiceDetails.module.scss";
import { Helmet } from "react-helmet-async";

const Service = () => {
	const [expanded, setExpanded] = useState('panel0');
	const { pathname } = useLocation();

	const { isMobile } = useDevice();

	const serviceName = pathname.match(/[^/]+$/);
	const serviceDetails = servicesInfo[serviceName[0]] || null;

	const slides = [];

	let serviceId = 1;
	serviceCards.forEach((service, index) => {
		if (service.link !== pathname) {
			slides.push({
				key: index,
				content: <ServiceCard
					id={`0${serviceId}`}
					title={service.title}
					link={service.link}
					image={service.image}
					className={styles.serviceCard}
					description={service.description}
					mobileDescription={service.mobileDescription}
				/>
			});
			serviceId = serviceId + 1;
		}
	});

  const handleChange = (panel) => () => {
    setExpanded(panel);
  };

	if (!serviceDetails) {
		return <NotFound />;
	}

	return (
		<div>
			<Helmet>
				<title>{serviceDetails.metaTitle || `${serviceDetails.title} | Glocal LPO`}</title>
				<meta
					name="description"
					content={serviceDetails.metaDescription || `Expert ${serviceDetails.title} legal support services by Glocal LPO.`}
				/>
				{serviceDetails.metaKeywords && (
					<meta name="keywords" content={serviceDetails.metaKeywords} />
				)}
				<link rel="canonical" href={`https://www.glocallpo.com${pathname}`} />
			</Helmet>
			<section
				className={styles.masterHead}
				style={{
					backgroundImage: `linear-gradient(90deg, rgba(7, 12, 30, 0.6) 0%, rgba(7, 12, 30, 0.35) 45%, rgba(7, 12, 30, 0.05) 75%, rgba(7, 12, 30, 0.15) 100%), linear-gradient(180deg, rgba(7, 12, 30, 0.3) 0%, transparent 35%, rgba(7, 12, 30, 1) 100%), url(${serviceDetails.background})`,
					backgroundPosition: serviceDetails.backgroundPosition || "top center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat"
				}}
			>
				<Container maxWidth="xl" disableGutters className={styles.headingContainer}>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Breadcrumb
							items={[
								{ label: 'Home', href: '/' },
								{ label: 'Services', href: '/services' },
								{ label: serviceDetails.title },
							]}
						/>
						<Heading variant="secondary">
							{serviceDetails.title} Cases
						</Heading>
						<Heading className={styles.lpoTitle} component="h1">
							{serviceDetails.heading}
						</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
				<Grid container justifyContent="flex-end">
					<Grid size={{md:12, lg:5}}>
						<Animate.FadeUp
							direction="up"
							className={styles.aboutHeading}
						>
							{serviceDetails.description.mainDescription}
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							{serviceDetails.description.smallDesription}
						</Animate.FadeUp>

						<div>
							<LinkButton
								to={routes["contact-us"].href}
								delay="200ms"
								className={styles.bookButton}
							>SCHEDULE A STRATEGY CALL WITH US</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			{
				serviceDetails.casesSpecializedIn ? (
					<section>
						<Container maxWidth="xl" disableGutters>
							<Grid
								container
								className={styles.commonContainer}
								flexDirection="column"
							>
								<Grid size={12}>
									<Heading>Types of Cases We Specialize In:</Heading>
								</Grid>
								<Grid
									container
									size={12}
									spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
									className={styles.typeOfServiceBoxContainer}
								>
									{
										serviceDetails.casesSpecializedIn.map((caseInfo, index) => (
											<ServiceTypeBox
												key={caseInfo.id}
												id={caseInfo.id}
												heading={caseInfo.title}
												text={caseInfo.description}
												image={caseInfo.image}
												index={index}
											/>
										))
									}
								</Grid>
							</Grid>
						</Container>
					</section>
				) : null
			}
			<section className={styles.silhoutContainer}>
				<Grid size={12}>
					<ServiceClipAnimation />
				</Grid>
			</section>
			<section className={styles.serviceAccordianHeadingSection}>
				<Container maxWidth="xl" disableGutters>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Grid size={12}>
							<Heading>
								{serviceDetails.accordionTitle || `Seamless ${serviceDetails.title} Paralegal & Legal Assistant Services`}
								{/* Seamless {serviceDetails.title} Paralegal & Legal Assistant Services */}
								</Heading>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceAccordianSection}>
				<Container maxWidth="xl" disableGutters>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Grid
							container
							size={12}
							spacing={2}
							className={styles.accordionContainer}
						>
							{
								serviceDetails.accordianItems.map((item, index) => (
									<AccordianItem
										key={index}
										id={`panel${index}`}
										onChange={handleChange}
										item={item}
										expanded={expanded}

									/>
								))
							}
						</Grid>
					</Grid>
				</Container>
			</section>
			<OurProcess />
			<section className={styles.formSection}>
				<ContactForm />
			</section>
			<section className={styles.expertiseSection}>
				<div className={styles.expertiseStamp}>
					<img src={expertiseSeal} alt="" />
				</div>
				<Grid container size={12}>
					<Grid size={12} justifyItems="center">
						<Heading className={styles.expertiseHeading}>
							Other Key Areas of Expertise
						</Heading>
					</Grid>
					<Grid size={12} justifyContent="center" container>
						<Grid
							size={{
								xs: 12,
								sm: 12,
								md: 6
							}}
							className={styles.carouselSection}
						>
							<Carousel
								cards={slides}
								offset={2}
								showArrows={true}
							/>
						</Grid>
					</Grid>
				</Grid>
			</section>
		</div>
	);
};

export default Service;
