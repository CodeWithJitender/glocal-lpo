import React from 'react';
import { Briefcase, HeartPulse, UsersRound, HardHat, Scroll, Building, Users, Plane, Lightbulb, Gavel, Landmark, FileSignature } from 'lucide-react';

import serviceImage1 from '@/assets/images/service-image-1.jpg';
import serviceImage2 from '@/assets/images/service-image-2.jpg';
import serviceImage3 from '@/assets/images/service-image-3.jpg';
import serviceImage4 from '@/assets/images/service-image-4.jpg';
import serviceImage5 from '@/assets/images/service-image-5.jpg';
import serviceImage6 from '@/assets/images/service-image-6.jpg';
import serviceImage7 from '@/assets/images/service-image-7.jpg';
import serviceImage8 from '@/assets/images/service-image-8.jpg';
import serviceImage9 from '@/assets/images/service-image-9.jpg';
import serviceImage10 from '@/assets/images/service-image-10.jpg';
import serviceImage11 from '@/assets/images/service-image-11.jpg';
import serviceImage12 from '@/assets/images/service-image-12.jpg';

import { routes } from './routesPath';

export const servicesInfo = {
	'business-litigation-support': {
		title: 'Business Litigation Support',
		metaTitle: 'Litigation Support Services for Law Firms | Glocal LPO',
		metaDescription: 'Glocal LPO delivers reliable litigation support services for law firms, reducing costs while ensuring fast turnaround and compliance-driven legal assistance.',
		metaKeywords: 'Litigation support services, business legal solutions',
		heading: (
			<>
				Strategic Litigation <br /> Support Services
			</>
		),
		accordionTitle: 'Expert Business Litigation Support Services for Every Stage:',
		background: require('../assets/images/services-bg/business-litigation.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'Accuracy is the foundation of our approach — we perform thorough document reviews to meticulously safeguard your business interests.',
			smallDesription:
				'We provide comprehensive litigation support across all facets of business law, including meticulous document review, discovery analysis, contract disputes, intellectual property matters, shareholder conflicts, franchise agreement issues, non-compete enforcement, and more. Our goal is to ensure your business interests are safeguarded at every stage of the legal process, with strategies designed to protect and advance your rights.',
		},
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Business Litigation Solutions',
				},
				content: {
					heading:
						'Precision is key — we meticulously review every document to safeguard your interests.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'With a track record of handling complex business litigation matters, we leverage deep legal expertise and strategic insight to protect your business interests and resolve disputes efficiently.',
					listItems: [
						'Business Litigation Support: Comprehensive assistance for all business-related legal challenges.',
						'Document Review: Thorough review and analysis of key documents to ensure accuracy and compliance.',
						'Discovery Documents Analysis: In-depth examination of discovery documents to uncover critical information.',
						'Business Disputes & Litigation: Expert support in resolving a wide range of business conflicts.',
						'Contract Disputes: Resolving disagreements related to breach, interpretation, and enforcement of contracts.',
						'Breach of Contract: Legal strategies to address violations of contract terms and protect your interests.',
						'Business Partnership Disputes: Mediation and litigation support for conflicts between business partners.',
						'Intellectual Property Disputes: Defending and enforcing intellectual property rights, including patents, trademarks, and copyrights.',
						'Shareholder Disputes: Legal guidance and representation in shareholder conflicts, ensuring fair resolution.',
						'Franchise Agreement Disputes: Resolving conflicts related to franchise agreements, ensuring compliance with terms.',
						'Non-Compete Agreements: Legal support for enforcing or challenging non-compete clauses in employment contracts.',
					],
				},
			},
		],
	},
	'personal-injury': {
		title: 'Personal Injury',
		metaTitle: 'Personal Injury Paralegal Support for Law Firms | Glocal LPO',
		metaDescription: 'Need reliable personal injury paralegal support? Glocal LPO helps law firms streamline claims, organize files, and prepare cases efficiently.',
		metaKeywords: 'personal injury paralegal, personal injury legal assistant',
		heading: (
			<>
				Powerful Personal <br /> Injury Paralegal <br /> Support
			</>
		),
		accordionTitle: 'Seamless Personal Injury Paralegal & Legal Assistant Services:',
		background: require('../assets/images/services-bg/personal-injury.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.',
			smallDesription:
				'At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.',
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Motor Vehicle Accidents',
				description: 'Car, truck, bicycle and motorcycle accident claims.',
				image: require('../assets/images/service-images/personal-injury/Motor-Vehicle-Accidents.jpg'),
			},
			{
				id: '02',
				title: 'Medical Negligence & Malpractice',
				description: 'Ensuring Compliance with Legal Standards.',
				image: require('../assets/images/service-images/personal-injury/Medical-Negligence.jpg'),
			},
			{
				id: '03',
				title: 'Slip & Fall or Trip & Fall Cases',
				description: 'Highlighting Maximum Injury Compensation.',
				image: require('../assets/images/service-images/personal-injury/Slip-and-Fall-or-Trip.jpg'),
			},
			{
				id: '04',
				title: 'Dog Bite',
				description:
					'Nerve damage, disfigurement, or long-term medical issues.',
				image: require('../assets/images/service-images/personal-injury/Nerve-damage-disfigurement.jpg'),
			},
			{
				id: '05',
				title: 'Brain & Spinal Cord Injuries',
				description: 'Securing Justice for Those with Devastating Injuries.',
				image: require('../assets/images/service-images/personal-injury/Brain-and-Spinal-Cord.jpg'),
			},
			{
				id: '06',
				title: 'Workplace & Construction Accidents',
				description: 'Protecting Legal Rights for Workplace Injuries.',
				image: require('../assets/images/service-images/personal-injury/Workplace-and-Construction-Accidents.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Client Onboarding & Case Merit Evaluation',
				},
				content: {
					heading: 'Trust begins with a compelling first impression',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						"Flexible, Scalable Solutions - We can manage large caseloads across personal injury, medical malpractice, workers' compensation, and other complex legal areas with expert legal review and a thorough pre-screening.",
					listItems: [
						'Client Intakes',
						'Inquiries via phone/email',
						'Fact checks',
						'Filing on various case management tools',
						'Client follow-ups & document collection',
						'Letter of representation (LOR)',
						'Workflow administration',
						'Medical authorization letters (HIPPA)',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Medical Record Retrieval & Summarization',
				},
				content: {
					heading:
						"Medical records - the linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'We streamline medical documentation process for law firms by reducing review time by half. We specifically hire competent healthcare professionals to assist the paralegals.',
					listItems: [
						'Retrieving & organizing medical records',
						'Patient Record Extraction',
						'Summarizing diagnosis & treatments',
						'Creating medical chronologies & injury assessments',
						'Medical History Compilation',
						'Medical Billing Summarization',
						'Privilege Logs',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Document Drafting & Discovery Support',
				},
				content: {
					heading: 'Precision in Words, Irrefutable Outcomes.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						"Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						'Demand letters',
						'Mediation position papers',
						'Petitions',
						'Complaints & Pleadings',
						'Motions',
						'Drafting & responding to interrogatories',
						'Requests for the production of documents',
						'Requests for admissions',
						'Interrogatories',
						'Witness and exhibit lists',
						'Subpoenas',
						'Deposition summaries',
						'Witness Expert Summaries',
						'Initial & Expert Disclosures',
						'Case and File Summaries',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Legal Research, Case Law Review & Legal Interpretation',
				},
				content: {
					heading:
						'Well-Substantiated Research, Relevant Precedents, Strongest Claims.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'In-depth knowledge in platforms like Westlaw, Lexis Plus AI, Bloomberg Law, Clio, and many more...',
					listItems: [
						'Analyzing case law & statutes to support legal arguments',
						"Drafting legal memoranda for attorneys' reference",
						'Identifying relevant precedents to build a stronger case strategy',
						'Researching on powerful and authentic platforms',
						'Making Research ready before you arrive in your office',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title: 'Litigation & Trial Support',
				},
				content: {
					heading: 'Well-equipped legal minds secure success.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Glocal LPO sets the gold standard in legal outsourcing by engaging only the most qualified law graduates and seasoned lawyers for complex litigation assignments.',
					listItems: [
						'Pre-trial motion drafting',
						'Exhibit preparation & evidence organization',
						'Jury instruction drafting',
						'Trial logistics coordination',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Administrative Tasks',
				},
				content: {
					heading:
						'Diligent Business administration underpins financial accountability.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'To secure your ongoing liquidity while eliminating unnecessary red tapes we carefully select professional having experience in supporting legal functions with unmatched expertise.',
					listItems: [
						'Legal time tracking & expense management',
						'Invoice preparation & compliance checks',
						'Billing audits to prevent revenue leakage',
					],
				},
			},
		],
	},
	'employee-law': {
		title: 'Employment Law',
		metaTitle: 'Employment Law Outsourcing Solutions | Glocal LPO',
		metaDescription: 'Glocal LPO offers employment law outsourcing services including legal research, contract drafting, and compliance support for attorneys.',
		metaKeywords: 'employment law outsourcing, outsourcing employment law',
		heading: (
			<>
				Ensuring Fair Workplaces <br /> & Compliance
			</>
		),
		accordionTitle: 'Trusted Outsourcing Employment Law Services:',
		background: require('../assets/images/services-bg/employement-law.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'We provide comprehensive employment law support to attorneys across the U.S., ensuring businesses and employees navigate complex legal landscapes with confidence.',
			smallDesription:
				'Our team of experienced Paralegals assist in all aspects of employment law, from compliance and contract drafting to litigation support and workplace dispute resolution. With in-depth expertise in federal and state employment regulations, we deliver precise, strategic, and efficient legal assistance to safeguard workplace rights and employer interests.',
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Workplace Discrimination & Harassment',
				description: 'Title VII, ADA, ADEA, EEOC claims',
				image: require('../assets/images/service-images/employee-law/Workplace-Discrimination-and-Harassment.jpg'),
			},
			{
				id: '02',
				title: 'Wage & Hour Compliance',
				description: 'FLSA, overtime disputes, misclassification issues.',
				image: require('../assets/images/service-images/employee-law/Wage-and-Hour-Compliance.jpg'),
			},
			{
				id: '03',
				title: 'Wrongful Termination & Retaliation',
				description: 'Whistleblower protection, at-will exceptions.',
				image: require('../assets/images/service-images/employee-law/Wrongful-Termination.jpg'),
			},
			{
				id: '04',
				title: 'Employment Contracts & Agreements',
				description: 'Offer letters, NDAs, non-compete clauses.',
				image: require('../assets/images/service-images/employee-law/Employment-Contracts.jpg'),
			},
			{
				id: '05',
				title: 'Workplace Investigations & Compliance',
				description: 'Employee handbooks, training policies.',
				image: require('../assets/images/service-images/employee-law/Workplace-Investigations.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Pre-Litigation & Case Investigation',
				},
				content: {
					heading: 'Deduce, Defend, and Resolve - Before the Game is Afoot!',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our keen-eyed paralegals, much like a well-trained Baker Street force, leave no stone unturned in the realm of employment law—be it ensuring compliance, drafting contracts, aiding in litigation, or unraveling the mysteries of workplace disputes with precision and tact.',
					listItems: [
						'Legal Research & Case Assessment: Analyzing employment claims, reviewing company policies, and assessing regulatory compliance.',
						'EEOC & State Agency Filings: Drafting complaints, position statements, and response to agency investigations.',
						'Discovery Requests & Deposition Preparation: Drafting interrogatories, requests for production, and preparing witnesses.',
						'Administrative Hearings Representation: Support in proceedings before labor boards, unemployment agencies, and OSHA.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Litigation & Motion Practice',
				},
				content: {
					heading: 'Building rock-solid Cases, with no loose ends!',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our team of experts carefully analyzes legal disputes, builds strong arguments, and ensures every motion is strategically planned to achieve the best outcome in employment law cases.',
					listItems: [
						'Complaints & Answer to Complaint: Drafting wrongful termination, harassment, discrimination, and wage dispute claims.',
						'Motions for Summary Judgment & Dismissals: Strategizing legal defenses for employers or claimants.',
						'Class Action Support: Wage and hour disputes, systemic discrimination, and mass layoff litigation.',
						'Trial Preparation & Courtroom Support: Evidence compilation, trial briefs, and exhibit preparation.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Settlement & Resolution',
				},
				content: {
					heading:
						'Through reason and dialogue, justice finds its rightful end.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'With precision, we dissect every legal dispute, construct unshakable arguments, and draft each motion with strategic foresight—ensuring that justice is not merely pursued, but logically and inevitably secured.',
					listItems: [
						'Mediation & Arbitration Agreements: Drafting enforceable alternative dispute resolution agreements.',
						'Severance & Settlement Negotiations: Structuring fair and enforceable separation packages.',
						'Final Judgments & Appeals: Identifying legal errors, preparing appellate briefs, and motion practice.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title:
						'Employment Compliance & Advisory Services / Workplace Policies & Training',
				},
				content: {
					heading: "By law's fair hand, we guard and guide.",
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'WE have the ability to scale resources up or down based on workload.',
					listItems: [
						'Employee Handbooks & Policies: Drafting compliant and updated workplace policies.',
						'Harassment & Discrimination Training: Ensuring legal compliance with Title VII and state anti-discrimination laws.',
						'OSHA & Workplace Safety Compliance: Risk mitigation strategies, safety protocols, and regulatory adherence.',
						'Whistleblower & Retaliation Policies: Ensuring protections under SOX, Dodd-Frank, and federal statutes.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title:
						'Employment Compliance & Advisory Services / Wage & Hour Compliance',
				},
				content: {
					heading: 'Balancing Rights, Regulating Wages, Ensuring Justice.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our seasned attrneys keep up with evolving wage laws and industry standards.',
					listItems: [
						'FLSA & State Wage Laws: Ensuring proper worker classification, overtime compliance, and payroll audits.',
						'Independent Contractor Agreements: Structuring legally compliant work arrangements.',
						'Collective Bargaining & Union Relations: Advising on NLRA compliance and union contract negotiations.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title:
						'Employment Compliance & Advisory Services / Employee Benefits & Leave Policies',
				},
				content: {
					heading: 'Rights and Benefits for Every Worker!',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						"We specialize in jurisdiction-specific employment laws, ensuring our legal support withstands the highest level of scrutiny and  aid in protecting employee's rights effectively.",
					listItems: [
						'FMLA & ADA Compliance: Structuring leave policies that comply with federal and state laws.',
						'ERISA & Retirement Plan Compliance: Drafting benefit plans and ensuring regulatory compliance.',
						'Paid Leave & Unemployment Benefits: Advising on evolving state and federal paid leave mandates.',
					],
				},
			},
		],
	},
	'workers-compensation': {
		title: "Workers' Compensation & Workplace Injury Support",
		metaTitle: 'Best Workers Compensation Law Firms | Glocal LPO',
		metaDescription: 'Looking for reliable workers compensation law firms? Get expert legal guidance and claim the compensation you deserve after a workplace injury.',
		metaKeywords: 'workers compensation law firms, workers compensation florida',
		heading: (
			<>
				Justice endures, even in toil <br /> and trial.
			</>
		),
		accordionTitle: 'Expert Support from Workers Compensation Law Firms:',
		background: require('../assets/images/services-bg/workers-compensation.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				"Our comprehensive paralegal support to attorneys handling workers' compensation cases across the U.S. ",
			smallDesription:
				"Our experienced legal Paralegals, assist in all aspects of workplace injury claims, from case preparation and medical record analysis to litigation support and settlement negotiations. With expertise in federal and state workers' compensation laws, we deliver precise, strategic, and efficient assistance to help attorneys advocate for their clients, whether employees seeking benefits or employers defending claims.",
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Claim Filing & Case Management',
				description:
					'Initial filings, documentation, and administrative procedures.',
				image: require('../assets/images/service-images/workers-compensation/Claim-Filing.jpg'),
			},
			{
				id: '02',
				title: 'Employer Defense',
				description:
					'Fraudulent claims, return-to-work policies, and premium disputes.',
				image: require('../assets/images/service-images/workers-compensation/Employer-Defense.jpg'),
			},
			{
				id: '03',
				title: 'Medical Evidence & Disability Evaluations',
				description:
					' IME coordination, medical record reviews, and disability rating analysis.',
				image: require('../assets/images/service-images/workers-compensation/Medical-Evidence.jpg'),
			},
			{
				id: '04',
				title: 'Third-Party Liability Claims',
				description: 'Subrogation and concurrent personal injury claims.',
				image: require('../assets/images/service-images/workers-compensation/Third-Party-Liability-Claims.jpg'),
			},
			{
				id: '05',
				title: 'Settlement & Appeals Support',
				description:
					'Benefit calculations, mediation preparation, and appellate briefs.',
				image: require('../assets/images/service-images/workers-compensation/Settlement-and-Appeals.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Claim Preparation & Investigation',
				},
				content: {
					heading: 'Diligence in Inquiry, Precision in Justice.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our Paralegals have been trained by attorneys from maximum jurisdictions including Hawaii.',
					listItems: [
						'Legal Research & Case Assessment: Conducting research on workplace injury claims, employer policies, and state-specific regulations.',
						"Claim Form Preparation & Filings: Assisting in completing and filing workers' compensation claims and employer responses.",
						'Medical Record Review & Evidence Compilation: Summarizing treatment records, accident reports, and impairment ratings.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Litigation & Motion Practice',
				},
				content: {
					heading: 'No Claim Unexamined, No Truth Overlooked.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our paralegals are law graduates that have worked in diversified legal matters and suits.',
					listItems: [
						'Petitions & Responses: Assisting attorneys in drafting petitions, motions, and responses to benefit denials.',
						'Depositions & Discovery: Drafting interrogatories, document requests, and preparing deposition outlines.',
						'Medical & Vocational Expert Coordination: Assisting in obtaining expert opinions and vocational assessments.',
						'Trial Preparation & Courtroom Support: Compiling evidence, drafting trial briefs, and preparing exhibits.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Settlement & Appeals Support',
				},
				content: {
					heading:
						'Resolving Disputes with Logic, Pursuing Justice with Deduction.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'The team have witnessed live settlemet disputes done by the attorneys.',
					listItems: [
						'Settlement Agreements & Benefit Calculations: Assisting in structuring fair and legally sound compensation agreements.',
						'Mediation & Arbitration Support: Preparing documents and summaries for alternative dispute resolution proceedings.',
						'Appeal Briefs & Post-Trial Motions: Conducting legal research and assisting in drafting appellate filings.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Employer Compliance & Risk Management',
				},
				content: {
					heading: 'We uphold order and mitigate uncertainties.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'The Assciates are trained in OSHA-compliant safety policies, protocols, and training programs.',
					listItems: [
						'Workplace Safety & OSHA Compliance: Assisting in reviewing employer safety policies and regulatory adherence.',
						'Return-to-Work & Light Duty Policies: Supporting structured return-to-work programs and accommodations.',
						'Fraud Investigation & Defense: Assisting in identifying fraudulent claims and employer liability risks.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title: 'Medical & Disability Benefit Coordination',
				},
				content: {
					heading:
						'Ensuring dignity, support, and security for every worker in need.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our team of healthcare proofessionals suppoort the attorneys in assessing complex medical recrds.',
					listItems: [
						'Independent Medical Evaluations (IME) Support: Coordinating medical evaluations and obtaining expert testimony.',
						'Temporary & Permanent Disability Benefits: Assisting in calculations and disputes over benefit entitlements.',
						'Vocational Rehabilitation & Retraining Programs: Researching alternative employment and retraining options for injured workers.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Insurance & Third-Party Liability Matters',
				},
				content: {
					heading:
						'Protecting rights, ensuring accountability, and securing a just future.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Under the guidance of seasoned attorneys, our paralegals leverage years of experience to assist U.S. law firms in safeguarding the rights of both injured workers and employers with precision and expertise.',
					listItems: [
						'Subrogation & Third-Party Claims: Assisting attorneys in identifying responsible third parties for cost recovery.',
						"Workers' Compensation Insurance Disputes: Supporting attorneys in premium audits and policy coverage issues.",
					],
				},
			},
		],
	},
	'estate-planning-probate': {
		title: 'Estate Planning & Probate',
		metaTitle: 'Estate Planning and Probate Services for Law Firms | Glocal LPO',
		metaDescription: 'Glocal LPO provides estate planning and probate services for law firms, including wills, trusts, drafting, and estate administration support.',
		metaKeywords: 'estate planning and probate, estate planning laws',
		heading: (
			<>
				Your Client’s Legacy, <br />
				Safeguarded by <br />
				Estate Planning Laws
			</>
		),
		accordionTitle: 'Guiding You Through Estate Planning & Probate Services:',
		background: require('../assets/images/services-bg/estate-planning.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				"Estate planning isn't just paperwork—it's a protective strategy. ",
			smallDesription:
				"We craft tailored documents that safeguard assets and minimize risk. When probate begins, our expertise ensures a smooth transition—handling court procedures, validating wills, and managing claims with precision. From planning to resolution, we protect inheritances, expedite the process, and ensure full legal compliance—securing your client's legacy at every step.",
		},
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Estate Planning',
				},
				content: {
					heading: 'Our Brilliant Lawyers draft superior Courtroom Documents',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						"Backed by seasoned estate planning specialists, we safeguard your clients' interests while delivering efficient, accurate, and hassle-free probate back-end support.",
					listItems: [
						'Revocable Living Trusts- Flexible legal arrangement efficiently done to avoid probate',
						'Irrevocable Trusts - Shielding assets from creditors and lawsuits.',
						'Last Will and Testament - Ensuring wills are compliant with Estate Planning laws. ',
						'Durable Power of Attorney - Expertly crafted POAs ensuring secure delegation of financial and legal authority.',
						"Health Care Directives - Tailored healthcare directives that reflect client's medical wishes with legal clarity.",
						'HIPAA Authorization Forms - Regulation-compliant authorizations enabling smooth access to medical records.',
						'Pour-Over Wills - Facilitating seamless transfer of non-trust assets to beneficiaries upon death.',
						'Living Wills - Explicitly documented medical preferences for a secure and clear end-of-life plan.',
						'Beneficiary Designations - Well-structured records guaranteeing direct and efficient beneficiary asset distribution.',
						'Guardianship Designations - Official designation of reliable guardians to ensure the care and security of minors and dependents.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Probate',
				},
				content: {
					heading: 'Seamless Probate Documents prepped without any Pitfalls',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Ensuring smooth estate transitions with expert-backed, accurate, and efficient probate support, protecting your clients every step of the way.',
					listItems: [
						'Petition for Probate - Assist with drafting court petitions to initiate probate and validate wills seamlessly.',
						'Letters Testamentary / Letters of Administration - Precise document preparation with the available documents to secure court approval for estate management.',
						'Inventory and Appraisal - Detailed asset documentation and valuation to ensure accurate estate accounting.',
						'Notice to Creditors - Timely preparation and filing of legal notices to manage estate liabilities efficiently.',
						'Accounting and Final Distribution - Comprehensive estate accounting and final asset distribution reports, ensuring compliance.',
						'Petition for Final Settlement - Flawless documentation to close probate smoothly and distribute assets per court approval.',
						'Waivers and Consents - Professionally prepared legal waivers to streamline estate administration and avoid disputes.',
						'Claims Against Estate - Efficient handling of creditor claims, ensuring proper validation and resolution.',
						'Affidavits of Heirship - Legally sound affidavits to establish heirs and facilitate estate transfers without delays.',
					],
				},
			},
		],
	},
	'real-estate-litigation': {
		title: 'Real Estate',
		metaTitle: 'Real Estate Litigation Law Services for Law Firms | Glocal LPO',
		metaDescription: 'Glocal LPO provides real estate litigation law support including research, document drafting, and case management for attorneys and law firms.',
		metaKeywords: 'real estate litigation law, real estate litigation',
		heading: (
			<>
				Backed by Real Estate <br /> Litigation Law
			</>
		),
		accordionTitle: 'Real Estate Litigation Services We Offer:',
		background: require('../assets/images/services-bg/real-estate-litigation.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				"A strong estate plan isn't just paperwork—it's a fortress.",
			smallDesription:
				"We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
		},
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Authoritative Legal documents that we draft',
				},
				content: {
					heading: 'Drafting the Documents That Drive Justice Forward.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						"We don't just assist in resolving disputes. We redefine the benchmarks. From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
					listItems: [
						'Complaint and Answer - Expertise in outlining the legal claims, facts, and the damages sought.',
						'Motion for Summary Judgment- Disputes involving contracts, foreclosure proceedings, landlord-tenant issues, and property title claims.',
						'Discovery Requests (Interrogatories, Requests for Production, Requests for Admission) - We help in uncovering key facts about property ownership, contracts, financial transactions, and compliance with laws.',
						'Notices of Deposition and Subpoenas - Testimony and documents from parties and third parties, such as real estate agents, lenders, or municipal authorities.',
						'Settlement Agreements - Disputes relating to property sales, leases, construction defects, foreclosures, boundary disputes, and landlord-tenant issues.',
						'Trial Briefs - Summarization of relevant facts, evidence, and applicable laws.',
						'Appeal Documents - Identify legal errors ',
						'Lis Pendens - Title disputes, Foreclosures, Breach of real estate and Easements & boundary disputes. ',
						'Quiet Title Actions - Establishing a single, undisputed titleholder and eliminating challenges from third parties and fraudulent, or disputed claims. ',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Technology and Tools we use',
				},
				content: {
					heading: 'Tech-powered perfectionists: We know the tools that matter',
					smallHeading: '',
					description: '',
					listItems: [
						'Clio',
						'MyCase',
						'Smokeball',
						'WealthCounsel',
						'Westlaw',
						'LexisNexis',
						'DocuSign',
						'Hot Docs',
					],
				},
			},
		],
	},
	'family-law': {
		title: 'Family Law',
		metaTitle: 'Family Law Litigation Services for Law Firms | Glocal LPO',
		metaDescription: 'Glocal LPO supports law firms with reliable family law litigation services, helping manage support cases with confidence.',
		metaKeywords: 'family law litigation, family law legal documents',
		heading: (
			<>
				Navigating Challenges <br /> with Strength and <br /> Sensitivity
			</>
		),
		accordionTitle: 'Family Law Litigation & Legal Documents Services:',
		background: require('../assets/images/services-bg/family-law.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'Our family law paralegals play a crucial role in managing legal and administrative aspects of cases—from client intake to final agreements. ',
			smallDesription:
				'They draft legal documents, conduct research, manage timelines, and coordinate with clients and legal teams, all while navigating the emotional nuances of family matters.',
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Divorce & Legal Separation',
				description:
					'Contested Divorce, Uncontested Divorce, Legal Separation, Annulment, Division of Property & Assets.',
				image: require('../assets/images/service-images/family-law/Divorce.jpg'),
			},
			{
				id: '02',
				title: 'Child Custody & Visitation',
				description:
					'Initial Custody Orders, Parenting Plans, Custody Modifications, Guardianship.',
				image: require('../assets/images/service-images/family-law/Child-Custody.jpg'),
			},
			{
				id: '03',
				title: 'Child Support',
				description:
					'Establishing Child Support Orders, Modifications of Support, Enforcement Actions.',
				image: require('../assets/images/service-images/family-law/Child-Support.jpg'),
			},
			{
				id: '04',
				title: 'Spousal Support',
				description: 'Temporary & Permanent Support Orders, Modifications.',
				image: require('../assets/images/service-images/family-law/Spousal-Support.jpg'),
			},
			{
				id: '05',
				title: 'Paternity',
				description:
					'Establishing Paternity, Custody and Child Support Proceedings.',
				image: require('../assets/images/service-images/family-law/Paternity.jpg'),
			},
			{
				id: '06',
				title: 'Domestic Violence & Protective Orders',
				description:
					'Emergency Protective Orders (EPO), Restraining Orders (Temporary & Permanent).',
				image: require('../assets/images/service-images/family-law/Domestic-Violence.jpg'),
			},
			{
				id: '07',
				title: 'Prenuptial & Postnuptial Agreements',
				description: 'Drafting and Reviewing Agreements.',
				image: require('../assets/images/service-images/family-law/Prenuptial-and-Postnuptial-Agreements.jpg'),
			},
			{
				id: '08',
				title: 'Guardianship & Conservatorship',
				description: 'Guardianship for Minors, Guardianship of Adults.',
				image: require('../assets/images/service-images/family-law/Guardianship-and-Conservatorship.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Pleadings & Court Filings',
				},
				content: {
					heading:
						"To fight justice, we inscribe your clients' cause with the precision of the scribe, presenting your pleadings to the court as decrees of fate.",
					smallHeading: '',
					description: '',
					listItems: [
						'Petition for Divorce / Legal Separation / Annulment',
						'Response to Petition',
						'Motion for Temporary Orders (Custody, Support, Property, etc.)',
						'Affidavits / Declarations (e.g., Financial Disclosure)',
						'Summons and Proof of Service',
						'Default Judgment Package',
						'Notice of Hearing',
						'Findings of Fact & Conclusions of Law',
						'Final Judgment / Decree of Divorce',
						'Orders After Hearing',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Discovery Documents',
				},
				content: {
					heading:
						"With a keen eye and a steady hand, we dig up the docs that'll show you the truth.",
					smallHeading: '',
					description: '',
					listItems: [
						'Interrogatories',
						'Request for Production of Documents',
						'Request for Admissions',
						'Subpoenas for Records (e.g., financial, employment, medical)',
						'Deposition Notices & Summaries',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Financial Documents',
				},
				content: {
					heading:
						'As a samurai guards his blade, we help you guard the integrity of the financial documents, bringing justice and balance.',
					smallHeading: '',
					description: '',
					listItems: [
						'Income and Expense Declaration',
						'Asset & Debt Disclosure Statements',
						'Property Division Worksheets',
						'Child Support Calculation Worksheets',
						'Spousal Support Guideline Calculations',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Custody & Support Agreements',
				},
				content: {
					heading:
						'We process your financial documents, bringing order and fairness to your case.',
					smallHeading: '',
					description: '',
					listItems: [
						'Parenting Plans / Custody Agreements',
						'Child Support Agreements',
						'Visitation Schedules',
						'Custody Modification Petitions|',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title: 'Settlement Agreements & Contracts',
				},
				content: {
					heading:
						'Turning negotiations into agreements — we ensure the settlement is both fair and binding.',
					smallHeading: '',
					description: '',
					listItems: [
						'Marital Settlement Agreements (MSA)',
						'Divorce Settlement Agreements',
						'Prenuptial Agreements',
						'Postnuptial Agreements',
						'Stipulations (Custody, Support, Property)',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title: 'Protective Orders & Domestic Violence Filings',
				},
				content: {
					heading:
						'In times of crisis, we step in with expertise —trust us for legal needs in filing protective orders, ensuring safety and peace.',
					smallHeading: '',
					description: '',
					listItems: [
						'Temporary Restraining Orders (TRO)',
						'Domestic Violence Restraining Orders (DVRO)',
						'Emergency Protective Orders (EPO)',
						'Supporting Affidavits / Declarations',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Guardianship & Adoption Documents',
				},
				content: {
					heading:
						'We ensure every guardianship and adoption document is handled with grace.',
					smallHeading: '',
					description: '',
					listItems: [
						'Petition for Guardianship',
						'Letters of Guardianship',
						'Consent to Adoption Forms',
						'Petition for Adoption',
						'Petition for Termination of Parental Rights',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Case Management & Organization',
				},
				content: {
					heading:
						'Efficient management, organized strategy — we streamline your case to achieve the best possible outcome.',
					smallHeading: '',
					description: '',
					listItems: [
						'Opening, Organizing, and Maintaining Client Files (Digital & Physical)',
						'Monitoring Case Progress & Deadlines',
						'Drafting Case Summaries and Case Status Reports',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Calendar & Scheduling',
				},
				content: {
					heading:
						'Driven by precision, we schedule with accuracy — keeping your goals on time and on target.',
					smallHeading: '',
					description: '',
					listItems: [
						'Managing Court Hearings, Deadlines, and Appointments',
						'Scheduling Depositions, Mediations, and Client Meetings',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Client Communication',
				},
				content: {
					heading:
						'Through word and will, we uphold the sacred bond of client and counsel',
					smallHeading: '',
					description: '',
					listItems: [
						'Gathering Personal, Financial, and Supporting Documents',
						'Providing Case Updates and Clarifications',
						'Drafting Routine Correspondence (Letters, Emails)',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Court Filing & Service of Documents',
				},
				content: {
					heading:
						'From desk to docket, we deliver every document flawlessly and promptly.',
					smallHeading: '',
					description: '',
					listItems: [
						'E-Filing Pleadings & Documents with Court Platforms (e.g., Odyssey eFile)',
						'Coordinating Personal Service of Summons and Legal Documents',
						'Filing Proof of Service with the Court',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Legal Research',
				},
				content: {
					heading: 'With grit, we chart the clearest path to truth.',
					smallHeading: '',
					description: '',
					listItems: [
						'Reviewing State Family Law Statutes and Local Court Rules',
						'Researching Child & Spousal Support Guidelines',
						'Analyzing Case Precedents and Court Rulings',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Document Review & Trial Preparation',
				},
				content: {
					heading:
						'Every detail reviewed, every strategy prepared — your trial, ready for success.',
					smallHeading: '',
					description: '',
					listItems: [
						'Proofreading Legal Documents for Accuracy & Consistency',
						'Compiling Evidence & Exhibits for Hearings/Trials',
						'Preparing Trial Binders & Hearing Folders',
						'Petition for Adoption',
						'Summarizing Deposition Transcripts and Testimonies',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Billing & Timekeeping',
				},
				content: {
					heading:
						'From start to finish, we keep time and billing aligned for a smooth, transparent process.',
					smallHeading: '',
					description: '',
					listItems: [
						'Recording Attorney and Paralegal Billable Hours',
						'Tracking Case-Related Expenses and Costs',
					],
				},
			},

			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Software & Tools Commonly Used',
				},
				content: {
					heading: 'Punchline / Heading here...',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Glocal LPO provides skilled paralegal support backed by deep knowledge of family law, jurisdiction-specific rules, and efficient case handling. ',
					listItems: [
						'Family Law Calculators: DissoMaster, FamilySoft (Child & Spousal Support)',
						'Case Management: Clio, MyCase, PracticePanther',
						'Court E-Filing Systems: Odyssey eFile, One Legal, State-Specific Portals',
						'Document Processing: Microsoft Word, Excel, Adobe Acrobat',
						'Legal Research Platforms: Westlaw, LexisNexis, Case text',
					],
				},
			},
		],
	},
	immigration: {
		title: 'Immigration',
		metaTitle: 'Immigration Paralegal Services for Law Firms | Glocal LPO',
		metaDescription: 'Glocal LPO provides immigration paralegal services for law firms, handling petitions, USCIS filings, case preparation, and document review.',
		metaKeywords: 'Immigration paralegal services, immigration legal service providers',
		heading: (
			<>
				Guiding Every Step <br /> of Your Case
			</>
		),
		accordionTitle: 'Immigration Legal Services for Your Cases:',
		background: require('../assets/images/services-bg/immigration.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'We are a committed team of immigration paralegals with in-depth experience across humanitarian, family-based, and employment-based immigration matters. ',
			smallDesription:
				'Over past three years, we have supported various law firms across the US in numerous cases including I-360 VAWA petitions, I-130 family petitions, and employment visas such as EB-1, EB-2 NIW, and O-1. Our work also extends to U visa applications, Special Immigrant Juvenile (SIJ) petitions, and both affirmative and defensive asylum filings.',
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Strategic Immigration Roadmaps',
				description:
					'Preparation of comprehensive strategy and supporting documentation.',
				image: require('../assets/images/service-images/immigration/Strategic-Immigration.jpg'),
			},
			{
				id: '02',
				title: 'Persuasive Petition Drafting',
				description: 'Drafting of compelling petition letters',
				image: require('../assets/images/service-images/immigration/Petition-Drafting.jpg'),
			},
			{
				id: '03',
				title: 'Organized Case File Management',
				description: 'Organize and prepare immigration case files.',
				image: require('../assets/images/service-images/immigration/Case-File-Management.jpg'),
			},
			{
				id: '04',
				title: 'Insightful Legal Research',
				description:
					'Research on evolving immigration statutes and guidelines, offering actionable insights to help shape robust legal strategies.',
				image: require('../assets/images/service-images/immigration/Legal-Research.jpg'),
			},
			{
				id: '05',
				title: 'Process Simplification & Clarity',
				description:
					'Simplifying complex immigration procedures —clarifying steps, timelines, and expectations to strengthen trust and satisfaction.',
				image: require('../assets/images/service-images/immigration/Process-Simplification.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Essential Immigration Law Services by Glocal LPO Team',
				},
				content: {
					heading: 'Efficient. Accurate. Immigration Support That Delivers.',
					smallHeading: '',
					description: '',
					listItems: [
						'Strategic Immigration Roadmaps: Preparation of comprehensive strategy and supporting documentation',
						'Persuasive Petition Drafting: Drafting of compelling petition letters',
						'Organized Case File Management: Organize and prepare immigration case files',
						'Insightful Legal Research: Research on evolving immigration statutes and guidelines, offering actionable insights to help shape robust legal strategies.',
						'Process Simplification & Clarity: Simplifying complex immigration procedures —clarifying steps, timelines, and expectations to strengthen trust and satisfaction.',
						'Reponses to Requests for Evidence (RFEs) - full procedural compliance with USCIS, EOIR, and NYSCEF standards.',
						'I-130 and I-485 to H-1B petitions -  ll major immigration forms carefully and correctly, following up-to-date legal rules.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title:
						'We help streamline your legal workflow by expertly drafting critical documents',
				},
				content: {
					heading:
						'We transform confusion into clarity, guiding your case to victory.',
					smallHeading: '',
					description: '',
					listItems: [
						'Petition Letters - Professionally prepared submissions for various visa and immigration requests.',
						'Self-Petition Letters - Tailored petitions, including those under VAWA and similar provisions.',
						'VAWA 360 & I-600 Memos - Detailed legal memorandums supporting VAWA and intercountry adoption cases.',
						'Asylum Briefs & Declarations - Compelling narratives and legal briefs to strengthen asylum applications.',
						'Affidavits & Reference Letters - Drafting third-party testimonies and recommendation letters.',
						'Cover Letters & Motions - Strategically crafted submissions and legal motions.',
						'Checklists & Interview Questions - Curated content lists and questionnaires to support case preparation.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'We Support Across Immigration Case Types',
				},
				content: {
					heading:
						'From asylum to naturalization, we provide expert support for every immigration need.',
					smallHeading: '',
					description: '',
					listItems: [
						'Adjustment of Status (AOS)',
						'O-1 and EB-1 Visas for Extraordinary Ability and Professionals',
						'Asylum and Humanitarian Relief Cases',
						'P-3 Visas for Culturally Unique Artists and Performers',
						'Family-Based Petitions and Sponsorships',
						'In-depth Legal Research to Support Case Strategy and Briefs',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Administrative & Client Coordination Services ',
				},
				content: {
					heading:
						'From the first step to the final stage, we assist you with commitment and know-how',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						' We are Cost-Efficient and have Scalable Support with U.S. Immigration Law Trained Legal Professionals. ',
					listItems: [
						'Case Tracking & File Management - Maintain organized, up-to-date case files at every stage.',
						'Client Follow-ups - Reach out for missing documents, clarifications, and signatures.',
						'Hearing Preparation - Assist in prepping clients for interviews, hearings, and court appearances.',
						'P-3 Visas for Culturally Unique Artists and Performers',
						'Email & Documentation Support - Draft and manage client emails, track submissions, and organize support materials.',
					],
				},
			},
		],
	},
	'intellectual-property': {
		title: 'Intellectual Property',
		metaTitle: 'Outsource Support for Intellectual Property Law Firms | Glocal LPO',
		metaDescription: 'Outsource legal support for intellectual property law firms to Glocal LPO. We assist with IP research, documentation, and case management.',
		metaKeywords: 'intellectual property law firm, patent annuity service',
		heading: (
			<>
				Safeguarding Rights <br /> and Intellectual <br /> Property Law Firm
			</>
		),
		accordionTitle: 'Expert Solutions for Intellectual Property Law Firms:',
		background: require('../assets/images/services-bg/intellectual-property.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription: 'Strengthening IP Rights with Expert Legal Support',
			smallDesription:
				"We provide outsourced support to attorneys by drafting precise legal documents that safeguard their clients' intellectual property rights, ensuring trademarks, patents, and copyrights remain legally secure. Our services ensure accuracy, compliance with evolving regulations, and robust protection for intellectual property assets.",
		},
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'IP Litigation:',
				},
				content: {
					heading: 'IP Battles Won with Detailed Records Review',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'With deep expertise in trademark, patent, and copyright disputes, we provide cost-effective, scalable solutions that enhance case outcomes and streamline legal operations.',
					listItems: [
						'Complaint: Drafting and filing legal complaints to address IP violations.',
						'Answers: Providing well-structured responses to legal complaints.',
						'Counterclaims: Filing counterclaims to challenge baseless allegations.',
						'Temporary Restraining Order (TRO): Obtaining TROs to prevent ongoing infringement.',
						'TRO Memo: Preparing memos to justify the need for TROs.',
						'Motions: Drafting various motions, including dismissals and injunctions.',
						'Notices: Issuing legal notices for compliance and litigation.',
						'Client Declaration: Assisting clients in preparing legal declarations.',
						'Default Judgment: Securing judgments against non-responsive parties.',
						'DJ Memo and Motions: Preparing declaratory judgment memos and motions.',
						'Discovery Requests and Responses: Managing discovery to gather crucial case information.',
						'Case Review: Analyzing cases to develop effective legal strategies.',
						'Damage Negotiations: Negotiating settlements for damages.',
						'Document Review: Ensuring accuracy and compliance in legal documents.',
						'Legal Research: Conducting thorough research to support litigation.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title:
						'Registrations | Our expertise in USPTO procedures guarantees accuracy and efficiency.',
				},
				content: {
					heading: 'Where records speak, false claims falter.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'We help new law firms in securing IP registrations by preparing and filing trademarks, patents, and copyrights, ensuring legal protection for your innovations and brand identity.',
					listItems: [
						'Search: Identifying potential conflicts before filing applications.',
						'Drafting the Application: Creating clear and legally sound applications.',
						'Filing the Application: Submitting applications to USPTO and relevant authorities.',
						'Examination: Responding to office actions and objections.',
						'Prosecution: Managing responses and hearings to ensure approval.',
						'Grant: Facilitating the final approval and formalities.',
						'Identification of Trade Secrets: Safeguarding proprietary business information.',
						'Confidentiality Agreements: Drafting enforceable agreements to protect sensitive data.',
						'Security Measures: Advising on best practices to prevent IP theft.',
						'Enforcement: Implementing strategies to protect and defend IP rights.',
					],
				},
			},
		],
	},
	'criminal-law': {
		title: 'Criminal Law',
			metaTitle: 'Outsource Criminal Case Management Services | Glocal LPO',
		metaDescription: 'Outsource criminal case management to Glocal LPO for accurate documentation, legal research, and organized case workflows for attorneys and law firms.',
		metaKeywords: 'criminal case management, criminal paralegal services',
		heading: (
			<>
				Behind Every Legal <br /> Victory
			</>
		),
		accordionTitle: 'Expert Criminal Case Management & Paralegal Services:',
		background: require('../assets/images/services-bg/criminal-law.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'We provide comprehensive criminal defense paralegal support to attorneys across US. ',
			smallDesription:
				"Our team of experienced legal professionals assists at every stage of the criminal proceedings, from case analysis and pre-trial preparation to plea negotiations and courtroom advocacy. With a deep understanding of US criminal law and procedural requirements, we deliver precise, efficient, and strategic support, enabling defense counsel to navigate cases effectively and uphold their clients' rights.",
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Misdemeanors & Felonies',
				description:
					'Comprehensive defense for both minor and serious criminal charges.',
				image: require('../assets/images/service-images/criminal-law/misdemeanors-and-felonies.jpg'),
			},
			{
				id: '02',
				title: 'DUI, DWI & Traffic Offenses',
				description:
					'Strategic support for driving-related violations and license protection.',
				image: require('../assets/images/service-images/criminal-law/DUI-DWI-and-traffic.jpg'),
			},
			{
				id: '03',
				title: 'Disorderly Conduct & Civic Unrest',
				description:
					'Defending rights in public disturbance and protest-related offenses.',
				image: require('../assets/images/service-images/criminal-law/protest-related-offenses.jpg'),
			},
			{
				id: '04',
				title: 'Drug Possession & Illicit Trade',
				description:
					'Expert support in drug charges and controlled substance cases.',
				image: require('../assets/images/service-images/criminal-law/drug-possession.jpg'),
			},
			{
				id: '05',
				title: 'Theft, Burglary & White-Collar Intrigue',
				description:
					'Smart defense for property theft and financial fraud allegations.',
				image: require('../assets/images/service-images/criminal-law/theft-burglary.jpg'),
			},
			{
				id: '06',
				title: 'Domestic Violence & Assaults',
				description:
					'Tactful handling of emotionally sensitive personal violence matters.',
				image: require('../assets/images/service-images/criminal-law/domestic-violence.jpg'),
			},
			{
				id: '07',
				title: 'Homicide & Murder',
				description: 'Focused legal aid in high-stakes life and death cases.',
				image: require('../assets/images/service-images/criminal-law/homicide-and-murder.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Pre-Trial Assistance & Case Investigation',
				},
				content: {
					heading:
						'Ere the first word be spoken in court, we have already forged the path to thy triumph.',
					smallHeading: '',
					description: '',
					listItems: [
						'Legal Research & Case Law Analysis: In-depth research on relevant statutes, precedents, and legal arguments.',
						'Case File Review: Analyzing police reports, forensic evidence, witness statements, and discovery materials.',
						"Fact Investigation & Evidence Gathering: Identifying key weaknesses in the prosecution's case and compiling strong defense materials.",
						'Drafting Pre-Trial Motions: Suppression motions, bail applications, motions to dismiss, and requests for evidence disclosure.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Plea Negotiations & Legal Documentation',
				},
				content: {
					heading:
						'Through eloquent negotiation and firm documentation, we secure thy cause before the law.',
					smallHeading: '',
					description: '',
					listItems: [
						'Plea Agreement Support: Drafting and reviewing plea agreements, analyzing potential legal consequences, and assisting in negotiations.',
						'Mitigation Strategies: Compiling character references, rehabilitation evidence, and alternative sentencing recommendations.',
						'Sentencing Memoranda & Legal Briefs: Crafting persuasive sentencing arguments and post-conviction filings.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Trial Preparation & Litigation Support',
				},
				content: {
					heading:
						'In the service of justice, we prepare with prayerful diligence, supporting your cause through every challenge.',
					smallHeading: '',
					description: '',
					listItems: [
						'Trial Strategy Development: Assisting attorneys in formulating strong legal arguments and structuring the case for trial.',
						'Exhibit & Evidence Organization: Preparing trial binders, timelines, and visual exhibits for courtroom presentations.',
						'Witness Preparation: Coordinating expert witness testimony and drafting direct and cross-examination questions.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Post-Trial & Appeal Support',
				},
				content: {
					heading:
						'When the trial ends, our support continues — we uphold your cause in appeal, trusting in the grace of justice.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'With knowledge as our spear and precision as our armor, unlike generic outsourcing providers, we specialize in jurisdiction-specific laws.',
					listItems: [
						'Post-Conviction Relief Motions: Preparing motions for sentence modifications, appeals, and expungements.',
						'Case File Review & Appeal Briefs: Assisting in drafting appellate briefs and reviewing trial transcripts for errors.',
					],
				},
			},
		],
	},
	bankruptcy: {
		title: 'Bankruptcy',
		metaTitle: 'Outsource Legal Services for Bankruptcy | Glocal LPO',
		metaDescription: 'Glocal LPO provides reliable legal services for bankruptcy cases. Support for research, documentation, and case preparation for attorneys and law firms.',
		metaKeywords: 'legal services for bankruptcy, outsourcing employment law',
		heading: (
			<>
				For Affordable <br /> Bankruptcy Law Firm
			</>
		),
		accordionTitle: 'Legal Services for Bankruptcy, Built for Recovery:',
		background: require('../assets/images/services-bg/bankruptcy.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'Strategic Legal Support for Debt Relief and Financial Recovery',
			smallDesription:
				'Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise. We help you conclude the legal options to eliminate or restructure their debts through available records. ',
		},
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Chapter 7 Bankruptcy: Fresh Start Through Liquidation',
				},
				content: {
					heading: 'Our bankruptcy litigators, turn iron to genius!',
					smallHeading: '',
					description: '',
					listItems: [
						'Petition preparation (including Schedules A-J)',
						'Statement of Financial Affairs',
						'Statement of Intention',
						'Means Test Calculation',
						'Notice to Creditors',
						'Reaffirmation Agreements',
						'Motion to Avoid Lien',
						'Discharge of Debts',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Chapter 13 Bankruptcy: Structured Repayment Plans',
				},
				content: {
					heading: 'You draft the structure, we drive the success.',
					smallHeading: '',
					description: '',
					listItems: [
						'Chapter 13 Petition and Plan',
						'Schedules A-J and Statement of Financial Affairs',
						'Proof of Claim, Motions to Modify Plan, Incur Debt, and Avoid Lien',
						'Discharge Orders',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Chapter 11 Bankruptcy: Business Reorganization',
				},
				content: {
					heading:
						'Structured by you, reorganized by us — for better, faster results.',
					smallHeading: '',
					description: '',
					listItems: [
						'Voluntary Petitions, Schedules A-J, and Statements of Financial Affairs.',
						'Disclosure Statements and Plans of Reorganization.',
						'Motions for Use of Cash Collateral, Monthly Operating Reports, and Motions to Dismiss/Convert.',
						'Confirmation Orders.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title: 'Chapter 12 Bankruptcy: Family Farmer & Fisherman Support',
				},
				content: {
					heading: "For Every growing Dream — We've Got Your Back.",
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our professionals specialize in bankruptcy laws, court procedures, and documentation and ensure filings are completed correctly and efficiently.',
					listItems: [
						'Petitions, chapter 12 plans, Schedules A-J, and Statements of financial affairs.',
						'Motions for use of cash collateral, Motions to incur debt, and Motions to modify plans.',
						'Confirmation orders.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Means Test & Eligibility',
				},
				content: {
					heading:
						"We help you get the Means Test right — because almost right won't work.",
					smallHeading: '',
					description: '',
					listItems: [
						'We accurately calculate and file Means Test forms, Statements of Current Monthly Income, and Disposable Income Calculations.',
						'We also provide support for motions to challenge means test results.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-6.png'),
					title: 'Wage Garnishment & Levy Protection',
				},
				content: {
					heading:
						"Your clients' money and their rights — we aim to help you protect both.",
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						'Our team prioritizes clear communication and personalized support with full range of bankruptcy and foreclosure services.',
					listItems: [
						'Motions to Stop Wage Garnishment and Quash Garnishment',
						'Claims of Exemption, Objections to Garnishment, and Release of Garnishment',
						'Levy Release Forms',
					],
				},
			},
		],
	},
	contracts: {
		title: 'Contracts',
		metaTitle: 'Outsource Contract Drafting Services | Glocal LPO',
		metaDescription: 'Glocal LPO offers reliable contract drafting services including legal agreements, document review, and customized contract preparation.',
		metaKeywords: 'contract drafting services, Contract management, Legal research services, Litigation support',
		heading: (
			<>
				Execution for Strong <br />
				Business Foundations
			</>
		),
		accordionTitle: 'Expert Contract Drafting Services & Execution:',
		background: require('../assets/images/services-bg/contracts.jpg'),
		backgroundPosition: 'top center',
		description: {
			mainDescription:
				'We provide comprehensive contract-related legal support to attorneys and businesses across the U.S, U.K, and Canada',
			smallDesription:
				"Our team of seasoned legal professionals specializes in drafting, reviewing, negotiating, and managing contracts to ensure clarity, enforceability, and protection of your clients' interests. With a deep understanding of contract law and a commitment to precision, we deliver strategic solutions that minimize risk and maximize value.",
		},
		casesSpecializedIn: [
			{
				id: '01',
				title: 'Contract Drafting & Review',
				description:
					'Crafting and scrutinizing agreements to ensure legal compliance and alignment with client goals.',
				image: require('../assets/images/service-images/contracts/contract-drafting.jpg'),
			},
			{
				id: '02',
				title: 'Contract Negotiation',
				description:
					'Facilitating favorable terms and resolving disputes during negotiations.',
				image: require('../assets/images/service-images/contracts/contract-negotiation.jpg'),
			},
			{
				id: '03',
				title: 'Contract Administration',
				description:
					'Managing and tracking contracts to ensure compliance and performance.',
				image: require('../assets/images/service-images/contracts/Contract-Administration.jpg'),
			},
			{
				id: '04',
				title: 'Dispute Resolution',
				description:
					'Providing support for contract-related conflicts and litigation.',
				image: require('../assets/images/service-images/contracts/Dispute-Resolution.jpg'),
			},
		],
		accordianItems: [
			{
				header: {
					icon: require('../assets/icons/accordian-icon-1.png'),
					title: 'Legal Documents',
				},
				content: {
					heading: 'Strategic drafting. Uncompromising protection.',
					smallHeading: '',
					description: '',
					listItems: [
						'1.1 Contract Drafting: Tailored agreements that reflect client objectives while ensuring legal enforceability.',
						'1.2 Contract Review: Detailed analysis of existing contracts to identify risks, ambiguities, and opportunities for improvement.',
						'1.3 Contract Negotiation Documents: Preparing counteroffers, term sheets, and negotiation briefs to secure favorable terms.',
						'1.4 Amendments and Addendums: Modifying existing contracts to reflect changing circumstances or new agreements.',
						'1.5 Termination Letters: Drafting legally sound notices to terminate contracts in compliance with applicable laws.',
						'1.6 Non-Disclosure Agreements (NDAs): Protecting confidential information with robust and enforceable NDAs.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-2.png'),
					title: 'Client Interaction',
				},
				content: {
					heading: 'A contract is not just a law, but a trust we protect.',
					smallHeading: '',
					description: '',
					listItems: [
						'2.1 Gathering Contract Requirements: Collaborating with clients to understand their needs and objectives.',
						'2.2 Clarifying Contract Terms: Explaining complex legal language and implications to ensure informed decision-making.',
						"2.3 Negotiating Contract Details: Advocating for clients' interests during negotiations to achieve balanced and favorable outcomes.",
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-3.png'),
					title: 'Contract Administration',
				},
				content: {
					heading:
						'From deadlines to compliance lines, we keep your contract on track.',
					smallHeading: '',
					description: '',
					listItems: [
						'3.1 Contract Management: Organizing and maintaining contracts for easy access and reference.',
						'3.2 Contract Tracking: Monitoring key dates, obligations, and renewals to ensure compliance.',
						'3.3 Compliance Monitoring: Ensuring all parties adhere to contractual terms and legal requirements.',
						'3.4 Document Management: Securely storing and organizing contracts for future reference and audits.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-4.png'),
					title: 'Types of Contracts Handled',
				},
				content: {
					heading:
						'From the straightforward to the sophisticated — every contract is in trusted hands.',
					smallHeading: '',
					description: '',
					listItems: [
						'4.1 Business Contracts: Partnership agreements, joint ventures, and shareholder agreements.',
						'4.2 Real Estate Contracts: Leases, purchase agreements, and development contracts.',
						'4.3 Employment Agreements: Offer letters, non-compete agreements, and severance packages.',
						'4.4 Vendor Contracts: Supplier agreements, procurement contracts, and service level agreements (SLAs).',
						'4.5 Service Agreements: Consulting contracts, maintenance agreements, and outsourcing contracts.',
						'4.6 Intellectual Property Licenses: Licensing agreements for patents, trademarks, and copyrights.',
					],
				},
			},
			{
				header: {
					icon: require('../assets/icons/accordian-icon-5.png'),
					title: 'Related Services',
				},
				content: {
					heading:
						'In the realm of contracts, we command the research, analyze with accuracy, and bring forth clarity.',
					smallHeading: "Glocal's Distinctive Edge:",
					description:
						"We specialize in contract law and jurisdiction-specific requirements, ensuring that every document we produce is tailored to your clients' needs and stands up to legal scrutiny. Whether you need support with a single contract or ongoing contract management, we are here to provide the expertise and advocacy your clients deserve.",
					listItems: [
						'5.1 Legal Research Related to Contract Law: Providing insights into jurisdiction-specific contract laws and precedents.',
						'5.2 Due Diligence Support for Contracts: Reviewing contracts during mergers, acquisitions, or other transactions.',
						'5.3 Support for Contract Disputes: Assisting with breach of contract claims, enforcement actions, and dispute resolution.',
					],
				},
			},
		],
	},
};

export const serviceCards = [
	{
		id: '12',
		title: routes['business-litigation-support'].label,
		link: routes['business-litigation-support'].href,
		image: require('../assets/images/service-image-7.jpg'),
		description:
			'When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.',
		mobileDescription:
			'When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.',
	},
	{
		id: '02',
		title: routes['personal-injury'].label,
		link: routes['personal-injury'].href,
		image: require('../assets/images/service-image-2.jpg'),
		description:
			'Accidents happen, but accountability is non-negotiable. We provide end to end legal support with legal precision, ensuring your clients get the maximum compensation which they deserve.',
		mobileDescription:
			'Accidents happen, but accountability is non-negotiable. We provide end to end legal support with legal precision, ensuring your clients get the maximum compensation which they deserve.',
	},
	{
		id: '03',
		title: routes['employee-law'].label,
		link: routes['employee-law'].href,
		image: require('../assets/images/service-image-4.jpg'),
		description:
			"Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
		mobileDescription:
			"Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
	},
	{
		id: '04',
		title: routes['workers-compensation'].label,
		link: routes['workers-compensation'].href,
		image: require('../assets/images/service-image-5.jpg'),
		description:
			"From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
		mobileDescription:
			"From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
	},
	{
		id: '01',
		title: routes['estate-planning-probate'].label,
		link: routes['estate-planning-probate'].href,
		image: require('../assets/images/service-image-3.jpg'),
		description:
			"A strong estate plan isn't just paperwork—it's a fortress. We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
		mobileDescription:
			"A strong estate plan isn't just paperwork—it's a fortress. We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
	},
	{
		id: '05',
		title: routes['real-estate-litigation'].label,
		link: routes['real-estate-litigation'].href,
		image: require('../assets/images/service-image-1.jpg'),
		description:
			"From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
		mobileDescription:
			"From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
	},
	{
		id: '06',
		title: routes['family-law'].label,
		link: routes['family-law'].href,
		image: require('../assets/images/service-image-9.jpg'),
		description:
			"Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
		mobileDescription:
			"Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
	},
	{
		id: '07',
		title: routes['immigration'].label,
		link: routes['immigration'].href,
		image: require('../assets/images/service-image-8.jpg'),
		description:
			"Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
		mobileDescription:
			"Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
	},
	{
		id: '08',
		title: routes['intellectual-property'].label,
		link: routes['intellectual-property'].href,
		image: require('../assets/images/service-image-11.jpg'),
		description:
			'We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.',
		mobileDescription:
			'We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.',
	},
	{
		id: '09',
		title: routes['criminal-law'].label,
		link: routes['criminal-law'].href,
		image: require('../assets/images/service-image-12.jpg'),
		description:
			'We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.',
		mobileDescription:
			'We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.',
	},
	{
		id: '10',
		title: routes['bankruptcy'].label,
		link: routes['bankruptcy'].href,
		image: require('../assets/images/service-image-10.jpg'),
		description:
			'Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.',
		mobileDescription:
			'Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.',
	},
	{
		id: '11',
		title: routes['contracts'].label,
		link: routes['contracts'].href,
		image: require('../assets/images/service-image-6.jpg'),
		description:
			'From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.',
		mobileDescription:
			'From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.',
	},
];

export const servicesArray = [
	{
		id: '12',
		title: 'Business Litigation Support',
		description:
			'When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.',
		contentBoxTitle: 'In business, the fine print is where battles are won.',
		link: routes['business-litigation-support'].href,
		image: serviceImage7,
		icon: Briefcase,
		menuContent:
			'When disputes strike, our legal precision keeps your practice ahead.',
	},
	{
		id: '02',
		title: 'Personal Injury',
		description:
			'Accidents happen, but accountability is non-negotiable. We provide end to end legal support with legal precision, ensuring your clients get the maximum compensation which they deserve.',
		contentBoxTitle: "Injury wasn't your clients' choice. Justice is.",
		link: routes['personal-injury'].href,
		image: serviceImage2,
		icon: HeartPulse,
		menuContent:
			'When accidents happen, we draft demand letters that demand justice.',
	},
	{
		id: '03',
		title: 'Employment Law',
		description:
			"Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
		contentBoxTitle:
			"Your clients' rights aren't optional. They're enforceable.",
		link: routes['employee-law'].href,
		image: serviceImage4,
		icon: UsersRound,
		menuContent:
			'Crafting impeccable legal documentation to fight discrimination, retaliation, and wrongful termination.',
	},
	{
		id: '04',
		title: 'Workers Compensation',
		description:
			"From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
		contentBoxTitle: 'Injured on the job? We make sure the law works for you.',
		link: routes['workers-compensation'].href,
		image: serviceImage5,
		icon: HardHat,
		menuContent:
			"Building foolproof workers' compensation cases with meticulous documentation from start to finish.",
	},
	{
		id: '01',
		title: 'Estate Planning & Probate',
		description:
			"A strong estate plan isn't just paperwork—it's a fortress. We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
		contentBoxTitle: 'Building Estate Plans That Stand the Test of Time.',
		link: routes['estate-planning-probate'].href,
		image: serviceImage3,
		icon: Scroll,
		menuContent:
			'Transforming estate plans into unbreakable fortresses with precise documentation and risk mitigation.',
	},
	{
		id: '05',
		title: 'Real Estate Litigation',
		description:
			"From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
		contentBoxTitle:
			"Real estate law isn't just about property—it's about power.",
		link: routes['real-estate-litigation'].href,
		image: serviceImage1,
		icon: Building,
		menuContent:
			"Securing your client's property and future with ironclad legal documentation and results-driven strategy.",
	},
	{
		id: '06',
		title: 'Family Law',
		description:
			"Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
		contentBoxTitle: 'Family disputes need finesse, not just force.',
		link: routes['family-law'].href,
		image: serviceImage9,
		icon: Users,
		menuContent:
			"Navigating sensitive family matters with strategic legal precision and a commitment to your clients' well-being.",
	},
	{
		id: '07',
		title: 'Immigration',
		description:
			"Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
		contentBoxTitle: 'Borders may divide, but the law unites.',
		link: routes['immigration'].href,
		image: serviceImage8,
		icon: Plane,
		menuContent:
			"Crafting precise immigration solutions to pave the way for your clients' future.",
	},
	{
		id: '08',
		title: 'Intellectual Property',
		description:
			'We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.',
		contentBoxTitle: 'IP Protection. Drafted Right. Defended Better.',
		link: routes['intellectual-property'].href,
		image: serviceImage11,
		icon: Lightbulb,
		menuContent:
			"Fortifying your clients' innovations with rock-solid IP documentation and protection.",
	},
	{
		id: '09',
		title: 'Criminal Law',
		description:
			'We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.',
		contentBoxTitle: 'Criminal Defense. Backed by Precision.',
		link: routes['criminal-law'].href,
		image: serviceImage12,
		icon: Gavel,
		menuContent:
			'Empowering defense with precision, strategy, and unwavering support—every step of the way.',
	},
	{
		id: '10',
		title: 'Bankruptcy',
		description:
			'Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.',
		contentBoxTitle: "Bankruptcy isn't the end. It's a fresh start.",
		link: routes['bankruptcy'].href,
		image: serviceImage10,
		icon: Landmark,
		menuContent:
			'Guiding clients through financial turmoil with expert strategies for a fresh start.',
	},
	{
		id: '11',
		title: 'Contracts',
		description:
			'From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.',
		contentBoxTitle: 'A contract is only as strong as the words that bind it.',
		link: routes['contracts'].href,
		image: serviceImage6,
		icon: FileSignature,
		menuContent:
			"Crafting contracts that secure your client's future—clear, strong, and unbreakable.",
	},
];
