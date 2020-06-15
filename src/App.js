import React from 'react';
import { Card, Nav, Button, Container, Row, Col } from 'react-bootstrap'

function App() {
  return ( 
      <Container>
        <Row>
        <Col sm={4}> 
          <Card className="mt-2">
              <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first">Tag</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">Description</Nav.Link>
                    </Nav.Item> 
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text> 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> 
  );
}

export default App;
