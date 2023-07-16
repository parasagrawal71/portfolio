import {
  CSS3Icon,
  JavaScriptIcon,
  ReactIcon,
  Html5Icon,
  ReduxIcon,
  VueIcon,
  NodejsIcon,
  MongoDBIcon,
  GitIcon,
  LinuxIcon,
  SassIcon,
  PythonIcon,
  KafkaIcon,
  AwsIcon,
  ApiSkillIcon,
  ExpressJsIcon,
  MaterialUiIcon,
  GraphQLIcon,
  DockerIcon,
  KubernetesIcon,
  TypescriptIcon,
  FastAPIIcon,
} from "assets/Images";
import { GoogleCloudIcon } from "assets/SkillSvgs";

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

export const techListMap = {
  javascript: {
    displayName: "Javascript",
    Icon: JavaScriptIcon,
    id: "javascript",
  },
  nodejs: {
    displayName: "Node JS",
    Icon: NodejsIcon,
    id: "nodejs",
  },
  expressjs: {
    displayName: "Express JS",
    Icon: ExpressJsIcon,
    id: "expressjs",
  },
  mongo: {
    displayName: "MongoDB",
    Icon: MongoDBIcon,
    id: "mongo",
  },
  api: {
    displayName: "API",
    Icon: ApiSkillIcon,
    id: "api",
  },
  react: {
    displayName: "React",
    Icon: ReactIcon,
    id: "react",
  },
  html: {
    displayName: "HTML",
    Icon: Html5Icon,
    id: "html",
  },
  css: {
    displayName: "CSS",
    Icon: CSS3Icon,
    id: "css",
  },
  sass: {
    displayName: "Sass",
    Icon: SassIcon,
    id: "sass",
  },
  materialUi: {
    displayName: "Material UI",
    Icon: MaterialUiIcon,
    id: "materialUi",
  },
  redux: {
    displayName: "Redux",
    Icon: ReduxIcon,
    id: "redux",
  },
  git: {
    displayName: "Git",
    Icon: GitIcon,
    id: "git",
  },
  linux: {
    displayName: "Linux",
    Icon: LinuxIcon,
    id: "linux",
  },
  vuejs: {
    displayName: "Vue",
    Icon: VueIcon,
    id: "vuejs",
  },
  python: {
    displayName: "Python",
    Icon: PythonIcon,
    id: "python",
  },
  aws: {
    displayName: "AWS",
    Icon: AwsIcon,
    id: "aws",
  },
  kafka: {
    displayName: "Kafka",
    Icon: KafkaIcon,
    id: "kafka",
  },
  graphql: {
    displayName: "GraphQL",
    Icon: GraphQLIcon,
    id: "graphql",
  },
  docker: {
    displayName: "Docker",
    Icon: DockerIcon,
    id: "docker",
  },
  kubernetes: {
    displayName: "Kubernetes",
    Icon: KubernetesIcon,
    id: "kubernetes",
  },
  typescript: {
    displayName: "Typescript",
    Icon: TypescriptIcon,
    id: "typescript",
  },
  fastapi: {
    displayName: "FastAPI",
    Icon: FastAPIIcon,
    id: "fastapi",
  },
  googlecloud: {
    displayName: "Google Cloud",
    Icon: GoogleCloudIcon,
    id: "googlecloud",
  },
};

export const techListArray = Object.keys(techListMap).map((techId) => {
  return { ...techListMap[techId] };
});
