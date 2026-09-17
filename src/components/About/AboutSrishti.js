import React from "react";
import { Container, Grid2 as Grid } from '@mui/material';

import { Heading } from '@/components/common';

import linkedIcon from "@/assets/icons/about-linkedin-icon.png";

import * as styles from "./AboutTeam.module.scss";

const AboutSrishti = () => {
	return (
		<Container maxWidth="lg" className={styles.container}>
			<Grid size={12}>
				<Grid size={12}>
					<Heading className={styles.heading}>
						Srishti Khatri
						<a
							href="https://www.linkedin.com/in/srishti-khatri-a13a86119/"
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							<img src={linkedIcon} alt="" className={styles.linkedinIcon} />
						</a>
					</Heading>
					<div className={styles.designation}>VP - Sales & Marketing, Glocal LPO</div>
				</Grid>
				<Grid size={12} className={styles.aboutFounder}>
					Srishti Khatri is a dynamic leader with over a decade of experience in sales, marketing, and business development.
				</Grid>
				<Grid size={12}>
					<p>Currently serving as the Vice President - Sales & Marketing, she has been instrumental in driving strategic growth, fostering strong client relationships, and building high-performing teams. Known for her energy, precision, and commitment to service excellence, Srishti has consistently elevated brand presence and business outcomes across every role she has undertaken. Her career reflects a deep passion for innovation, client satisfaction, and a relentless pursuit of excellence.</p>
				</Grid>
			</Grid>
		</Container>
	)
};

export default AboutSrishti;
