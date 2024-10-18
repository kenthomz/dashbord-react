// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './scss/Sidebar.scss';

const Sidebar = ({ isOpen, onLogout }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <NavLink to="/Dashboard" className="text-white text-decoration-none" activeClassName="active">
          <li>Dashboard</li>
        </NavLink>
        <NavLink to="/tables" className="text-white text-decoration-none" activeClassName="active">
          <li>Tables</li>
        </NavLink>
        <li>Settings</li>
        <li>Users</li>
        <li onClick={onLogout} className="text-white text-decoration-none" style={{ cursor: 'pointer' }}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
