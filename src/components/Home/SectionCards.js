import React from "react";
import { useTransform, motion } from 'framer-motion';

import * as styles from "./SectionCards.module.scss";

export default function SectionCards(props) {
	const { card, progress, range, targetScale } = props;

	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<motion.div
			className={`${styles.content} ${styles[card.bgClass]}`}
			style={{scale}} 
		>
			<img
				className={styles.img}
				src={card.imgSrc}
				alt={card.title}
			/>
			<div className={styles.title}>
				{card.title}
			</div>
			<p className={styles.text}>{card.text}</p>
		</motion.div>
	)
};
