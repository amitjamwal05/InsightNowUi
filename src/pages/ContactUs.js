import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './pages.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    description: '',
  });
  const [statusMessage, setStatusMessage] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact/submit', formData);
      setStatusMessage({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', mobile: '', description: '' }); // Clear form
    } catch (error) {
      setStatusMessage({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <Container className="my-5 pt-3">
      <h1 className="text-center mb-4">Contact Us</h1>
      {statusMessage && (
        <Alert variant={statusMessage.type === 'success' ? 'success' : 'danger'}>{statusMessage.message}</Alert>
      )}
      <Row className="gy-4">
        {/* Contact Form */}
        <Col md={6}>
          <h3>Get in Touch</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>

        {/* Map Section */}
        <Col md={6}>
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d38856.41415008921!2d76.721222!3d31.962232!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU3JzQ0LjAiTiA3NsKwNDMnMTYuNCJF!5e1!3m2!1sen!2sus!4v1736615804150!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: '0', borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
