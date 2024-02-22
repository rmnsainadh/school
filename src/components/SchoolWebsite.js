import React from "react";
import styles from "./SchoolWebsite.module.css";

class SchoolWebsite extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome to Our School</h1>
          <nav>
            <ul className={styles.navbar}>
              <li>
                <a href="/" className={styles.navLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="/AdminLogin" className={styles.navLink}>
                  AdminLoginForm
                </a>
              </li>
              <li>
                <a href="/about" className={styles.navLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className={styles.navLink}>
                  Courses
                </a>
              </li>
              <li>
                <a href="/admissions" className={styles.navLink}>
                  Admissions
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.navLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default SchoolWebsite;
