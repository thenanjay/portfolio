import crypto from "../../assets/img/portfolio/crypto.png";
import discord from "../../assets/img/portfolio/discord.png";
import ecommerce from "../../assets/img/portfolio/ecommerce.png";
import skin from "../../assets/img/portfolio/skin.png";

const PortfolioData = [
  {
    id: 1,
    type: "Discord Clone",
    image: discord,
    tag: ["React"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        language: "React, MongoDB, Node.js",
        preview: "Discord Clone",
        link: "https://discord-dhanu.netlify.app/login",
        github: "https://github.com/dhanu0510/discord-frontend",
      },
    ],
  },
  {
    id: 10,
    type: "Ecommerce",
    image: ecommerce,
    tag: ["React"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        language: "React, MongoDB, Django",
        preview: "Ecommerce",
        link: "https://github.com/dhanu0510/ecommerce-django",
        github: "https://github.com/dhanu0510/ecommerce-django",
      },
    ],
  },
  {
    id: 11,
    type: "Crypto Web 3.0",
    image: crypto,
    tag: ["Next"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Crypto Web 3.0",
        language: "NextJS, MongoDB, Node.js",
        preview: "Crypto Web 3.0",
        link: "https://crypto-play-v2.vercel.app/",
        github: "https://github.com/dhanu0510/crypto.play",
      },
    ],
  },
  {
    id: 2,
    type: "Skin Disease Prediction",
    image: skin,
    tag: ["ML"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Skin Disease Prediction",
        language: "Numpy, Keras, Tensorflow, Flask",
        preview: "Skin Disease Prediction",
        link: "https://github.com/dhanu0510/Skin-Disease-Detection",
        github: "https://github.com/dhanu0510/Skin-Disease-Detection",
      },
    ],
  },
];

export default PortfolioData;
