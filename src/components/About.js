import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames'; //A javaScript utility for conditionally joining classNames together
import Typed from 'typed.js';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/about.module.css';

const About = () => {
    const el = useRef(null);
	  const typed = useRef(null);
    const [show, setShow] = useState(false)

  useEffect(() => {
    const options = {
    	strings: [
        "About"
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
        <div className={styles.aboutWrapper}>
            <Container className={styles.aboutContainer}>
                <Row className={styles.about}>
                    <Col className={styles.aboutColOne}>
                    <img className={cx(styles.photo, "animate__animated animate__fadeIn")} src="/public/portraits/new_portrait.jpg"/>
                    </Col>
                    <Col>
                        <span style={{ whiteSpace: 'pre', fontSize:'25px' }} ref={el} />
                        <p>My name is Danny, and I'm a software engineer and photographer living in Miami, FL.</p>
                        <p>Before I became a software engineer I worked in the health industry for 10 years as a pharmacy technician in the in-patient setting of a local children's hospital. I would prepare both IV medication and oral solutions and work with different technologies in the dispensing and inventory management of pharmaceuticals such as Pyxis, DoseEdge, Cerner CPOE, etc. During this time in the healthcare field both in the hospital and attending EMT schoolI became comfortable in being detail-oriented in a high-stakes environment and working with many different types of professionals.</p>
                        <p>I graduated Fullstack Academy's software engineering immersive and am experienced in JavaScript, React, Redux, HTML5, CSS3, SQL, PostgreSQL, Node, Express, React-Bootstrap, Bootstrap, AWS S3, and Gatsby.</p>
                        {/* insert animated logos here and maybe include what I'm currently learning/working on */}
                        <p>When I'm not coding I enjoy photography, traveling, reading, martial arts, board sports, and meditating.</p>
                        {/* <Button className={styles.resumeBtn} onClick={() => setShow(!show)}>Resume</Button> */}
                        <Button className={styles.resumeBtn}>
                          <a href="/public/danny_l_technical_resume.docx.pdf"
                              target="_blank"
                              rel="noopener noreferrer">Resume
                          </a>
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={() => setShow(!show)} size="lg">
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <h1>Resume goes here</h1>
              </Modal.Body>
            </Modal>
        </div>
    )
}

export default About
