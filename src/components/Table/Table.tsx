import React from 'react';
import styles from './Table.module.css';
import { Person } from '../../types/people';
import { Planet } from '../../types/planets';
import { Starship } from '../../types/starships';

interface TableProps {
  data: Person[] | Planet[] | Starship[];
  onRowClick: (id: string) => void;
}

const Table: React.FC<TableProps> = ({ data, onRowClick }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => (
              <th key={key} className={styles.tableHeader}>
                {key}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.url as string}
            className={styles.tableRow}
            onClick={() => onRowClick(item.url as string)}
          >
            {Object.values(item).map((value, idx) => (
              <td key={idx} className={styles.tableCell}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
