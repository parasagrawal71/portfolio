import {
  apiDocumenterImage,
  shopAnywhereImage,
  twitterHelpdeskImage,
  graphqlAppImage,
  ApiIcon,
  TwitterIcon,
  ShopIcon,
  GraphQLAppIcon,
  FastAPIIcon,
  fastapiAppImage,
} from "assets/Images";
import { techListArray, techListMap } from "./techList";

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

const projectsList = [
  {
    name: "API Documenter",
    sortOrder: 1,
    icon: ApiIcon,
    overviewImg: apiDocumenterImage,
    iconSize: "32px",
    duration: `Apr - June 2021`,
    techList: techListArray.filter((tech) =>
      [
        "javascript",
        "react",
        "nodejs",
        "expressjs",
        "mongo",
        "html",
        "css",
        "sass",
        "git",
        "api",
        "materialUi",
        "docker",
      ].includes(tech.id)
    ),
    description: `An application for documenting all APIs for all microservices in an
    organization. One can also call the API from here and see the results.
    It provides controls to maintain different levels of access to a user
    for a microservice.`,
    externalUrls: [
      // TODO: Uncomment demovideo entries when the video urls are accessible
      // {
      //   type: "demovideo",
      //   url: `https://drive.google.com/uc?id=1oqpiK_GMw-hmTxofoCppJiHeh9y7X5y7`,
      //   isVideo: true,
      // },
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
    sortOrder: 2,
    icon: TwitterIcon,
    overviewImg: twitterHelpdeskImage,
    iconSize: "28px",
    duration: `Nov 2020`,
    techList: techListArray.filter((tech) =>
      [
        "javascript",
        "vuejs",
        "nodejs",
        "websocket",
        "html",
        "css",
        "sass",
        "git",
        "api",
        "docker",
      ].includes(tech.id)
    ),
    description: `An application that displays all the tweets in which someone is
      mentioned in one place. OAuth login. Mention and reply in real-time
      without refreshing the page (WebSockets).`,
    externalUrls: [
      // {
      //   type: "demovideo",
      //   url: `https://drive.google.com/uc?id=10yPXMO4IyYN8l1xC6_fzNEaGxLOrtCc_`,
      //   isVideo: true,
      // },
      {
        type: "website",
        url: `https://twitter-helpdesk-app.web.app/`,
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
    sortOrder: 3,
    icon: ShopIcon,
    overviewImg: shopAnywhereImage,
    iconSize: "30px",
    duration: `Apr - Sep 2020`,
    techList: techListArray.filter((tech) =>
      [
        "javascript",
        "react",
        "redux",
        "nodejs",
        "expressjs",
        "mongo",
        "html",
        "css",
        "sass",
        "git",
        "api",
        "materialUi",
      ].includes(tech.id)
    ),
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
  {
    name: "GraphQL App",
    sortOrder: 4,
    icon: GraphQLAppIcon,
    overviewImg: graphqlAppImage,
    iconSize: "30px",
    iconColor: "#C52E95",
    duration: `May 2023`,
    techList: techListArray.filter((tech) =>
      ["graphql", "javascript", "nodejs", "mongo", "docker"].includes(tech.id)
    ),
    description: `A server based on GraphQL that provides the capability to perform queries on posts, comments related to the posts, and users. Additionally, it allows one to add new users and modify existing user data.`,
    externalUrls: [
      {
        type: "website",
        url: `https://graphql-app-enrf.onrender.com/graphql`,
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/graphql-app`,
        iconSize: "23px",
      },
    ],
  },
  {
    name: "FastAPI App",
    sortOrder: 5,
    icon: FastAPIIcon,
    overviewImg: fastapiAppImage,
    iconSize: "30px",
    iconColor: "#009688",
    duration: `July 2023`,
    techList: techListArray.filter((tech) =>
      ["fastapi", "python", "mongo", "docker", "googlecloud"].includes(tech.id)
    ),
    description: `A FastAPI-based CRUD application.`,
    externalUrls: [
      {
        type: "website",
        url: `https://fastapi-app-l1dx.onrender.com/docs`,
      },
      {
        type: "github",
        url: `https://github.com/parasagrawal71/fastapi-app`,
        iconSize: "23px",
      },
    ],
  },
];

projectsList.sort((p1, p2) => p1.sortOrder - p2.sortOrder);
const techFilters = Object.values(techListMap);

export { projectsList, techFilters };
