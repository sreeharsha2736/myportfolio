import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="about-container my-4">
      <Row>
        <Col md={8}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              {/* Add your experience content here */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Front End Skills</Card.Title>
              {/* Add your front end skills content here */}
            </Card.Body>
          </Card>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>Back End Skills</Card.Title>
              {/* Add your back end skills content here */}
            </Card.Body>
          </Card>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Others</Card.Title>
              {/* Add your other skills content here */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
