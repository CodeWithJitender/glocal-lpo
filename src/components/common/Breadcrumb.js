import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ items = [], className = '' }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`${styles.nav} ${className}`}>
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.label || index}
              className={`${styles.breadcrumbItem} ${isLast ? styles.active : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {item.href && !isLast ? (
                <Link to={item.href} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.breadcrumbText}>{item.label}</span>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
