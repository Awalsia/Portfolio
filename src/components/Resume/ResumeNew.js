import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Import viewer
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

// PDF path (in /public)
const pdfUrl = "/Stefano_Fabiano_CV.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdfUrl} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "30px" }}>
          <div style={{ width: "80%", height: "800px" }}>
            <Viewer fileUrl={pdfUrl} />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button variant="primary" href={pdfUrl} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
