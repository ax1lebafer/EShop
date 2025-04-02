import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ROUTES } from './routes.ts';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
