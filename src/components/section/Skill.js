import React from "react";
import "../assets/style/Skill.scss";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faReact,
  faNpm,
  faDocker,
  faGitAlt,
  faAws,
  faPython,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@material-ui/core/Chip";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Skill() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Specialties</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="4x" />
            <h3>Full Stack Web Development</h3>
            <p>
              Skilled in MERN stack for robust web app development, specializing
              in seamless API creation. Proficient with Node.js and React.
              Experienced in scalable solutions, prioritizing user experience
              and productivity.
            </p>
            <p className="flex-chips">
              Tech stack :
              <Chip
                variant="outlined"
                label="JavaScript"
                size="small"
                icon={<FontAwesomeIcon icon={faJsSquare} />}
              />
              <Chip
                variant="outlined"
                label="HTML5"
                size="small"
                icon={<FontAwesomeIcon icon={faHtml5} />}
              />
              <Chip
                variant="outlined"
                label="CSS3"
                size="small"
                icon={<FontAwesomeIcon icon={faCss3Alt} />}
              />
              <Chip
                variant="outlined"
                label="NodeJS"
                size="small"
                icon={<FontAwesomeIcon icon={faNodeJs} />}
              />
              <Chip
                variant="outlined"
                label="React"
                size="small"
                icon={<FontAwesomeIcon icon={faReact} />}
              />
              <Chip variant="outlined" label="MongoDB" size="small" />
              <Chip variant="outlined" label="SQL" size="small" />
              <Chip variant="outlined" label="Redis" size="small" />
              <Chip
                variant="outlined"
                label="npm"
                size="small"
                icon={<FontAwesomeIcon icon={faNpm} />}
              />
              <Chip
                variant="outlined"
                label="Git"
                size="small"
                icon={<FontAwesomeIcon icon={faGitAlt} />}
              />
              <Chip variant="outlined" label="GraphQL" size="small" />
              <Chip
                variant="outlined"
                label="AWS"
                size="small"
                icon={<FontAwesomeIcon icon={faAws} />}
              />
              <Chip
                variant="outlined"
                label="Docker"
                size="small"
                icon={<FontAwesomeIcon icon={faDocker} />}
              />
            </p>
          </div>

          <div className="skill">
            
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="4x" />
            <h3>Data Analysis</h3>
            <p>
              Limited but practical experience in data analysis, having worked
              on projects involving organizing data, process automation, and
              standard extraction methods.
            </p>
            <p className="flex-chips">
              Tech stack :
              <Chip
                variant="outlined"
                label="Python"
                size="small"
                icon={<FontAwesomeIcon icon={faPython} />}
              />
              <Chip
                variant="outlined"
                label="Pandas"
                size="small"
                icon={<FontAwesomeIcon icon={faPython} />}
              />
              <Chip
                variant="outlined"
                label="Matplotlib"
                size="small"
                icon={<FontAwesomeIcon icon={faPython} />}
              />
              <Chip
                variant="outlined"
                label="Sklearn"
                size="small"
                icon={<FontAwesomeIcon icon={faPython} />}
              />
              <Chip
                variant="outlined"
                label="Gscript"
                size="small"
                icon={<FontAwesomeIcon icon={faGoogle} />}
              />
              <Chip variant="outlined" label="Selenium" size="small" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
