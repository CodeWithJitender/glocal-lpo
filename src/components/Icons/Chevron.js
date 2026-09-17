import React from "react";

const ChevronIcon = (props) => {
	const { fill = "#DEC4A5", ...restProps } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="7 11 18 10"
			fill={fill}
			{...restProps}
		>
			<path d="M24.7071 20.7071C24.3166 21.0976 23.6834 21.0976 23.2929 20.7071L16 13.4142L8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071C6.90237 20.3166 6.90237 19.6834 7.29289 19.2929L15.2929 11.2929C15.4804 11.1054 15.7348 11 16 11C16.2652 11 16.5196 11.1054 16.7071 11.2929L24.7071 19.2929C25.0976 19.6834 25.0976 20.3166 24.7071 20.7071Z" transform="matrix(1, 0, 0, 1, -1.7763568394002505e-15, 0)" />
		</svg>
	)
};

export default ChevronIcon;
