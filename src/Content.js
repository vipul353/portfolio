// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project6 from "./assets/images/projects/img6.png";
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar5 from "./assets/images/Testimonials/avatar5.jpg";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web and Andriod App Developer",
    firstName: "BIPUL",
    LastName: "THAKUR",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1.5+",
        text: "Months of Experinse in Web and Android app development",
      },
      {
        count: "6+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Atractive Mobile and Web design",
        logo: figma,
        Description:[
          "Work along with UX Designer to conceptualize and creating work on wireframes",
          "Create high-fi mock-ups and clickable prototypes for presentation and testing",
          "Have knowledge of designing for accessibility and multi-languages",
          "Communicate design deliverables and prototypes to developers",
          " Review developed screens as per designs and closure of defects",
          "Establish, follow and promote design guidelines, best practices and standards.",
          "Ability to iterate your designs and solutions efficiently and intelligently."
        ]
      },
      {
        name: "Node js",
        para: "Backend server with best practice",
        logo: nodejs,
        Description:[
          "Maintain code quality and ensure the responsiveness of the application",
          " Understanding of Node.js Frameworks",
          "Knowledge of Front-end Development",
          "Skill-set in Regard to API Communications",
          "Database Management for Business",
          "Efficiency in Handling Timelines.",
          "Testing and Error Handling Abilities"
        ]
      },
      {
        name: "Java Core",
        para: "Java which runs on 3 billion devices",
        logo: ps,
        Description:[
          "Basic of java",
          "Oops Concept",
          "Exception Handling",
          "Collection framwork",
          "Multi threading",
          "J2EE(JDBC,JSp,Servlet)",
          "Java Framework(Hibernate,Spring)"
        ]
      },
      {
        name: "React js",
        para: "Frontend Web Development ",
        logo: reactjs,
        Description:[
          "HTML + CSS",
          "JSX",
          "JavaScript Fundamentals + ES6",
          "Git",
          "Node + npm",
          "Redux",
          "Best practices for react js like function component, reusable code and many more..."
        ]
      },
      {
        name: "Spring boot",
        para: "For Fast and Secure Backend",
        logo: sketch,
        Description:[
          " Hands on experience in Java back-end development and skills with Spring-boot framework",
          "Familiar with Microservices design",
          "Profound Knowledge about APIs",
          "Experience in Microservices",
          "Knowledge about Multiple frameworks under Spring Boot",
          "J2EE(JDBC,JSp,Servlet)",
          "Java Framework(Hibernate,Spring)"
        ]
      },
      {
        name: "Flutter",
        para: "Fast and Atractive Android Development",
        logo: python,
        Description:[
          "Good Knowledge or Experience in Dart",
          "Knowledge of Agile and Waterfall methodologies for software development",
          "Good Knowledge of Git",
          "Write a clean-code using Dart",
          "Optimize the development process using feedback and brainstorm",
          "Readable Code Matters for Flutter and reusable code",
      
        ]
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I am a highly skilled full-stack developer with experience in multiple programming languages and frameworks. I am proficient in both front-end and back-end development, and have a strong understanding of web development concepts and best practices. I am comfortable working with databases, web servers, and version control systems. I am able to work independently and as part of a team to deliver high-quality software solutions on time and on budget.",
        logo: services_logo1,
      },
      {
        title: "ui DESIGNING",
        para: "I am a UI developer with experience in creating user-friendly interfaces for web and mobile applications. I have expertise in design tools like figma, front-end technologies like react js and flutter, and UI design principles. I am skilled in converting design mockups into functional web pages and keep up to date with the latest design trends and web accessibility standards. I am able to work in Agile development environments and collaborate with other stakeholders to deliver high-quality products.",
        logo: services_logo2,
      },
      {
        title: "Android App Development",
        para: "I am a Flutter developer with experience in building mobile applications for Android. I am skilled in using Flutter framework, Dart programming language and have experience in developing mobile apps with beautiful, fast and high-performance user interface. I am familiar with Flutter widgets, development tools and have experience in integrating with APIs, and working with different databases. I am also able to work in an Agile development environment and collaborate with other stakeholders to deliver high-quality products.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Human Resource Management Website",
        image: project1,
      },
      {
        title: "Project Management web",
        image: project2,
      },
      {
        title: "WelthDekho  Android App",
        image: project5,
      },
      {
        title: "WelthDekho  WebSite",
        image: project4,
      },
      {
        title: "New Blog  WebSite",
        image: project6,
      }
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“I highly recommend Bipul for their exceptional skills in creating high-performance mobile apps using Flutter and Dart. They demonstrated excellent problem solving skills and ability to work efficiently.”",
        img: avatar1,
        name: "Vishal Raina",
        position:"Director at Credmarg technologies Pvt. Ltd."
      },
      {
        review:
          "“I had the opportunity to collaborate with Bipul on a challenging Flutter project and was thoroughly impressed with their abilities. Their dedication to delivering high-quality work and their expertise in the technology made the project a success”",
        img: avatar2,
        name: "Simran",
        position:"Director at Credmarg technologies Pvt. Ltd."
      },
      {
        review:
          "“I highly recommend Bipul for their exceptional skills in creating full-featured web applications. He is proficient in various programming languages and frameworks, delivering high quality solutions.”",
        img: avatar3,
        name: "Revanth",
        position:"Project manager at Arshaa technologies Pvt. Ltd."
      },
      {
        review:
          "“As a skilled web and Android developer, you consistently demonstrate a deep understanding of programming languages and frameworks. Your efficient problem-solving and creative design contribute greatly to the success of our projects.”",
        img: avatar5,
        name: "Krishna",
        position:"A freelancer "
      },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar4,
      //   name: "ROBBIN",
      // },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Expert Full Stack Developer ready to take on your next project. Proficient in JavaScript, flutter, and React. Proven track record of delivering projects on-time and within budget. Strong problem-solving skills and ability to work with a team. See my work and let's work together. Contact me to discuss your project",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "thakurbipul353@gmail.com",
        icon: GrMail,
        link: "mailto:thakurbipul353@gmail.com.com",
      },
      {
        text: "+91 7667340560",
        icon: MdCall,
        link: "https://wa.me/7667340560",
      },
      // {
      //   text: "codeaprogram",
      //   icon: BsInstagram,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
