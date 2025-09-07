import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, Accordion } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaTooth,
  FaSmile,
  FaChild,
  FaTools,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import about1 from "../assets/about1.webp"
import { FaCheck } from "react-icons/fa";
// import service1 from "../assets/service1.webp";
// import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";




// Testimonials data
const testimonials = [
  {
    name: "John Doe",
    role: "Patient",
    image: "https://via.placeholder.com/80",
    quote: "Amazing dental care! The team was so gentle and professional.",
  },
  {
    name: "Sarah Lee",
    role: "Patient",
    image: "https://via.placeholder.com/80",
    quote: "I love my new smile. Highly recommended for cosmetic dentistry!",
  },
  {
    name: "Michael Smith",
    role: "Patient",
    image: "https://via.placeholder.com/80",
    quote: "Friendly staff, clean clinic, and excellent treatment!",
  },
  {
    name: "Emily Johnson",
    role: "Patient",
    image: "https://via.placeholder.com/80",
    quote: "Best dental experience ever. My kids love visiting here!",
  },
];



function HeroSection() {
  const images = [hero1, hero2, hero3]; // ✅ add this

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const services = [
    {
      icon: <FaTooth size={40} className="service-icon" />,
      title: "General Dentistry",
      text: "Complete oral care for every smile with cleanings, exams, and more.",
    },
    {
      icon: <FaSmile size={40} className="service-icon" />,
      title: "Cosmetic Dentistry",
      text: "Enhance your smile’s beauty with whitening, veneers, and more.",
    },
    {
      icon: <FaChild size={40} className="service-icon" />,
      title: "Pediatric Dentistry",
      text: "Gentle and fun dental care for kids to grow healthy, happy smiles.",
    },
    {
      icon: <FaTools size={40} className="service-icon" />,
      title: "Restorative Dentistry",
      text: "Repair and restore your teeth for lasting comfort and function.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Bennett",
      role: "Lead Dentist",
      img: "https://via.placeholder.com/300x350",
    },
    {
      name: "Dr. Maya Lin",
      role: "Cosmetic Dentist",
      img: "https://via.placeholder.com/300x350",
    },
    {
      name: "Dr. Michael Reyes",
      role: "Pediatric Specialist",
      img: "https://via.placeholder.com/300x350",
    },
    {
      name: "Dr. James Carter",
      role: "Dental Hygienist",
      img: "https://via.placeholder.com/300x350",
    },
  ];

  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>

{/* Hero Section */}
<div className="hero-section">
  {images.map((img, index) => (
    <div
      key={index}
      className={`hero-bg ${index === currentImage ? "active" : ""}`}
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  ))}
  <div className="hero-overlay"></div>

  <Container className="hero-content text-white">
    <p className="small-text">Family Dental Care</p>
    <h1 className="fw-bold display-4">
      Elevating Smiles with <br />
      Expert Care and a <br /> Gentle Touch
    </h1>
    <Button variant="outline-light" size="lg" className="mt-3">
      Book Appointment
    </Button>

    <div className="mt-4 d-flex flex-wrap align-items-center">
      <span className="me-2">Google Rating</span>
      <span className="fw-bold">5.0</span>
      <span className="ms-2 text-warning">★★★★★</span>
      <span className="ms-2">Based on 23k Reviews</span>
    </div>
  </Container>
</div>

      {/* Info Strip */}
      <div className="info-strip">
        <Container>
          <Row className="text-white text-center py-4 gy-4 gy-md-0">
            <Col xs={12} md={4} className="info-box">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h6>Need Dental Services?</h6>
                <p className="mb-0">Call: +1 123 456 789</p>
              </div>
            </Col>

            <Col
              xs={12}
              md={4}
              className="info-box border-md-start border-md-end"
            >
              <FaClock className="info-icon" />
              <div>
                <h6>Opening Hours</h6>
                <p className="mb-0">Mon to Sat 08:00 - 20:00</p>
              </div>
            </Col>

            <Col xs={12} md={4} className="info-box">
              <FaEnvelope className="info-icon" />
              <div>
                <h6>Email Us</h6>
                <p className="mb-0">contact@dentiaclinic.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

{/* About Section */}
<section className="about-section py-5">
  <Container>
    <Row className="align-items-center about-images">
      {/* Left Column with Single Image */}
      <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
        <div className="about-image-wrapper rounded-1 overflow-hidden wow zoomIn animated">
          <img
            src={about1} // import your single image
            alt="Dentist"
            className="w-100 wow scaleIn animated"
          />
        </div>
      </Col>

      {/* Right Column with Content */}
      <Col xs={12} md={6} className="text-md-start text-center">
        <p className="about-subtitle">About Us</p>
        <h2 className="about-title fw-bold mb-3">
          Professionals and <br /> Personalized Dental Excellence
        </h2>
        <p className="about-text">
          We offer high-quality dental care tailored for the whole family.
          From routine checkups to advanced treatments, our compassionate
          team ensures your smile stays healthy and confident.
        </p>

        {/* Feature List with Tick Icon */}
        <Row className="mb-3 feature-list">
          <Col xs={12} className="mb-2">
            <p><FaCheck className="text-primary me-2" /> Personalized Treatment Plans</p>
            <p><FaCheck className="text-primary me-2" /> Gentle Care for Kids and Adults</p>
          </Col>
          <Col xs={12}>
            <p><FaCheck className="text-primary me-2" /> State-of-the-Art Technology</p>
            <p><FaCheck className="text-primary me-2" /> Flexible Appointment Scheduling</p>
          </Col>
        </Row>

        <Button variant="primary" size="lg" className="about-btn">
          Book Appointment
        </Button>
      </Col>
    </Row>
  </Container>
</section>


      {/* Services Section */}
      <section className="services-section py-5">
        <Container>
          <div className="text-center mb-5">
            <p className="services-subtitle">Our Services</p>
            <h2 className="services-title fw-bold">
              Complete Care for Every Smile
            </h2>
            <p className="services-text">
              From routine cleanings to advanced restorations, we provide
              personalized dental solutions for patients of all ages.
            </p>
          </div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="service-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center">
                    {service.icon}
                    <h5 className="mt-3">{service.title}</h5>
                    <p className="text-muted">{service.text}</p>
                    <div className="service-plus">+</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button variant="primary" size="lg" className="services-btn">
              View All Services
            </Button>
          </div>
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
                <Col xs={12}>
                  <img
                    src={service3}
                    alt="Clinic"
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section text-white py-5" ref={statsRef}>
        <Container>
          <Row className="text-center">
            <Col md={3} xs={6}>
              <h2>{inView && <CountUp end={10000} duration={3} />}+</h2>
              <p>Happy Patients</p>
            </Col>
            <Col md={3} xs={6}>
              <h2>{inView && <CountUp end={2500} duration={3} />}+</h2>
              <p>Teeth Whitened</p>
            </Col>
            <Col md={3} xs={6}>
              <h2>{inView && <CountUp end={800} duration={3} />}+</h2>
              <p>Dental Implants</p>
            </Col>
            <Col md={3} xs={6}>
              <h2>{inView && <CountUp end={15} duration={3} />}+</h2>
              <p>Years of Experience</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <p className="team-subtitle">Meet Our Dental Team</p>
            <h2 className="fw-bold">Committed to Your Smile</h2>
            <p className="text-muted">
              Our experienced dental team is here to make every visit positive
              and personalized. <br />
              With gentle hands and caring hearts.
            </p>
          </div>

          <Row className="g-4">
            {team.map((member, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="team-card border-0 shadow-sm text-center">
                  <Card.Img variant="top" src={member.img} className="rounded" />
                  <Card.Body>
                    <h5>{member.name}</h5>
                    <p className="text-muted">{member.role}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <p className="subtitle id-color mb-2">Everything You Need to Know</p>
              <h2>Frequently Asked Questions</h2>
            </Col>
            <Col lg={7}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How often should I visit the dentist?
                  </Accordion.Header>
                  <Accordion.Body>
                    It’s recommended to see your dentist every 6 months for a
                    routine check-up and cleaning, unless advised otherwise.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What should I do in a dental emergency?
                  </Accordion.Header>
                  <Accordion.Body>
                    Call our office immediately. We offer same-day emergency care
                    for issues like severe pain, broken teeth, or swelling.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Do you offer services for kids?</Accordion.Header>
                  <Accordion.Body>
                    Absolutely! We provide gentle, friendly pediatric dental care
                    for children of all ages.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What are my options for replacing missing teeth?
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer dental implants, bridges, and dentures depending on
                    your needs and preferences.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Is teeth whitening safe?</Accordion.Header>
                  <Accordion.Body>
                    Yes, when performed by a dental professional, teeth whitening
                    is safe and effective with long-lasting results.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-color-op-1 py-5">
        <Container className="text-center">
          <div className="subtitle mb-3">Testimonials</div>
          <h2>Our Happy Customers</h2>
          <p>
            Join thousands of happy patients who trust us for gentle, expert
            care and beautiful smiles.
          </p>

          <Slider {...slickSettings}>
            {testimonials.map((t, idx) => (
              <div className="p-3" key={idx}>
                <div className="gradient-white-top p-4 rounded-3 shadow-sm">
                  <blockquote className="mb-0">
                    <div className="de_testi_by d-flex align-items-center mb-3">
                      <img
                        className="circle me-3"
                        src={t.image}
                        alt={t.name}
                        style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                      />
                      <div className="text-start">
                        <strong>{t.name}</strong>
                        <br />
                        <span className="text-muted">{t.role}</span>
                      </div>
                    </div>
                    <p className="text-muted">"{t.quote}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>


      {/* bookus */}
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
    </>
  );
}

export default HeroSection;
