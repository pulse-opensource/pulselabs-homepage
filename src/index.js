import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import OSS from './OSS';
import BrowserRouter from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import style from './style.css';
import './globals.css';

export const AppShell = (
  <AppContainer>
    <BrowserRouter>
      <div>
        <nav className={style.pulseNavContainer}>
          <b>
            <svg xmlns="http://www.w3.org/2000/svg" width="31.7" height="31.7">
              <path d="M11.6 26c-.5 0-1-.4-1-1L9 17.6l-1 1.8c-.4.3-.8.6-1 .6H1c-.5 0-1-.5-1-1.2 0-.6.5-1.2 1.2-1.2h5L8.4 14c.3-.6.7-.8 1.2-.7.5 0 1 .4 1 1l1 4.5 2-12c.2-.5.7-1 1.2-1 .6 0 1 .5 1.2 1l2.3 13.5.7-2c.2-.4.7-.7 1-.7h10.6c.6 0 1 .6 1 1.2 0 .7-.4 1.2-1 1.2H21l-2 5c-.2.5-.7.8-1.3.8-.5 0-1-.5-1-1l-2-11-2 11.2c0 .6-.5 1-1 1z"/>
            </svg>
            labs
          </b>

          <span className={style.pulseNav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/oss">OSS</Link>
          </span>
        </nav>


        <div className={style.header}>
          <h1>{"Perf Problems? Pulselabs.it!"}</h1>
        </div>

        <div className={style.body}>
          <Match pattern="/" exactly component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/contact" component={Contact} />
          <Match pattern="/oss" component={OSS} />
        </div>
      </div>
    </BrowserRouter>
  </AppContainer>
);

ReactDOM.render(AppShell, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
