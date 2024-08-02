import project1 from "../assets/assets/projects/project-1.jpg.png"
import project2 from "../assets/assets/projects/Project-2.png";
import project3 from "../assets/assets/projects/Project-3.png";
import project4 from "../assets/assets/projects/Project-44.png";
import project5 from "../assets/assets/projects/Project-5.png"
import project6 from "../assets/assets/projects/Project-6.png"
import project7 from "../assets/assets/projects/Project-7.png"
export const HERO_CONTENT = `Hello! I’m Prasad Gomkale, a Computer Engineering graduate with expertise in a wide range of programming and web development skills. My background includes proficiency in C, C++, Python, and Java, as well as web technologies such as HTML, CSS, Tailwind CSS, Bootstrap, and JavaScript. I have hands-on experience with React, NodeJS, ExpressJS, and both SQL and NoSQL databases like MongoDB. I’m excited about continuing to grow in the tech field and exploring new challenges.`;

export const ABOUT_TEXT = `I'm Prasad Gomkale, a recent BTech graduate in Computer Engineering from St. Vincent Pallotti College of Engineering and Technology (2024), and a Diploma holder from Government Polytechnic, Arvi. My education has equipped me with skills in C, C++, Python, Java, HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, NodeJS, ExpressJS, SQL, and NoSQL (MongoDB).

I have experience in web development and software engineering, working on projects that enhanced my problem-solving abilities and time management skills. My volunteering experiences have also enriched my team collaboration and leadership skills.

I am passionate about innovative web solutions and continually enhancing my skills. Thank you for visiting my portfolio!`;

export const PROJECTS = [
  {
    title: "CryptoStats",
    image: project1,
    description:
      "CryptoStats is a responsive and interactive cryptocurrency tracking platform built with React and Vite. The application offers real-time and historical data visualization, featuring: React Development: Responsive UI with dynamic elements. Chart.js Integration: Real-time and historical data visualization. Modern UI/UX Design: CSS animations and gradient themes. Accurate Currency Formatting: Supports multiple currencies, including INR. Efficient State Management: Uses React's Context API for managing currency and coin data. ",
    technologies: ["React.js", "Vite", "React Router", "React Google Charts", "CSS Modules"],
  },
  {
    title: "DevShowcase",
    image: project2,
    description:
      "Developed a personal portfolio website to showcase my skills, projects, and achievements in web development and software engineering. The website serves as a comprehensive platform for potential employers and clients to view my work and understand my technical expertise.",
    technologies: ["React.js", "Tailwind CSS",  "Framer Motion"],
  },
  {
    title: "BMI Insight",
    image: project3,
    description:
      "Developed a responsive web application to calculate Body Mass Index (BMI) using React. Implemented a user-friendly interface with slider inputs for weight and height, and utilized React's useMemo hook for optimized BMI calculations. ",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "ToDO List",
    image: project4,
    description:
      "Created an interactive TODO list application leveraging React for dynamic and responsive task management. The application provides users with a seamless experience for managing tasks with real-time updates and intuitive UI element",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "WeatherNow",
    image: project5,
    description:
      "Built an interactive weather application leveraging React for the front-end and the OpenWeatherMap API for real-time weather data. This project demonstrates my expertise in creating user-centric web applications with seamless data integration and dynamic content updates. The application features an intuitive search functionality, responsive design, and visually appealing interface adjustments based on weather conditions, offering users an engaging experience.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "Key Logger",
    image: project6,
    description:
      "Developed a dynamic Key Logger web application to monitor and display real-time keyboard events. This project demonstrates the ability to handle DOM manipulation, event listeners, and state management using JavaScript. The application allows users to start and stop key logging, displaying key press events and their states interactively.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Number Guessing Game",
    image: project7,
    description:
      "Developed a responsive number guessing game using HTML, CSS, and JavaScript. This project includes a user-friendly interface where players guess a number between 1 and 100, receiving feedback on each guess. The game dynamically tracks the number of guesses and provides immediate responses to guide the player.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Nagpur, Maharashtra,  India. ",
  phoneNo: "+91 8999049981 ",
  email: "prasad.gomkale8787@gmail.com",
};
