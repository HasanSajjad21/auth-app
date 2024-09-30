// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Product</h1>
      <p>The best product for your needs!</p>
      <Link to="/auth">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
