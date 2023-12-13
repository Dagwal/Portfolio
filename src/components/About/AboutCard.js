import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dagim Wallelgne </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I'm currently employed as a software developer at Perago Information.plc.
            <br />
            <br />
            I have completed Software Engineering at African Leadership X (ALX).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing Physical Exercise
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping Others
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing CTF
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If I Can't Do Great Things, I Can Do Small Things In A Great Way!"{" "}
          </p>
          <footer className="blockquote-footer">DagWal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
