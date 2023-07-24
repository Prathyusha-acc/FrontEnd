import { useEffect, useState } from "react";
import "./projects.css";
import { Link } from "react-router-dom";

const Projects = ({ state }) => {
  const [projects, setProjects] = useState("");
  useEffect(() => {
    const { contract } = state;
    const ProjectFunc = async () => {
      try {
        const projects = await contract.methods.allProjects().call();
        setProjects(projects.filter(checkName));
        function checkName(skill) {
          return skill.name !== "";
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    contract && ProjectFunc();
  }, [state]);
  return (
    <div id="projects">
      <div className="projects_header">
        <div className="projects_header-heading">
          <h2>PROJECTS</h2>
        </div>
        <div className="add-icon">
          <Link to="/addProjects" target="_blank">
            <i aria-hidden="true" class="small add circle icon"></i>
          </Link>
        </div>

        <div className="projects_header-content">
          <p>
            I love to write and transfer my knowledge to fellow learners.
            <br></br> So, I keep writing about my life experiences, projects I
            worked on, technologies I found fascinating, etc.<br></br> Check out
            my articles below.<br></br>
          </p>
        </div>
        <div className="grid-wrapper">
          {projects !== "" &&
            projects.map((project,i) => {
              return (
                <>
                  <div className="grid-image">
                    <img
                      src={`https://gateway.pinata.cloud/ipfs/${project.image}`}
                      alt="img"
                    />
                    <div className="grid-image-content">
                      <h3>{project.name}</h3>
                      <p>PROJECT{i}</p>
                      <a href={project.githubLink} target="blank">
                        <i aria-hidden="true" class="small linkify icon"></i>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
