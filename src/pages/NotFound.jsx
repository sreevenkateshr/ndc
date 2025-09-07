import React from "react";
import { Container, Button } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="text-center py-5" style={{ marginTop: "56px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
      <Button href="/" variant="primary">Go Home</Button>
    </Container>
  );
}

export default NotFound;
