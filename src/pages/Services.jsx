import React from "react";
import SeoHead from "../components/SeoHead";
import { Container, Card, Row, Col } from "react-bootstrap";

function Services() {
  const services = [
    { title: "Teeth Whitening", desc: "Brighten your smile with advanced whitening treatments." },
    { title: "Braces & Aligners", desc: "Perfect your smile with modern braces and clear aligners." },
    { title: "Dental Implants", desc: "Restore your teeth with strong and natural-looking implants." },
  ];

  return (
    <>
      <SeoHead title="Services - Dentia" description="Explore our dental services including whitening, braces, and implants." />
      <Container className="py-5" style={{ marginTop: "56px" }}>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {services.map((s, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>{s.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Services;
