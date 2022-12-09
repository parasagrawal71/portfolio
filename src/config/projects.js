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
    iconSize: "32px",
    duration: `Apr - June 2021`,
    techList: [
      { id: "javascript", displayName: "JavaScript" },
      { id: "react", displayName: "React" },
      { id: "nodejs", displayName: "Node.js" },
      { id: "express", displayName: "Express" },
      { id: "mongo", displayName: "Mongo" },
      { id: "html", displayName: "HTML" },
      { id: "css", displayName: "CSS" },
      { id: "sass", displayName: "SASS" },
    ],
    description: `An application for documenting all APIs for all microservices in an
    organization. One can also call the API from here and see the results.
    It provides controls to maintain different levels of access to a user
    for a microservice.`,
    externalUrls: [
      {
        type: "website",
        url: `https://api-documenter.web.app`,
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/api-documenter`,
        iconSize: "23px",
      },
    ],
  },
  {
    name: "Twitter Helpdesk",
    icon: TwitterIcon,
    overviewImg: twitterHelpdeskImage,
    iconSize: "28px",
    duration: `Nov 2020`,
    techList: [
      { id: "javascript", displayName: "JavaScript" },
      { id: "react", displayName: "React" },
      { id: "nodejs", displayName: "Node.js" },
      { id: "websocket", displayName: "Websocket" },
      { id: "html", displayName: "HTML" },
      { id: "css", displayName: "CSS" },
      { id: "sass", displayName: "SASS" },
    ],
    description: `An application that displays all the tweets in which someone is
      mentioned in one place. OAuth login. Mention and reply in real-time
      without refreshing the page (WebSockets).`,
    externalUrls: [
      {
        type: "demovideo",
        url: `https://drive.google.com/uc?id=10yPXMO4IyYN8l1xC6_fzNEaGxLOrtCc_`,
        isVideo: true,
      },
      {
        type: "website",
        url: `https://twitter--helpdesk.herokuapp.com/`,
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/twitter-helpdesk`,
        iconSize: "23px",
      },
    ],
  },
  {
    name: "Shop Anywhere",
    icon: ShopIcon,
    overviewImg: shopAnywhereImage,
    iconSize: "30px",
    duration: `Apr - Sep 2020`,
    techList: [
      { id: "javascript", displayName: "JavaScript" },
      { id: "react", displayName: "React" },
      { id: "redux", displayName: "Redux" },
      { id: "nodejs", displayName: "Node.js" },
      { id: "express", displayName: "Express" },
      { id: "mongo", displayName: "Mongo" },
      { id: "html", displayName: "HTML" },
      { id: "css", displayName: "CSS" },
      { id: "sass", displayName: "SASS" },
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
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/shop-anywhere`,
        iconSize: "23px",
      },
    ],
  },
];
