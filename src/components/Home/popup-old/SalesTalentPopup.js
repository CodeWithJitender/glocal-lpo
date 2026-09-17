import React, { useState, useEffect, useCallback } from 'react';
import * as styles from './SalesTalentPopup.module.scss';

const DELAY = 2000;
const STORAGE_KEY = 'hf_registered_2026';
const CTA_URL = 'https://headfield.com/india-first-global-sales-talent-hunt-2026/';
const LOGO_URL = 'https://beige-oyster-766501.hostingersite.com/hf-popup/assets/logo.png';

const SalesTalentPopup = () => {
  const [isActive, setIsActive] = useState(false);

  const openPopup = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY) === '1') return;
    setIsActive(true);
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'hidden';
  }, []);

  const closePopup = useCallback(() => {
    setIsActive(false);
    document.body.style.overflowX = '';
    document.body.style.overflowY = '';
  }, []);

  const handleRegister = useCallback(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, '1');
    if (CTA_URL) window.open(CTA_URL, '_blank');
    closePopup();
  }, [closePopup]);

  // Auto-trigger after delay
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const timer = setTimeout(openPopup, DELAY);
    return () => clearTimeout(timer);
  }, [openPopup]);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isActive) closePopup();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isActive, closePopup]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closePopup();
  };

  // Only render on client side
  if (typeof window === 'undefined') return null;

  return (
    <div
      className={`${styles.overlay} ${isActive ? styles.active : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hf-popup-title"
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>
        {/* Close button — pure CSS X via ::before / ::after */}
        <button
          className={styles.close}
          onClick={(e) => { e.stopPropagation(); closePopup(); }}
          aria-label="Close popup"
        />

        <div className={styles.left}>
          <div className={styles.leftTop}>
            <img
              src={LOGO_URL}
              alt="Head Field Logo"
              className={styles.logo}
            />

            <h2 className={styles.title} id="hf-popup-title">
              India's First<br />
              Global Sales<br />
              <span className={styles.highlight}>Talent Hunt</span><br />
              2026
            </h2>

            <p className={styles.tagline}>
              Participate<span className={`${styles.dot} ${styles.dotBlue}`}>.</span>
              Compete<span className={`${styles.dot} ${styles.dotOrange}`}>.</span>
              Grow<span className={`${styles.dot} ${styles.dotGreen}`}>.</span>
            </p>

            <div className={styles.infoList}>
              {/* Date */}
              <div className={styles.infoRow}>
                <div className={styles.icon}>
                  <div className={styles.iconCal}></div>
                </div>
                <span className={styles.infoText}>
                  8<sup>th</sup> – 9<sup>th</sup> August 2026
                </span>
              </div>
              {/* Venue */}
              <div className={styles.infoRow}>
                <div className={styles.icon}>
                  <div className={styles.iconPin}></div>
                </div>
                <span className={styles.infoText}>Bharat Mandapam, New Delhi</span>
              </div>
            </div>
          </div>

          <button className={styles.btn} onClick={handleRegister}>
            Register Now
            <span className={styles.arrow}></span>
          </button>
        </div>

        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default SalesTalentPopup;
