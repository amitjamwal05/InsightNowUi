import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="py-4">
        <Row className="text-center text-md-left">
          {/* Column 1: Logo and Description */}
          <Col md={4} sm={12} className="footer-col">
            <h4>InsightNow</h4>
            <p>
              Stay updated with the latest news and trends. InsightNow brings you relevant news from around the world.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={4} sm={12} className="footer-col">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/today-news">Today's News</a></li>
              <li><a href="/all-news">All News</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </Col>

          {/* Column 3: Social Media */}
          <Col md={4} sm={12} className="footer-col">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon"><FaFacebook size={30} /></a>
              <a href="https://twitter.com" className="social-icon"><FaTwitter size={30} /></a>
              <a href="https://instagram.com" className="social-icon"><FaInstagram size={30} /></a>
              <a href="https://linkedin.com" className="social-icon"><FaLinkedin size={30} /></a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom text-center">
          <Col>
            <p>© 2025 InsightNow. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
