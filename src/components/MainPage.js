// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <p>This is the main content area after logging in.</p>
      <Link to="/">Go to Landing Page</Link>
    </div>
  );
}

export default MainPage;
