import React from 'react';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

import whiteArrow from "@/assets/icons/white-arrow.png";

import { Animate } from '@/components/common';

import * as styles from "./ServiceBox.module.scss";

const ServiceBox = (props) => {
	const {
		title,
		description,
		image,
		index,
		link
	} = props;

	return (
		<Animate.FadeUp
			direction="up"
			delay={`${index * 50}ms`}
			element={Grid}
			elementProps={{
				size: {
					xs: 12,
					sm: 12,
					md: 6,
					lg: 3,
				}
			}}
			className={styles.container}
		>
			<div className={styles.box}>
				<Link to={link} className={styles.headingLink}>
					<div className={styles.heading}>{title}</div>
				</Link>
				<Link to={link} className={styles.imageLink}>
					<figure className={styles.image}>
						<img src={image} className={styles.serviceImage} alt={title} />
					</figure>
				</Link>
				<div className={styles.serviceText}>{description}</div>
				<Link to={link} className={styles.normalLink}>
					SEE HOW WE CAN HELP
					<img src={whiteArrow} alt="" className={styles.arrow} />
				</Link>
			</div>
			<Link
				to={link}
				className={styles.goCorner}
				aria-label={`Learn more about ${title}`}
			>
				<div className={styles.goArrow}>→</div>
			</Link>
		</Animate.FadeUp>
	);
};

export default ServiceBox;

