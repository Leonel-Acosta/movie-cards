import React, { useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import "./addform.css";
const AddMovie = ({ setMovies, movies }) => {
  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [abstract, setAbstract] = useState("");
  const [cast, setCast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, pic, director, year, abstract, cast);
    const data = { title, pic, director, year, abstract, cast };
    if (title && pic && director && year && abstract && cast) {
      setTitle("");
      setPic("");
      setDirector("");
      setYear("");
      setAbstract("");
      setCast("");
    }
  };
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="form my-5">
        <h4 className="mb-4">
          <b>The movie that you are looking for is not on the list?</b>
        </h4>
        <Button className="mb-5 btn-lg" variant="primary" onClick={handleShow}>
          ADD A MOVIE
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Container className="form-movie px-5 py-5 mb-3 text-center">
            <h4>
              <b>Include your favourite movies to the list</b>
            </h4>

            <Form className="form-fields text-start my-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="MovieTitle">
                <Form.Label>Movie title</Form.Label>
                <Form.Control
                  type="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter movie title"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Image">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="pic"
                  value={pic}
                  onChange={(e) => setPic(e.target.value)}
                  placeholder="Paste an Image URL here"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Director">
                <Form.Label>Director</Form.Label>
                <Form.Control
                  type="text"
                  name="director"
                  onChange={(e) => setDirector(e.target.value)}
                  value={director}
                  placeholder="Director"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="Year of release"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Abstract">
                <Form.Label>Abstract</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="abstract"
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  placeholder="Abstract"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Cast" placeholder="Cast">
                <Form.Label>Cast</Form.Label>
                <Form.Control
                  type="text"
                  name="cast"
                  value={cast}
                  onChange={(e) => setCast(e.target.value)}
                  placeholder="Cast"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save
              </Button>
            </Form>
          </Container>
        </Modal>
      </div>
    </>
  );
};

export default AddMovie;
