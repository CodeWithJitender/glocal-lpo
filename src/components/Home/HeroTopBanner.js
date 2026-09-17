import React, { useState } from 'react';
import { Grid2 as Grid, CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import { routes } from '@/utils/routesPath';
import professionalImg from '@/assets/images/new-flexible-section-img.png';
import * as styles from './HeroTopBanner.module.scss';

const HeroTopBanner = () => {
	const [status, setStatus] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch,
	} = useForm({
		defaultValues: {
			service_type: "Pre-Litigation Support",
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	});

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			const templateParams = {
				service_type: data.service_type,
				name: data.name,
				email: data.email,
				phone: data.phone,
				message: data.message || 'N/A',
				page_url: typeof window !== 'undefined' ? window.location.href : pathname,
				submitted_at: new Date().toLocaleString('en-US', {
					timeZone: 'America/New_York',
					dateStyle: 'full',
					timeStyle: 'short',
				}),
			};

			await emailjs.send(
				'service_5ukbpwr',
				'template_f67ktse',
				templateParams,
				'QpkBmnT4LJ4PGyWTX'
			);

			setStatus('success');
			reset();
			navigate('/thank-you');
		} catch (error) {
			console.error('EmailJS Error:', error);
			setStatus('error');
			setErrorMessage(error?.text || error?.message || 'Failed to submit. Please try again later.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className={styles.topBannerWrapper}>
			{/* Center background visual matching reference screenshot */}
			{/* <div className={styles.centerVisual}>
				<img
					src={professionalImg}
					alt="Legal Professionals"
					className={styles.personImage}
				/>
			</div> */}

			<Grid container spacing={{ xs: 4, md: 4, lg: 5 }} alignItems="center" className={styles.bannerGrid}>
				{/* Left Content Column */}
				<Grid size={{ xs: 12, md: 7, lg: 7 }} className={styles.leftCol}>
					{/* Desktop (After tab size only) */}
					<div className={`${styles.badge} ${styles.badgeDesktop}`}>
						<span className={styles.badgeDot}></span>
						180+ Paralegals to Choose From as per Your Expertise in Law
					</div>

					{/* Tab & Mobile (Before tab size only) */}
					<div className={`${styles.badge} ${styles.badgeMobile}`}>
						<span className={styles.badgeDot}></span>
						180+ Expert Paralegals to Choose From
					</div>

					<h1 className={styles.mainTitle}>
						Onboard a <span className={styles.highlightText}>Paralegal</span> <br /> within 60 minutes
					</h1>

					<p className={styles.trustText}>
						Trusted by 800+ Happy Attorneys
					</p>

					<div className={styles.ctaWrapper}>
						<Link to={routes.services.href} className={styles.outlinedBtn}>
							Why Choose Glocal LPO
						</Link>
					</div>
				</Grid>

				{/* Right Form Card Column */}
				<Grid size={{ xs: 12, md: 5, lg: 5 }} className={styles.rightCol}>
					<div className={styles.formCard}>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.leadForm} noValidate>
							{/* Service Dropdown */}
							<div
								className={styles.customSelectWrapper}
								onMouseEnter={() => setIsDropdownOpen(true)}
								onMouseLeave={() => setIsDropdownOpen(false)}
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<input type="hidden" {...register('service_type')} />
								<div className={styles.inputGroup}>
									<span className={styles.inputIcon}>
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
											<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
										</svg>
									</span>
									<div className={`${styles.inputField} ${styles.hasIcon} ${styles.customSelectHeader}`}>
										<span className={styles.selectedValue}>{watch('service_type')}</span>
										<span className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.arrowOpen : ''}`}>
											<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#717684" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="m6 9 6 6 6-6" />
											</svg>
										</span>
									</div>
								</div>

								{isDropdownOpen && (
									<div className={styles.customDropdownList}>
										{[
											"Pre-Litigation Support",
											"Litigation Support",
											"Collection of Documents",
											"Legal Admin Support",
											"Case Management",
											"Software Management",
											"Legal Research",
											"E-Filing Support"
										].map((option) => (
											<div
												key={option}
												className={`${styles.customDropdownItem} ${watch('service_type') === option ? styles.selectedItem : ''}`}
												onClick={(e) => {
													e.stopPropagation();
													setValue('service_type', option, { shouldValidate: true });
													setIsDropdownOpen(false);
												}}
											>
												{option}
											</div>
										))}
									</div>
								)}
							</div>

							{/* Name Input */}
							<div className={styles.inputGroup}>
								<span className={styles.inputIcon}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
										<circle cx="12" cy="7" r="4" />
									</svg>
								</span>
								<input
									type="text"
									placeholder="Enter your name"
									{...register('name', { required: 'Name is required' })}
									className={`${styles.inputField} ${styles.hasIcon} ${errors.name ? styles.inputError : ''}`}
								/>
							</div>

							{/* Work Email Input */}
							<div className={styles.inputGroup}>
								<span className={styles.inputIcon}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<rect width="20" height="16" x="2" y="4" rx="2" />
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
								</span>
								<input
									type="email"
									placeholder="Enter your work email"
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^\S+@\S+\.\S+$/,
											message: 'Invalid email address',
										},
									})}
									className={`${styles.inputField} ${styles.hasIcon} ${errors.email ? styles.inputError : ''}`}
								/>
							</div>

							{/* Phone Number Input */}
							<div className={styles.inputGroup}>
								<span className={styles.inputIcon}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
									</svg>
								</span>
								<input
									type="tel"
									placeholder="Phone number"
									{...register('phone', { required: 'Phone number is required' })}
									className={`${styles.inputField} ${styles.hasIcon} ${errors.phone ? styles.inputError : ''}`}
								/>
							</div>

							{/* Message / Requirement Input */}
							<div className={styles.inputGroup}>
								<span className={styles.inputIcon}>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
									</svg>
								</span>
								<input
									type="text"
									placeholder="Tell us about your legal requirements"
									{...register('message')}
									className={`${styles.inputField} ${styles.hasIcon}`}
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								disabled={isSubmitting}
								className={styles.submitBtn}
							>
								{isSubmitting ? (
									<CircularProgress size={22} color="inherit" />
								) : (
									'Apply Now'
								)}
							</button>

							{status === 'error' && (
								<p className={styles.errorMsg}>
									{errorMessage || 'Failed to submit. Please try again later.'}
								</p>
							)}
						</form>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default HeroTopBanner;
