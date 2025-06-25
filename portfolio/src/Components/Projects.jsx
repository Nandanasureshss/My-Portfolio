import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';
function Projects() {
  const projectList = [
    {
      title: "Student Management System",
      tech: "Java, MySQL",
      description: "Developed a Java-based application with MySQL to efficiently manage student records."
    },
    {
      title: "Sign Language Recognition",
      tech: "Python, OpenCV",
      description: "Implemented a Python-based machine learning model to recognize sign language gestures."
    },
    {
      title: "Question Answer Generation using T5",
      tech: "Python, HTML, CSS, HuggingFace",
      description: "Built a question-answering system using the T5 transformer model for educational content."
    }
  ];

  return (
    <section id="projects">
      <Container>
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="project-card h-100">
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Subtitle className="project-tech mb-2">{project.tech}</Card.Subtitle>
                  <Card.Text className="project-desc">{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}


export default Projects;
