import React from 'react';
import { Container, Grid2 as Grid } from '@mui/material';
import { Heading, Animate } from '@/components/common';
import * as styles from './PrivacyPolicy.module.scss';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
	return (
		<section className={styles.privacySection}>
			<Helmet>
				<title>Privacy Policy | Glocal LPO</title>
				<meta
					name="description"
					content="Read Glocal LPO's privacy policy to understand how we collect, use, and protect your personal data in compliance with applicable laws."
				/>
				<meta
					name="keywords"
					content="Glocal LPO privacy policy, legal outsourcing data security"
				/>
			</Helmet>
			<Container maxWidth="lg">
				<Grid container direction="column" className={styles.contentWrapper}>
					<div className={styles.header}>
						<Heading variant="secondary" direction="down">
							Legal Notice
						</Heading>
						<Heading direction="up" component="h1">Privacy Policy</Heading>
						{/* <p className={styles.lastUpdated}>Last Updated: March 6, 2026</p> */}
					</div>

					<Animate.FadeUp className={styles.policyBody}>
						<section className={styles.policySection}>
							<p>
								Glocal LPO (“Glocal LPO”, “we”, “our”, or “us”) operates in the
								business of legal process outsourcing, litigation support
								services, legal research, drafting assistance, document review,
								compliance support, and related back-office legal services, as
								further described in our Terms and Conditions (“Terms”).
							</p>
							<p>
								This Privacy Policy explains how we collect, use, store,
								process, and protect personal data when you:
							</p>
							<ul className={styles.dataList}>
								<li>Visit our website</li>
								<li>Submit an inquiry or request information</li>
								<li>Engage us for legal support services</li>
								<li>
									Work with us as a law firm client, attorney, vendor,
									consultant, or partner
								</li>
								<li>
									Communicate with us in connection with our services
									(collectively, the “Services”).
								</li>
							</ul>
							<p>
								Confidentiality, data security, and professional integrity are
								fundamental to our operations. We are committed to handling all
								personal and client data responsibly, securely, and in
								compliance with applicable data protection laws.
							</p>
							<p>
								By accessing our website or engaging our Services, you
								acknowledge that you have read and understood this Policy.
							</p>

							<h3 className={styles.sectionHeading}>1. ABOUT US</h3>
							<p>
								If you have any questions regarding this Privacy Policy or our
								data practices, you may contact us at: <br />
								<strong>Email:</strong>{' '}
								<a
									href="mailto:privacy@glocallpo.com"
									target="_blank"
									rel="noreferrer"
									className={styles.policyLink}
								>
									privacy@glocallpo.com
								</a>
								<br />
								<strong>Website:</strong>{' '}
								<a
									href="https://www.glocallpo.com/"
									target="_blank"
									rel="noreferrer"
									className={styles.policyLink}
								>
									glocallpo.com
								</a>
							</p>
							<p>
								If required under applicable law, we may designate a Grievance
								Officer or Data Protection Contact for formal inquiries.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>2. SCOPE OF THIS POLICY</h3>
							<p>This Policy applies to:</p>
							<ul className={styles.dataList}>
								<li>Visitors to our website</li>
								<li>Law firms and attorneys engaging our Services</li>
								<li>Prospective and existing clients</li>
								<li>Consultants, contractors, and vendors</li>
								<li>
									Any individual whose personal data is processed in connection
									with our Services
								</li>
							</ul>
							<p>
								For clarity, references to “you” include all the above
								categories.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								3. PERSONAL DATA WE COLLECT
							</h3>
							<p>
								We collect only the data necessary to provide structured and
								secure legal support services.
							</p>

							<div className={styles.subSection}>
								<h4 className={styles.subHeading}>
									A. If You Are a Client or Law Firm Representative
								</h4>
								<p>We may collect:</p>
								<strong>Contact Information:</strong>
								<ul>
									<li>Name</li>
									<li>Business email address</li>
									<li>Phone number</li>
									<li>Firm name</li>
									<li>Business address</li>
								</ul>
								<strong>Professional Information</strong>
								<ul>
									<li>Job title</li>
									<li>Bar/registration details (where applicable)</li>
									<li>Case-related contact information</li>
								</ul>
								<strong>Case / Project Information</strong>
								<ul>
									<li>Non-confidential case details</li>
									<li>Documents shared for review, drafting, or research</li>
									<li>Litigation materials</li>
									<li>Discovery data</li>
									<li>Compliance-related information</li>
									<li>Instructions provided by you</li>
								</ul>
								<strong>Technical Data</strong>
								<ul>
									<li>IP address</li>
									<li>Browser type</li>
									<li>Device information</li>
									<li>Access logs</li>
									<li>Website usage data</li>
								</ul>

								<strong>Communication Data</strong>
								<ul>
									<li>Emails</li>
									<li>Meeting notes</li>
									<li>Call records</li>
									<li>Project correspondence</li>
								</ul>
							</div>
							<div className={styles.subSection}>
								<h4 className={styles.subHeading}>
									B. If You Are a Consultant, Contractor, or Vendor
								</h4>
								<p>We may collect:</p>
								<strong>Contact Information:</strong>
								<ul>
									<li>Name and contact details</li>
									<li>Business registration information</li>
									<li>Tax and billing details</li>
									<li>Bank details for payments</li>
									<li>Professional credentials</li>
									<li>Service agreements</li>
									<li>Compliance documentation</li>
								</ul>
							</div>
							<div className={styles.subSection}>
								<h4 className={styles.subHeading}>
									C. Sensitive or Confidential Information
								</h4>
								<p>
									Given the nature of legal services, we may process
									confidential documents provided by clients. Such information
									is handled strictly under:
								</p>
								<ul>
									<li>Contractual confidentiality obligations</li>
									<li>Data security protocols</li>
									<li>Access-controlled systems</li>
									<li>Need-to-know principles</li>
								</ul>
								<p>
									We do not use confidential client data for marketing or
									unrelated purposes.
								</p>
							</div>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								4. HOW WE COLLECT INFORMATION
							</h3>
							<p>We collect data through:</p>
							<div className={styles.subSection}>
								<h4 className={styles.subHeading}>Direct Interaction</h4>
								<p>When you:</p>
								<ul>
									<li>Submit inquiry forms</li>
									<li>Sign service agreements</li>
									<li>Share case materials</li>
									<li>Communicate via email, calls, or meetings</li>
								</ul>
							</div>
							<div className={styles.subSection}>
								<h4 className={styles.subHeading}>Automated Technologies</h4>
								<p>Through:</p>
								<ul>
									<li>Cookies</li>
									<li>Server logs</li>
									<li>Website analytics tools</li>
								</ul>
							</div>
							<div className={styles.subSection}>
								<h4 className={styles.subHeading}>Third Parties</h4>
								<p>We may receive data from:</p>
								<ul>
									<li>Authorized client representatives</li>
									<li>Payment processors</li>
									<li>Professional advisors</li>
									<li>Compliance partners</li>
									<li>Public records (where legally permissible)</li>
								</ul>
							</div>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								5. HOW WE USE YOUR INFORMATION
							</h3>
							<p>
								We use personal data for legitimate business and contractual
								purposes, including:
							</p>
							<ul className={styles.dataList}>
								<li>Delivering legal support services</li>
								<li>Drafting, research, and document review</li>
								<li>Managing client accounts</li>
								<li>Coordinating project workflows</li>
								<li>Ensuring quality control</li>
								<li>Processing payments and invoices</li>
								<li>Maintaining internal records</li>
								<li>Improving operational efficiency</li>
								<li>Complying with legal and regulatory obligations</li>
								<li>Preventing fraud or misuse</li>
								<li>Communicating service updates</li>
							</ul>
							<p>We do not sell personal data.</p>
						</section>
						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								6. CONFIDENTIALITY & PROFESSIONAL STANDARDS
							</h3>
							<p>
								We operate with strict confidentiality principles aligned with
								industry best practices for legal outsourcing services.
							</p>
							<p>Access to client data is:</p>
							<ul className={styles.dataList}>
								<li>Restricted to authorized personnel</li>
								<li>Protected through role-based permissions</li>
								<li>Monitored through internal supervision systems</li>
							</ul>
							<p>
								Where required, we execute confidentiality agreements (NDAs) and
								data processing agreements with clients.
							</p>
						</section>
						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>7. DATA SECURITY</h3>
							<p>
								We implement appropriate technical and organizational measures,
								including:
							</p>
							<ul className={styles.dataList}>
								<li>Encrypted communications</li>
								<li>Secure servers</li>
								<li>Access control systems</li>
								<li>Password-protected environments</li>
								<li>Controlled document handling</li>
								<li>Internal supervision protocols</li>
							</ul>
							<p>
								While no system can guarantee absolute security, we continuously
								review and enhance our safeguards.
							</p>
						</section>
						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>8. DATA RETENTION</h3>
							<p>We retain personal data only for as long as necessary to:</p>
							<ul className={styles.dataList}>
								<li>Fulfill contractual obligations</li>
								<li>Provide Services</li>
								<li>Comply with legal requirements</li>
								<li>Resolve disputes</li>
								<li>Enforce agreements</li>
							</ul>
							<p>
								After retention periods expire, data is securely deleted or
								anonymized.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								9. DISCLOSURE OF INFORMATION
							</h3>
							<p>We may share information with:</p>
							<ul className={styles.dataList}>
								<li>Authorized team members</li>
								<li>
									Subcontracted professionals (under confidentiality
									obligations)
								</li>
								<li>Technology service providers</li>
								<li>Payment processors</li>
								<li>Legal or compliance advisors</li>
								<li>Regulatory authorities (if required by law)</li>
							</ul>
							<p>
								All third parties are required to maintain appropriate
								confidentiality and security standards.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								10. INTERNATIONAL DATA TRANSFERS
							</h3>
							<p>
								As we may support clients globally, including in the United
								States and Canada, your information may be processed or stored
								in jurisdictions outside your country of residence.
							</p>
							<p>
								By using our Services, you consent to such transfers in
								accordance with applicable data protection laws.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>11. COOKIES</h3>
							<p>Our website may use cookies and similar technologies to:</p>
							<ul className={styles.dataList}>
								<li>Improve user experience</li>
								<li>Analyze website traffic</li>
								<li>Enhance functionality</li>
							</ul>
							<p>
								You may control cookie settings through your browser
								preferences.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>12. YOUR RIGHTS</h3>
							<p>Subject to applicable law, you may have the right to:</p>
							<ul className={styles.dataList}>
								<li>Access your personal data</li>
								<li>Request correction of inaccurate information</li>
								<li>Request deletion (where legally permissible)</li>
								<li>Object to certain processing activities</li>
								<li>Withdraw consent (where applicable)</li>
							</ul>
							<p>Requests may be submitted via our contact email.</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>13. THIRD-PARTY LINKS</h3>
							<p>
								Our website may contain links to third-party websites. We are
								not responsible for the privacy practices of external platforms.
								We recommend reviewing their privacy policies separately.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								14. BUSINESS TRANSITIONS
							</h3>
							<p>
								In the event of a merger, acquisition, restructuring, or asset
								transfer, personal data may be transferred as part of the
								transaction, subject to continued confidentiality protections.
							</p>
						</section>

						<section className={styles.policySection}>
							<h3 className={styles.sectionHeading}>
								15. UPDATES TO THIS POLICY
							</h3>
							<p>
								We may update this Privacy Policy periodically to reflect
								operational, legal, or regulatory changes. Updated versions will
								be published on our website.
							</p>
							<p>
								Continued use of our Services after updates constitutes
								acceptance of the revised Policy.
							</p>
						</section>
					</Animate.FadeUp>
				</Grid>
			</Container>
		</section>
	);
};

export default PrivacyPolicy;
