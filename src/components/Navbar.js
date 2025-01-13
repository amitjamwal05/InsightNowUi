import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import './NewsCards.css'; // Import a custom CSS file for additional styling

const NavbarComponent = ({ setTheme }) => {
  const navigate = useNavigate();
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // State to manage collapse

  const username = localStorage.getItem('username'); // Fetch username from localStorage
  const role = localStorage.getItem('role'); // Fetch user role (e.g., 'admin')

  const handleLogout = () => {
    // Clear the localStorage to log out the user
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');

    // Redirect to the login page after logout
    navigate('/login');
  };

  const handleNavItemClick = () => {
    // Close the navbar after a menu item is clicked
    setIsNavbarCollapsed(true);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavItemClick}>
          InsightNow
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)} // Toggle the collapse state
        />
        <Navbar.Collapse id="navbar-nav" in={!isNavbarCollapsed}> {/* Manage collapse state */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about" onClick={handleNavItemClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/today-news" onClick={handleNavItemClick}>Today News</Nav.Link>
            <Nav.Link as={Link} to="/all-news" onClick={handleNavItemClick}>All News</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={handleNavItemClick}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={handleNavItemClick}>Admin Login</Nav.Link>

            {role === 'admin' && (
              <Nav.Link as={Link} to="/dashboard" onClick={handleNavItemClick}>Admin Dashboard</Nav.Link>
            )}

            {username && (
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="dropdown-profile" className="text-light">
                  {username}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button" onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
          <ThemeToggle setTheme={setTheme} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
