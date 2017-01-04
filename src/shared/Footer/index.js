import React from 'react';
import Link from 'react-router/Link';
import style from './style.css';

export default function Footer() {
  const styles = [[-30, 0.8], [-18, 0.6], [-6, 0.4]].map(([rotate, opacity]) => ({
    transform: `rotate(${rotate}deg)`,
    opacity,
  }));

  return (
    <div className={style.footer}>
      <h4>Pulselabs llc</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/oss">OSS</Link>
      </div>


      <span className={style.line} style={styles[0]}/>
      <span className={style.line} style={styles[1]}/>
      <span className={style.line} style={styles[2]}/>
    </div>
  )
}
