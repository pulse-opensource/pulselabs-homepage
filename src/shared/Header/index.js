import React from 'react';
import Match from 'react-router/Match';
import style from './style.css';
import Section from '../Section';

export default class Header extends React.Component {
  homeHeader() {
    return (
      <Section className={style.homeHeader}>
        <b className={style.title}>Pulselabs</b>
        <p className={style.subtitle}>Your site is losing money because it's slow. Let us help you.</p>
      </Section>
    )
  }

  aboutHeader() {
    return (
      <Section className={style.aboutHeader}>
        <b className={style.title}>About Us</b>
        <p className={style.subtitle}>The Performance Experts</p>
      </Section>
    )
  }

  contactHeader() {
    return (
      <Section className={style.contactHeader}>
        <b className={style.title}>Contact Us</b>
      </Section>
    )
  }

  ossHeader() {
    return (
      <Section className={style.contactHeader}>
        <b className={style.title}>OSS</b>
      </Section>
    )
  }

  render() {
    return (
      <div>
        <Match exactly pattern="/" component={this.homeHeader} />
        <Match exactly pattern="/about" component={this.aboutHeader} />
        <Match exactly pattern="/contact" component={this.contactHeader} />
        <Match exactly pattern="/oss" component={this.ossHeader} />
      </div>
    )
  }
}

