import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3Full,
  DiAws,
  DiDocker,
  DiJava,
  DiPostgresql,
  DiMsqlServer,
  DiDatabase,
  DiGithubFull,
  DiIntellij,
  DiResponsive
  
} from "react-icons/di";
import {
  SiCplusplus,
  SiAngularjs
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "grey" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nodejs">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Reactjs">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Html5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Css">
        <DiCss3Full />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <DiAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postgresql">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MsqlServer">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Database">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <DiGithubFull />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Intellij">
        <DiIntellij />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Responsive">
        <DiResponsive />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Angularjs">
        <SiAngularjs />
      </Col>
    </Row>
  );
}

export default Techstack;
