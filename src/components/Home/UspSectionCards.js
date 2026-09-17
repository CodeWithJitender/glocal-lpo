import React, { useRef } from "react";
import { useScroll } from 'framer-motion';

import uspIcon1 from "@/assets/icons/usp-icon-1.png";
import uspIcon2 from "@/assets/icons/usp-icon-2.png";
import uspIcon3 from "@/assets/icons/usp-icon-3.png";
import uspIcon4 from "@/assets/icons/usp-icon-4.png";

import SectionCards from "./SectionCards";

import * as styles from "./UspSectionCards.module.scss";

// Card data
const cardData = [
  {
    id: 1,
    title: "Teams Trained By US Law Firms",
    text: "Trained by the Best. Built for the Rest.",
    imgSrc: uspIcon1,
    bgClass: "bg-1",
  },
  {
    id: 2,
    title: "Dedicated Sales Manager and CRM",
    text: "One Point of Contact. Zero Room for Errors.",
    imgSrc: uspIcon2,
    bgClass: "bg-2",
  },
  {
    id: 3,
    title: "Expertise in Managing Entire Case Lifecycle",
    text: "From First Filing to Final Verdict.",
    imgSrc: uspIcon3,
    bgClass: "bg-3",
  },
  {
    id: 4,
    title: "Technology and Data Security Driven",
    text: "Ironclad Security. Foolproof Precision.",
    imgSrc: uspIcon4,
    bgClass: "bg-4",
  },
];

export default function App() {
  const wrapRef = useRef(null);

	const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end']
  })

  return (
    <div className={styles.uspSection} ref={wrapRef}>
      {cardData.map((card, index) => {
				const targetScale = 1 - ( ((cardData.length - 1) - index) * 0.15);
        return (
					<SectionCards
						key={card.id}
						index={index}
						card={card}
						progress={scrollYProgress}
						range={[index * .25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
    </div>
  );
}
