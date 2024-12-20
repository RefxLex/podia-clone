import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from './routes.ts';
import { MainLayout } from '../features/mainLayout/MainLayout.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { ContactsPage } from '../pages/ContactsPage.tsx';
import { PUBLIC_PATH } from '../environments.ts';


export const Navigation = () => {
  return (
    <BrowserRouter>
      <NavigationRouting />
    </BrowserRouter>
  );
};

const NavigationRouting: FC = () => {
  return (
    <Routes>
      <Route path={PUBLIC_PATH}>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path={routes.Contacts} element={<ContactsPage/>} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
      </Route>
    </Routes>
  );
};