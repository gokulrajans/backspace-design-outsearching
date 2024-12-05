import React from "react";
import "./Footer.css";
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Pinterest,
    YouTube,
    Apps,
    Settings,
  } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1c1c1c",
        color: "white",
        padding: "20px 10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Links Section */}
        <div className="footer-logo-desc">
          <div className="logo">Design Outsearching</div>
          <p>
            {`        Design Outsearching Solutions is a leading software development company with a
            professional team specializing in building custom mobile apps,
            websites, and software solutions.`}
          </p>
        </div>

        {/* Contact Information Section */}
        <div
          style={{
            flex: "1 1 100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 40%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>FOR BUSINESS ENQUIRY</strong>
            </p>
            <p>📞 +91-9876543210, +91-9095588998</p>
            <p>📞 +1-743-708-0511</p>
            <p>📱 +91-90009 90009</p>
            <p>✉️ enquiry@designoutsearching.com</p>
          </div>
          <div
            style={{
              flex: "1 1 20%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>SERVICES</strong>
            </p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Services</p>
            <p>
            <p>Blog && Career <span className="hiring">We are Hiring</span></p>
            </p>
            <p>FAQs</p>
            {/* <p>Sitemap</p> */}
            </div>
          
          <div
            style={{
              flex: "1 1 40%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>ADDRESS</strong>
            </p>
            <p>48, North Terrace, Penong SA-5690</p>
            <p>Penong SA-5690</p>
            <p>Australia</p>
            <p></p>
            <p></p>
            <div className="footer-social">
              <h4>Connect with us</h4>
              <div className="social-icons-container">
                <Facebook className="social-icon" />
                <Twitter className="social-icon" />
                <Instagram className="social-icon" />
                <LinkedIn className="social-icon" />
                <Pinterest className="social-icon" />
                <Settings className="social-icon" />
                <YouTube className="social-icon" />
                <Apps className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media and Footer Note */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "12px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "10px",
        }}
      >
        <p>© 2024 Design Outsearching Pvt. Ltd. All Rights Reserved</p>
        <p>CIN - U74300WB1996PTC000006 | GST - 19AACCP9999P1ZM</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <a href="#" style={{ color: "white" }}>
            Facebook
          </a>
          <a href="#" style={{ color: "white" }}>
            Twitter
          </a>
          <a href="#" style={{ color: "white" }}>
            LinkedIn
          </a>
          <a href="#" style={{ color: "white" }}>
            Pinterest
          </a>
          <a href="#" style={{ color: "white" }}>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
