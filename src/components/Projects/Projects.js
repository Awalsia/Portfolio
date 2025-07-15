import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Task Tracker"
              description="A simple yet visually appealing Task Tracker built with React.js. It allows users to add, mark, and delete tasks, with data persisted via localStorage. Styled with custom CSS animations for a smooth user experience."
              ghLink="https://github.com/Awalsia/task-tracker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="A modern weather app made with React and OpenWeather API. Enter a city to get live temperature and weather conditions. Features an animated background and clean, responsive design."
              ghLink="https://github.com/Awalsia/weather-app/tree/main"
              
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
              title="Social Events Web app"
              description="This project is currently under development.The goal of the app is to help users discover local events and connect with new people based on shared interests and emotional state detected through facial expression analysis."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
