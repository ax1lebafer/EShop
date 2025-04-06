import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { ROUTES } from './routes.ts';
import { MainPage } from './pages/MainPage/MainPage.tsx';
import { CartPage } from './pages/CartPage/CartPage.tsx';
import { FavoritePage } from './pages/FavoritePage/FavoritePage.tsx';
import { DetailProductPage } from './pages/DetailProductPage/DetailProductPage.tsx';
import { ProductDetail } from './components/ProductDetail/ProductDetail.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { TermsOfServicePage } from './pages/TermsOfServicePage/TermsOfServicePage.tsx';
import { ContactsPage } from './pages/ContactsPage/ContactsPage.tsx';

function App() {
  const location = useLocation();

  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path={ROUTES.main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.cart} element={<CartPage />} />
          <Route path={ROUTES.favorite} element={<FavoritePage />} />
          <Route path="item/:id" element={<ProductDetail />} />
          <Route
            path={ROUTES.termsOfService}
            element={<TermsOfServicePage />}
          />
          <Route path={ROUTES.contacts} element={<ContactsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="item/:id" element={<DetailProductPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
