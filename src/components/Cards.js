import React from "react";
import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./cards.css";

const Cards = props => {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  return (
    <div className="cards">
            <Card className="mx-2 my-2 card text-start">
              <Card.Img className="card-image" variant="top" src={props.image} />
              <Card.Body>
                <Card.Title><h2><strong>{props.title}</strong></h2></Card.Title>
                <Card.Text><strong>{props.director}</strong></Card.Text>
                <Button className="btn-md" variant="primary" onClick={handleShow}>
                  More info
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton><h3 className="mt-3"><strong>{props.title}</strong></h3></Modal.Header>
                  <Modal.Body>
                  <p>{props.abstract}</p>
                  <p><strong>Director: </strong>{props.director}</p>
                  <p><strong>Release: </strong>{props.year}</p>
                  <p><strong>Cast: </strong>{props.cast}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>

          
    </div>
  );
};

export default Cards;
