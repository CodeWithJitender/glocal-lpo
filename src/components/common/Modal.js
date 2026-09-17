import React from "react";
import { Modal as ModalCore, Fade, Backdrop, Box } from '@mui/material';

import { CloseIcon } from "@/components/Icons";

const style = {
	boxShadow: 24,
  p: 4,
};

import * as styles from "./Modal.module.scss";

const Modal = (props) => {
	const { onClose, open, children } = props;

	return (
		<ModalCore
			aria-labelledby="spring-modal-title"
			aria-describedby="spring-modal-description"
			open={open}
			onClose={onClose}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					TransitionComponent: Fade,
					"backdrop-filter": "blur(9.5px)",
				},
			}}
		>
			<Fade in={open}>
				<Box sx={style} className={styles.box}>
					<CloseIcon className={styles.closeIcon} onClick={onClose} />
					{children}
				</Box>
			</Fade>
		</ModalCore>
	)
};

export default Modal;
