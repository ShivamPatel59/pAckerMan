import React from "react";
import "../styles/LoadingPage.css"; // Import the CSS file for styling

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;
