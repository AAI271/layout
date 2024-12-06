import React from 'react';
import styles from './TableSkeleton.module.css'; // Import the CSS module

const TableSkeleton: React.FC = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={`${styles.skeleton} ${styles.header}`}></div>
      <div className={`${styles.skeleton} ${styles.subHeader}`}></div>
      <div className={styles.skeletonRows}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={`${styles.skeleton} ${styles.row}`}></div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeleton;
