import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2022 Jamie Hughes</p>
    </div>
  );
}

export default Footer;
