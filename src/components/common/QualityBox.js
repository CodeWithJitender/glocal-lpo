import React from "react";
import { Grid2 as Grid } from "@mui/material";

import { Animate } from "@/components/common";

import * as styles from "./QualityBox.module.scss";

const QualityBox = (props) => {
	const {
		icon,
		heading,
		text,
		direction = "right",
		delay = "0"
	} = props;

	return (
		<Grid size={6} className={styles.serviceBox}>
			<Animate.FadeUp direction={direction} delay={delay}>
				<div className={styles.serviceIcon}>
					<img src={icon} alt="" />
				</div>
				<div className={styles.serviceHeading}>
					{heading}
				</div>
				<div>
					{text}
				</div>
			</Animate.FadeUp>
		</Grid>
	)

};

export default QualityBox;
