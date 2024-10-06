import React from 'react';
import './scss/Header.scss';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
      <div className="welcome-message">
        <span>Welcome</span>
      </div>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="right-section">
        <div className="search-container">
          <span className="search-label">Search</span>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="profile-container">
          <span className="profile-label">Profile</span>
          <div className="user-profile">
            <img src="https://via.placeholder.com/40" alt="User" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
