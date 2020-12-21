/** @format */

import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";

const SearchResults = ({ results }) => {
  const result = results.map((item) => {
    return (
      <Col md={6} key={item.id}>
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
      <Row>{result}</Row>
    </Container>
  );
};

export default SearchResults;
