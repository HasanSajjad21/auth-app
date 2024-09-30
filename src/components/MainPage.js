import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Main Dashboard</h1>
      <p>This is the main content page after logging in.</p>
      <Link to="/">Go Back to Landing Page</Link>
    </div>
  );
}

export default MainPage;
