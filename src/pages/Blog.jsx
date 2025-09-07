import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../index.css";

const blogData = [
  {
    date: "20",
    month: "Jun",
    image: "images/blog/l1.webp",
    title: "Discover 10 Easy Tips to Maintain a Healthier and Brighter Smile Today",
    author: "Brunilda Doniger",
    tag: "Health Care",
    featured: true
  },
  {
    date: "20",
    month: "Jun",
    image: "images/blog/l2.webp",
    title: "Is Teeth Whitening Safe and Effective? Here’s What You Need to Know",
    author: "Brunilda Doniger",
    tag: "Health Care",
    featured: false
  },
  {
    date: "20",
    month: "Jun",
    image: "images/blog/l3.webp",
    title: "Braces vs. Clear Aligners: Which Orthodontic Option Fits You Best?",
    author: "Brunilda Doniger",
    tag: "Health Care",
    featured: false
  }
];

const BlogSection = () => {
  return (
    
    <section className="py-5 bg-light">
      
      <div className="container">
        
        <Row className="g-4">
          {blogData.map((blog, index) => (
            <Col 
              lg={blog.featured ? 8 : 4} 
              md={6} 
              key={index}
            >
              <Card className={`h-100 shadow-sm border-0 blog-card ${blog.featured ? "featured" : ""}`}>
                <div className="position-relative overflow-hidden">
                  <Card.Img 
                    variant="top" 
                    src={blog.image} 
                    className="blog-img"
                  />
                  <div className="date-badge text-center text-white fw-bold">
                    <h5 className="mb-0">{blog.date}</h5>
                    <small>{blog.month}</small>
                  </div>
                  {blog.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>
                <Card.Body>
                  <Card.Title as="h5">{blog.title}</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img 
                      src="images/testimonial/1.webp" 
                      alt={blog.author} 
                      className="rounded-circle me-2" 
                      style={{ width: "35px", height: "35px" }}
                    />
                    <small className="me-3">{blog.author}</small>
                    <small className="text-muted">{blog.tag}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default BlogSection;
