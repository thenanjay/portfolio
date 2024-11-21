import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "Virtulization and Cloud Computing",
    institute: "Conestoga College",
    details: `I have completed my Post Graduate Diploma in Virtulization and Cloud Computing from Conestoga College.`,
  },
  {
    year: "2023",
    degree: "PG DIPLOMA: Information Technology",
    institute: "Algoma University",
    details: `I have completed my Post Graduate Diploma in Information Technology from Algoma University.`,
  },
  {
    year: "2018-2022",
    degree: "BACHELOR DEGREE: CE ",
    institute: "Silver Oak University",
    details: `I have completed my Bachelor's degree in Computer Engineering from Silver Oak University.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
