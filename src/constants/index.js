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
  vyral24,
  freelance,
  java,
  dashboard,
  ecommerce,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'UI / UX Designer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'FrontEnd Developer',
    company_name: 'Freelance',
    icon:freelance,
    iconBg: '#E6DEDD',
    date: 'October 2022',
    points: [
      'Developing and maintaining web applications using HTML,CSS,JavaScript and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'FrontEnd Developer',
    company_name: 'vyRAL24',
    icon:vyral24,
    iconBg: '#383E56',
    date: 'January 2022 - Present',
    points: [
      'Developing and maintaining web applications using HTML, JavaScript, CSS, ReactJS and other related technologies.',
      'Collaborating with cross-functional teams including designers, ad managers, and clients to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },

  {
    title: 'FrontEnd Developer',
    company_name: 'Freelance',
    icon: freelance,
    iconBg: '#383E56',
    date: 'December 2022',
    points: [
      'Designed and Developed a website for a cryptocurrency client.',
      'Collaborated with cross-functional teams including designers, product managers, and the client himself to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Dashboard Manager',
    description:
      'Web-based platform that allows users to search, for data in an organised manner, which reduces the stress because of the overwhelming already existing data',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'materialUI',
        color: 'green-text-gradient',
      },
    ],
    image: dashboard,
    source_code_link: 'https://github.com/Dev-Code24/react-dashboard',
  },
  {
    name: 'Ecommerce Website',
    description:
      'An E-Commerce website which is fully functional with a strapi backend and a working stripe payment gateway .',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'strapi',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/Dev-Code24/ecommerceWithStrapi',
  },
];

export { services, technologies, experiences, testimonials, projects };
