import {
  apiDocumenterImage,
  shopAnywhereImage,
  twitterHelpdeskImage,
  ApiIcon,
  TwitterIcon,
  ShopIcon,
} from "assets/Images";

export const projectsList = [
  {
    name: "API Documenter",
    icon: ApiIcon,
    overviewImg: apiDocumenterImage,
    iconSize: "27px",
    duration: `Apr - June 2021`,
    techList: ["JavaScript", "React", "Node.js", "Express", "Mongo", "HTML", "CSS", "SASS"],
    description: `An application for documenting all APIs for all microservices in an
    organization. One can also call the API from here and see the results.
    It provides controls to maintain different levels of access to a user
    for a microservice.`,
    externalUrls: [
      {
        type: "website",
        url: `https://api-documenter.web.app`,
        iconSize: "20px",
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/api-documenter`,
      },
    ],
  },
  {
    name: "Twitter Helpdesk",
    icon: TwitterIcon,
    overviewImg: twitterHelpdeskImage,
    iconSize: "23px",
    duration: `Nov 2020`,
    techList: ["JavaScript", "React", "Node.js", "Websocket", "HTML", "CSS", "SASS"],
    description: `An application that displays all the tweets in which someone is
      mentioned in one place. OAuth login. Mention and reply in real-time
      without refreshing the page (WebSockets).`,
    externalUrls: [
      {
        type: "demovideo",
        url: `https://drive.google.com/uc?id=10yPXMO4IyYN8l1xC6_fzNEaGxLOrtCc_`,
        iconSize: "22px",
        isVideo: true,
      },
      {
        type: "website",
        url: `https://twitter--helpdesk.herokuapp.com/`,
        iconSize: "20px",
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/twitter-helpdesk`,
      },
    ],
  },
  {
    name: "Shop Anywhere",
    icon: ShopIcon,
    overviewImg: shopAnywhereImage,
    iconSize: "25px",
    duration: `Apr - Sep 2020`,
    techList: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Mongo",
      "HTML",
      "CSS",
      "SASS",
    ],
    description: `Built a simple e-commerce website to learn and apply different
      concepts from React, Redux, NodeJS, and Mongo. This project was
      my experiment to learn good folder structure, git best practices like
      branch naming conventions, reusable and configurable components,
      CSS best practices such as BEM naming conventions, and more.`,
    externalUrls: [
      {
        type: "website",
        url: `https://shop-anywhere.web.app/`,
        iconSize: "20px",
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/shop-anywhere`,
      },
    ],
  },
];
