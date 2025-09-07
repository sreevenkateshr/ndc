import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer"
const ContactPage = () => {
  return (
    <>
   

      {/* Subheader / Banner */}
      <section
        className="text-center py-5 text-light"
        style={{ backgroundColor: "#4A7CD2" }}
      >
        <Container>
          <h1>Contact Us</h1>
          <hr className="border-light my-3" />
          <p>
            <a href="/" className="text-light">Home</a> / Contact
          </p>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {/* Info */}
            <Col lg={6}>
              <h2>We are always ready to help you</h2>
              <p>
                Whether you have a question, suggestion, or just want to say hello, fill out the form and we'll get back to you soon.
              </p>

              <Row className="g-3 mt-3">
                <Col md={6}>
                  <h5><FaClock className="me-2 text-primary"/>We're Open</h5>
                  Monday - Friday 08:00 - 18:00
                </Col>
                <Col md={6}>
                  <h5><FaMapMarkerAlt className="me-2 text-primary"/>Clinic Location</h5>
                  100 S Main St, New York, NY
                </Col>
                <Col md={6}>
                  <h5><FaPhone className="me-2 text-primary"/>Call Us</h5>
                  +1 123 456 789
                </Col>
                <Col md={6}>
                  <h5><FaEnvelope className="me-2 text-primary"/>Email</h5>
                  contact@dentiacare.com
                </Col>
              </Row>
            </Col>

            {/* Form */}
            <Col lg={6}>
              <div className="p-4 bg-light rounded shadow-sm">
                <h3>Get In Touch</h3>
                <Form name="contactForm" id="contact_form">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Your Name" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Your Email" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Control type="text" placeholder="Your Phone" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                  </Form.Group>

                  <Button type="submit" className="btn btn-primary">Send Message</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
