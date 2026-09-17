import React from "react";
import {
	Grid2 as Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import cx from "classnames";

import { LinkButton } from '@/components/common';

import { useDevice } from '@/context/DeviceContext';

import { ChevronIcon, InfoIcon } from "@/components/Icons";

import { routes } from "@/utils/routesPath";

import * as styles from "./AccordianItem.module.scss";

const AccordianItem = (props) => {
	const {
		id,
		onChange,
		expanded,
		item
	} = props;

	const { isMobile } = useDevice();

	const { header, content } = item;

	return (
		<Accordion
			expanded={expanded === id}
			onChange={onChange(id)}
			className={styles.accordionRoot}
		>
			<AccordionSummary
				className={styles.accordianHeader}
				aria-controls={`${id}d-content`}
				id={`${id}d-header`}
				classes={{
					expanded: styles.accordionExpended
				}}
			>
				<div className={styles.accordianHead}>
					<div className={styles.accordianIcon}>
						<InfoIcon />
					</div>
					<div className={styles.accordianHeadHeading}>{header.title}</div>
					<div>
						<ChevronIcon
							className={cx(
								styles.chevron,
								{
									[styles.collapsed]: expanded === id
								}
							)}
						/>
					</div>
				</div>
			</AccordionSummary>
			<AccordionDetails className={styles.accordianDetail}>
				<Grid size={12} spacing={4} container>
					<Grid container size={{sm: 12, md:12, lg: 5}} alignContent="flex-start">
						<Grid size={12}>
							<div className={styles.accordionHeading}>
								{content.heading}
							</div>
						</Grid>
						{isMobile &&
							<Grid container size={{ sm: 12, md: 12, lg: 7 }} alignContent="flex-start">
								<Grid size={12} className={styles.helpTitle}>WE HELP YOU BY:</Grid>
								<Grid size={12}>
									<ul className={styles.helpBullets}>
										{
											content.listItems.map((list, index) => (
												<li key={index}>{list}</li>
											))
										}
									</ul>
								</Grid>
							</Grid>
						}
						<Grid size={12}>
							<div className={styles.globalDistinctive}>
								{content.smallHeading}
							</div>
							<div className={styles.globalText}>
								{content.description}
							</div>
							<LinkButton
								to={routes["contact-us"].href}
								delay="200ms"
								className={styles.bookButton}
							>SCHEDULE A STRATEGY CALL WITH US</LinkButton>
						</Grid>
					</Grid>
					{!isMobile && 
						<Grid container size={{ sm: 12, md: 7 }} alignContent="flex-start">
							<Grid size={12} className={styles.helpTitle}>WE HELP YOU BY:</Grid>
							<Grid size={12}>
								<ul className={styles.helpBullets}>
									{
										content.listItems.map((list, index) => (
											<li key={index}>{list}</li>
										))
									}
								</ul>
							</Grid>
						</Grid>
					}
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordianItem;
