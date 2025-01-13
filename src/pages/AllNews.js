
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import { Container, Row, Col } from 'react-bootstrap';
const AllNews = () => {
  const [news, setNews] = useState([]);

useEffect(() => {
axios.get('http://localhost:5000/api/news') // API endpoint to fetch news
 .then(response => setNews(response.data))
 .catch(error => console.error(error));
}, []);
  return (
    <>

return (
  <Container className="mt-3 pt-5 text-center">
    <h1>All News</h1>
    <Row>
      {news.map(newsItem => (
        <Col md={4} key={newsItem._id}>
          <NewsCard news={newsItem} />
        </Col>
      ))}
    </Row>
  </Container>
);
    </>
  )
}

export default AllNews