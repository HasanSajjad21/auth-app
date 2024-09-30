import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Our Product</h1>
      <p>Introducing the best product for your needs.</p>
      <Link to="/auth">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
