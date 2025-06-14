/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alon fisher",
  title: "Hi all, I'm Alon",
  subTitle: emoji(
    "A passionate student of Software Engineering 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1u0iNM9LsEvF113sqlQYLT0fflZe3d6yL/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alon2004",
  linkedin: "https://www.linkedin.com/in/alon-fisher-65646a230/",
  gmail: "Alonfisher200@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE ENGINEERING STUDENT WITH A PASSION FOR CYBER SECURITY AND FULL STACK DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Hands-on experience in developing responsive web apps with modern front-end technologies"
    ),
    emoji("⚡ amiliar with cyber security concepts such as SQL Injection, XSS, and network attacks"),
    emoji(
      "⚡ Working with tools like Git, Node.js, React, and cloud platforms such as AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Software Engineering Degree",
  logo: require("./assets/images/yourUniversityLogo.png"),
  subHeader: "B.Sc. in Software Engineering – Cyber Security & Full Stack Development",
  duration: "October 2022 - Present",
  desc: "Currently a third-year student focusing on secure software development, web technologies, and modern full stack practices.",
  descBullets: [
    "Specialized in cyber security, penetration testing, and secure coding",
    "Working with technologies like React, Node.js, SQL, and cloud services"
  ]
    },
    {
      schoolName: "Amal High School, Hadera",
  logo: require("./assets/images/amalHaderaLogo.png"),
  subHeader: "Practical Engineering in Electrical Engineering",
  duration: "2016 - 2018",
  desc: "Completed a two-year Practical Engineering program specializing in electrical systems, control circuits, and technical project planning.",
  descBullets: [
    "Studied control and automation systems, electrical installation design",
    "Hands-on lab experience and final year project"
  ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
        {
      role: "Help Desk Technician",
  company: "Matrix",
  companylogo: require("./assets/images/matrix.png"), // שים כאן את הלוגו של מטריקס אם יש
  date: "2024 – Present",
  desc: "Providing technical support and troubleshooting for end users in a corporate IT environment. Handling network connectivity issues, system configurations, and user support within one of Matrix’s enterprise clients.",
  descBullets: [
    "Supporting users with hardware, software, and connectivity issues",
    "Working with network configurations and Active Directory environments",
    "Providing first-level troubleshooting for enterprise applications and systems",
    "Escalating issues to relevant IT departments and ensuring follow-up resolution"
  ]
    },
    {
      role: "Integration Technician",
  company: "HP Scitex",
  companylogo: require("./assets/images/HPlogo.png"), // ודא שיש לוגו מתאים, או אפשר להשתמש בלוגו של HP
  date: "2021 – 2022",
  desc: "Worked as an integrator in HP Scitex’s industrial digital printing division. Responsible for assembling, testing, and calibrating large-format printing machines locally and on-site at customer locations worldwide.",
  descBullets: [
    "Assembled and integrated complex digital printing systems in Israel",
    "Tested and calibrated machines to ensure optimal performance before shipping",
    "Traveled abroad to install and fine-tune systems directly at client facilities",
    "Applied computer and networking skills for system configuration and diagnostics"
  ]
    },
    {
role: "Air Force Technician & Team Leader",
  company: "Israeli Air Force (IDF)",
  companylogo: require("./assets/images/israeAIRforce.png"), // אתה יכול להוסיף לוגו חיל האוויר פה
  date: "2018 – 2021",
  desc: "Served in a classified technical position in the Israeli Air Force. Led and trained teams of conscripted soldiers, with an additional six months of professional service. Responsible for operational systems, technical instruction, and high-stakes teamwork.",
  descBullets: [
    "Held a classified technical role with hands-on responsibility over critical systems",
    "Led and mentored a team of IDF soldiers, including professional and disciplinary guidance",
    "Conducted professional training sessions and hands-on workshops for new soldiers",
    "Worked closely with senior officers and technical units under operational pressure"
  ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/KidCare.png"),
projectName: "KidCare",
projectDesc: "A kindergarten management platform designed to help teachers and aides better understand and support each child's individual needs. The system features a visual dashboard with dedicated blocks for each child, including detailed profiles with allergies, sensitivities, emotional tendencies, and more. Built with React, Node.js, and noSQL.\n ps user:rina password: 123",
footerLink: [
  {
    name: "Visit Website",
    url: "https://mellow-parfait-cd4575.netlify.app/"
  }
]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
