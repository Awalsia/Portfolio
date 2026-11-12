import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";

const pdfCV = "/CV_Stefano_Fabiano_VG_X.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", marginBottom: "25px" }}>
          <Button variant="primary" href={pdfCV} download="CV_Stefano_Fabiano.pdf">
            <AiOutlineDownload /> &nbsp; Download CV
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
          <img
            src="/cv-stefano-full.png"
            alt="CV completo di Stefano Fabiano"
            style={{
              width: "90%",
              maxWidth: "1000px",
              height: "auto",
              display: "block",
              border: "1px solid #ccc",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
              backgroundColor: "white",
            }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
