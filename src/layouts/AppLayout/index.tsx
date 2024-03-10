import { NavLink, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import { APP_ROUTES } from '../../constants.ts';

export function AppLayout() {
  return (
    <>
      <header className={styles.headerContainer}>
        <NavLink to={APP_ROUTES.costPage} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Програма обчислення витрат
        </NavLink>
        <NavLink to={APP_ROUTES.speedPage} className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
          Програма обчислення швидкодії
        </NavLink>
      </header>

      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </>
  );
}
