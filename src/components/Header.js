import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="img111">
        
          
        <div className="scene">
      <div className="cube">
        <div className="face front"><img src="/IMG_20240115_123909.jpg" alt="front" className="photo" /></div>
        <div className="face back"><img src="/IMG_20240115_123909.jpg" alt="back" className="photo" /></div>
        <div className="face right"><img src="/IMG_20240115_123909.jpg" alt="right" className="photo" /></div>
        <div className="face left"><img src="/IMG_20240115_123909.jpg" alt="left" className="photo" /></div>
        <div className="face top"><img src="/IMG_20240115_123909.jpg" alt="top" className="photo" /></div>
        <div className="face bottom"><img src="/IMG_20240115_123909.jpg" alt="bottom" className="photo" /></div>
      </div>
    </div>
      </div><br/>
      <div className='nametitle1'>
      <h1 className="name">Anegondi Vijay</h1>
      <p className="title">Web Developer Portfolio</p>
      </div>
    </header>
  );
};

export default Header;
