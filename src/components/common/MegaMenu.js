import React from "react";
import {
	Container,
	Grid2 as Grid
} from '@mui/material';
import { Link } from "react-router-dom";

import { StarIcon } from "@/components/Icons";

import { servicesArray } from "@/utils/serviceInfo";

import * as styles from "./MegaMenu.module.scss";

const MegaMenu = () => {
	return (
		<Container className={styles.container}>
			<Grid container size={12} spacing={4}>
				{
					servicesArray.map((service, index) => (
						<Grid
							container
							size={4}
							key={index}
							alignItems="flex-start"
							className={styles.menuItem}
						>
							<Link to={service.link} className={styles.link}>					
								<div className={styles.starIcon}>
									{service.icon ? <service.icon className={styles.lucideIcon} /> : <StarIcon className={styles.icon} />}
								</div>
								<div className={styles.menuInfo}>
									<div className={styles.menuTitle}>{service.title}</div>
									<div className={styles.menuDescription}>
										{service.menuContent}
									</div>
								</div>
							</Link>
						</Grid>
					))
				}				
			</Grid>
		</Container>
	)
};

export default MegaMenu;
