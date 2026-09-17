import React from "react";
import Grid from "@mui/material/Grid2";

import { Heading, Animate } from "@/components/common";
import { useDevice } from '@/context/DeviceContext';

import areaOfExpertiese from '@/assets/images/area-of-expertise.jpg';
import areaOfExpertieseMobile from '@/assets/images/area-of-expertise-mobile.png';
import areaOfExpertieseStamp from '@/assets/images/area-of-experties-stamp.png';

import * as styles from "./AreaOfExpertise.module.scss";

const AreaOfExpertise = () => {
	const { isMobile } = useDevice();

	return (
		<section className={styles.areaOfExpertiseSection}>
			<Grid container size={12} className={styles.expertiseImage}>
				<img src={isMobile ? areaOfExpertieseMobile : areaOfExpertiese} alt="" className={styles.expertiseAreaImage} />
				<Animate.ScaleIn direction="up" className={styles.stampImageContainer}>
					<img src={areaOfExpertieseStamp} alt="" className={styles.stampImage} />
				</Animate.ScaleIn>
			</Grid>
			<Grid container size={12} justifyContent="center">
				<Grid size={{xs:11, sm:12, md:8}} className={styles.areaOfExpertieseBox}>	
					<div className={styles.legalSupportHeading}>
						<Heading className={styles.headingSection1} direction="down">
							{/* We Work Behind the Scenes, */}
							Your Partner for 
						</Heading>
						<Heading direction="up">
							{/* So You Can Own the Courtroom. */}
							Successful Outcomes
						</Heading>
					</div>
					<Animate.FadeUp direction="up" className={styles.legalSupportText}>
						With expertise spanning civil litigation, real estate, business law, employment law, family law, contracts, and more, we anticipate challenges before they arise, delivering documents that hold up under scrutiny and strategies that keep attorneys ahead of the curve.
					</Animate.FadeUp>
				</Grid>
			</Grid>
		</section>
	);
};

export default AreaOfExpertise;
