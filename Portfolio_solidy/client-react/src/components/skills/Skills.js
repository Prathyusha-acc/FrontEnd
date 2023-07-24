import { useEffect, useState } from "react";
import "./skills.css";
import { Link } from "react-router-dom";
import { Grid, Progress, Image, Icon, Rail, Segment } from "semantic-ui-react";

const Skills = ({ state }) => {
  const [skills, setSkills] = useState("");
  useEffect(() => {
    const { contract } = state;
    const skillFunc = async () => {
      try {
        const skills = await contract.methods.allSkills().call();
        setSkills(skills.filter(checkName));
        function checkName(skill) {
          return skill.name !== "";
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    contract && skillFunc();
  }, [state]);
  return (
    <div className="skills">
      <div className="skills_header">
        <div className="skills_header-heading">
          <h2>SKILLS</h2>
        </div>
        <div className="add-icon">
          <Link to="/addSkills" target="_blank">
            <i aria-hidden="true" class="small add circle icon"></i>
          </Link>
        </div>
        <div className="skills_header-content">
          <p>
            Jack of all technologies. Master of using them smart!<br></br> Don't
            hesitate to ask me about any technology, I could explore and
            explain. <br></br>"Any", I mean it!
            {/* <p> Here is my formal
        skillset.</p> */}
          </p>
        </div>
      </div>
      <div className="skills-box">
        {skills !== "" &&
          skills.map((skill) => {
            return (
              <div className="skill_block">
                {/* <div className="skills_block-content">
                  <p>{skill.name}</p>
                </div> */}
                <div className="skills_block-value">
                <p>{skill.name}</p>
                  <Progress
                    active
                    progress="value"
                    value={Number(skill.percentage)}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Skills;
