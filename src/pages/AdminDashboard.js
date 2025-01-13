import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, Table, Modal } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Store image file, not URL
  const [author, setAuthor] = useState('');
  const [editPostId, setEditPostId] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem('token');

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/news', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (err) {
      setError('Error fetching posts.');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Add or Update Post
  const handleAddOrUpdatePost = async (e) => {
    e.preventDefault();
    if (!token) {
      setError('You must be logged in to manage posts.');
      return;
    }
  
    const postData = new FormData();
    postData.append('title', title);
    postData.append('description', description);
    postData.append('author', author);
  
    if (editPostId) {
      // If editing, include the current image or new image
      if (image && typeof image !== 'string') {
        postData.append('image', image);
      } else if (typeof image === 'string') {
        postData.append('currentImage', image); // Include current image URL
      }
    } else {
      // For new posts, ensure an image is provided
      if (!image) {
        setError('Image is required for new posts.');
        return;
      }
      postData.append('image', image);
    }
    
  
    try {
      const response = editPostId
        ? await axios.put(`http://localhost:5000/api/news/${editPostId}`, postData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          })
        : await axios.post('http://localhost:5000/api/news', postData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          });
  
      console.log('API Response:', response.data); // Log response
      setSuccess(editPostId ? 'Post updated successfully!' : 'Post added successfully!');
      
      // Reset state and close modal
      setTitle('');
      setDescription('');
      setImage(null);
      setAuthor('');
      setEditPostId(null);
      setShowModal(false);
  
      // Refresh posts
      fetchPosts();
    } catch (err) {
      console.error('API Error:', err.response?.data || err.message); // Log error details
      setError('Error adding or updating post. Please try again.');
    }
  };
  // Handle Edit
const handleEdit = (post) => {
  setEditPostId(post._id);
  setTitle(post.title);
  setDescription(post.description);
  setImage(post.image); // Retain existing image URL for reference
  setAuthor(post.author);
  setShowModal(true);
};

  // Handle Delete
  const handleDelete = async (postId) => {
    if (!token) {
      setError('You must be logged in to delete posts.');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/news/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess('Post deleted successfully!');
      fetchPosts();
    } catch (err) {
      setError('Error deleting post. Please try again.');
    }
  };
  return (
    <Container className="my-5">
      <h2 className="text-center">Admin Dashboard</h2>

      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Posts Table */}
      <h4 className="my-4">Manage News Posts</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.title}</td>
              <td>{post.description}</td>
              <td>
                <img src={post.image ? `http://localhost:5000${post.image}` : '/default-image.jpg'} alt={post.title} style={{ width: '100px' }} />
              </td>
              <td>{post.author}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(post)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(post._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Post Modal */}
      <Button variant="primary" onClick={() => setShowModal(true)} className="mb-4">
        Add New Post
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editPostId ? 'Edit Post' : 'Add New Post'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddOrUpdatePost}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="image">
  <Form.Label>Image Upload</Form.Label>
  <Form.Control
    type="file"
    onChange={(e) => setImage(e.target.files[0])}
    required={!editPostId} // Only required for new posts
  />
</Form.Group>

            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              {editPostId ? 'Update Post' : 'Add Post'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
