// src/ContactContent.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ContactContent = () => {
  return (
    <>
      <Row className='d-flex'>
        <Col className='p-2'>
          <Card className="mb-4 bg-dark text-light">
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-envelope fa-2x me-3"></i>
                  <div>
                    <strong>Email:</strong> sreeharsha.guntamadugu@gmail.com
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-phone fa-2x me-3"></i>
                  <div>
                    <strong>Phone:</strong> +14375663869
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <i className="fab fa-linkedin fa-2x me-3"></i>
                    <div>
                      <strong>LinkedIn:</strong>
                      <a href="https://www.linkedin.com/in/sree-harsha-guntamadugu/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center"> https://www.linkedin.com/in/sree-harsha-guntamadugu/
                      </a>
                    </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactContent;
