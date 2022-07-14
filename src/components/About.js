import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/about.module.css';

const About = () => {
    const el = useRef(null);
	  const typed = useRef(null);
    // const [show, setShow] = useState(false)

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
                    <img className={styles.photo} src="/public/portraits/IMG_6384-2.jpg"/>
                    </Col>
                    <Col>
                        <span style={{ whiteSpace: 'pre', fontSize:'25px' }} ref={el} />
                        <p>My name is Danny, and I'm a Brazilian-American&nbsp;🇧🇷&nbsp; software engineer and photographer living in Miami, FL.</p>
                        <p>I have a passion for how tech can impact healthcare by increasing access to essential health services.</p>
                        <p>Before I became a software engineer I worked in the healthcare industry for ten years as a pharmacy technician in the in-patient setting of a local children's hospital.</p>
                        <p>In 2020 I decided to take the leap and embark on learning to code and enrolled in Fullstack Academy&#39;s Software Engineering immersive program. After graduating, I returned to become a teaching fellow and give back by helping others achieve their software engineering goals while going through the same program I had. In doing so discovered just how rewarding education can be while gaining real world experience in the form of writing software engineering curriculum, leading live coding demos, spearheading a front end assessment preparation lecture and demo, and providing one-on-one as well as group support to over 40 students in RESTful architecture built on Node.js, Express, React, Redux, and Sequelize ORM with PostgreSQL</p>
                        <p>I look forward to growing in my career and am hoping to make impactful contributions especially in the areas of healthcare and education.</p>
                        <p>Some of the technologies I'm experienced in:</p>
                        <div className={styles.aboutIcons}>
                          <span className="iconify" data-icon="bx:bxl-javascript" data-inline="false"></span>
                          <span className="iconify" data-icon="bx:bxl-react" data-inline="false"></span>
                          <span class="iconify" data-icon="tabler:brand-react-native"></span>
                          <span className="iconify" data-icon="simple-icons:redux" data-inline="false"></span>
                          <span className="iconify" data-icon="icomoon-free:html-five" data-inline="false"></span>
                          <span className="iconify" data-icon="bx:bxl-css3" data-inline="false"></span>
                          <span className="iconify" data-icon="cib:sass-alt" data-inline="false"></span>
                          <span className="iconify" data-icon="file-icons:sequelize" data-inline="false"></span>
                          <span className="iconify" data-icon="simple-icons:postgresql" data-inline="false"></span>
                          <span className="iconify" data-icon="fa-brands:node" data-inline="false"></span>
                          <span className="iconify" data-icon="simple-icons:express" data-inline="false"></span>
                          <span className="iconify" data-icon="bi:bootstrap" data-inline="false"></span>
                          <span className="iconify" data-icon="simple-icons:amazons3" data-inline="false"></span>
                          <span className="iconify" data-icon="cib:jekyll" data-inline="false"></span>
                          <span class="iconify" data-icon="teenyicons:python-outline"></span>
                          <span class="iconify" data-icon="akar-icons:django-fill"></span>
                          {/* <span className="iconify" data-icon="cib:gatsby" data-inline="false"></span> */}
                        </div>
                        <br />
                        <p>When I'm not coding I enjoy photography, meditating, and balancing on a flat piece of nylon webbing (slacklining).</p>
                        {/* <Button className={styles.resumeBtn}>
                          <a href="/public/resumes/danny_lahamar_resume.pdf"
                              target="_blank"
                              rel="noopener noreferrer">Resume
                          </a>
                        </Button> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
