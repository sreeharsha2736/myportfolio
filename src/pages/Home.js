import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import myImage from '../images/my_image.png';

const Home = () => {
  return (
    <div className="bg-dark text-light p-4">
      <Container 
        className='d-flex flex-column justify-content-center align-items-center text-center p-1'
        style={{ height: "100%" }} // Ensure the container takes full height for vertical centering
      >
        <Row className="mb-3">
          <Col>
            <Image 
              src={myImage} 
              style={{ maxWidth: '25%', height: 'auto' }} // Adjust size here
              fluid 
              rounded 
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-secondary fw-bold" style={{ fontSize: "1.75rem" }}>
              I am Sreeharsha Guntamadugu
            </p>
            <p className="text-secondary fw-bold" style={{ fontSize: "1.75rem" }}>
            Thanks for letting me introduce to you
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home