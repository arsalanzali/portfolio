import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "black"}}>
            Howdy, my name is <span className="purple">Arsalan Ali </span>
            and I am from <span className="purple"> the great state of Texas.</span>
            <br />I am a Full time Student at Texas A&M University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 3d Printing
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
          </ul>

          <p style={{ color: "#5EBEC4" }}>
            "This is my last loss"{" "}
          </p>
          <footer className="blockquote-footer">Michael "K3Soju" Zhang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
