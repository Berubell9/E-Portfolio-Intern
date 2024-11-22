import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from "react-icons/bi";
import { useState, useEffect } from 'react';
import Popup from './popupProject';

function ProjectCards() {
  // State for storing project data
  const [project, setProject] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    fetch("http://localhost:3333/project")
      .then(res => res.json())
      .then((result) => {
        setProject(result);
      });
  }, []);

  const handleShowPopup = (item) => {
    setSelectedProject(item);
    setModalShow(true);
  };

  return (
    <div className="ProjectCards">
      <Container>
      <h1>Projects</h1>
        <Row>

          {/* Loop through project data */}
          {project.map(item => (
            <Col xs={12} md={4} key={item.id}>

              {/* Card layout */}
              <Card className="text-center" style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="text-muted">{item.language}</Card.Text>

                  <div className="flex justify-center">
                    {/* Button to open popup */}
                    <Button variant="dark" onClick={() => handleShowPopup(item)}>
                      See More
                    </Button>

                    {/* Button to open link */}
                    <Button variant="light" href={item.link} target="_blank" className="ms-2 border">
                      {item.icon} <BiLinkExternal />
                    </Button>
                  </div>

                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popup Component */}
      <Popup
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={selectedProject}
      />
    </div>
  );
}

export default ProjectCards;
