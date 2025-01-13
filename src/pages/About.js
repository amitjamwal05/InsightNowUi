import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './pages.css'; // Custom CSS for better styling
import insightImage from './InsightNow.webp';
const About = () => {
  return (
    <Container className="my-5 pt-5">
      <h1 className="text-center mb-4">About InsightNow</h1>
      <Row className="mb-5">
        <Col md={6}>
          <h2>Welcome to InsightNow</h2>
          <p>
            InsightNow is your go-to source for the latest news and updates across various sectors, including technology, business, health, and entertainment. Our mission is to provide accurate and up-to-date information that keeps you informed and engaged with the world.
          </p>
          <p>
            Whether you're looking for breaking news or in-depth analysis, InsightNow has it all. We bring you news that matters, delivered in a way that's easy to understand and stay up-to-date on what's happening around you.
          </p>
        </Col>
        <Col md={6}>
          <Card className="shadow-lg" style={{ maxWidth: '100%' }}>
            <Card.Img
              variant="top"
              src={insightImage} // Replace with a relevant image
              alt="InsightNow News"
            />
            <Card.Body>
              <Card.Title>Our Commitment</Card.Title>
              <Card.Text>
                We are committed to delivering unbiased, accurate, and timely news. Our team of experienced journalists works around the clock to bring you the stories that shape the world. Stay informed with InsightNow.
              </Card.Text>
              <Button variant="primary" href="/contact-us">
                Get in Touch
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section: Our Team */}
      <h2 className="text-center mb-4">Meet the Team</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                CEO & Founder
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Chief Editor
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Team Member" />
            <Card.Body>
              <Card.Title>Sarah Lee</Card.Title>
              <Card.Text>
                Senior Journalist
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section: Our Values */}
      <h2 className="text-center mb-4">Our Values</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Integrity and Trust</Card.Title>
              <Card.Text>
                At InsightNow, we believe in the power of trust. Our team of journalists works diligently to ensure the integrity of every story we publish. Our goal is to build a trusted relationship with our readers by delivering factual, honest, and unbiased news.
              </Card.Text>
              <Card.Title>Innovation</Card.Title>
              <Card.Text>
                We aim to stay ahead of the curve by adopting the latest technologies to deliver news in innovative ways. Our platform is designed to make it easier for you to stay informed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
