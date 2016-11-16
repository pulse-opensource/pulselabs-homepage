import style from './style.css';
import React from 'react';
import { Link } from 'react-router';

export default function Navigation() {
	return (
		<nav className={style.pulseNavContainer}>
			<b>Pulselabs</b>

			<span className={style.pulseNav}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/oss">OSS</Link>
			</span>
		</nav>
	);
}
