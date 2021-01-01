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
        <div className="bgTitle">
          <h1>Background: </h1>
        </div>
      </Container>

      <Carousel>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '30%', margin: '10%' }}>
                  <Card.Img variant="top" src={img} />
                </Card>
              </Col>
              <Col>
                <h3>Cycling</h3>
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <p>Turning the cranks since I was 18.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '30%', margin: '10%' }}>
                  <Card.Img variant="top" src={img} />
                </Card>
              </Col>
              <Col>
                <h3>Bike Shop and turning wrenches</h3>
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <p>
              First job earned at 16 with my work ethic, not getting paid but
              working hard.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '30%', margin: '10%' }}>
                  <Card.Img variant="top" src={img} />
                </Card>
              </Col>
              <Col>
                <h3>Nutrition</h3>
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <p>
              Had a strong interest in nutrition coming out of school but
              pursued pro cycling instead.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: '30%', margin: '10%' }}>
                  <Card.Img variant="top" src={img} />
                </Card>
              </Col>
              <Col>
                <h3>Computer Science</h3>
              </Col>
            </Row>
          </Container>
          <Carousel.Caption>
            <p>
              As I was racing i met so many awesome individuals and finally met
              someone who mentioned computer science and the rest is in this
              website!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

BackGround.propTypes = {};

export default BackGround;
