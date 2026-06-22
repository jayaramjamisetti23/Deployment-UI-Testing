/**
 * Deployment UI (Testing)
 *
 * Root application component. Sets up client-side routing using React Router.
 * Routes:
 *  - `/`       -> `HomePage` (rendered inside `Layout`)
 *  - `/about`  -> `AboutPage`
 *  - `*`       -> `NotFoundPage`
 *
 * Keep this file minimal — routing and layout logic live in `Layout` and
 * the `pages/` directory.
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
