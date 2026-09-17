import React from "react";
import { Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { Animate } from "@/components/common";
import { routes } from "@/utils/routesPath";

import * as styles from "./ServiceTypeBox.module.scss";

const ServiceTypeBox = (props) => {
	const {
		heading,
		text,
		image,
		index = 0,
		delay,
	} = props;

	return (
		<Animate.FadeUp
			element={Grid}
			direction="up"
			delay={delay || `${(index % 2) * 100}ms`}
			elementProps={{
				size: { xs: 12, md: 6, lg: 4 },
				className: styles.cardWrapper,
			}}
		>
			<div className={styles.serviceBox}>
				<div className={styles.imageColumn}>
					<div className={styles.imageContainer}>
						<img
							src={image}
							alt={heading}
							className={styles.serviceImage}
						/>
					</div>
				</div>

				<div className={styles.contentColumn}>
					<div className={styles.cardHeader}>
						<h3 className={styles.serviceBoxHeading}>{heading}</h3>
						<p className={styles.serviceBoxText}>{text}</p>
					</div>

					<div className={styles.cardFooter}>
						<Link
							to={routes["contact-us"].href}
							className={styles.connectWithUsButton}
						>
							<span>CONSULT WITH US</span>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className={styles.buttonArrow}
							>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</Animate.FadeUp>
	);
};

export default ServiceTypeBox;
