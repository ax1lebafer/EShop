import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { ROUTES } from './routes.ts';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.cart} element={<CartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
