import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import faculty1Image from './Images/Faculty/Faculty1.jpg'
import faculty2Image from './Images/Faculty/Faculty2.jpg'
const FacultyCard = ({ image, name, position }) => {
  return (
    <div className="faculty-item">
      <img src={image} alt={name} />
      <div className="faculty-details">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const facultyData = [
    {
      image: faculty1Image,
      name: 'John Smith',
      position: 'Professor of Mathematics'
    },
    {
      image: faculty2Image,
      name: 'Jane Johnson',
      position: 'Assistant Professor of Science'
    }
    // Add more faculty data objects as needed
  ];

  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our School</h1>
          <p>Discover a world of knowledge and opportunities.</p>
          <p>Enroll in our esteemed courses and unlock your potential.</p>
          <Link to="/admissions" className="cta-button">Apply Now</Link>
        </div>
      </section>

      <section className="faculty-section">
        <h2>Our Esteemed Faculty</h2>
        <div className="faculty-list">
          {facultyData.map((faculty, index) => (
            <FacultyCard
              key={index}
              image={faculty.image}
              name={faculty.name}
              position={faculty.position}
            />
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial">
          <p>"I'm grateful for the education I received at our school. It prepared me well for my future career."</p>
          <p className="student-name">- John Doe, Alumni</p>
        </div>
        <div className="testimonial">
          <p>"The teachers at our school are knowledgeable and supportive. They truly care about our success."</p>
          <p className="student-name">- Jane Smith, Current Student</p>
        </div>
      </section>

      <section className="call-to-action-section">
        <div className="call-to-action-content">
          <h2>Ready to Join Us?</h2>
          <p>Apply for admission now and take the first step towards a bright future.</p>
          <Link to="/admissions" className="cta-button">Apply Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
