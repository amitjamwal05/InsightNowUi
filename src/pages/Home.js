import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://insightnow-m4sc.onrender.com/api/news') // API endpoint to fetch news
      .then(response => setNews(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container className="mt-3 pt-5 text-center">
      <h1>Latest News</h1>
      <Row>
        {news.map(newsItem => (
          <Col md={4} key={newsItem._id}>
            <NewsCard news={newsItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
