import { NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';

export function AppLayout() {
  return (
    <>
      <header className={styles.headerContainer}>
        <NavLink to={`/cost`} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Програма обчислення витрат
        </NavLink>
        <NavLink to={'/speed'} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Програма обчислення швидкодії
        </NavLink>
      </header>

      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </>
  );
}
