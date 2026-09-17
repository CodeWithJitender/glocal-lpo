import React from "react";

import Animate from "./Animate";

import * as styles from "./Heading.module.scss";

const Heading = (props) => {
	const {
		variant = "primary",
		className = "",
		direction = "up",
		component = "h2",
		children
	} = props;

	if (variant === "primary") {
		const Component = component;
		return (
			<Animate.FadeUp direction={direction}>
				<Component
					className={`${styles.primaryHeading} ${className}`}
				>
					{children}
				</Component>
			</Animate.FadeUp>
		)
	}

	return (
		<Animate.FadeUp direction={direction}>
			<h2
				className={`${styles.secondaryHeading} ${className}`}
			>
				{children}
			</h2>
		</Animate.FadeUp>
	);
};

export default Heading;
