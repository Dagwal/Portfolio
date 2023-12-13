import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medaresha from "../../Assets/Projects/medaresha-ss.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medaresha}
              isBlog={false}
              title="Medaresha"
              description="A mobile app that helps to navigate, facilitates, and arrange bookings, share experiences and hire local tour guides for users in a given location."
              // ghLink="https://github.com/"
              demoLink="https://medaresha.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
