import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Percorso del file immagine (mettilo in /public)
const imageCV = "/Stefano_Fabiano_CV.png";
// Percorso del file PDF per il download (opzionale)
const pdfCV = "/Stefano_Fabiano_CV.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <Button variant="primary" href={pdfCV} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <img
            src={imageCV}
            alt="Stefano Fabiano CV"
            style={{ maxWidth: "90%", height: "auto", border: "1px solid #ccc", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
          />
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button variant="primary" href={pdfCV} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
