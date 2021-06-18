import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './css/Typed.module.css';

const TypedReactHooksDemo = () => {
  const [show, setShow] = useState(false)
	const el = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    // const options = {
    // 	strings: [
    //     "Hi!",
    //     "I'm Danny, I'm a \n Software Engineer",
    //     '<a href="#/projects" style="text-decoration: underline dodgerblue">Click here</a> \n to see some of my work'
    //   ],
    //   typeSpeed: 50,
    //   backSpeed: 50,
    // };
    
    const options = {
    	strings: [
        "Hi!",
        "I'm Danny, I'm a Software Engineer",
        '<a href="#/projects" style="text-decoration: underline dodgerblue">Click here</a> to see some of my work'
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };


    typed.current = new Typed(el.current, options);

    const time = (options.strings.reduce((endGoal, curIter) => {
      return endGoal + curIter.length 
    }, 0) * 1.5) * 50

    setTimeout(() => {
      setShow(true)
    }, time)
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={styles.wrap}>
      <div>
        <span className={styles.typeWrap} style={{ whiteSpace: 'pre-wrap', fontSize:'25px' }} ref={el} />
        {/* {
        show ? <h4 className="animate__animated animate__fadeIn">Hello</h4> : null
      } */}
      </div>
    </div>
  );
}

export default TypedReactHooksDemo
