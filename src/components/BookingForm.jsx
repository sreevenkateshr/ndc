// src/components/BookingFormStyled.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const BookingFormStyled = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "onlinebookings"), form);

      // WhatsApp link
      const whatsappMessage = `Hello, I want to book: 
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message}`;
      const whatsappURL = `https://wa.me/+916374926377?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappURL, "_blank");

      alert("Booking submitted successfully!");
      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit booking.");
    }
  };

  return (
    <div id="content" className="no-top no-bottom">
      {/* Subheader */}
      <section
        className="text-center py-5"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x400/?dentist,clinic')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <Container>
          <h1>Book Appointment</h1>
          <p>
            <a
              href="/"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Home
            </a>{" "}
            / Book Appointment
          </p>
        </Container>
      </section>

      {/* Appointment Form Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4 justify-content-between">
            {/* Form */}
            <Col lg={6}>
              <div className="p-4 rounded bg-light">
                <h3 className="mb-3">Book Your Appointment</h3>
                <p>
                  Book your appointment today for expert dental care tailored
                  to your needs. Healthy, beautiful smiles start with a simple
                  step!
                </p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Service</Form.Label>
                    <Form.Select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="General Dentistry">
                        General Dentistry
                      </option>
                      <option value="Cosmetic Dentistry">
                        Cosmetic Dentistry
                      </option>
                      <option value="Pediatric Dentistry">
                        Pediatric Dentistry
                      </option>
                      <option value="Restorative Dentistry">
                        Restorative Dentistry
                      </option>
                      <option value="Preventive Dentistry">
                        Preventive Dentistry
                      </option>
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
                          value={form.date}
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
                          value={form.time}
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
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
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
                      value={form.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary">
                    Book Now
                  </Button>
                </Form>
              </div>
            </Col>

            {/* Sidebar */}
            <Col lg={6}>
              <div
                className="h-100 rounded-1 text-light p-4 d-flex flex-column justify-content-center"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/600x600/?dentist,clinic')",
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

export default BookingFormStyled;
