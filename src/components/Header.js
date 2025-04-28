import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>2000s Vibes</h1>
        <span className="subtitle">Your Nostalgic Music Player</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search your favorite 2000s songs..." />
      </div>
    </header>
  );
};

export default Header; 