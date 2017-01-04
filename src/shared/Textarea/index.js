import React from 'react';
import style from './style.css';

export default function Textarea(props) {
  return (
    <div className={style.inputWrapper}>
      <textarea id={props.name} name={props.name} />
      <label htmlFor={props.name}>{props.title}</label>
    </div>
  )
}
