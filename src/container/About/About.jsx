import React from "react";
import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
const About = () => {
  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "1rem" }}>
        All <span> About </span> Me
      </h2>

      <div className="app__profiles">
        <div className="app__profile-item">
          <img src={images.aboutanimated} alt="" />
        </div>
        <div className="app__profile-item">
          <ul>
            <li className="p-text">

              Hello there! I'm Prashant Patil, a skilled web developer with a passion for crafting exceptional user interfaces. 💻
                My journey in web development has led me to master HTML, CSS, and JavaScript, and I'm fluent in frameworks like reactjs, tailwind and etc.
            </li>
            <li className="p-text">
              Highly skilled front-end web developer with specialization in
              Reactjs.
            </li>
            <li className="p-text">
              Completed a rigorous full stack web development course from Relevel By Unacedemy with over 1000+ hours of hands-on coding experience.
            </li>
            <li className="p-text">
              Experienced in developing responsive web applications and dynamic
              user interfaces.
            </li>
           
            <li className="p-text">
              Passionate about creating intuitive, user-friendly interfaces that
              enhance the user experience.
            </li>
            
            <li className="p-text">
              Skilled in collaborating with cross-functional teams to ensure
              project success.
            </li>
            <li className="p-text">
              Continuously learning and staying up-to-date with the latest web
              development trends and technologies.
            </li>
            <li className="p-text">
              Excited about building innovative and impactful projects that
              solve real-world problems.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
