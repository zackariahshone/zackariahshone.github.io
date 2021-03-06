/**
 *
 * Homesection
 *
 */

import React from 'react';
// import { Parallax } from 'react-scroll-parallax';
import { Container, Row } from 'react-bootstrap';
import Typical from 'react-typical';
// import Start from '../../images/shootingStar.jpg';
// import nameBox from '../../images/name_container.png';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Homesection() {
  return (
    <div className="component home" id="section1">
      <div className="titleBox">
        <div className="title">
          <h1>Zackariah Shone</h1>
          <h3>
            <Typical
              steps={[
                'I am a full stack developer!',
                1000,
                'from back',
                500,
                'to front',
                500,
                'lets enjoy technology!',
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h3>
        </div>
      </div>
      <div />
      <Container>
        <Row>
          <div className="desc-container">
            <div className="desc-left">
              <h3>Aspiring web developer and data scientist</h3>
            </div>
            <div className="desc-right">
              <h3>
                Just enjoying the journey and excited to help make you relevant
                on the web
              </h3>
            </div>
            <div className="desc-left">
              <h3>
                I can build full stack ablications leveraging database
                technologies and front end interfaces
              </h3>
            </div>
            <div className="desc-right" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

Homesection.propTypes = {};

export default Homesection;
