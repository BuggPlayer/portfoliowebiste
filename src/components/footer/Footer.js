import React from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div style={{ height: "80vh", backgroundColor: "lightblue" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ padding: 30, marginTop: 50 }}>
          <p style={{ fontSize: 30, textAlign: "center" }}>
            hey, let’s keep in touch!
          </p>
          <p style={{ textAlign: "center", margin: 10 }}>
            stay in the know when you sign up for our newsletter!
          </p>
          <div
            style={{
              display: "flex",
              backgroundColor: "red",
              alignItems: "center",
            }}
          >
            <input
              style={{ height: 50, width: 400, paddingLeft: 10 }}
              placeholder="email enter"
            />
            <p style={{ width: 90, textAlign: "center" }}>Enter</p>
          </div>
          <p style={{ fontSize: 10, marginTop: 2 }}>
            By entering your email address you will receive promotional updates.
            Consent is not a condition of purchase. View Privacy
          </p>

          <div
            style={{
              marginTop: 60,
              // backgroundColor: "green",
              justifyContent: "space-evenly",
              display: "flex",
            }}
          >
            <AiFillYoutube size={70} />
            <AiOutlineInstagram size={70} />
            <AiFillFacebook size={70} />
            <AiFillLinkedin size={70} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" , justifyContent:"space-evenly", marginTop:30 }}>
        <p>ABOUT</p>
        <p>FAQ</p>
        <p>TERMS</p>
        <p>PRIVACY</p>
        <p>POLICY</p>
        <p>COOKIE</p>
        <p>POLICY</p>
        <p>CONTACT</p>
      </div>
    </div>
  );
};

export default Footer;
