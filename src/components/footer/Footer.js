import React from "react";
import "./Footer.css";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div style={{ padding: 30, marginTop: 50 }}>
          <p className="title1">hey, let’s keep in touch!</p>
          <p className="title2">
            stay in the know when you sign up for our newsletter!
          </p>
          <div className="input-mail">
            <input className="footer-input" placeholder="email enter" />
            <button className="footer-btn">Enter</button>
          </div>
          <p className="privacy-content">
            By entering your email address you will receive promotional updates.
            Consent is not a condition of purchase. View Privacy
          </p>

          <div className="footer-icon-container">
            <AiFillYoutube size={70} />
            <AiOutlineInstagram size={70} />
            <AiFillFacebook size={70} />
            <AiFillLinkedin size={70} />
          </div>
        </div>
      </div>
      <div className="footer-links">
        <p className="links">ABOUT</p>
        <p className="links">FAQ</p>
        <p className="links">TERMS</p>
        <p className="links">PRIVACY</p>
        <p className="links">POLICY</p>
        <p className="links">COOKIE</p>
        <p className="links">POLICY</p>
        <p className="links">CONTACT</p>
      </div>
    </div>
  );
};

export default Footer;
