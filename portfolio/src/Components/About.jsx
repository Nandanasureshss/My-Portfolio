import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css'; 
import profilePic from '../assets/p.jpeg'; 


function About() {
  return (
    <section id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image src={profilePic} alt="Profile" rounded fluid />
          </Col>
          <Col md={8}>
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              Hello! I'm <strong>Nandana Suresh S S</strong>, a B.Tech graduate in Information Technology from LBS Institute of Technology for Women.
              I am passionate about building efficient, user-friendly full-stack web applications. With hands-on experience in MERN stack development and UI design,
              I bring both technical expertise and a creative edge to problem-solving.<br /><br />
              I've completed internships at Srishti Innovative where I designed and developed web applications using HTML, CSS, JavaScript, React.js, Node.js,
              MongoDB, and REST APIs. I thrive in collaborative environments and constantly seek opportunities to grow technically and personally.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;