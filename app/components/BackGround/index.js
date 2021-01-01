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
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import img from '../../images/icon-512x512.png';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function BackGround() {
  return (
    <div className="background" id="section4">
      <Container>
        <div />
      </Container>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                </Card>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                </Card>

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                </Card>

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={img} />
                </Card>

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

BackGround.propTypes = {};

export default BackGround;
