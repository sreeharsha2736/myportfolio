import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ image, title, description, website, github }) => {
  return (
    <Card style={{ width: '18rem', border:"black" }}>
      <div className="square-image-container  ">
        <Card.Img variant="top" src={image} className="square-image" />
      </div>
      <Card.Body className='bg-dark text-light'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={website} target="_blank">
          Website
        </Button>
        <Button variant="secondary" href={github} target="_blank" className="ml-2">
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
