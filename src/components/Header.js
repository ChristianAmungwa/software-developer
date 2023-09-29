import React from 'react';
import './Header.css'; // we'll create this CSS file next

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a href="#about-me">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/software-developer-67abd.appspot.com/o/Chris1.png?alt=media&token=dac11f8f-21e7-4b80-b52e-783cee2f34f6"
      alt="Profile" className="profile-image" />
      <div className="header-info">
        <h1>Software Developer</h1>
        <p>React, JavaScript, Python, Django, HTML, CSS</p>
      </div>
    </div>
  );
};

export default Header;
