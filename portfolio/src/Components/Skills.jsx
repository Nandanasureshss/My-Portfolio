import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
function Skills() {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 className="skill-icon" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="skill-icon" /> },
        { name: 'JavaScript', icon: <FaCode className="skill-icon" /> },
        { name: 'React.js', icon: <FaCode className="skill-icon" /> },
        { name: 'Node.js', icon: <FaCode className="skill-icon" /> },
        { name: 'MongoDB', icon: <FaDatabase className="skill-icon" /> },
        { name: 'MySQL', icon: <FaDatabase className="skill-icon" /> },
        { name: 'Java', icon: <FaJava className="skill-icon" /> },
        { name: 'Python', icon: <FaPython className="skill-icon" /> },
        { name: 'Git & GitHub', icon: <FaCode className="skill-icon" /> },
        { name: 'REST APIs', icon: <FaCode className="skill-icon" /> }
    ];

    return (
        <section id="skills">
            <Container>
                <h2 className="text-center fw-bold mb-4">Skills</h2>
                <Row className="justify-content-center">
                    {skills.map((skill, index) => (
                        <Col md={2} sm={4} xs={6} key={index} className="mb-4">
                            <div className="skill-card">
                                {skill.icon}
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
