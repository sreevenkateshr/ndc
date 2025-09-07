// src/components/AdminLogin.jsx
import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../index.css"; // Import the CSS file

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded admin credentials
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      onLogin(true);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh",  }}>
      <Form className="form" onSubmit={handleSubmit}>
        <p className="heading">LOGIN</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Control
          className="input"
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Form.Control
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" className="btn">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminLogin;
