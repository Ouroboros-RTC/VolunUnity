import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="logo.png" alt="Logo" />
          <h1>Volunteer Unity</h1>
          <h3>
            Uniting <span className="highlight-hearts">Hearts</span>, Transforming <span className="highlight-lives">Lives</span>
          </h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
