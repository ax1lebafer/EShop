import { Header } from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { Footer } from '../Footer/Footer.tsx';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
