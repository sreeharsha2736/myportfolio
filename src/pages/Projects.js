import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Container from 'react-bootstrap/Container';
import './Projects.css'; // Import the CSS file
import projectDetails from "../Data/ProjectDetails"
import CenteredHeading from '../components/CenteredHeading';

const Projects = () => {
  return (
    <Container className="pt-2" id="projects">
        <CenteredHeading heading="My Projects" />
      <div className="card-container">
        {projectDetails.map((project, index) => (
          <div key={index} className="card-wrapper">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              website={project.website}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
