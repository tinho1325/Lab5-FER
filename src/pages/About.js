import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const team = [
  { name: 'Chef Marco', role: 'Head Chef', emoji: '👨‍🍳' },
  { name: 'Lisa Nguyen', role: 'Pastry Specialist', emoji: '🎂' },
  { name: 'James Park', role: 'Sommelier', emoji: '🍷' },
  { name: 'Sara Ahmed', role: 'Events Manager', emoji: '🎉' },
];

function About() {
  return (
    <div>
      <div className="about-hero">
        <h1>About FoodieHub</h1>
        <p>Bringing flavors together since 2010.</p>
      </div>

      <Container className="py-5">
        {/* Story */}
        <Row className="mb-5 align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="section-title">Our Story</h2>
            <p className="text-muted mt-3 lh-lg">
              FoodieHub was born from a simple passion — to share the joy of great food with
              everyone. Founded in 2010 in a small kitchen, we've grown into a beloved
              culinary destination where quality, creativity, and community come together.
            </p>
            <p className="text-muted lh-lg">
              Every dish we serve is crafted with the freshest local ingredients, prepared by
              talented chefs who genuinely love what they do. From casual weeknight meals to
              grand celebrations, we're here to make every bite memorable.
            </p>
          </Col>
          <Col md={6}>
            <div className="p-4" style={{ background: '#fff', borderRadius: 14, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <Row className="text-center g-3">
                {[['14+', 'Years of Excellence'], ['200+', 'Unique Dishes'], ['50K+', 'Happy Customers'], ['15', 'Awards Won']].map(([num, label]) => (
                  <Col xs={6} key={label}>
                    <div style={{ padding: '1.5rem', background: '#fff5f0', borderRadius: 10 }}>
                      <div style={{ fontSize: '2rem', fontWeight: 700, color: '#e65c00' }}>{num}</div>
                      <div className="text-muted" style={{ fontSize: '0.9rem' }}>{label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Team */}
        <h2 className="section-title mb-4">Meet Our Team</h2>
        <Row>
          {team.map(member => (
            <Col key={member.name} xs={6} md={3} className="mb-4">
              <Card className="team-card">
                <div className="team-avatar">{member.emoji}</div>
                <h5 style={{ fontWeight: 600 }}>{member.name}</h5>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{member.role}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default About;
