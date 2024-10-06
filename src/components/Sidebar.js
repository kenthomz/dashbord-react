// src/components/Sidebar.js
import React from 'react';
import './scss/Sidebar.scss';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Settings</li>
        <li>Users</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
