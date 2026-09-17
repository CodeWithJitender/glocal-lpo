import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import * as styles from "./ServiceClipAnimation.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceClipAnimation() {
  const contentRef = useRef(null);
  const clipPathRefs = useRef([]);
  const posterRefs = useRef([]);
  const posterInnerRefs = useRef([]);
  const [isClient, setIsClient] = useState(false);

	const { pathname } = useLocation();

  useEffect(() => {
    // Set isClient to true when component mounts in browser
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

		// Animation setup
		const clipPath = clipPathRefs.current;
		const poster = posterRefs.current;
		const posterInner = posterInnerRefs.current;

		// Create animations for each clipPath element
		clipPath.forEach((clipPathEl, pos) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: poster[pos],
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					id: `st-${pos}`
				}
			})
			.fromTo(clipPathEl, {
				xPercent: pos === 0 ? 40 : -80
			}, {
				ease: 'none',
				xPercent: pos === 0 ? -40 : 20
			}, 0)
			.fromTo(posterInner[pos], {
				xPercent: pos === 0 ? -5 : 5,
				yPercent: pos === 0 ? -5 : 5
			}, {
				xPercent: pos === 0 ? 5 : -5,
				yPercent: pos === 0 ? 5 : -5
			}, 0);
		});

    // Cleanup function
    return () => {
			clipPathRefs.current.forEach((_, pos) => {
				if (ScrollTrigger.getById(`st-${pos}`)) {
					ScrollTrigger.getById(`st-${pos}`).kill();
				}
			});
    };
  }, [isClient, pathname]); // Only run when isClient changes to true

  // Add refs to arrays for later use
  const addToClipPathRefs = (el) => {
    if (el && !clipPathRefs.current.includes(el)) {
      clipPathRefs.current.push(el);
    }
  };

  const addToPosterRefs = (el) => {
    if (el && !posterRefs.current.includes(el)) {
      posterRefs.current.push(el);
    }
  };

  const addToPosterInnerRefs = (el) => {
    if (el && !posterInnerRefs.current.includes(el)) {
      posterInnerRefs.current.push(el);
    }
  };

  return (
    <div className={styles.content} ref={contentRef}>
      <svg className={styles.clipElement}>
        <clipPath id="clip" ref={addToClipPathRefs}>
          <text x="0ch" y="0.80em" className={styles.textPath}>X</text>
          <text x="1ch" y="0.80em" className={styles.textPath}>o</text>
          <text x="2ch" y="0.80em" className={styles.textPath}>X</text>
          <text x="3ch" y="0.80em" className={styles.textPath}>o</text>
          <text x="4ch" y="0.80em" className={styles.textPath}>X</text>
          <text x="5ch" y="0.80em" className={styles.textPath}>o</text>
					<text x="0ch" y="1.65em" className={styles.textPath}>o</text>
          <text x="1ch" y="1.65em" className={styles.textPath}>X</text>
          <text x="2ch" y="1.65em" className={styles.textPath}>o</text>
          <text x="3ch" y="1.65em" className={styles.textPath}>X</text>
          <text x="4ch" y="1.65em" className={styles.textPath}>o</text>
          <text x="5ch" y="1.65em" className={styles.textPath}>X</text>
					<text x="0ch" y="2.50em" className={styles.textPath}>X</text>
          <text x="1ch" y="2.50em" className={styles.textPath}>o</text>
          <text x="2ch" y="2.50em" className={styles.textPath}>X</text>
          <text x="3ch" y="2.50em" className={styles.textPath}>o</text>
          <text x="4ch" y="2.50em" className={styles.textPath}>X</text>
          <text x="5ch" y="2.50em" className={styles.textPath}>o</text>
					<text x="0ch" y="3.35em" className={styles.textPath}>X</text>
          <text x="1ch" y="3.35em" className={styles.textPath}>o</text>
          <text x="2ch" y="3.35em" className={styles.textPath}>X</text>
          <text x="3ch" y="3.35em" className={styles.textPath}>o</text>
          <text x="4ch" y="3.35em" className={styles.textPath}>X</text>
          <text x="5ch" y="3.35em" className={styles.textPath}>o</text>
					<text x="0ch" y="4.20em" className={styles.textPath}>X</text>
          <text x="1ch" y="4.20em" className={styles.textPath}>o</text>
          <text x="2ch" y="4.20em" className={styles.textPath}>X</text>
          <text x="3ch" y="4.20em" className={styles.textPath}>o</text>
          <text x="4ch" y="4.20em" className={styles.textPath}>X</text>
          <text x="5ch" y="4.20em" className={styles.textPath}>o</text>
					<text x="0ch" y="5.05em" className={styles.textPath}>X</text>
          <text x="1ch" y="5.05em" className={styles.textPath}>o</text>
          <text x="2ch" y="5.05em" className={styles.textPath}>X</text>
          <text x="3ch" y="5.05em" className={styles.textPath}>o</text>
          <text x="4ch" y="5.05em" className={styles.textPath}>X</text>
          <text x="5ch" y="5.05em" className={styles.textPath}>o</text>
					<text x="0ch" y="5.90em" className={styles.textPath}>X</text>
          <text x="1ch" y="5.90em" className={styles.textPath}>o</text>
          <text x="2ch" y="5.90em" className={styles.textPath}>X</text>
          <text x="3ch" y="5.90em" className={styles.textPath}>o</text>
          <text x="4ch" y="5.90em" className={styles.textPath}>X</text>
          <text x="5ch" y="5.90em" className={styles.textPath}>o</text>
        </clipPath>
      </svg>
      <div 
        className={styles.poster}
        ref={addToPosterRefs}
        style={{
          clipPath: 'url(#clip)',
        }}>
        <div 
          className={styles.posterInner} 
          ref={addToPosterInnerRefs}
        >
        </div>
      </div>
    </div>
  );
}
