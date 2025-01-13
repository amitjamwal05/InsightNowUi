import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Spinner, Alert } from 'react-bootstrap';

const TodayNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch today's news when the component mounts
  useEffect(() => {
    const fetchTodayNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news/today');
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTodayNews();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading today's news...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center">
        <Alert variant="danger">Error: {error}</Alert>
      </div>
    );
  }

  // No news available
  if (news.length === 0) {
    return (
      <div className="text-center">
        <Alert variant="info">No news for today</Alert>
      </div>
    );
  }

  return (
    <div className="container my-4 pt-5">
      <h2 className="text-center mb-4">Today's News</h2>
      <Row>
        {news.map((item) => (
          <Col xs={12} md={6} lg={4} key={item._id} className="mb-4">
            <Card>
              {item.image && (
                <Card.Img variant="top" src={`http://localhost:5000${item.image}`} alt={item.title} />
              )}
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <p><strong>Author:</strong> {item.author}</p>
                <p><strong>Published:</strong> {new Date(item.createdAt).toLocaleString()}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TodayNews;
