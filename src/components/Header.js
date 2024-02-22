// Header.js
import React from "react";
import headerImage from "./Images/Header.jpg"; // Replace 'header.jpg' with the actual file name and path

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
  };

  return (
    <header style={headerStyle}>
      {/* Header content */}
      {/* Other header elements */}
    </header>
  );
};

export default Header;
