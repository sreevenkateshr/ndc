// src/components/DentistsPage.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const dentists = [
  {
    id: 1,
    name: "Dr. Sarah Bennett",
    title: "Lead Dentist",
    img: "images/team/1.webp",
    qualification:
      "Doctor of Dental Surgery (DDS), New York University College of Dentistry",
    certifications: [
      "Certified in Invisalign Provider",
      "Advanced Cardiac Life Support (ACLS)",
    ],
    awards: [
      "“Top Dentist in Manhattan” – New York Dental Journal (2022)",
      "American Academy of Cosmetic Dentistry Excellence Award (2021)",
    ],
  },
  {
    id: 2,
    name: "Dr. Maya Lin",
    title: "Cosmetic Dentist",
    img: "images/team/2.webp",
    qualification:
      "Doctor of Medicine in Dentistry (DMD), University of Pennsylvania School of Dental Medicine",
    certifications: [
      "Board Certified by the American Board of Periodontology",
      "Sedation Dentistry Certified",
    ],
    awards: [
      "Best Periodontist – Pennsylvania Dental Association (2023)",
      "Clinical Research Award – American Dental Association (2020)",
    ],
  },
  {
    id: 3,
    name: "Dr. Michael Reyes",
    title: "Pediatric Specialist",
    img: "images/team/3.webp",
    qualification:
      "Bachelor of Dental Surgery (BDS), University of Mumbai; Master of Dental Surgery (MDS) in Orthodontics",
    certifications: [
      "Invisalign Platinum Provider",
      "Certified in Digital Smile Design",
    ],
    awards: [
      "National Orthodontics Innovation Award (India, 2021)",
      "Excellence in Dental Practice – Indian Dental Association (2022)",
    ],
  },
  {
    id: 4,
    name: "Dr. James Carter",
    title: "Dental Hygienist",
    img: "images/team/4.webp",
    qualification: "DDS, University of Michigan; MS in Prosthodontics",
    certifications: [
      "Board Certified Prosthodontist",
      "Laser Dentistry Certified (ALD)",
    ],
    awards: [
      "American College of Prosthodontists Educator of the Year (2020)",
      "International Smile Makeover Award (2023)",
    ],
  },
];

const DentistsPage = () => {
  return (
    <div>
      {/* Subheader */}
      <section
        className="text-center py-5 text-light"
        style={{ backgroundColor: "#4A7CD2" }}
      >
        <Container>
          <h1>Our Dentists</h1>
          <hr className="border-light my-3" />
          <p>
            <a href="/" className="text-light text-decoration-none">
              Home
            </a>{" "}
            / Dentists
          </p>
        </Container>
      </section>

      {/* Dentists Section */}
      <section className="py-5">
        <Container>
          {dentists.map((dentist) => (
            <Row
              key={dentist.id}
              className="mb-5 align-items-center bg-light rounded shadow-sm p-4"
            >
              <Col md={4} className="mb-3 mb-md-0">
                <img
                  src={dentist.img}
                  alt={dentist.name}
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={8}>
                <h3>{dentist.name}</h3>
                <p className="text-primary fw-semibold">{dentist.title}</p>

                <h5>Qualification</h5>
                <p>{dentist.qualification}</p>

                <h5>Certifications</h5>
                <ul>
                  {dentist.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>

                <h5>Awards</h5>
                <ul>
                  {dentist.awards.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>

                <div className="mt-3">
                  <a href="#" className="me-3 text-dark">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="me-3 text-dark">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-dark">
                    <FaYoutube />
                  </a>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* BookUs Section */}
      <section
        className="text-light py-5"
        style={{
          backgroundColor: "#4A7CD2", // --primary-color
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="align-items-center g-4">
            <Col md={9}>
              <h3 className="mb-0" style={{ fontSize: "32px" }}>
                Ready to book your dental care session?
              </h3>
            </Col>
            <Col md={3} className="text-md-end">
              <Button
                variant="outline-light"
                className="fw-bold"
                style={{ padding: "10px 25px" }}
                href="#"
              >
                Book Appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DentistsPage;
