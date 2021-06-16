import React from 'react';
import cx from 'classnames';
import styles from './css/contact.module.css';


const Contact = () => {
    return (
        <div className={styles.contact}>
            <a href="https://github.com/danny-zero" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={cx(styles.contactLink, "fa fa-github", "animate__animated animate__fadeInRightBig")}
                    aria-hidden="true">
            </a>
            <a href="https://www.linkedin.com/in/daniellahamar/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={cx(styles.contactLink, "fa fa-linkedin", "animate__animated animate__fadeInLeftBig")}
                    aria-hidden="true">
            </a>
        </div>
    )
}

export default Contact
