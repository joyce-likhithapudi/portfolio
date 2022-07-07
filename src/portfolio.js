import emoji from 'react-easy-emoji';

// import googlelogo from './assets/img/icons/common/google.svg'
// import github from './assets/img/icons/common/github.svg'
// import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Joyce💕",
    "title": "Hi all, I'm Joyce",
    "description": "A passionate Full Stack Web Developer and DevOps Engineer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / PHP and some other cool libraries and frameworks.",
    "resumeLink": "https://bit.ly/joyce-likhithapudi"
}

export const openSource = {
  githubUserName: 'joyce-likhithapudi',
};

export const contact = {
  
}

export const socialLinks = {
    // "facebook": "https://www.facebook.com/prasadbobbyy",
    // "instagram": "https://www.instagram.com/___mr_introvert____/",
    "twitter": "https://twitter.com/joyce_563",
    "github": "https://github.com/joyce-likhithapudi",
    "linkedin": "https://www.linkedin.com/in/joyce-likhithapudi"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
     
      
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'BVC Engineering College',
      subHeader: 'Computer Science & Engineering',
      duration: 'June 2019- April 2023',
      // desc: 'Participated in the research of XXX and published 3 papers.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    },
    {
      schoolName: 'Aditya Junior College',
      subHeader: 'Intermediate Education',
      duration: 'June 2017 - April 2019',
      // desc: 'Participated in the research of XXX and published 3 papers.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    },
    {
      schoolName: 'Bhashyam E.M High School',
      subHeader: 'Secondary School Education',
      duration: 'June 2016 - April 2017',
      // desc:
      //   'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      // descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
    },
]

// export const experience = [
//   {
//     role: 'Software Engineer',
//     company: 'Google',
//     companylogo: googlelogo,
//     date: 'June 2018 – Present',
//     desc:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     descBullets: [
//       'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//     ],
//   }
// ]

export const projects = [
  // {
  //   name: "Need AP",
  //   desc: "The whole project is all about live hospital beds availability and plasma availability at Andhra Pradesh. And you can also register as a blood donor or plasma donor.",
  //   link: {
  //     name: "See Demo",
  //     url: "https://www.needap.in/"
  //   }
  // },
  // {
  //   name: "Google Assistant Resume",
  //   desc: "This Projectis all about my Resume. Try to talk with your google assistant like “Talk to Bobby CV”. That will tell my resume.",
  //   link: {
  //     name: "See Demo",
  //     url: "https://bit.ly/assistantbobby"
  //   }
  // },
  // {
  //   name: "Netflix Clone",
  //   desc: "In this project home page has several movie posters. All the data like images and titles are fetching from TMDB API deployed at Firebase.",
  //   link: {
  //     name: "See Demo",
  //     url: "https://netflix-bobby.web.app/"
  //   }
  // },
  {
    name: "Get IPL",
    desc: "This project homepage contains Live IPL Match score. I’m not using any kind of API. This is purely web scraping method by using PHP and CURL.",
    link: {
      name: "See Demo",
      url: "https://github.com/joyce-likhithapudi/get-ipl"
    }
  }
  // {
  //   name: "Edu Compiler",
  //   desc: "We can save your code with unique url. And the code will be executed using Judge0 API deployed at Heroku Platform.",
  //   link: {
  //     name: "See Demo",
  //     url: "https://educompiler.herokuapp.com/"
  //   }
  // },
  // {
  //   name: "Edu Materials",
  //   desc: "This projectis all about B.Tech subject Materials for all branches.",
  //   link: {
  //     name: "See Demo",
  //     url: "https://github.com/prasadbobby/edu-materials"
  //   }
  // }
]