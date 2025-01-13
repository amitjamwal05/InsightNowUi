import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the token is available in localStorage
  const token = localStorage.getItem('token');

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/admin-login" />;
  }

  // If token exists, render the protected component (children)
  return children;
};

export default ProtectedRoute;
