import React from "react";
import { Link } from "react-router-dom";
import { Grid2 as Grid } from "@mui/material";

import { CircleArrow } from "@/components/Icons";

import { useDevice } from '@/context/DeviceContext';

import * as styles from "./ServiceCard.module.scss";

const ServiceCard = (props) => {
	const {
		id,
		title,
		image,
		description,
		mobileDescription,
		link,
		className = "",
		linkText = "SEE HOW WE CAN HELP"
	} = props;

	const { isMobile } = useDevice();

	return (
		<div
			size={12}
			className={`${styles.card} ${className}`}
		>
			{/* <Grid size={12} justifyItems="flex-start">
				<div className={styles.count}>{id}.</div>
			</Grid> */}
			<Grid size={12} justifyItems="flex-start">
				<div className={styles.heading}>{title}</div>
			</Grid>
			<Grid size={12} className={styles.serviceImage}>
				<img src={image} alt="" />
			</Grid>
			<Grid size={12} className={styles.serviceText}>
				{isMobile ? mobileDescription : description}
			</Grid>
			<Grid size={12}>
				<Link to={link} className={styles.howWeCanHelpLink}>
					<span>
						{linkText}
					</span>
					<CircleArrow fill="#a4836f" />
				</Link>
			</Grid>
		</div>
	);
};

export default ServiceCard;
