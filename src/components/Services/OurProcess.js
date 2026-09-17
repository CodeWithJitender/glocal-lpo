import React from "react";
import {
	Container,
	Grid2 as Grid
} from "@mui/material";

import { Heading, Animate } from '@/components/common';

import {
	Clarity,
	Contract,
	Interview,
	Invoice,
	MeetingSchedule,
	ShareResume,
	WritingPen
} from "@/components/Icons";

import ProcessCard from "./ProcessCard";

import * as styles from "./OurProcess.module.scss";

const OurProcess = () => {
	return (
		<section className={styles.outProcessSection}>
			<Container maxWidth="xl">
				<Grid
					container
					className={styles.commonContainer}
					spacing={3}
					alignItems="flex-start"
				>
					<Grid size={12}>
						<Heading className={styles.heading}>How Our Process Works</Heading>
						<Animate.FadeUp direction="up" className={styles.formText}>
							We deliver a seamless onboarding experience with precision and transparency at every step.<br/>Because in law, every detail counts- and we treat it that way.
						</Animate.FadeUp>
					</Grid>
					<Grid size={12}>
						<div className={styles.timeline}>
							<ProcessCard
								step="STEP 01."
								title="Assessment and Meeting Scheduling"
								content="We begin by understanding your specific legal support needs. Through strategic consultations, we tailor our services to ensure a perfect match for your firm's workflow and case requirements."
								icon={<MeetingSchedule />}
							/>
							<ProcessCard
								step="STEP 02."
								title="Evaluation & Resume Sharing"
								content="We provide detailed resumes and skill evaluations of our highly trained lawyers and paralegals, ensuring you get the right expertise for your legal practice."
								icon={<ShareResume />}
							/>
							<ProcessCard
								step="STEP 03."
								title="Client-Initiated Paralegal Interviews"
								content="We facilitate one-on-one interviews, allowing you to handpick the best-fit associate or paralegal who aligns with your firm's standards, style, and specialization."
								icon={<Interview />}
							/>
							<ProcessCard
								step="STEP 04."
								title="Contract Issuance & Signature"
								content="Once you've selected your paralegal, we finalize a clear, structured contract that ensures mutual expecta-tions, confidentiality, and service transparency."
								icon={<Contract />}
							/>
							<ProcessCard
								step="STEP 05."
								title="Credentials Disclosure to the Client"
								content="We provide complete credential verification and background details of our lawyers and paralegals- ensuring confidence, security, and compliance before engagement begins."
								icon={<Clarity />}
							/>
							<ProcessCard
								step="STEP 06."
								title="Client Prepayment Invoicing"
								content="With a clear, upfront invoicing process, we ensure a smooth financial setup - so you can get your paralegal team up and running without delays."
								icon={<Invoice />}
							/>
						</div>
					</Grid>
				</Grid>
				<Grid className={styles.commonContainer}>
					<div className={styles.sectionDivider}><WritingPen /></div>
				</Grid>
			</Container>
		</section>
	);
};

export default OurProcess;
