import React from "react";
import { Container, Grid2 as Grid } from '@mui/material';

import { Heading } from '@/components/common';

import linkedIcon from "@/assets/icons/about-linkedin-icon.png";

import * as styles from "./AboutTeam.module.scss";

const AboutKunal = () => {
	return (
		<Container maxWidth="lg" className={styles.container}>
			<Grid size={12}>
				<Grid size={12}>
					<Heading className={styles.heading}>
						Kunal Jaggi
						<a
							href="https://www.linkedin.com/in/kunal-jaggi-0b5a182/"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
						</a>
					</Heading>
					<div className={styles.designation}>Founder & CEO, Glocal LPO</div>
				</Grid>
				<Grid size={12} className={styles.aboutFounder}>
					Kunal Jaggi is the visionary Founder & CEO behind Glocal LPO, backed by over 20 years of entrepreneurial and operational leadership.
				</Grid>
				<Grid size={12}>
					<p>As the architect of Head Field Solutions—India's premier recruitment-outsourcing firm since 2007—he has delivered top-tier offshore recruitment, digital, accounting, and virtual assistant services across the U.S. and Canada. Spotting the surge in demand for cost-effective, high-quality legal support, Kunal launched Glocal LPO to bring world-class alternative legal solutions to law firms and corporate legal teams in the U.S., Canada, and Europe.</p>
					<p>Under his stewardship, Glocal LPO has become a sophisticated boutique partner celebrated for precision-driven services and an unwavering commitment to excellence. A champion of people-first leadership, Kunal cultivates a culture of growth and engagement—empowering every team member as an “internal client” and setting new benchmarks in the outsourcing industry.
					</p>
				</Grid>
			</Grid>
		</Container>
	)
};

export default AboutKunal;
