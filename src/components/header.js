import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <Container className="py-5"> 
            <h1 className="title">CINEMA ESPAÑA</h1>
            <h4 className="subtitle">The biggest database of spanish movies in the world</h4>
        </Container>

    </div>
  );
};

export default Header;
