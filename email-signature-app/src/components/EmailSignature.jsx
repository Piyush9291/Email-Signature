import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import "./EmailSignature.css";

const EmailSignature = () => {
  return (
    <div className="email-signature">
      {/* Profile Section */}
      <div className="profile-section">
        <img
          src="logo.png"
          alt="Profile"
          className="profile-pic"
        />
        <div className="social-icons">
        <a href="https://www.facebook.com/"> <FaFacebook /></a>
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <h3>Gregory Fridley</h3>
        <p>Global Operations Executive</p>
        <p>Gerhold Group</p>
        <div className="contact-item">
          <FiPhone className="icon" />
          <span>111 222 3333</span>
        </div>
        <div className="contact-item">
          <FiMail className="icon" />
          <span>thesomitrasr@timidlly.com</span>
        </div>
        <div className="contact-item">
          <a href="https://www.timidlly.com/us"><FiGlobe className="icon" /></a>
          <span>timidlly.com</span>
        </div>
        <div className="contact-item">
          <FiMapPin className="icon" />
          <span>169 Madison Ave STE #2728 New York NY, United States 10016</span>
        </div>
      </div>
    </div>
  );
};

export default EmailSignature;
