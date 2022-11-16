// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { Home } from '../../pages/home/Home';
import { NotFound } from '../../pages/notFound/NotFound';
import { Post } from '../../pages/post/Post';
import { PostForm } from '../../pages/post/PostForm';
import { Cookie } from '../cookie/Cookie';
import { Privacy } from '../privacy/Privacy';
import { Access } from '../../auth/Access';
import { AnonymousOnly } from '../../auth/AnonymousOnly';
import { ForgotPassword } from '../../auth/ForgotPassword';
import { ResetPassword } from '../../auth/ResetPassword';
import { LoggedUserOnly } from '../../auth/LoggedUserOnly';
import { Profile } from '../../auth/Profile';

export const Main = () => (
  <>
    <ReactRoutes>
      <Route
        path={RoutePaths.HOME}
        element={
          <LoggedUserOnly>
            <Home />
          </LoggedUserOnly>
        }
      />
      <Route
        element={
          <LoggedUserOnly>
            <Profile />
          </LoggedUserOnly>
        }/>
      <Route element={<Cookie />} path={RoutePaths.COOKIE} />
      <Route element={<Privacy />} path={RoutePaths.PRIVACY} />
      <Route element={<ForgotPassword />} path={RoutePaths.FORGOT_PASSWORD} />
      <Route
        element={<ResetPassword />}
        path={`${RoutePaths.RESET_PASSWORD}/:token`}
      />
      <Route
        element={
          <AnonymousOnly>
            <Access />
          </AnonymousOnly>
        }
        path={RoutePaths.ACCESS}
      />
      <Route
        element={
          <LoggedUserOnly>
            <PostForm />
          </LoggedUserOnly>
        }
        path={RoutePaths.POSTFORM}
      />
      <Route
        element={
          <LoggedUserOnly>
            <Post />
          </LoggedUserOnly>
        }
        path={RoutePaths.POST}
      />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  </>
);
