import React from "react";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

import {
	Heading,
	Animate
} from "@/components/common";

import { useDevice } from '@/context/DeviceContext';

import { routes } from "@/utils/routesPath";

import flexibleSectionImg from "@/assets/images/flexible-section-img.png";

import * as styles from "./FlexibleFirepower.module.scss";

const FlexibleFirePower = () => {
	const { isMobile } = useDevice();

	return (
		<section className={styles.infoContainer}>
			<Grid container size={12}>
				<Grid
					container
					size={{
						xs: 12,
						sm: 12,
						md: 12,
						lg: 6,
					}}
					display="flex"
					direction="row"
				>
					<Grid size={12} className={styles.infoHeadingSection}>
						<Heading direction="down">
							{/* Flexible Firepower for Your Cases */}
							Case-Ready Legal Expertise, On Demand
						</Heading>
						<Heading variant="secondary" className={styles.infoSubHeading} direction="up">
							{/* Scale. Adapt. Conquer. Repeat. */}
							Scale. Adapt. Conquer. Repeat 
						</Heading>
					</Grid>

					{!isMobile &&
						<Grid
							size={12}
							className={styles.infoImage}
							display="flex"
							alignItems="flex-end"
						>
							<img src={flexibleSectionImg} alt="" />
						</Grid>
					}
					
				</Grid>
				<Grid
					size={{
						xs: 12,
						sm: 12,
						md: 12,
						lg: 6,
					}}
					className={styles.infoDetailSection}
				>
					
					<Grid size={12} className={styles.infoDetail}>
						<Animate.FadeUp direction="down">
							Whether you need a dedicated paralegal or 
							strategic on-demand support, we provide the 
							flexibility to scale with your practice—because 
							in law, adaptability is power.
						</Animate.FadeUp>
					</Grid>
					<Grid
						container
						size={12}
						spacing={{
							md: 0,
							lg: 2,
						}}
						sx={{ flexDirection: { xs: "column", md: "row" } }}
					>
						<Grid 
							size={{ xs: 12, sm: 12, md: 6 }}
							className={styles.perWeekSection}
							
						>
							<Animate.FadeUp direction="right">
								<Grid container size={12}
									direction={{ xs: "row", sm: "row", md: "column" }}
									sx={{ justifyContent: { xs: "space-between", sm: "space-between" } }}
								>
									<Grid size={{ xs: 7, sm: 5, md: 12 }}>
										<div className={styles.smallHeading}>Full-Time Paralegal</div>
										<div className={styles.perMonthHours}>160 hrs/month</div>
									</Grid>

									<Grid size={{ xs: 4, sm: 3, md: 12 }}>
										<div className={styles.perWeekHours}>
											<div className={styles.perWeek}>40</div>
											hrs/week
										</div>
									</Grid>
								</Grid>
							</Animate.FadeUp>
						</Grid>
						<Grid size={{ xs: 12, sm: 12, md: 6 }} className={styles.perWeekDescriptionSection}>
							<Animate.FadeUp direction="left" className={styles.weekDescription}>
								Full-Throttle Paralegal Power - For When Every Second Counts.
							</Animate.FadeUp>
							<ul className={styles.weekBulletPoints}>
								<Animate.FadeUp direction="left" delay="100ms">
									<li>Best for heavy caseloads & long-term engagements</li>
								</Animate.FadeUp>
								<Animate.FadeUp direction="left" delay="200ms">
									<li>Consistency & full integration into your legal team</li>
								</Animate.FadeUp>
								<Animate.FadeUp direction="left" delay="300ms">
									<li>Proactive case management with deep involvement</li>
								</Animate.FadeUp>
							</ul>
						</Grid>
					</Grid>
					<Grid
						spacing={{
							md: 0,
							lg: 2,
						}}
						container
						sx={{ flexDirection: { xs: "column", md: "row" } }}
					>
						<Grid 
							size={{ xs: 12, sm: 12, md: 6 }}
							className={`${styles.perWeekSection} ${styles.perWeekSectionLast}`}
						>
							<Animate.FadeUp direction="right">
								<Grid container size={12}
									direction={{ xs: "row", sm: "row", md: "column" }}
									sx={{ justifyContent: { xs: "space-between", sm: "space-between" } }}
								>
									<Grid size={{ xs: 7, sm: 5, md: 12 }}>
										<div className={styles.smallHeading}>Part-Time Paralegal</div>
										<div className={styles.perMonthHours}>80 hrs/month</div>
									</Grid>

									<Grid size={{ xs: 4, sm: 3, md: 12 }}>
										<div className={styles.perWeekHours}>
											<div className={styles.perWeek}>20</div>
											hrs/week
										</div>
									</Grid>
								</Grid>
							</Animate.FadeUp>
						</Grid>
						<Grid size={{ xs: 12, sm: 12, md: 6 }} className={styles.perWeekDescriptionSection}>
							<Animate.FadeUp direction="left" className={styles.weekDescription}>
								Lean, Mean, Legal Machine - On-demand Assistance.
							</Animate.FadeUp>
							<ul className={styles.weekBulletPoints}>
								<Animate.FadeUp direction="left" delay="100ms">
									<li>Ideal for boutique firms and case-specific needs.</li>
								</Animate.FadeUp>
								<Animate.FadeUp direction="left" delay="200ms">
									<li>Scalable—adjust hours as your caseload grows</li>
								</Animate.FadeUp>
								<Animate.FadeUp direction="left" delay="300ms">
									<li>High-impact support without long-term constraints</li>
								</Animate.FadeUp>
							</ul>
						</Grid>
					</Grid>
					<Grid
						sx={{ flexDirection: { xs: "column", md: "row" } }}
					>
						<Animate.FadeUp direction="right">
							<Link
								to={routes["contact-us"].href}
								className={styles.consultWithUs}
							>
								SCHEDULE A STRATEGY CALL WITH US
							</Link>
						</Animate.FadeUp>
					</Grid>
				</Grid>
				{isMobile &&
					<Grid
						size={12}
						className={styles.infoImage}
						display="flex"
						alignItems="flex-end"
					>
						<img src={flexibleSectionImg} alt="" />
					</Grid>
				}
			</Grid>
		</section>
	);
};

export default FlexibleFirePower;
