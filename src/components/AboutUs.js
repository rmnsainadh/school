import React from 'react';
import Sparkle from 'react-sparkle';
import styles from './AboutUs.module.css'; // Import the CSS module

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <Sparkle count={40} fadeOutSpeed={5} color="#ff5500" minSize={5} maxSize={15}>        <h1 className={styles.heading}>Welcome to NR English Medium School</h1>
      </Sparkle>
      <p className={styles.subheading}>
        A place where excellence and holistic education merge to nurture young minds.
      </p>

      <div className={styles.contentSection}>
        <h2>Our Vision</h2>
        <p>
          At NR English Medium School, we believe in providing a dynamic and enriching learning environment that fosters intellectual, emotional, and social growth. With a dedicated team of experienced educators and staff, we are committed to cultivating a passion for learning and empowering our students to become confident, compassionate, and responsible individuals.
        </p>
      </div>

      <div className={styles.contentSection}>
        <h2>Academic Excellence</h2>
        <p>
          Our curriculum is thoughtfully designed to integrate academic rigor with practical skills, promoting critical thinking, creativity, and problem-solving abilities. We strive to create an inclusive atmosphere that celebrates diversity, where every student is valued and respected.
        </p>
      </div>

      <div className={styles.contentSection}>
        <h2>Individualized Attention</h2>
        <p>
          We understand the importance of individualized attention and small class sizes, ensuring that each student receives personalized guidance and support. Our highly qualified teachers inspire and motivate students to reach their full potential, while also promoting character development and ethical values.
        </p>
      </div>

      <div className={styles.contentSection}>
        <h2>Extracurricular Activities</h2>
        <p>
          Beyond academics, we offer a wide range of extracurricular activities to encourage students to explore their interests and talents. Whether it's sports, arts, music, or clubs, our school provides ample opportunities for students to develop well-rounded personalities and discover their passions.
        </p>
      </div>

      <div className={styles.contentSection}>
        <h2>Safety and Well-being</h2>
        <p>
          Safety and well-being are our utmost priorities. We maintain a secure and nurturing environment where students feel comfortable to learn and grow. Our facilities are equipped with modern resources, including well-equipped classrooms, libraries, laboratories, and sports facilities, ensuring a comprehensive educational experience.
        </p>
      </div>

      <div className={styles.contentSection}>
        <h2>Partnerships and Collaboration</h2>
        <p>
          We strongly believe in fostering strong partnerships with parents and the community. Regular communication channels and parent-teacher interactions enable us to work collaboratively in the best interest of our students.
        </p>
      </div>

      <div className={styles.joinUsSection}>
      <Sparkle count={40} fadeOutSpeed={5} color="#ff5500" minSize={5} maxSize={15}>          <h2>Join Us</h2>
        </Sparkle>
        <p>
          Join us at NR English Medium School and together, let's embark on a transformative educational journey, empowering the leaders and changemakers of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
