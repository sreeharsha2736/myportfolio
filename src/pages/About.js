import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CenteredHeading from '../components/CenteredHeading';

const About = () => {
  return (
    <Container id="about" className="about-container bg-dark text-light my-4">
        <CenteredHeading heading="About me"/>
      <Row>
        <Col md={8} >
          <Card className="mb-4 shadow-sm bg-dark text-light">
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              Worked as a React js developer for 2 years. Worked on many front end and back end development projects
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm bg-dark text-light">
            <Card.Body>
              <Card.Title>Front End Skills</Card.Title>
              {/* Add your front end skills content here */}
            </Card.Body>
          </Card>
          <Card className="mb-4 shadow-sm bg-dark text-light">
            <Card.Body>
              <Card.Title>Back End Skills</Card.Title>
              {/* Add your back end skills content here */}
            </Card.Body>
          </Card>
          <Card className="shadow-sm bg-dark text-light">
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
