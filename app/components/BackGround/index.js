/**
 *
 * BackGround
 *
 */

import React from 'react';
import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function BackGround() {
  return (
    <div className="background">
      <Container>
        <div className="bgTitle">
          <h1>BackGround: </h1>
        </div>
        <Row>
          <Col>
            <h1>Cycling</h1>
          </Col>
          <Col>
            <h1>Work</h1>
          </Col>
          <Col>
            <h1>Code</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

BackGround.propTypes = {};

export default BackGround;
