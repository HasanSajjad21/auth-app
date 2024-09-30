import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('signin'); // Default page is Sign In

  // Function to navigate between forms
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'signup' && <SignUp navigateTo={navigateTo} />}
      {currentPage === 'signin' && <SignIn navigateTo={navigateTo} />}
      {currentPage === 'forgotPassword' && <ForgotPassword navigateTo={navigateTo} />}
    </div>
  );
}

// Sign Up Component
function SignUp({ navigateTo }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here you can add logic to handle sign-up (e.g., send data to an API)
    alert('Sign up successful!');
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <span onClick={() => navigateTo('signin')} className="link">
          Sign In
        </span>
      </p>
    </div>
  );
}

// Sign In Component
function SignIn({ navigateTo }) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle sign-in (e.g., send data to an API)
    alert('Sign in successful!');
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span onClick={() => navigateTo('signup')} className="link">
          Sign Up
        </span>
      </p>
      <p>
        <span onClick={() => navigateTo('forgotPassword')} className="link">
          Forgot Password?
        </span>
      </p>
    </div>
  );
}

// Forgot Password Component
function ForgotPassword({ navigateTo }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle password reset (e.g., send data to an API)
    alert('Password reset link sent!');
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remember your password?{' '}
        <span onClick={() => navigateTo('signin')} className="link">
          Sign In
        </span>
      </p>
    </div>
  );
}

export default App;

