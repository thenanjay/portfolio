import crypto from "../../assets/img/portfolio/crypto.png";
import discord from "../../assets/img/portfolio/discord.png";
import ecommerce from "../../assets/img/portfolio/ecommerce.png";
import skin from "../../assets/img/portfolio/skin.png";

import whizstream1 from "../../assets/img/portfolio/whizstream_1.png";
import whizstream2 from "../../assets/img/portfolio/whizstream_2.png";
import whizstream3 from "../../assets/img/portfolio/whizstream_3.png";

import eks_terraform_jenins from "../../assets/img/portfolio/eks_terraform_jenkins.jpeg"

const PortfolioData = [
  {
    id: 1,
    type: "WhizStream",
    image: whizstream1,
    img1: whizstream2,
    img2: whizstream3,
    tag: ["DevOps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "AWS Architecture",
        language: "EC2, API Gateway, ELB, S3, SQS, Lambda, Docker, Github Actions ",
        preview: "WhizStream",
        github: "https://github.com/thenanjay/whizstream",
      },
    ],
  },
  {
    id: 9,
    type: "EKS,Terraform,Jenkins",
    image: eks_terraform_jenins,
    tag: ["DevOps"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "AWS Architecture",
        language: "AWS EKS, Terraform, Jenkins, Kubernetes, CICD, Infrastructure as Code (IaC)  ",
        preview: "EKS, Terraform, Jenkins",
        github: "https://github.com/dhanu0510/eks-cluster-terraform-jenkins",
      },
    ],
  },
 

  {
    id: 7,
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
