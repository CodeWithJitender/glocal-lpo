import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';

import { Heading, LinkButton, Animate, ContactForm, Breadcrumb } from '@/components/common';

import ServiceClipAnimation from '@/components/Services/ServiceClipAnimation';
import ServiceBoxContainer from '@/components/Home/ServiceBoxContainer';
import { routes } from '@/utils/routesPath';
import * as styles from './Service.module.scss';
import { Helmet } from 'react-helmet-async';

const Service = () => {

	return (
		<div className={styles.mainContainer}>
			<Helmet>
				<title>Legal Process Outsourcing Services | Glocal LPO</title>
				<meta
					name="description"
					content="Explore Glocal LPO's full range of legal process outsourcing services including litigation support, legal research, contract drafting, and paralegal services."
				/>
				<meta
					name="keywords"
					content="legal outsourcing services, LPO services, paralegal services for law firms"
				/>
			</Helmet>
			<section className={styles.masterHead}>
				<Container maxWidth="xl">
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Our Services' }]} />
						<Heading className={styles.lpoTitle} component="h1">
							Your Legal Ally in Every Step of the Journey.
						</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
				<Grid container justifyContent="flex-end">
					<Grid size={{ md: 12, lg: 5 }}>
						<Animate.FadeUp direction="up" className={styles.aboutHeading}>
							At Glocal LPO, we provide top-tier outsourced legal services that
							empower attorneys across various practice areas.
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							From business litigation to family law, our dedicated team ensures
							that every document, strategy, and detail is executed with
							precision, giving your clients the best chance at success. Whether
							you need support in contracts, criminal law, or intellectual
							property, we're here to streamline your legal processes and
							elevate your practice.
						</Animate.FadeUp>

						<div>
							<LinkButton
								to={routes['contact-us'].href}
								delay="200ms"
								className={styles.bookButton}
							>
								SCHEDULE A STRATEGY CALL WITH US
							</LinkButton>
						</div>
					</Grid>
				</Grid>
			</section>
			<section className={styles.serviceHeadingContainer}>
				<Container maxWidth="xl">
					<Grid
						size={12}
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Heading>Types of Services We Specialize In:</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.serviceWeOfferContainer}>
				<Grid container>
					<ServiceBoxContainer />
				</Grid>
			</section>
			<section className={styles.silhoutContainer}>
				<Grid size={12}>
					<ServiceClipAnimation />
				</Grid>
			</section>
			<section className={styles.formSection}>
				<ContactForm />
			</section>
		</div>
	);
};

export default Service;
