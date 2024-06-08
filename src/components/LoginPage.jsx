import React, { useState } from 'react';
import './LoginPage.css';
import AdminPage from './AdminPage';

const LoginPage = ({ changePage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication logic (replace with actual authentication)
    if (email === 'admin@example.com' && password === 'admin') {
      setIsAdmin(true);
      alert('Admin login successful');
    } else if (email === 'user@example.com' && password === 'user') {
      setIsAdmin(false);
      alert('User login successful');
      changePage('dashboard');
    } else {
      alert('Invalid email or password');
    }
  };
  
  return (
    <div className="login-container">
      {!isAdmin ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          <p className="create-account-link" onClick={() => changePage('signup')}>Create an account</p>
        </form>
      ) : (
        <AdminPage />
      )}
    </div>
  );
};

export default LoginPage;
