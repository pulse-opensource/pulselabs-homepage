import React, { PropTypes } from 'react';
import style from './style.css';

export default function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.cardHeader} />
      <h1>{props.title}</h1>
      <p>{props.text}</p>

      <a>{props.link}</a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
}
