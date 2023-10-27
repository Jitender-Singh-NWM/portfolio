import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  skience,
  sf,
  TD,
  Shivathene,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Salesforce Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Salesforce",
    icon: sf,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Salesforce R&D Developer",
    company_name: "Skience",
    icon: skience,
    iconBg: "#383E56",
    date: "May 2019 - December 2022",
    points: [
      "Worked as part of R&D team and worked/exposed to many new technologies with an amazing team.",
      "Developing and maintaining web applications using Salesforrce and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing effecient solutions and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "The Athene Group",
    icon: Shivathene,
    iconBg: "#E6DEDD",
    date: "Dec 2016 - April 2016",
    points: [
      "Customizing the Salesforce applications,building packages.Implementing Batch classes,triggers and Aura components",
      "Working with cleints and implmenting the best soultions possible solutions.",
      "MIgrating functionalities from classic to Lighting.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "TD Bank",
    icon: TD,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Working with the TD Bank team to implement customizations of the Salesforce application as needed.",
      "Solved many issues related to design and worked on many enhancements.",
      "Implmented the Salesforce Experience cloud as discussed with client.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Insight Global",
    company_name: "Salesforce",
    icon: sf,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Demember-2016",
    points: [
      "Worked on Sales and Service Cloud to implement the Concole Application.",
      "Implemented the Reports and dashboards as required by the Client.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "T Mobile",
    company_name: "Salesforce",
    icon: sf,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Demember-2015",
    points: [
      "Worked on Sales and Service Cloud to implement the Concole Application.",
      "Implemented the Reports and dashboards as required by the Client.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Provides effecient solutions and delviers the solutions in given time .",
    name: "Stan Lee",
    designation: "CTO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a Salesforce developer who truly cares about their clients' success like Rick does.",
    name: "Chris Mark",
    designation: "Arcitect",
    company: "Salesforce",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Chong",
    designation: "CTO",
    company: "Sigma",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Skience",
    description:
      "SKience is Financial Application built on salesforce platform.It has many integrations with quick forms,E-Sign,Envestnest,STP. ",
    tags: [
      {
        name: "Salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "Veu.Js",
        color: "green-text-gradient",
      },
      {
        name: "APEX",
        color: "pink-text-gradient",
      },
      {
        name: "LWC",
        color: "pink-text-gradient",
      },
      {
        name: "AURA",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "TD Bank",
    description:
      "TD Bank, N.A. is an American national bank and the United States subsidiary of the multinational TD Bank Group. It operates primarily across the East Coast, in fifteen U.S. states and Washington, D.C.",
    tags: [
      {
        name: "Salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "AURA",
        color: "pink-text-gradient",
      },{
        name: "LWC",
        color: "pink-text-gradient",
      },
      {
        name: "AURA",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Shiva Athene Technologies",
    description:
      "A Software Solutions firm which deals with all the feed files from different vendors and loads into dofferent applications.",
    tags: [
      {
        name: "Salesforce",
        color: "blue-text-gradient",
      },
      {
        name: ".Net",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },{
        name: "LWC",
        color: "pink-text-gradient",
      },
      {
        name: "AURA",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
