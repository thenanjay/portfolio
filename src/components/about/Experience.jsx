import React from "react";

const experienceContent = [
  {
    year: "Apr 2022 - Apr 2023",
    position: "Cloud Engineer",
    compnayName: "Serving Drives",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Linux",
      "Python",
    ],
    details:
      "Worked as a Cloud Engineer at Serving Drives, responsible for managing and maintaining cloud infrastructure using AWS, Docker, Kubernetes, Terraform, and Jenkins.",
  },
  {
    year: "Jan 2022 - Apr 2022",
    position: "Internship",
    compnayName: "BrainyBeam Technologies Pvt. Ltd",
    skills: ["AWS" ,"Git", "Python", "Linux","Bash Scripting"],
    details:
      "Worked as an intern at BrainyBeam Technologies Pvt. Ltd gaining experience in Cloud Engineer, AWS, Python, and Bash Scripting",
  },
  {
    year: "May 2021 - June 2021",
    position: "Internship",
    compnayName: "Akash TechnoLabs",
    skills: ["Python"],
    details:
      "Worked as an intern at Akash TechnoLabs, gaining experience in Python programming.",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <h5>
            {val.skills.map((skill, i) => (
              <span key={i} className="badge bg-secondary me-1 my-1">
                {skill}
              </span>
            ))}
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
