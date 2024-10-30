import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { routes } from './routes.ts';

import { BusinessMainPage, ScopeOfServicesLayout } from '../pages';
import { MainLayout, ServicePeriodsPage } from '../features';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <NavigationRouting />
    </BrowserRouter>
  );
};

const NavigationRouting: FC = () => {
  return (
    <Router>
      <Route element={<MainLayout />}>
        <Route path={routes.Home} element={<Navigate to={routes.Business} replace />} />
        <Route path={routes.Account} element={<div>Account</div>} />
        <Route path="*" element={<Navigate to={routes.Home} />} />
      </Route>
    </Router>
  );
};