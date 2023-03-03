import React, { useContext } from 'react';
import { MyContext } from '../../Context';
import Registration from '../Registration/Registration';
import Wikipedia from '../Wikipedia/Wikipedia';
import "./Container.css"

export default function Container() {

  const contVal = useContext(MyContext);

  if (localStorage.getItem('User')) {
    contVal.bool = true;
  } else {
    contVal.bool = false;
  }

  return (
    <div className={contVal.bool ? 'wik-container' : 'reg-container'}>
      {contVal.bool ? <Wikipedia /> : <Registration />}
    </div>
  )
}
