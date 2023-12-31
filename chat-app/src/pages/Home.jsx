import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
import logo from "../assets/chatlogo.jpg";

function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world with you friends</h1>
          <p>Chat app lets you connect with the world</p>
          <LinkContainer to="chat">
            <Button variant="success">
              Get Started<i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6}>
        <img src={logo} className="home__bg" alt="loading" />
      </Col>
    </Row>
  );
}

export default Home;
