import React from "react";
import { Link } from "react-router-dom";

import Animate from "./Animate";

import * as styles from "./LinkButton.module.scss";

const LinkButton = (props) => {
	const {
		to,
		delay,
		className = "",
		children
	} = props;

	return (
		<Animate.FadeUp direction="up" delay={delay} style={{
			display: "inline-block"
		}}>
			<Link to={to} className={`${styles.button} ${className}`}>
				{children}
			</Link>
		</Animate.FadeUp>
	)
};

export default LinkButton;
