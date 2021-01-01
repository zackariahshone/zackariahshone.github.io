/**
 *
 * Certs
 *
 */

import React from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cert1 from '../../images/certificate-one.jpg';
import Cert2 from '../../images/certificate-two.jpg';
function Certs() {
  return (
    <div className="components Certs" id="section2">
      <Container>
        <Row>
          <Col>
            <div className="certTitle">
              <h1>Education:</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="certsContainer">
        <Row>
          <Col xs={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Cert1} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  Certificate in Programming and System Analysis
                </Card.Title>
                <Card.Text>
                  In this course I learned fundimentals in of programming in
                  several different languages, including JavaScript and Java as
                  well as how to utallize data bases like MySql and became
                  familiar with linux.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Cert2} />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  Certificate in Full Stack Web development with Trilogy/U of A
                </Card.Title>
                <Card.Text>
                  This was turing point in my tech career. I am a full stack
                  developer with the skills needed to build complete
                  applications. Examples below!!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Certs.propTypes = {};

export default Certs;
