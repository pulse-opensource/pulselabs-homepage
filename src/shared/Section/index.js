import React from 'react';
import style from './style.css';

export default function Section(props) {
  return (
    <div
      className={`${style.section} ${props.className}`}
      style={{background: props.background}}
    >{props.children}</div>
  )
}
