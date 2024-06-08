import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../auth-helpers';

export const AuthRoute = () => {
  return isAuthenticated() ? <Navigate to="/" /> : <Outlet />;
};
