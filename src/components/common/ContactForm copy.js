import React, { useEffect, useState, useRef } from "react";
import {
	Container,
	Grid2 as Grid,
	Button,
	Snackbar,
	Alert
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { CircleArrow, CircleLoader } from "@/components/Icons";

import Heading from "./Heading";
import InputField from "./InputField";

import * as styles from "./ContactForm.module.scss";

const ContactForm = (props) => {
	const { section } = props;

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const [TurnstileComponent, setTurnstileComponent] = useState(null);

	const captchaRef = useRef();
	
	const { handleSubmit, control, formState: { isSubmitting }, reset } = useForm();

	const { pathname } = useLocation();

	const onSubmit = async (data) => {
		const captchaToken = await captchaRef.current?.getResponse();
		const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
				...data,
				captchaToken
			}),
    });

		const result = await response.json();
		if (result.success) {
			setStatus("success");
			reset();
		} else {
			setStatus("error");
		}
		setMessage(result.message);
		setOpen(true);
		captchaRef.current?.reset();
	};

	const handleClose = () => {
		setStatus("");
		setMessage("");
		setOpen(false);
	};

	useEffect(() => {
    // Dynamically import only on client-side after hydration
    import('@marsidev/react-turnstile').then((mod) => {
      setTurnstileComponent(() => mod.Turnstile);
    });
  }, []);

	return (
		<Container
			maxWidth="xl"
			className={section === "contact" ? styles.contactForm : ""}
		>
			<Grid
				container
				className={styles.commonContainer}
				spacing={12}
				alignItems="flex-start"
			>
				<Grid size={{md:12, lg: 4}}>
					<div>
						<Heading className={styles.getInTouchHeading}>Get In Touch</Heading>
					</div>
					<div className={styles.formHeading}>
						Tell us what you need, 
						and we'll map the way 
						forward to victory.
					</div>
					<div className={styles.formText}>
						At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.
					</div>
				</Grid>
				<Grid container size={{md: 12, lg: 8}}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="page_url"
							control={control}
							defaultValue={pathname}
							render={({
								field: { onChange, value }
							}) => (
								<input type="hidden" name="page_url" value={value} />
							)}
						/>
						<Grid container size={12}>
							<Grid size={12} className={styles.requiredFieldTitle}>
								All the fields marked with * are required
							</Grid>
							<Grid size={12} container spacing={3}>
								<Grid size={{xs: 12, md: 6}}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										control={control}
										name="first_name"
										label="FIRST NAME"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "First name is required",
											minLength: { value: 2, message: "Minimum 2 characters" }
										}}
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										control={control}
										name="last_name"
										label="LAST NAME"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "Last name is required",
											minLength: { value: 2, message: "Minimum 2 characters" }
										}}
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="EMAIL"
										type="email"
										control={control}
										name="email"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "Email is required",
											pattern: {
												value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
												message: "Please enter a valid email address"
											}
										}}
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="COMPANY"
										control={control}
										name="company"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "Company is required",
											minLength: { value: 2, message: "Minimum 2 characters" }
										}}
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="JOB TITLE"
										control={control}
										name="job_title"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "Job title is required",
											minLength: { value: 2, message: "Minimum 2 characters" }
										}}
									/>
								</Grid>
								<Grid size={{ xs: 12, md: 6 }}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										label="PHONE"
										type="tel"
										control={control}
										name="phone"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "Phone number is required",
											pattern: {
												value: /^[0-9]+$/,
												message: "Phone number must contain digits only"
											},
											minLength: {
												value: 7,
												message: "Phone number must be at least 7 digits"
											},
											maxLength: {
												value: 15,
												message: "Phone number must be at most 15 digits"
											}
										}}
									/>
								</Grid>
								<Grid size={12}>
									<InputField
										slotProps={{
											inputLabel: {
												shrink: true,
											},
										}}
										control={control}
										name="service_info"
										label="PLEASE DESCRIBE THE TYPE OF SERVICE YOU ARE INTERESTED IN"
										fullWidth={true}
										variant="standard"
										rules={{
											required: "Service description is required",
											minLength: { value: 2, message: "Minimum 2 characters" }
										}}
									/>
								</Grid>
							</Grid>
							<Grid size={12} className={styles.submitWrapper}>
								<Button type="submit">
									{
										isSubmitting ? (
											<CircleLoader className={styles.loader} />
										) : (
											<CircleArrow
												fill="#564847"
												className={styles.formSubmitButton}
											/>
										)
									}
								</Button>
							</Grid>
						</Grid>
						{TurnstileComponent && (
							<TurnstileComponent
								ref={captchaRef}
								siteKey='0x4AAAAAABY7kpv1X_K7bKmj'
							/>
						)}
					</form>
				</Grid>
			</Grid>
			<Snackbar
				open={open}
        autoHideDuration={5000}
        onClose={handleClose}
				anchorOrigin={{
					horizontal: 'center',
					vertical: 'top',
				}}
			>
				<Alert
          onClose={handleClose}
          severity={status}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
			</Snackbar>
		</Container>
	);
};

export default ContactForm;
