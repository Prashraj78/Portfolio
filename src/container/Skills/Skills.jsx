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
    name: "React",
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
    name: "Git",
    icon: images.git,
  },
  {
    name: "Github",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "Postman",
    icon: images.postman,
  },
];

const experiences = [
    {
    year: "November-2023 - Present",
    works: [
      {
        name: "Frontend Developer",
        company: "Achieveee Design & Development Pvt. Ltd.",
        desc: "I'm a Frontend Developer at Cinoid Web, specializing in HTML5, CSS, JavaScript, and React.js. My skill set includes Tailwind CSS for efficient styling and Redux.js for state management, enabling me to create responsive and dynamic user interfaces.",
      }
    ]

  },

  {
    year: "Augest-2023 - Nov-2023",
    works: [
      {
        name: "Frontend Developer",
        company: "Cinoid Web",
        desc: "I'm a Frontend Developer at Cinoid Web, specializing in HTML5, CSS, JavaScript, and React.js. My skill set includes Tailwind CSS for efficient styling and Redux.js for state management, enabling me to create responsive and dynamic user interfaces.",
      }
    ]

  },

  {
    year: "May-2022 - Apr-2023",
    works: [
      {
        name: "Front-End Development",
        company: "Relevel by Unacademy",
        desc: "I completed an 11-month apprenticeship program with Relevel by Unacademy, where I had the privilege of learning from exceptional educators. This experience has enriched my knowledge and skills, making me well-versed in various aspects of my field.",
      },
    ],
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
