import React, { useState, useEffect } from "react";
import { Col, Form, Row, Container, Button } from "react-bootstrap";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      title: title,
      description: description,
    });

    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify({ title, description }));
  }, [title, description]);

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Save Note
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
