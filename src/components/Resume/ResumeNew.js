import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const pdf = "/Stefano_Fabiano_CV.pdf"; // <-- deve essere nella cartella 'public'

function ResumeNew() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <div style={{ height: "90vh" }}>
          <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
