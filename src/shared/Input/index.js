import React from 'react';
import style from './style.css';

export default function Input(props) {
  return (
    <div className={style.inputWrapper}>
      <label htmlFor={props.name}>{props.title}</label>
      <input id={props.name} name={props.name} />
    </div>
  )
}
