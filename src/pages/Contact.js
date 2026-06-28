import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <div className="page-banner">
        <h1>📬 Contact Us</h1>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <Container className="pb-5">
        <Row className="justify-content-center">
          <Col md={8} lg={7}>
            {submitted && (
              <Alert variant="success" onClose={() => setSubmitted(false)} dismissible className="mb-4">
                ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </Alert>
            )}

            <div className="contact-form-card">
              <h4 className="mb-4 fw-bold">Send a Message</h4>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a subject...</option>
                        <option value="reservation">Table Reservation</option>
                        <option value="catering">Catering Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">Please select a subject.</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">Please write a message.</Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="btn-orange btn w-100">
                  Send Message 📨
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={4} lg={4} className="mt-4 mt-md-0">
            <div style={{ padding: '2rem', background: '#1a1a1a', borderRadius: 14, color: 'white', height: '100%' }}>
              <h5 className="fw-bold mb-4" style={{ color: '#e65c00' }}>Get In Touch</h5>
              {[
                ['📍', 'Address', '123 Flavor Street, Culinary City'],
                ['📞', 'Phone', '+1 (555) 123-4567'],
                ['✉️', 'Email', 'hello@foodiehub.com'],
                ['⏰', 'Hours', 'Mon–Sun: 9:00 AM – 10:00 PM'],
              ].map(([icon, label, value]) => (
                <div className="mb-3" key={label}>
                  <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{icon} <strong>{label}</strong></div>
                  <div style={{ color: '#ccc', fontSize: '0.9rem', paddingLeft: '1.8rem' }}>{value}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
