import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Neta Ji Nagar </p>
              <p>Bahadurgarh,Haryana</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              8307168584{" "}
            </h4>
          </div>

          <div className="email">
            <a href="mailto:amitofficial37@gmail.com">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                amitofficial37@gmail.com
              </h4>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100016726785727">
              <FaFacebook
                className="icon"
                size={30}
                style={{ marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.linkedin.com/in/amitkumar37/">
              <FaLinkedin
                className="icon"
                size={30}
                style={{ marginRight: "1rem" }}
              />
            </a>

            <a href="https://www.instagram.com/itsamitsingh___/">
              <FaInstagram
                className="icon"
                size={30}
                style={{ marginRight: "1rem" }}
              />
            </a>

            <a href="https://twitter.com/Amitsin41854265">
              <FaTwitter
                className="icon"
                size={30}
                style={{ marginRight: "1rem" }}
              />
            </a>

            <a href="https://github.com/itsamitofficial37">
              <FaGithub
                className="icon"
                size={30}
                style={{ marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
