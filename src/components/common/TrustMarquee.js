import React from 'react';
import * as styles from './TrustMarquee.module.scss';

const trustItems = [
	{
		id: 'india-top',
		text: "India's #1 & Most Trusted Legal Outsourcing Firm",
		icon: (
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
			</svg>
		),
	},
	{
		id: 'iso-certified',
		text: 'ISO 27001 & ISO 9001 Certified Operations',
		icon: (
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				<path d="m9 12 2 2 4-4" />
			</svg>
		),
	},
	{
		id: 'hipaa-compliant',
		text: '100% HIPAA Compliant & Ironclad Data Privacy',
		icon: (
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
				<path d="M7 11V7a5 5 0 0 1 10 0v4" />
			</svg>
		),
	},
	{
		id: 'attorneys-trusted',
		text: 'Trusted by 800+ US & Global Attorneys',
		icon: (
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		),
	},
	{
		id: 'rapid-onboard',
		text: 'Onboard Vetted Paralegals in 60 Minutes',
		icon: (
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
			</svg>
		),
	},
	{
		id: 'accuracy-support',
		text: '99% Documentation Accuracy • 24/7 Dedicated Support',
		icon: (
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="10" />
				<circle cx="12" cy="12" r="6" />
				<circle cx="12" cy="12" r="2" />
			</svg>
		),
	},
];

const TrustMarquee = ({ className = '' }) => {
	const renderItems = (keyPrefix, ariaHidden = false) => (
		<div
			className={styles.marqueeTrack}
			aria-hidden={ariaHidden ? 'true' : undefined}
		>
			{trustItems.map((item, index) => (
				<div key={`${keyPrefix}-${item.id || index}`} className={styles.marqueeItem}>
					<span className={styles.itemIcon}>{item.icon}</span>
					<span className={styles.itemText}>{item.text}</span>
					<span className={styles.itemSeparator}>✦</span>
				</div>
			))}
		</div>
	);

	return (
		<div className={`${styles.trustMarqueeContainer} ${className}`} role="region" aria-label="Trust highlights ticker">
			<div className={styles.marqueeInner}>
				{renderItems('primary', false)}
				{renderItems('clone', true)}
			</div>
		</div>
	);
};

export default TrustMarquee;
