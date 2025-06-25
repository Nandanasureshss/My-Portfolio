import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEnvelope, FaSkype, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" style={{ background: 'transparent', padding: '60px 0', color: '#fff' }}>
      <Container>
        <center>
          <h2 className="fw-bold mb-4">Contact</h2>
        </center>
        <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
          <a href="mailto:nandananavya156@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope size={40} color="#6ad3ff" />
          </a>
          <a href="https://join.skype.com/invite/sRzMxvnZdGWT" target="_blank" rel="noreferrer">
            <FaSkype size={40} color="#6ad3ff" />
          </a>
          <a href="https://www.linkedin.com/in/nandana-suresh-s-s-a71528275x" target="_blank" rel="noreferrer">
            <FaLinkedin size={40} color="#6ad3ff" />
          </a>
        </div>
        <center>
          <p style={{ color: 'white' }}>&copy; 2024 Nandana Suresh S S</p>
        </center>
      </Container>
    </section>
  );
}


export default Contact;
