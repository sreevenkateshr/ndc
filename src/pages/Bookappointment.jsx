// src/pages/BookAppointment.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted successfully!");
  };

  return (
    <div id="content" className="no-top no-bottom">
      {/* Subheader */}
          <section
            className="text-center py-5 text-light"
            style={{ backgroundColor: "#4A7CD2" }}
          >
            <Container>
              <h1>About Us</h1>
              <hr className="border-light my-3" />
              <p>
                <a href="/" className="text-light">Home</a> / About us
              </p>
            </Container>
          </section>
    

      {/* Appointment Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4 justify-content-between">
            {/* Form */}
            <Col lg={6}>
              <div className="p-4 rounded bg-light">
                <h3 className="mb-3">Book Your Appointment</h3>
                <p>
                  Book your appointment today for expert dental care tailored to your needs.
                  Healthy, beautiful smiles start with a simple step, schedule now!
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Service</Form.Label>
                    <Form.Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="General Dentistry">General Dentistry</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                      <option value="Restorative Dentistry">Restorative Dentistry</option>
                      <option value="Preventive Dentistry">Preventive Dentistry</option>
                      <option value="Orthodontics">Orthodontics</option>
                    </Form.Select>
                  </Form.Group>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Time</option>
                          {[...Array(11)].map((_, i) => {
                            const hour = 10 + i;
                            return (
                              <option key={hour} value={`${hour}:00`}>
                                {hour}:00
                              </option>
                            );
                          })}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary">
                    Send Appointment
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Sidebar / Info */}
            <Col lg={6}>
              <div
                className="h-100 rounded-1 text-light p-4 d-flex flex-column justify-content-center"
                style={{
                  backgroundImage: "url('https://source.unsplash.com/600x600/?dentist,clinic')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-dark bg-opacity-75 p-3 rounded">
                  <div className="d-flex align-items-center">
                    <i className="fs-3 me-3 bi-clock"></i>
                    <div>
                      <h4 className="mb-0">Opening Hours</h4>
                      Mon to Sat 08:00 - 20:00
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BookAppointment;
