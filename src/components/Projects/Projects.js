import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  aggieshack from "../../Assets/Projects/hack.png";
import TFT from "../../Assets/Projects/TFT.png";
import AmericanAirlines from "../../Assets/Projects/AmericanAirlines.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "grey" }}>
          Here are a few projects I've worked on recently and am planning on working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TFT}
              isBlog={false}
              title="Teamfight Tactics Tracker"
              description="The personal tracker for TFT, an auto battler game, offers users the ability to monitor their recent match history, providing insights on which characters they should have played based on data-driven recommendations. Developed using a combination of Selenium, Python, and AWS technologies, this tool seamlessly bridges the gap between gameplay decisions and analytical insights."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AmericanAirlines}
              isBlog={false}
              title="American Airlines DS Challenge"
              description="For the American Airlines DS Challenge, my team and I secured an impressive 2nd place finish. Leveraging meticulous modeling and comprehensive data analysis, we crafted a model that accurately and precisely distinguishes different types of customers. My primary responsibility involved harnessing the American Airlines datasets to train this model, ensuring it could effectively identify customer types based solely on the provided data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aggieshack}
              isBlog={false}
              title="Aggies Hackathon"
              description="At the Aggies Hackathon, an intense overnight coding challenge, I collaborated with a team to develop an innovative solution. Together, we designed a travel-focused web application that allows users to input both a starting and ending destination. In response, the application offers a tailor-made itinerary, curating a unique journey for each individual user based on their inputs."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
