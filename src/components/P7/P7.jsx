import React from "react";
import "./P7.css"; // Import the CSS file for styling

const P7 = ({ text, onClick, className }) => {
  return (
    <>
      <div className="container78">
        <h1>Create your store online with </h1>
        <h1><b>Medicor</b> now!</h1>
      </div>
      <button className={`custom-button ${className}`} onClick={onClick}>
        ONLY $59 NOW
      </button>
    </>
  );
};

export default P7;


