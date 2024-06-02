import React from "react";
import { FaAws, FaDocker, FaJenkins, FaLinux, FaPython } from "react-icons/fa";
import { SiTerraform, SiMicrosoftazure, SiKubernetes } from "react-icons/si";
import { BiLogoGoogleCloud } from "react-icons/bi";

const skillsContent = [
  { skillName: "AWS", component: <FaAws /> },
  { skillName: "DOCKER", component: <FaDocker /> },
  { skillName: "Linux", component: <FaLinux /> },
  { skillName: "PYTHON", component: <FaPython /> },
  { skillName: "KUBERNETES", component: <SiKubernetes /> },
  { skillName: "JENKINS", component: <FaJenkins /> },
  { skillName: "TERRAFORM", component: <SiTerraform /> },
  { skillName: "AZURE", component: <SiMicrosoftazure /> },
  { skillName: "GCP", component: <BiLogoGoogleCloud /> },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-2 mb-3 mb-sm-5 items-center" key={i}>
          <div className="rounded-circle overflow-hidden p-5 p-md-5 p-lg-5 p-sm-5  w-50 h-50 text-center mx-auto d-flex justify-content-center align-items-center">
            <div className="text-warning h1">{val.component}</div>
          </div>

          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
