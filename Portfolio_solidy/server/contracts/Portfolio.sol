// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Portfolio {

    struct Project{
        uint id;
        string name;
        string image;
        string githubLink;
    }


    struct Skill {
        uint id;
        string name;
        uint percentage;
    }

    Project[10] public projects;
    Skill[10] public skills;

    string public imageLink="QmZztrTpWCN65YvgCpfeBdUCuSjXa5RnJJhPAY9gnw47Hk/prathyusha_white.jpg";
    string public description="Still Learning";
    string public resumeLink="QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH";
    uint projectCount;
    uint skillCount; 
    address public manager;

    constructor(){
        manager = msg.sender;
    }

    modifier onlymanager(){
        require(manager == msg.sender,"You are not the manager");
        _;
    }
    function insertProject(string calldata _name,string calldata _image,string calldata _githubLink) external onlymanager{
       require(projectCount>=0 && projectCount<10);
        projects[projectCount] = Project(projectCount,_name,_image,_githubLink);
        projectCount++;
    }
    function changeProject(string calldata _name,string calldata _image,string calldata _githubLink,uint _projectCount) external onlymanager{
        require(_projectCount>=0 && _projectCount<10);
        projects[_projectCount] = Project(_projectCount,_name,_image,_githubLink);
    }
    function allProjects() external view returns(Project[10] memory){
        return projects;
    }
    function insertSkill(string calldata _name,uint _percentage) external onlymanager {
        require(skillCount>=0 && skillCount<10);
        skills[skillCount] = Skill(skillCount,_name,_percentage);
        skillCount++;
    }
    function changeSkill(uint _skillCount,string calldata _name,uint _percentage) external onlymanager {
        require(_skillCount>=0 && _skillCount<10);
        skills[_skillCount] = Skill(_skillCount,_name,_percentage);
    }
    function allSkills() external view returns(Skill[10] memory){
        return skills;
    }
    function changeDescription(string calldata _description) external onlymanager{
        description = _description;
    }
    function changeImageLink(string calldata _imageLink) external onlymanager{
        imageLink = _imageLink;
    }
    function changeResumeLink(string calldata _resumeLink) external onlymanager{
        resumeLink = _resumeLink;
    }
    function donate() public  payable {
        payable(manager).transfer(msg.value);
    }

}
