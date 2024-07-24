import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
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

    // Redirect to form page upon successful login
    navigate('/form');
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Resume Builder</h1>
        <p>Your one-stop solution for creating professional resumes with ease.</p>
        <button onClick={() => setIsLogin(!isLogin)} className="start-button">
          {isLogin ? 'Get Started' : 'Create an Account'}
        </button>
      </div>

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
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
