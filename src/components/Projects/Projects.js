import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import versio from "../../Assets/Projects/versio.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Bartind'r"
              description="A mobile recruitment platform that connects bartenders and employers through a Tinder-inspired swipe system. Swipe right to like, swipe left to skip. Once both users like each other, a match is created and they can start chatting, exchange photos, videos, documents, voice messages, and arrange interviews. Profiles are shown only once, making every swipe meaningful and keeping the experience fast and intuitive."
              ghLink="https://github.com/Awalsia/bartender-match"
              demoLink="https://bartindr.app/home"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={versio}
              isBlog={false}
              title="Versio"
              description="A multilingual chat app that connects people across language barriers. Write or record a voice message in your own language, and the other person receives it translated into theirs. Supports 20 languages, automatic text and voice translation, and the option to tap a message to see the original. Source code is private and available on request."
              requestAccessLink="mailto:awalsia25@gmail.com?subject=Versio%20-%20Source%20code%20access%20request"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Exepnses Tracker"
              description="Track your income and expenses easily. Add transactions, see totals update in real time, and visualize your monthly balance with a dynamic bar chart. Includes localStorage support and a modern UI with animated video background."
              ghLink="https://github.com/Awalsia/Expenses-Tracker/tree/main"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quiz Game"
              description="An interactive and stylish Quiz App built with React. Includes animated timer, sound effects, dynamic transitions, and customizable question settings via Open Trivia API."
              ghLink="https://github.com/Awalsia/Quiz-App/tree/main"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Personal Code Sharing Platform"
              description="A static web page built to publicly share snippets, solutions, and personal code experiments. Lightweight and fast-loading, this project serves as a simple reference point for collaborators and peers."
              ghLink="https://www.youtube.com/watch?v=H7O17O1t-9g"
              demoLink="https://sfcode.altervista.org/"
               />
          </Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={emotion}
    isBlog={false}
    title="Dating Request Website"
    description="A modern dating web application built with React and EmailJS. Users can create and send date requests by selecting an activity, date and time through an interactive and responsive interface. The project features email notifications, playful UX elements, and a fully deployed live version."
    ghLink="https://github.com/Awalsia/Dating-website-"
    demoLink="https://dating-website-stefano.netlify.app/"
  />
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
