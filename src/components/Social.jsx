import React from "react";
import { SiCodechef } from "react-icons/si";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://www.github.com/dhanu0510",
  },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/dhanu0510/",
  },
  {
    iconName: "fa fa-codechef",
    component: <SiCodechef />,
    link: "https://codechef.com/users/dhanu0510",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.component ? val.component : <i className={val.iconName}></i>}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
