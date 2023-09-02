import React, { useState } from "react";
import "../styles/popup.css"; // Create a CSS file for styling your popup

function Popup({ isOpen, onClose, children }) {
  const popupStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="popup" style={popupStyle}>
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
