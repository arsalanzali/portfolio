import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "black"}}>
            Howdy, my name is <span className="purple">Asad Ali </span>
            and I am from <span className="purple"> the great state of Texas.</span>
            <br />I am a Full time Software Developer at Pariveda Solutions in Houston Tx.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing Cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Ultimate Frisbee
            </li>
          </ul>

          <p style={{ color: "#5EBEC4" }}>
            "Never Cut What You can Untie"{" "}
          </p>
          <footer className="blockquote-footer">Robert Frost</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
