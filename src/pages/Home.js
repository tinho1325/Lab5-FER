import React from 'react';
import { Carousel, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Classic Pizza', price: '$12.99', category: 'Italian', image: 'images/menu-01.jpg' },
  { id: 2, name: 'Seafood Platter', price: '$24.99', category: 'Seafood', image: 'images/menu-02.jpg' },
  { id: 3, name: 'Garden Salad', price: '$8.99', category: 'Healthy', image: 'images/menu-03.jpg' },
  { id: 4, name: 'Grilled Steak', price: '$29.99', category: 'Grill', image: 'images/menu-04.jpg' },
  { id: 5, name: 'Sashimi Bowl', price: '$18.99', category: 'Japanese', image: 'images/menu-05.jpg' },
  { id: 6, name: 'Gourmet Burger', price: '$14.99', category: 'American', image: 'images/menu-06.jpg' },
  { id: 7, name: 'Mushroom Pizza', price: '$13.99', category: 'Italian', image: 'images/menu-07.jpg' },
  { id: 8, name: 'Open Sandwich', price: '$9.99', category: 'Light', image: 'images/menu-08.jpg' },
];

function Home() {
  return (
    <div>
      {/* Carousel / Slideshow */}
      <Carousel className="home-carousel" interval={3000}>
        <Carousel.Item>
          <img src="images/slide1.jpg" alt="Slide 1" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Fresh Seafood Every Day</h3>
            <p>Delivered straight from the ocean to your plate.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/slide2.jpg" alt="Slide 2" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Celebrate with Great Food</h3>
            <p>Make every moment delicious with our special dishes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/slide3.jpg" alt="Slide 3" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Holiday Feasts Await</h3>
            <p>Gather around the table with our festive menu.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Menu Section */}
      <Container className="py-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Our Menu</h2>
          <p className="text-muted mt-3">Handcrafted dishes made with love and the finest ingredients.</p>
        </div>
        <Row>
          {menuItems.map(item => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="menu-card h-100">
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Badge bg="warning" text="dark" className="mb-2">{item.category}</Badge>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="text-muted fw-bold">{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA to News */}
        <div className="text-center mt-4">
          <p className="text-muted mb-3">Stay updated with the latest food news and events.</p>
          <Link to="/news" className="btn btn-orange">Read Latest News →</Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
