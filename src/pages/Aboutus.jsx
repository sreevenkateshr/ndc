// src/pages/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
    {/* Subheader */}
<section
  className="text-center py-5"
  style={{
    backgroundImage: "url('https://picsum.photos/1600/400?random=20')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  }}
>
  <Container>
    <h1>About Us</h1>
    <p>
      <a href="/" style={{ color: "#fff", textDecoration: "underline" }}>
        Home
      </a>{" "}
      / About Us
    </p>
  </Container>
</section>

      {/* About Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <Row className="g-3">
                <Col xs={6}>
                  <img
                    src="https://picsum.photos/400/400?random=1"
                    alt="Dental 1"
                    className="img-fluid rounded"
                  />
                </Col>
                <Col xs={6}>
                  <img
                    src="https://picsum.photos/400/400?random=2"
                    alt="Dental 2"
                    className="img-fluid rounded"
                  />
                </Col>
                <Col xs={12} className="mt-3">
                  <img
                    src="https://picsum.photos/800/400?random=3"
                    alt="Dental 3"
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <h2>Professionals and Personalized Dental Excellence</h2>
              <p>
                We offer high-quality dental care tailored for the whole family.
                From routine checkups to advanced treatments, our compassionate
                team ensures your smile stays healthy and confident.
              </p>
              <ul>
                <li>Personalized Treatment Plans</li>
                <li>Gentle Care for Kids and Adults</li>
                <li>State-of-the-Art Technology</li>
                <li>Flexible Appointment Scheduling</li>
              </ul>
              <Button variant="primary" href="/contact">
                Book Appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Meet Our Dental Team</h2>
          <Row className="g-4">
            {[
              { name: "Dr. Sarah Bennett", role: "Lead Dentist", img: 1011 },
              { name: "Dr. Maya Lin", role: "Cosmetic Dentist", img: 1012 },
              { name: "Dr. Michael Reyes", role: "Pediatric Specialist", img: 1013 },
              { name: "Dr. James Carter", role: "Dental Hygienist", img: 1014 },
            ].map((member, idx) => (
              <Col lg={3} key={idx}>
                <div className="card border-0">
                  <img
                    src={`https://picsum.photos/400/400?random=${member.img}`}
                    className="card-img-top rounded"
                    alt={member.name}
                  />
                  <div className="card-body text-center">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    
          {/* Why Choose Us */}
          <section className="whychoose-section py-5">
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                  <p className="why-subtitle">Why Choose Our Dental Care</p>
                  <h2 className="fw-bold mb-3">
                    Exceptional Service With a Personal Touch
                  </h2>
                  <p className="text-muted">
                    Choosing the right dental provider matters. We combine expert
                    care, advanced technology, and a warm atmosphere to ensure every
                    visit is comfortable, efficient, and tailored to your unique
                    needs.
                  </p>
    
                  <Row className="mt-4">
                    <Col xs={6}>
                      <h6>Experienced Dental</h6>
                      <p className="text-muted small">
                        Skilled care backed by years of trusted dental experience.
                      </p>
                    </Col>
                    <Col xs={6}>
                      <h6>Advanced Technology</h6>
                      <p className="text-muted small">
                        Modern tools ensure accurate and efficient treatments.
                      </p>
                    </Col>
                    <Col xs={6}>
                      <h6>Personalized Treatment</h6>
                      <p className="text-muted small">
                        Custom care plans made to fit your smile and lifestyle.
                      </p>
                    </Col>
                    <Col xs={6}>
                      <h6>Family-Friendly</h6>
                      <p className="text-muted small">
                        Welcoming space for kids, teens, adults, and seniors.
                      </p>
                    </Col>
                  </Row>
                </Col>
    
                <Col md={6}>
                  <Row className="g-3">
                    <Col xs={6}>
                      <img
                        src="https://via.placeholder.com/250x250"
                        alt="Dental Care"
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col xs={6}>
                      <img
                        src="https://via.placeholder.com/250x250"
                        alt="Happy Patient"
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col xs={12}>
                      <img
                        src="https://via.placeholder.com/520x250"
                        alt="Clinic"
                        className="img-fluid rounded"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
    </div>
  );
};

export default AboutUs;
