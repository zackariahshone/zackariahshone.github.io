/**
 *
 * Contact
 *
 */

import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Parallax } from 'react-scroll-parallax';
import Zack from '../../images/zack_shone_trilogy.jpg';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Contact() {
  return (
    <div className="contact" id="section5">
      <Container>
        <div className="contactTitle">
          {' '}
          <h1> Contact :</h1>{' '}
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Your email is not ours to share!
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <div className="contImg">
              <Parallax x={[-30, 19]}>
                <Image src={Zack} alt="contact" roundedCircle />
              </Parallax>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <InputGroup>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Button
              className="float-right mt-5"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
