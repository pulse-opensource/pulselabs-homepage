import React from 'react';
import Link from 'react-router/Link';
import style from './style.css';

export default function Navigation() {
  return (
    <nav className={style.pulseNavContainer}>
      <span className={style.pulseNav}>
        <Link to="/">Home</Link>
        <span>•</span>
        <Link to="/about">About</Link>
        <span>•</span>
        <Link to="/contact">Contact</Link>
        <span>•</span>
        <Link to="/oss">OSS</Link>
      </span>
    </nav>
  );
}
