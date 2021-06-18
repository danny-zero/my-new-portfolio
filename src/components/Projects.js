import React, {useState, useEffect, useRef } from 'react';
import cx from 'classnames';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/projects.module.css';
import { projects } from '../projects';
// import Typist from 'react-typist';
import Typed from 'typed.js';

const Projects = () => {
    const el = useRef(null);
	const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            "Projects"
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
        <div className={styles.projectContainer}>
        <div className={styles.projectsHeader}>
            <span style={{ whiteSpace: 'pre', fontSize:'25px' }} ref={el} />
        </div>
            {
                projects.map((project, idx) => {
                    return (
                        <Container key={idx}>
                            <Row className={styles.projectRow}>
                                <Col>
                                    <a href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                    ><img className={cx(styles.projectImg, "animate__animated animate__fadeIn")} src={`${project.img}`} />
                                            </a>
                                </Col>
                                <Col className={styles.projectText}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p><strong>Technologies used:</strong>&nbsp;{project.tech}</p>
                                    <div className={styles.projectBtns}>
                                        <Button>
                                            <a href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer">See Live
                                            </a>
                                        </Button>
                                        {
                                            project.github.length > 0 ? ( <Button>
                                            <a href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer">Source Code
                                            </a>
                                        </Button>) : null
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    )
                })
            }
        </div>
    )
}

export default Projects
