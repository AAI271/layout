// src/components/Sidebar.tsx
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/auth/AuthSlice';
import { useTheme } from '../../store/context/ThemeContext';
import { RootState } from '../../store/redux';

const Sidebar: React.FC = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  const user = useSelector((state: RootState) => state.auth);
  console.log(user)


  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleToggleClick = () => {
    setSidebarClosed(!isSidebarClosed);
  };



  return (
    <nav className={`${styles.sidebar} ${isSidebarClosed ? styles.close : ''} ${isDarkMode ? 'dark' : ''}`}>
        <i className={`bi bi-arrow-left-right ${styles.toggle}`} onClick={handleToggleClick}></i>

      <div className={styles['menu-bar']}>
        <div className={styles.menu}>

          <ul className={styles['menu-links']}>
          <li>
              <NavLink to="home">
                <i className={"bi bi-house-door "+ styles['icon']}></i>
                <span className={`${styles.text} ${styles['nav-text']}`}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="people">
                <i className={"bi bi-people "+ styles['icon']}></i>
                <span className={`${styles.text} ${styles['nav-text']}`}>People</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="planets">
                <i className={"bi bi-globe "+ styles['icon']}></i>
                <span className={`${styles.text} ${styles['nav-text']}`}>Planets</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="starships">
                <i className={"bi bi-rocket "+ styles['icon']}></i>
                <span className={`${styles.text} ${styles['nav-text']}`}>Starships</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles['bottom-content']}>
          <li onClick={handleLogout}>
            <a href="#">
              <i className={`bi bi-box-arrow-left ${styles.icon}`}></i>
              <span className={`${styles.text} ${styles['nav-text']}`}>Logout</span>
            </a>
          </li>

          <li className={styles.mode} onClick={toggleTheme}>
            <div className={styles['sun-moon']}>
              {isDarkMode ? 
              (<i className={`bi bi-moon ${styles.icon} ${styles.moon}`}></i>) :
              (<i className={`bi bi-brightness-high ${styles.icon} ${styles.sun}`}></i>)
               }
            </div>
            <span className={`${styles['mode-text']} ${styles.text}`}>
              {isDarkMode ? 'Light mode' : 'Dark mode'}
            </span>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
