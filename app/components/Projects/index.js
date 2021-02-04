/**
 *
 * Projects
 *
 */

import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Parallax } from 'react-scroll-parallax';
import P1 from '../../images/Screenshot_2021-01-03 Document.png';
import P2 from '../../images/Screenshot_2021-01-03 LaReau Films.jpg';
import P3 from '../../images/Screenshot_2021-01-03 Stache In Blog.png'

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Projects() {
  return (
    <div className="projects" id="section3">
      <Container>
        <div className="projectsTitle">
          <h1>Projects: </h1>
        </div>
      </Container>
      <Container>
        <div className = 'projectBox'>

        <Row>
          <Col>
            <Parallax y={[90, -90]}>
              <div className="boxOne"> <img src= {P1}></img></div> 
            </Parallax>
          </Col>
          <Col>
            <Parallax y={[-90, -50]}>
              <div className="boxTwo"><img src = {P2}></img></div>
            </Parallax>
          </Col>
          <Col>
            <Parallax y={[90, -90]}>
              <div className="boxThree"><img src = {P3}></img></div>
            </Parallax>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}

Projects.propTypes = {};

export default Projects;
