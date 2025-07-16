import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
 } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Awalsia"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
{/*            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>*/}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/stefano-pio-fabiano-69885a277/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li><p>© {year} Stefano Fabiano</p>
{/*            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
