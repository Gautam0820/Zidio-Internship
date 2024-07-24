import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., API call)

    // Redirect to home page upon successful login
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Auth;
