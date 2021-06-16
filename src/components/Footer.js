import React from 'react';
import styles from './css/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a href="https://github.com/danny-zero" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="fa fa-github" 
                    aria-hidden="true">
            </a>
            <a href="https://www.linkedin.com/in/daniellahamar/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="fa fa-linkedin" 
                    aria-hidden="true">
            </a>
        </div>
    )
}

export default Footer
