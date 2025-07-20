// projectData.js
import pro1 from "./../../assets/pro1.jpg";
import pro2 from "./../../assets/pro2.avif";
import pro3 from "./../../assets/pro3.jpg";
import travel from "./../../assets/travel.jpg";
import news from "./../../assets/news.png";
import disease from "./../../assets/disease.jpg";
import newapp from "./../../assets/newsapp.png";
import passop from "./../../assets/passop.png";
import weather from "./../../assets/weather.png";
import travels from "./../../assets/wanderlust.png";

const projectData = [
  {
    id: "weather-app",
    title: "Weather App",
    description: [
      "API-based web app built using HTML, CSS, and JavaScript.",
      "Displays weather based on user's location or search input.",
      "Shows relevant weather images dynamically.",
      "Minimalist UI, fully responsive and mobile-friendly."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    image: pro1,
    modalImage: weather,
    link: "https://shpatel123.github.io/Weather-App/",
  },
  {
    id: "food-order",
    title: "Food Order Website",
    description: [
      "Built E-commerce food order website.",
      "In this website i create product and seller webpage.",
      "Authentication for both admin and user use jwt token, cookies and session.",
      "Uses MongoDB for data storage.",
      "User also can add product to cart and checkout then payment."
    ],
    technologies: ["React.js", "Node.js","Express.js", "Tailwind CSS", "MongoDB", "Cloud service"],
    image: pro2,
    link: "https://grocery-website-frontend-h5p9.onrender.com/",
  },
  {
    id: "Password Manager",
    title: "Password Manager",
    description: [
      "Web app to store and manage passwords securely.",
      "Users can save, edit, and delete credentials.",
      "Responsive design compatible with mobile devices.",
      "Built using MERN stack with Tailwind CSS."
    ],
    technologies: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
    image: pro3,
    modalImage: passop,
    link: "https://github.com/shpatel123/Spotify-clone",
  },
  {
    id: "wanderlust",
    title: "Wanderlust Travel Website",
    description: [
      "Full-stack travel website built with Node.js and Express.",
      "Implements CRUD features for travel listings.",
      "Responsive frontend using Bootstrap.",
      "Integrates cloud services and third-party APIs."
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Bootstrap", "API", "Cloud service"],
    image: travel,
    modalImage: travels,
    link: "https://github.com/shpatel123/Wanderlust-Website",
  },
  {
    id: "news-app",
    title: "News App",
    description: [
      "Built using React and News API.",
      "Shows latest news across categories.",
      "Modern responsive UI using Bootstrap.",
      "Fetches real-time articles using REST API."
    ],
    technologies: ["React", "Bootstrap", "API"],
    image: news,
    modalImage: newapp,
    link: "https://shpatel123.github.io/Newsapp",
  },
  {
    id: "disease-predictor",
    title: "Disease Prediction",
    description: [
      "Predicts disease based on symptoms using machine learning.",
      "Recommends appropriate drugs from dataset.",
      "Built with Flask and integrated with Google Gemini API.",
      "Uses Random Forest classifier for prediction."
    ],
    technologies: ["Python", "Machine Learning", "Flask"],
    image: disease,
    link: "https://github.com/shpatel123/disease-prediction-",
  },
];

export default projectData;

