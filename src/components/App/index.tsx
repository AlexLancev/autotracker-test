import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { getTrackers } from 'store/trackers/trackersSlice';
import { getTrackersId } from 'store/trackerId/trackerIdSlice';
import { AppDispatch } from 'store/index';
import { useDispatch } from 'react-redux';

import { AuthorizationPage } from 'pages/AuthorizationPage';
import { HomePage } from 'pages/HomePage';
import { AccountPage } from 'pages/AccountPage';
import { AssignmentsPage } from 'pages/AssignmentsPage';
import { DriversPage } from 'pages/DriversPage';
import { NotificationsPage } from 'pages/NotificationsPage';
import { ObjectsPage } from 'pages/ObjectsPage';
import { UsersPage } from 'pages/UsersPage';

import { Paths } from '../../paths';

function ScrollToTop() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getTrackers());
    dispatch(getTrackersId('9'));
  }, [dispatch]);

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
          <Route path={`${Paths.accountPage}`} element={<AccountPage />} />
          <Route
            path={`${Paths.assignmentsPage}`}
            element={<AssignmentsPage />}
          />
          <Route path={`${Paths.driversPage}`} element={<DriversPage />} />
          <Route
            path={`${Paths.notificationsPage}`}
            element={<NotificationsPage />}
          />
          <Route path={`${Paths.objectsPage}`} element={<ObjectsPage />} />
          <Route path={`${Paths.usersPage}`} element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
