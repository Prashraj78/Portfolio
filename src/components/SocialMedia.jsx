import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/prashant-patil-56b580229/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>
      <a href="https://github.com/prashraj78" target="_blank" rel="noreferrer">
        <div>
          <FaGithub />
        </div>
      </a>
      <a href="https://wa.me/919284341531" target={"_blank"} rel="noreferrer">
        <div>
          <IoLogoWhatsapp />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
