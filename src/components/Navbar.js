import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = ({ disabled = false }) => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/add-job');
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Job Management</h2>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about-me" className="navbar-link">
          About Me
        </Link>
        <Link to="/cover-letter" className="navbar-link">
          Cover Letter
        </Link>

        <button
          className="create-job-button"
          disabled={disabled}
          onClick={handleCreateClick}
        >
          Create New Job
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
