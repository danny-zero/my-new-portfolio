import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './css/Typed.module.css';

const TypedReactHooksDemo = () => {
  const [show, setShow] = useState(false)
	const el = useRef(null);
	// const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        "Hi!",
        "I'm Danny, I'm a Software Engineer",
        '<a href="#/projects" style="text-decoration: underline dodgerblue">Check out some of my work</a>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      onComplete: function() {
        setShow(true);
      }
    };

    const typed = new Typed(el.current, options)

    return () => typed.destroy();
  }, [])



  return (
    <div className={styles.wrap}>
      <div>
        <span className={styles.typeWrap} style={{ whiteSpace: 'pre-wrap', fontSize:'25px' }} ref={el} />
      </div>
     <div className={styles.lowerContainer}>
       {
         show ? <a className="animate__animated animate__bounce" href="#/projects">&rarr;</a> : null
       }
     </div>
    </div>
  );
}

export default TypedReactHooksDemo
