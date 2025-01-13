import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import './SinglePost.css'; // Assuming custom CSS for this page

const SinglePost = () => {
  const { newsId } = useParams();  // To get the post ID from the URL
  console.log(newsId + " newsId");
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the full post details using the postId
    axios.get(`https://insightnow-m4sc.onrender.com/api/news/${newsId}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [newsId]);

  if (!post) {
    return <div>Loading...</div>;  // Show loading message while fetching data
  }

  return (
    <Container fluid className="d-flex justify-content-center align-items-center login-container mt-5">
      <Card className="mt-5 pt-5 shadow-lg">
        {/* Dynamically load image based on the URL returned by the backend */}
        <Card.Img 
          variant="top" 
          src={post.image ? `https://insightnow-m4sc.onrender.com${post.image}` : '/default-image.jpg'} 
          alt="Post image" 
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <small>By: {post.author}</small>
          <p className="date_time" style={{ fontSize: 'smaller' }}>
            Published: {new Date(post.createdAt).toLocaleString('en-IN', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
              timeZone: 'Asia/Kolkata',
            })}
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SinglePost;
