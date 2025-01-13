import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // To navigate to the single post page
import './NewsCards.css'; // Assuming CSS styles are in NewsCard.css

const NewsCard = ({ news }) => {
  const [showFullDescription] = useState(false);
  const navigate = useNavigate();

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    };
    return date.toLocaleString('en-IN', options);
  };

  const handleReadMore = () => {
    console.log("news id ", news._id);
    navigate(`/news/${news._id}`); // Navigate to the single post page using news ID
  };

  return (
    <Container className="cards-section mt-3">
      <Card className="news-card mb-4 shadow-sm">
        {/* Check if the image URL exists and construct it properly */}
        <Card.Img 
          variant="top" 
          src={news.image ? `http://localhost:5000${news.image}` : '/default-image.jpg'} 
          alt="News image"
          className="card-image" 
        />
        <Card.Body>
          <Card.Title className="card-title">{news.title}</Card.Title>
          <Card.Text className="card-description">
            {showFullDescription
              ? news.description
              : `${news.description.substring(0, 150)}...`}
          </Card.Text>
          
          <p className="date-time text-muted" style={{ fontSize: 'smaller' }}>Updated By: {news.author}</p>
         
          <p className="date-time text-muted" style={{ fontSize: 'smaller' }}>
            Published: {formatDate(news.createdAt)}
          </p>
          <Button variant="link" onClick={handleReadMore}>Read More</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewsCard;
