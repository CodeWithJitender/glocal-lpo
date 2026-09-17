import React from "react";

import { Animate } from "@/components/common";

import * as styles from "./ProcessCard.module.scss";

const ProcessCard = (props) => {
	const { step, title, content, icon } = props;
	return (
		<Animate.FadeUp direction="up" className={`${styles["timeline__event"]}`}>
			<div className={styles["timeline__event__icon"]}>
				{icon}
			</div>
			<div className={styles["timeline__event__date"]}>
				{step}
			</div>
			<div className={styles["timeline__event__content"]}>
				<div className={styles["timeline__event__title"]}>
					{title}
				</div>
				<div className={styles["timeline__event__description"]}>
					{content}
				</div>
			</div>
		</Animate.FadeUp>
	);
};

export default ProcessCard;
