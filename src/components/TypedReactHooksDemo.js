import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './css/Typed.module.css';

const TypedReactHooksDemo = () => {
	const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        "Hi!",
        "I'm Danny, I'm a \n Software Engineer",
        '<a href="#/projects" style="text-decoration: underline dodgerblue">Click here</a> \n to see some of my work'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    
    typed.current = new Typed(el.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.typeWrap}>
        <span style={{ whiteSpace: 'pre', fontSize:'25px' }} ref={el} />
      </div>
    </div>
  );
}

export default TypedReactHooksDemo
