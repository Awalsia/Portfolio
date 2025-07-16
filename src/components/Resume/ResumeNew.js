import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

// Percorso dell'immagine del CV (deve stare nella cartella public)
const imageCV = "/Stefano_Fabiano_CV.png";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
          <img
            src={imageCV}
            alt="Stefano Fabiano CV"
            style={{
              maxWidth: "90%",
              height: "auto",
              border: "1px solid #ccc",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
