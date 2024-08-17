import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { AuthorizationPage } from 'pages/AuthorizationPage';
import { HomePage } from 'pages/HomePage';
import { Layout } from 'components/Layout';

import {Paths} from '../../paths';

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={Paths.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={`${Paths.authorizationPage}`}
            element={<AuthorizationPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
