import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header>
      <div className="container">
        <i className="fa-brands fa-youtube youtube"></i>

        <div className="mic">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
          <i className="fas fa-microphone"></i>
        </div>

        <div className="icons">
          <i className="fas fa-video"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-user"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
