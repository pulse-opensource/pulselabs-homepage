import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import OSS from './OSS';
import BrowserRouter from 'react-router/BrowserRouter';
import Header from './shared/Header';
import Match from 'react-router/Match';
import './globals.css';
import Navigation from './shared/Navigation';
import Footer from './shared/Footer';

const AppShell = (
  <AppContainer>
    <BrowserRouter>
      <div>
        <Navigation />
        <Header />

        <Match pattern="/" exactly component={Home} />
        <Match pattern="/about" component={About} />
        <Match pattern="/contact" component={Contact} />
        <Match pattern="/oss" component={OSS} />

        <Footer />
      </div>
    </BrowserRouter>
  </AppContainer>
);

ReactDOM.render(AppShell, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
