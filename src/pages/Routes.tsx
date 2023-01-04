import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Path } from 'enums';
import {
  Account,
  AccountStranger,
  Admin,
  CreateReview,
  EditReview,
  Home,
  Login,
  Page404,
  Register,
  ReviewId,
  ReviewQueryParam,
} from 'pages';
import { selectorIsAuth } from 'store';

export const Routers = (): ReactElement | null => {
  const isAuth = useSelector(selectorIsAuth);
  const HOME = <Navigate to={`${Path.Home}`} />;
  return (
    <Routes>
      <Route path={`${Path.Root}`}>
        <Route path={`${Path.Root}`} element={HOME} />
        <Route path={`${Path.Other}`} element={<Page404 />} />
        <Route path={`${Path.Home}`} element={<Home />} />
        <Route path={`${Path.Register}`} element={isAuth ? HOME : <Register />} />
        <Route
          path={`${Path.Account}${Path.CreateReview}${Path.Root}${Path.Value}`}
          element={<CreateReview />}
        />
        <Route
          path={`${Path.Account}${Path.Edit}${Path.Root}${Path.Value}`}
          element={<EditReview />}
        />

        <Route path={`${Path.Login}`} element={isAuth ? HOME : <Login />} />
        <Route path={`${Path.Account}${Path.Root}${Path.Value}`} element={<Account />} />
        <Route
          path={`${Path.AccountAdmin}${Path.Root}${Path.Value}`}
          element={<Admin />}
        />
        <Route
          path={`${Path.Account}${Path.AccountAdmin}${Path.User}${Path.Root}${Path.Value}`}
          element={<AccountStranger />}
        />
        <Route path={`${Path.Review}${Path.Root}${Path.Value}`} element={<ReviewId />} />
        <Route path={`${Path.Reviews}`} element={<ReviewQueryParam />} />
      </Route>
    </Routes>
  );
};
