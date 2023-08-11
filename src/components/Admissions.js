import React from 'react';
import { Link } from 'react-router-dom';

class Admissions extends React.Component {
  render() {
    return (
      <><div>
        <h2>Admissions</h2>
        <p>Thank you for considering our school for your education. We have a straightforward and transparent admission process to ensure a smooth experience for applicants.</p>
        <p>Visit our admissions page to learn about the requirements, application deadlines, and how to apply. We look forward to welcoming you to our school!</p>

        <Link to="/admissions/login" className="cta-button">Log In</Link>
      </div><br>
        </br></>
    );
  }
}

export default Admissions;
