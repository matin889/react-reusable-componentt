import React from "react";

const Footer = ({ about, mobile, email }) => {
  return (
    <div className="footer">
      <h2>{about}</h2>

      <p>{mobile}</p>
      <p>{email}</p>
    </div>
  );
};

export default Footer;
