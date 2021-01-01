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
        <Row>
          <Col>
            <Parallax y={[400, 100]}>
              <div className="boxOne" />
            </Parallax>
          </Col>
          <Col>
            <Parallax y={[200, 300]}>
              <div className="boxTwo" />
            </Parallax>
          </Col>
          <Col>
            <Parallax y={[300, -50]}>
              <div className="boxThree" />
            </Parallax>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Projects.propTypes = {};

export default Projects;
