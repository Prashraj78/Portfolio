import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const skills = [
  {
    name: "Html",
    icon: images.html,
  },
  {
    name: "Css",
    icon: images.css,
  },
  {
    name: "Javascript",
    icon: images.javascript,
  },
  {
    name: "Sass",
    icon: images.sass,
  },
  {
    name: "ReactJs & Native",
    icon: images.react,
  },
  {
    name: "Redux",
    icon: images.redux,
  },
  {
    name: "Bootstrap",
    icon: "data:image/jpeg;base64,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",
  },
  {
    name: "Tailwind Css",
    icon: images.tailwind,
  },
  {
    name: "NextJs",
    icon: 'data:image/png;base64,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',
  },
  {
    name: "MUI",
    icon: 'data:image/png;base64,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',
  },
  {
    name: "TypeScript",
    icon: 'data:image/png;base64,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',
  },
 

 

];

const experiences = [

  {
    year: "Aug-2023 - Nov-2023",
    works: [
      {
        name: "Frontend Developer",
        company: "Viztra Technology pvt ltd",
        desc: "As a Frontend Developer at Viztra Technology, I am dedicated to crafting exceptional user experiences through my expertise in HTML5, CSS3, JavaScript, and React.js. My focus on leveraging advanced CSS techniques ensures meticulous styling and seamless responsiveness of user interfaces. At Viztra Technology, a product-based company, I take pride in my ability to design intuitive UIs and integrate third-party APIs as well as RESTful services, aligning with our commitment to innovation and excellence in software solutions",
      }
    ]

  },

  {
    year: "Jun-2023 - Dec-2023",
    works: [
      {
        name: "React Developer (Intern)",
        company: "Cinoid Web",
        desc: "I'm a Frontend Developer at Cinoid Web, specializing in HTML5, CSS, JavaScript, and React.js. My skill set includes Tailwind CSS for efficient styling and Redux.js for state management, enabling me to create responsive and dynamic user interfaces.",
      }
    ]

  },


];

const Skills = () => {
  return (
    <>
      <h2 className="head-text" style={{ marginBottom: "1rem" }}>
        Skills <span> & </span> Experiences
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}>
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <p className="p-text">{work.desc}</p>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
