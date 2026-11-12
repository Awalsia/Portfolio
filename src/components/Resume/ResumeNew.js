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
          <a href={pdfCV} target="_blank" rel="noreferrer" style={{ color: "white", marginTop: "15px", textAlign: "center" }}>
            Open CV in a new tab
          </a>
        </Row>
        <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
          <iframe
            src={pdfCV}
            title="Stefano Fabiano CV"
            style={{
              width: "90%",
              maxWidth: "1000px",
              height: "80vh",
              minHeight: "500px",
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
