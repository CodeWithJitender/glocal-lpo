import React, { useState } from 'react';
import {
	Container,
	Grid2 as Grid,
	ImageList,
	ImageListItem,
} from '@mui/material';
import FsLightbox from 'fslightbox-react';
import Slider from 'react-slick';

import { Heading, Animate, ContactForm, Breadcrumb } from '@/components/common';

import { WritingPen, ArrowUpFilled } from '@/components/Icons';

import * as styles from './ContactUs.module.scss';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number,
		});
	}

	const imageList = [];

	Array.from({ length: 11 }, (_, i) => {
		const imageSrc = require(
			`../assets/images/office-images/lpo-office-${i + 1}.jpg`,
		);
		imageList.push(imageSrc);
	});

	const CustomArrow = ({ type, onClick }) => (
		<ArrowUpFilled
			onClick={onClick}
			className={`slick-arrow ${type === 'next' ? 'slick-next' : 'slick-prev'}`}
		/>
	);

	return (
		<>
			<Helmet>
				<title>Contact Us | Glocal LPO</title>
				<meta
					name="description"
					content="Get in touch with Glocal LPO. Schedule a strategy call and let our legal process outsourcing experts support your law firm today."
				/>
				<meta
					name="keywords"
					content="contact Glocal LPO, legal outsourcing contact, LPO consultation"
				/>
			</Helmet>
			<section className={styles.masterHead}>
				<Container maxWidth="xl" className={styles.headingContainer}>
					<Grid
						container
						className={styles.commonContainer}
						flexDirection="column"
					>
						<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
						<Heading variant="secondary">
							Have questions? We've got answers - and solutions.
						</Heading>
						<Heading className={styles.lpoTitle} component="h1">
							Let’s Power Your Legal Success
						</Heading>
					</Grid>
				</Container>
			</section>
			<section className={styles.aboutLPO}>
				<Grid container justifyContent={{ xs: 'left', md: 'flex-end' }}>
					<Grid size={{ md: 12, lg: 5 }}>
						<Animate.FadeUp direction="up" className={styles.aboutHeading}>
							Whether you're ready to outsource or simply exploring options,
							our team is here to listen, advise, and act.
						</Animate.FadeUp>

						<Animate.FadeUp
							direction="up"
							delay="100ms"
							className={styles.aboutText}
						>
							Reach out to schedule a consultation or ask a quick ques
							tion-whatever vour need, we're alwavs within reach.
						</Animate.FadeUp>
					</Grid>
				</Grid>
				{/* <Grid size={12} className={styles.dividerContainer}>
					<div className={styles.sectionDivider}>
						<WritingPen />
					</div>
				</Grid> */}
			</section>
			<section className={styles.formSection}>
				<ContactForm section="contact" />
			</section>
			<section className={styles.contactAddressContainer}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid size={12} container className={styles.addressContainer}>
						<Grid
							size={12}
							spacing={3}
							container
							className={styles.infoContainer}
						>
							<Grid
								size={{
									md: 12,
									lg: 3,
								}}
							>
								<div className={styles.title}>Operations Office</div>
								<div className={styles.address}>
									B-73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India
								</div>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 3,
								}}
							>
								<div className={styles.title}>Headquarters</div>
								<div className={styles.address}>
									3422 Old Capitol Trail, Wilmington DE 19808, USA
								</div>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 3,
								}}
							>
								<div className={styles.title}>Email Us</div>
								<div className={styles.address}>
									<a href="mailto:info@glocallpo.com">info@glocallpo.com</a>
								</div>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 3,
								}}
							>
								<div className={styles.title}>Call Us</div>
								<div className={styles.address}>
									<a href="tel:+16504072112">+1 (650) 407 2112</a> /{' '}
									<a href="tel:+918120562462">+91 (812) 056 2462</a>
								</div>
							</Grid>
						</Grid>
						<Grid size={12} spacing={3} container justifyContent="stretch">
							<Grid
								size={{
									md: 12,
									lg: 6,
								}}
							>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8457640024803!2d77.35152699999999!3d28.6044035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5aaa074182b%3A0x28d21d722b53a1c2!2sHead%20Field%20Solutions%20Private%20Limited%20-%20Head%20office!5e0!3m2!1sen!2sin!4v1746201898478!5m2!1sen!2sin"
									width="100%"
									height="550"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									className={styles.mapFrame}
								/>
							</Grid>
							<Grid
								size={{
									md: 12,
									lg: 6,
								}}
							>
								<ImageList
									variant="masonry"
									cols={3}
									gap={8}
									className={styles.imageListRoot}
								>
									{imageList.map((image, i) => (
										<ImageListItem
											key={i}
											className={styles.imageListItem}
											onClick={() => openLightboxOnSlide(i + 1)}
										>
											<img srcSet={image} src={image} loading="lazy" alt="" />
										</ImageListItem>
									))}
								</ImageList>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.careerSectionWrapper}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Animate.FadeUp direction="up">
						<div className={styles.careerCard}>
							<Grid
								container
								spacing={{ xs: 3, md: 4 }}
								alignItems="center"
								justifyContent="space-between"
							>
								<Grid size={{ xs: 12, md: 7, lg: 8 }}>
									<div className={styles.careerBadge}>
										<span className={styles.badgePulse} />
										<span>We Are Hiring</span>
									</div>
									<h2 className={styles.careerHeading}>
										Ready to take the next step in your legal career?
									</h2>
									<p className={styles.careerDescription}>
										Join Glocal LPO as a <strong>Legal Associate</strong> and grow with a dynamic global legal services team.
									</p>
								</Grid>
								<Grid size={{ xs: 12, md: 5, lg: 4 }}>
									<div className={styles.careerCtaBox}>
										<div className={styles.ctaLabel}>Send your resume to</div>
										<a
											href="mailto:info@glocallpo.com"
											className={styles.careerEmailBtn}
										>
											<span className={styles.emailText}>info@glocallpo.com</span>
											<span className={styles.emailArrow}>→</span>
										</a>
									</div>
								</Grid>
							</Grid>
						</div>
					</Animate.FadeUp>
				</Container>
			</section>
			<section className={styles.carouselHeadingSection}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid container className={styles.commonContainer} size={12}>
						<Grid size={12} className={styles.textCenter}>
							<Heading>
								Top Legal Firms Winning Words {/* Words That Win Us Cases */}
							</Heading>
							<Heading variant="secondary">
								{/* Real Stories. Real Results. */}
								Driving Us Success
							</Heading>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.carouselSection}>
				<Container maxWidth="xl" className={styles.founderContainer}>
					<Grid
						container
						className={`${styles.commonContainer} ${styles.carouselBody}`}
						size={12}
						spacing={3}
					>
						<Slider
							slidesToShow={2}
							slidesToScroll={1}
							dots={false}
							nextArrow={<CustomArrow type="next" />}
							prevArrow={<CustomArrow type="prev" />}
							responsive={[
								{
									breakpoint: 900,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										infinite: true,
									},
								},
							]}
						>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									We've partnered with Glocal for years on immigration
									paperwork. Their team is reliable, efficient, and helps us
									focus more on our clients. A solid support system we truly
									value.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Immigration Law Firm
										</div>
										<div className={styles.designation}>
											Licensed in New York
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Glocal's support has been outstanding—skilled, reliable, and a
									true asset to our employment law practice. Their paralegal's
									drafting and research are top-notch, and working with them has
									been an absolute pleasure.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>Employment Law Firm</div>
										<div className={styles.designation}>
											Licensed Missouri & Texas
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									We are very happy with both of them. They are doing a great
									job so far, and the hours and shifts they are working are
									exactly what we need.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>E-Filing Company</div>
										<div className={styles.designation}>California</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Glocal's paralegals are diligent, dependable, and a joy to
									work with. While the process naturally evolves, their quality
									and commitment leave little to improve. We're very happy with
									their support.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Personal Injury & Workers' Comp Firm
										</div>
										<div className={styles.designation}>
											Licensed in New Jersey
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal's speed and enthusiasm are great. With a bit
									more review and clarity, she's clearly on the right track and
									improving fast.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Personal Injury Law Firm
										</div>
										<div className={styles.designation}>
											Licensed in New York
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal's patience, professionalism, and dedication have
									been a huge help in closing legacy matters and easing our
									caseload. We're grateful for his contributions and wish him
									the best ahead.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Real Estate & Estate Planning Firm
										</div>
										<div className={styles.designation}>
											Licensed in California
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal's dedication and steady support helped us clear
									legacy matters and lighten our caseload. We're truly grateful
									for his work.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Real Estate & Estate Planning Firm
										</div>
										<div className={styles.designation}>
											Licensed in California
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									Our Glocal paralegal has been a true asset—sharp, skilled, and
									dependable in labor and employment matters. Her drafting and
									research are top-notch, and her kind, professional attitude
									makes her a joy to work with.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>Employment Law Firm</div>
										<div className={styles.designation}>
											Licensed in Illinois
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal's dedication, sharp legal mind, and care for
									clients truly stand out. His work on our case has already made
									a strong impression, and I've even recommended Glocal to
									colleagues.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Civil Litigation Law Firm
										</div>
										<div className={styles.designation}>
											Licensed in Florida
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									I've hired six Glocal paralegals—each one diligent, attentive,
									and reliable. Their work consistently meets high standards,
									and I'd gladly request them again.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Civil Litigation Law Firm
										</div>
										<div className={styles.designation}>
											Licensed in New Jersey
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal was professional, responsive, and a joy to work
									with. If we need support again, we'll definitely request her
									by name.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Personal Injury and Workers' Compensation Law Firm
										</div>
										<div className={styles.designation}>
											Licensed in Chicago
										</div>
									</div>
								</Grid>
							</div>
							<div size={6} container className={styles.carouselCard}>
								<Grid size={12} className={styles.testimonial}>
									The paralegal's dedication and support have been invaluable.
									While we're suspending services for now due to a lighter
									workload, we'll definitely reach out again if our needs
									change.
								</Grid>
								<Grid container size={12} spacing={1} alignItems="center">
									<div className={styles.clientInfoWrapper}>
										<div className={styles.clientName}>
											Personal Injury & Civil Litigation Firm
										</div>
										<div className={styles.designation}>
											Licensed in Florida
										</div>
									</div>
								</Grid>
							</div>
						</Slider>
					</Grid>
				</Container>
			</section>
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={imageList}
				slide={lightboxController.slide}
			/>
		</>
	);
};

export default ContactUs;
