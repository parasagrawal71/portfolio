/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

// Skill category
export const categories = [
  {
    id: "backend",
    displayName: "Backend",
    show: true,
    sortOrder: 1,
  },
  {
    id: "frontend",
    displayName: "Frontend",
    show: true,
    sortOrder: 2,
  },
  {
    id: "devops",
    displayName: "DevOps",
    show: true,
    sortOrder: 3,
  },
  {
    id: "others",
    displayName: "Others",
    show: true,
    sortOrder: 4,
  },
];
const FRONTEND = categories?.find((s) => s.id === "frontend");
const BACKEND = categories?.find((s) => s.id === "backend");
const DEVOPS = categories?.find((s) => s.id === "devops");
const OTHERS = categories?.find((s) => s.id === "others");

export const experienceList = [
  {
    companyName: "Nference",
    employmentType: "Full-Time",
    designation: "Senior Engineer",
    duration: "Apr 2022 - Present",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: `Built RESTful APIs to carefully design, test, and build new features that resolved issues and advanced software.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Implemented a Node.js-based load balancer to efficiently manage the processes to run on multiple machines in parallel in order to convert 25,000 DZI images into DICOM format.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Oversaw software deployment and took the initiative to develop scripts that increased the level of automation and efficiency of deploying and configuring micro-services.`,
        category: DEVOPS,
      },
      {
        bulletPoint: `Collaborated with the DevOps team to deploy applications to the cloud using HAProxy and Nginx servers.`,
        category: DEVOPS,
      },
      {
        bulletPoint: `Perform code and design reviews to ensure code quality.`,
        category: OTHERS,
      },
    ],
  },
  {
    companyName: "Nference",
    employmentType: "Full-Time",
    designation: "Software Engineer",
    duration: "Jan 2021 - Mar 2022",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: `Set up communication across multiple applications using Kafka to reflect data in real-time.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Implemented a seamless deployment method of the applications in multiple modes and environments.`,
        category: DEVOPS,
      },
      {
        bulletPoint: `Developed cross-platform compatible desktop application to view DZI (Deep Zoom Image) using electron builder.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Improved test coverage by setting up an end-to-end and unit test framework to reduce the risk of breaking production and to perform regression testing.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Employ best coding practices to create user interfaces to improve the user experience and performance.`,
        category: FRONTEND,
      },
    ],
  },
  {
    companyName: "Piktorlabs",
    employmentType: "Full-Time",
    designation: "Software Engineer",
    duration: "Jul 2019 - Jan 2021",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: `Built Serverless API server from scratch using Nodejs and Mongoose hosted on AWS. Also, worked on Nodejs and Express API Server hosted on AWS elastic beanstalk.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Played a major role in the integration of the ADP APIs and launch GoTag, an employee portal application, on the ADP Marketplace.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Worked on a few projects at this company throughout my time there, and I was able to apply a variety of technologies. Some of the technologies used include React.js, Redux, Node.js MongoDB, Vue.js, Python, React Native, and AWS.`,
        category: FRONTEND,
      },
    ],
  },
  {
    companyName: "Keitai Technologies",
    employmentType: "Internship",
    designation: "Intern",
    duration: "Dec 2018 - Jan 2019",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [],
  },
];
