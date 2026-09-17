import React from "react";
import { Container, Grid2 as Grid } from '@mui/material';

import { Heading } from '@/components/common';

import linkedIcon from "@/assets/icons/about-linkedin-icon.png";

import * as styles from "./AboutTeam.module.scss";

const AboutDeepti = () => {
	return (
		<Container maxWidth="lg" className={styles.container}>
			<Grid size={12}>
				<Grid size={12}>
					<Heading className={styles.heading}>
						Deepti Sisodiya
						<a
							href="https://www.linkedin.com/in/deepti-sisodiya-b87170236/"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
						</a>
					</Heading>
					<div className={styles.designation}>Business Head. Glocal LPO</div>
				</Grid>
				<Grid size={12} className={styles.aboutFounder}>
					Deepti is the driving force behind Glocal LPO, turning Kunal's vision into reality. 
				</Grid>
				<Grid size={12}>
					<p>As Business Head, she leverages deep sales and marketing expertise in legal outsourcing to fuel revenue growth, expand our reach and delight clients with tailored, scalable solutions. Leading a powerhouse team of over 180 legal specialists and business development strategists, Deepti's “understand, curate, deliver” philosophy ensures every engagement exceeds expectations.</p>
					<p>A discipline-driven leader and proud defense brat, she blends resilience with strategic insight to set new industry benchmarks. With Deepti at the helm, Glocal LPO is more than a service provider—it's your trusted partner in legal excellence, delivering powerful representation with a personal touch.</p>
				</Grid>
			</Grid>
		</Container>
	)
};

export default AboutDeepti;
