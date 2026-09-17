import React from "react";
import { Grid2 as Grid } from '@mui/material';

import { Heading, Animate } from '@/components/common';

import * as styles from "./Clients.module.scss";

const Clients = () => {
	return (
		<section className={styles.clientsSection}>
			<Grid container size={12} justifyContent="center">
				<Grid size={{ xs:12, md:8}}>
					<div className={styles.useSectionHeading}>
						<Heading variant="secondary" direction="down">
							{/* The Winning Difference  */}
							AI-Powered Legal Support
						</Heading>
						<Heading direction="up">
							{/* Smart Tools. Sharp Minds. Seamless Execution. */}
							Expertly Delivered with Technology & Data Security.
						</Heading>
					</div>
				</Grid>
				<Grid size={{ xs:12, md:10 }}>
					<div className={styles.logoContainer}>
						<div className={styles.marquee}>
							<ul className={styles.marqueeContent}>
								{
									Array.from({ length: 20 }, (_, i) => {
										const imageSrc = require(`../../assets/images/logos/${i + 1}.jpg`);
										return (
											<li key={i}>
												<img
													src={imageSrc}
													alt=""
												/>
											</li>
										)
									})
								}
							</ul>
							<ul className={styles.marqueeContent}>
								{
									Array.from({ length: 20 }, (_, i) => {
										const imageSrc = require(`../../assets/images/logos/${i + 1}.jpg`);
										return (
											<li key={i}>
												<img
													src={imageSrc}
													alt=""
												/>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</Grid>
				<Grid size={{ xs:11, md:8}}>
					<Animate.FadeUp
						direction="up"
						className={styles.uspSectionText}
					>
						We streamline legal ops with smart tech-faster cases, tighter docs, sharper communication. Efficiency, security, and speed-right where you need them.
					</Animate.FadeUp>
				</Grid>
			</Grid>
		</section>
	)
};

export default Clients;
