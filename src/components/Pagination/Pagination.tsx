import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const range = 3; 

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= range + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      
      if (currentPage > 2) pages.push(1); 
      if (currentPage > 3) pages.push('...'); 

      for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...'); 
      if (currentPage < totalPages - 1) pages.push(totalPages);
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pages = generatePageNumbers();

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={currentPage === page ? styles.active : ''}
          >
            {page}
          </button>
        ) : (
          <button key={index} disabled className={styles.ellipsis}>
            ...
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
