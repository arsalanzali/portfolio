import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import  aggiesinvent from "../../Assets/Projects/aggiesinvent.png";
import drone from "../../Assets/Projects/drone.jpg";
import lspace from "../../Assets/Projects/lspace.png";

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
              imgPath={drone}
              isBlog={false}
              title="IOT-Security and Computation Management"
              description="This was my final college Capstone Project. In this project me and three other teammates worked on creating an autonmous delivery system. In this system a drone would fly over a rover and map out coordinates using machine learning to an objective. From here the rover would use pathfinding to get to the objective avoiding all obstacles in the way. The live stream from the drone and rover along with data metrics were monitored on a website that was built using React and AWS Amplify. The website was secured using AWS Cognito."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lspace}
              isBlog={false}
              title="NASA LSpace Academy"
              description="This was one of my most interesting projects as it involves space. I was selected to be part of the NASA LSpace Academy which took place over the summer of 2019. During this Academy my teammates and I were given the duty of creating a rover design which would be sent to Kraken Mare one of the biggest frozen lakes on Titan(moon on Saturn). I got to create my first ever PDR(Preliminary Design Review). Along with this I was introduced to AutoCad, Solidworks, and Blender."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aggiesinvent}
              isBlog={false}
              title="Aggies Invent"
              description="Aggies Invent is a 48 hour problem solving challenge that takes place at Texas A&M University. In this event my team and I were tasked with the problem of using AR(Augmented Reality) to create an app that would help people navigate hospitals better. Using HP's Aruba Beacon Technology we created a test app that made the checking in and moving around process easier for those going to the Hospital. We won 1st place in this competition due to our design and implementation of the app."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
