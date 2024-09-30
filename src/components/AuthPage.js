// src/components/AuthPage.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

function AuthPage() {
  return (
    <div>
      <h1>Authentication Page</h1>
      <nav>
        <Link to="signin">Sign In</Link> | 
        <Link to="signup">Sign Up</Link> | 
        <Link to="forgot-password">Forgot Password</Link>
      </nav>

      {/* Nested routes for different authentication forms */}
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default AuthPage;
