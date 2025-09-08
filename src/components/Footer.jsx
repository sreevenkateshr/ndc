import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-5">
          {/* Left Section */}
          <div className="col-lg-4 col-md-6">
            <h2 className="fw-bold d-flex align-items-center mb-3">
              <span className="me-2 text-primary fs-1">🦷</span>
              <span className="fs-2">NDC</span>
            </h2>
            <p className="fs-6 text-secondary">
              At Dentia, we’re dedicated to providing high-quality,
              personalized dental care for patients of all ages. Our skilled
              team uses the latest technology to ensure comfortable, efficient
              treatments and beautiful, healthy smiles for life.
            </p>
            <div className="d-flex gap-4 fs-5 mt-3">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaXTwitter /></a>
              <a href="#" className="text-light"><FaWhatsapp /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaYoutube /></a>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Our Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Pediatric Dentistry</li>
              <li>Restorative Dentistry</li>
              <li>Preventive Dentistry</li>
              <li>Orthodontics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-2 text-primary" />
              <strong>Clinic Location</strong><br />
              100 S Main St, New York, NY
            </p>
            <p className="mb-2">
              <FaPhoneAlt className="me-2 text-primary" />
              <strong>Call Us</strong><br />
              +1 123 456 789
            </p>
            <p>
              <FaEnvelope className="me-2 text-primary" />
              <strong>Send a Message</strong><br />
              contact@dentiacare.com
            </p>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        {/* Bottom Row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="mb-2 mb-md-0">
            © 2025 - Dentia by Designesia
          </p>
          <div>
            <a href="#" className="text-light text-decoration-none me-3">Terms & Conditions</a>
            <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
