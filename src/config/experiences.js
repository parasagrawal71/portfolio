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
    companyName: "C2FO",
    employmentType: "Full-Time",
    designation: "Senior Engineer II",
    duration: "Sep 2023 - Present",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [],
  },
  {
    companyName: "Nference",
    employmentType: "Full-Time",
    designation: "Senior Engineer",
    duration: "Apr 2022 - Aug 2023",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: `Driven small projects to re-architect the system's components improving its robustness and resilience.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Redesigned the architecture of the node server to improve code maintainability and reduce issues, ultimately minimizing the resources required for development and testing.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Upgraded inter-service communication by implementing a RabbitMQ-based message queue to enhance the system's availability and fault tolerance, which resulted in a 50% reduction in errors.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Collaborated with the DevOps team to deploy applications to the cloud, utilizing HAProxy and Nginx servers.`,
        category: DEVOPS,
      },
      {
        bulletPoint: `Performed code reviews, implemented best practices, and enforced coding standards to ensure high-quality code and maintainable systems.`,
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
        bulletPoint: `Played a significant role in helping the company secure a 10 million dollar long-term contract by developing robust APIs and user-friendly UI screens.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Integrated Kafka to facilitate real-time data synchronization across multiple applications.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Achieved a 75% reduction in deployment time by implementing a seamless deployment method of the applications in multiple modes and environments.`,
        category: DEVOPS,
      },
      {
        bulletPoint: `Developed an efficient Node.js-based load balancer to manage parallel processing across multiple machines, resulting in the successful conversion of 25K DZI images into DICOM format.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Received the "Ngenious Award" in recognition of my outstanding performance.`,
        category: OTHERS,
      },
      {
        bulletPoint: `Employed best coding practices to thoughtfully design, test, and implement new features that effectively address issues and drive software forward.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Developed cross-platform compatible desktop application to view DZI (Deep Zoom Image) using electron builder.`,
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
        bulletPoint: `Transformed Express API Server hosted on AWS elastic beanstalk into Serverless APIs using Node.js and AWS Lambda entirely from scratch, which led to a decrease in server downtime.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Played a key role in the integration of the ADP APIs and launch GoTag, an employee portal application, on the ADP Marketplace.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Throughout my tenure at this company, I worked on several projects and gained experience in utilizing a diverse range of technologies such as React.js, Redux, Node.js, MongoDB, Vue.js, Python, React Native, and AWS.`,
        category: FRONTEND,
      },
    ],
  },
  // {
  //   companyName: "Keitai Technologies",
  //   employmentType: "Internship",
  //   designation: "Intern",
  //   duration: "Dec 2018 - Jan 2019",
  //   companyType: "Product-based",
  //   companyWebsite: "",
  //   companyIntro: "",
  //   works: [
  //     {
  //       bulletPoint: `Worked as a full-stack developer at this company on various websites, acquiring proficiency in diverse technologies such as JavaScript, HTML, CSS, Bootstrap, and PHP.`,
  //       category: FRONTEND,
  //     },
  //   ],
  // },
];
