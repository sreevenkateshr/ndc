import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { collection, addDoc, getDocs } from "firebase/firestore";
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

  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Generate incremental token like NDC-01
  const generateToken = async () => {
    const snapshot = await getDocs(collection(db, "onlinebookings"));
    const count = snapshot.size + 1; // total bookings + 1
    return `NDC-${count.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Generate token
      const appointmentToken = await generateToken();
      setToken(appointmentToken);

      // Save booking + token in Firestore
      await addDoc(collection(db, "onlinebookings"), {
        ...form,
        token: appointmentToken,
        createdAt: new Date(),
      });

      // ✅ Show success modal
      setShowModal(true);

      // Reset form
      setForm({
        name: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

      // (Optional) send WhatsApp message in background
      // ⚠️ Needs WhatsApp Cloud API (not free)
      // If you want free → we keep only popup & admin panel
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit booking.");
    }
  };

  return (
    <div id="content" className="no-top no-bottom">
      {/* Subheader */}
      <section
        className="text-center py-5 text-light"
        style={{ backgroundColor: "#4A7CD2" }}
      >
        <Container>
          <h1>Appointment</h1>
          <hr className="border-light my-3" />
          <p>
            <a href="/" className="text-light">
              Home
            </a>{" "}
            / Appointment
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
                  Book your appointment today for expert dental care tailored to
                  your needs. Healthy, beautiful smiles start with a simple
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
                        placeholder="Phone (with country code)"
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

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Successful </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your appointment has been booked successfully.</p>
          <p>
            <strong>Your Token:</strong> {token}
          </p>
          <p>
            Please show this token at the clinic during your visit ✅
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookingFormStyled;
