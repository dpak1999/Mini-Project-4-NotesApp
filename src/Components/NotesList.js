import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const NotesList = ({ notes }) => {
  const note = notes.map((item) => {
    return (
      <Col md={6} key={Math.random()}>
        <Card className="mt-2">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container>
      <Row>{note}</Row>
    </Container>
  );
};

export default NotesList;
