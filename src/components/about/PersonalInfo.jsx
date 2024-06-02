import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Dhananjay" },
  { meta: "last name", metaInfo: "Patel" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Canada" },
  { meta: "phone", metaInfo: "+1(647)861-5495" },
  { meta: "Email", metaInfo: "me@thenanjay.com" },
  { meta: "languages", metaInfo: "English, Hindi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
