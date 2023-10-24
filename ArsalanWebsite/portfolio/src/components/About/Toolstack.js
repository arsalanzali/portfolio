import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiAmazonaws,
  SiGooglecloud,
  SiAzureartifacts,
  SiVisualstudio,
  SiPycharm,
  SiMicrosoftazure


} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "grey" }}>
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="VisualStudioCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Cloud">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pycharm">
        <SiPycharm />
      </Col>
    </Row>
  );
}

export default Toolstack;
