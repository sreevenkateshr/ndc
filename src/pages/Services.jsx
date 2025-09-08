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
          <h1>Services</h1>
          <hr className="border-light my-3" />
          <p>
            <a href="/" className="text-light">Home</a> / Services
          </p>
        </Container>
      </section>

   
    </>
  );
};

export default ContactPage;
