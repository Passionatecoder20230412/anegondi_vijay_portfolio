import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="photoBoxWrapper">
        <div className="photoBox">
          <img src="/IMG_20240115_123909.jpg" alt="Anegondi Vijay" className="photo" />
        </div>
      </div>
      <h1 className="name">Anegondi Vijay</h1>
      <p className="title">Web Developer Portfolio</p>
    </header>
  );
};

export default Header;
