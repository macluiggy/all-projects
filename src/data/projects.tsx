interface Project {
  title: string;
  img: string;
  description: string;
  icon_name: string[];
  technologies: Array<string>;
  source_code: string;
  project_live: string;
}
type Data = Project[]; // Array<Project>

const data: Data = [
  {
    title: "Full Stack User Registration",
    img: "https://macluiggy.github.io/images/mern-skeleton.png",
    description:
      "Full Stack user registration and login page, this app uses jsonwebtoken to authenticate users and store user data in a database. You can see an user profile and edit it if you are logged in.",
    icon_name: [
      "logos:typescript-icon",
      "vscode-icons:file-type-node",
      "simple-icons:express",
      "vscode-icons:file-type-mongo",
      "logos:webpack",
      "logos:react",
      "cib:next-js",
    ],
    source_code: "https://github.com/macluiggy/mern-skeleton-next.js",
    project_live: "https://mern-skeleton-next-js.vercel.app/",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Webpack",
      "React",
      "Next.js",
    ],
  },
  {
    title: "Full Stack PERN Tasks",
    img: "https://macluiggy.github.io/images/tasks-pern.png",
    description:
      "Task management app that allows users to create, edit, and delete tasks. The app is built with the PERN Stack: React, Node, Express, and PostgreSQL.",
    icon_name: [
      "logos:typescript-icon",
      "vscode-icons:file-type-node",
      "simple-icons:express",
      "logos:postgresql",
      "logos:webpack",
      "logos:react",
    ],
    source_code: "https://github.com/macluiggy/tasks-pern-app",
    project_live: "https://tasks-pern.netlify.app/",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Webpack",
      "React",
    ],
  },
  {
    title: "Exercise Tracker",
    img: "https://macluiggy.github.io/images/exercice-tracker.png",
    description:
      "In this microservice you can create a username and it automatically adds an id, then you can use that id to add an exercise to the user log.",
    icon_name: [
      "logos:typescript-icon",
      "vscode-icons:file-type-node",
      "simple-icons:express",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
    ],
    source_code:
      "https://github.com/macluiggy/boilerplate-project-exercisetracker",
    project_live: "https://boilerplate-project-exercisetracker-ten.vercel.app/",
    technologies: ["TypeScript", "Node.js", "Express", "HTML", "CSS"],
  },
  {
    title: "URL Shortener Microservice",
    img: "https://macluiggy.github.io/images/url-shortener.png",
    description:
      "An URL shortener that allows to reduce long links, just paste the long URL and click Shorten.",
    icon_name: [
      "logos:typescript-icon",
      "vscode-icons:file-type-node",
      "simple-icons:express",
      "vscode-icons:file-type-mongo",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
    ],
    source_code:
      "https://github.com/macluiggy/-boilerplate-project-urlshortener",
    project_live: "http://boilerplate-project-urlshortener-six.vercel.app/",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Request Header Parser Microservice",
    img: "https://macluiggy.github.io/images/request-header-parser-microservice.png",
    description:
      "This is a microservice that makes a request and it returns a JSON object containing information about your IP, preferred language and software",
    icon_name: [
      "logos:typescript-icon",
      "vscode-icons:file-type-node",
      "simple-icons:express",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
    ],
    source_code:
      "https://github.com/macluiggy/boilerplate-project-headerparser",
    project_live:
      "https://boilerplate-project-headerparser-macluiggy.vercel.app/",
    technologies: ["TypeScript", "Node.js", "Express", "HTML", "CSS"],
  },
  {
    title: "Timestamp Microservice",
    img: "https://macluiggy.github.io/images/timestamp-microservice.png",
    description:
      "A simple timestamp microservice, it was built as an introduction to Node.js",
    icon_name: [
      "logos:typescript-icon",
      "vscode-icons:file-type-node",
      "simple-icons:express",
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
    ],
    source_code: "https://github.com/macluiggy/boilerplate-project-timestamp",
    project_live:
      "https://boilerplate-project-timestamp-fcc-macluiggy.vercel.app/",
    technologies: ["TypeScript", "Node.js", "Express", "HTML", "CSS"],
  },
  {
    title: "Full Stack Movie Reviews App",
    img: "https://macluiggy.github.io/images/movie-reviews.png",
    description:
      "This MERN app fetches movies from a Mongo database, you can also login and post a review, update delete the reviews you have made in the database.",
    icon_name: [
      "vscode-icons:file-type-mongo",
      "simple-icons:express",
      "logos:react",
      "vscode-icons:file-type-node",
    ],
    source_code: "https://github.com/macluiggy/movies-reviwes-mern-app.git",
    project_live: "https://movies-reviews-frontend.netlify.app/",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "JavaScript Calculator",
    img: "https://macluiggy.github.io/images/javascript-calculator.png",
    description:
      "Javascript Calculator from freeCodeCamp FrontendLibraries Projects. User can add, subtract, divide and multiply.",
    icon_name: ["logos:javascript", "logos:sass", "logos:react", "logos:redux"],
    source_code: "https://github.com/macluiggy/javascript-calculator.git",
    project_live: "https://javascript-calculator-free-code-camp.netlify.app/",
    technologies: ["JavaScript", "Sass", "React", "Redux"],
  },
  {
    title: "Drum Machine",
    img: "https://macluiggy.github.io/images/drum-machine.png",
    description:
      "This application allows you to listen to some clips, you can switch between two drums, turn the drum on and off and raise and lower the volume of the drum.",
    icon_name: ["logos:javascript", "logos:sass", "logos:react", "logos:redux"],
    source_code: "https://github.com/macluiggy/drum-machine-free-code-camp",
    project_live: "https://drum-machine-free-code-camp.netlify.app/",
    technologies: ["JavaScript", "Sass", "React", "Redux"],
  },
  {
    title: "Simple Markdown Previewer",
    img: "https://macluiggy.github.io/images/markdown-previewer.png",
    description:
      "Simple Markdown Previewer it contains a textarea for markdown input and a preview tab where the converted text appears.",
    icon_name: ["logos:javascript", "logos:sass", "logos:react", "logos:redux"],
    source_code: "https://github.com/macluiggy/markdown-editor",
    project_live: "https://markdown-previewer-free-code-camp.netlify.app/",
    technologies: ["JavaScript", "Sass", "React", "Redux"],
  },
  {
    title: "Random Quote Machine",
    img: "https://macluiggy.github.io/images/random-quote-machine.jpeg",
    description:
      "Random Quote Machine, it fetches a random, motivational quote along with its author. The theme changes every time a new quote is show.",
    icon_name: ["logos:javascript", "logos:sass", "logos:react", "logos:redux"],
    source_code: "https://github.com/macluiggy/random_quote_machine#live-demo",
    project_live: "https://random-quote-machine-free-code-camp.netlify.app/",
    technologies: ["JavaScript", "Sass", "React", "Redux"],
  },
  {
    title: "Room homepage",
    img: "https://raw.githubusercontent.com/macluiggy/room-homepage-frontend-mentor/main/screenshot.jpeg",
    description:
      "This homepage were helpful to test my layout skills. There's a slider that also were helpful to practice React Hooks",
    icon_name: ["logos:javascript", "logos:sass", "logos:react"],
    source_code:
      "https://github.com/macluiggy/room-homepage-frontend-mentor/tree/main",
    project_live: "https://frontend-mentor-room-homepage.netlify.app/",
    technologies: ["JavaScript", "Sass", "React"],
  },
  {
    title: "Static Job Listing",
    img: "https://macluiggy.github.io/images/static-job-listing.jpeg",
    description:
      "A job listing where the user can filter each job description by its skills.",
    icon_name: ["logos:javascript", "logos:sass", "logos:react"],
    source_code: "https://github.com/macluiggy/static-job-listings-master",
    project_live: "https://static-job-listings-with-filter.netlify.app/",
    technologies: ["JavaScript", "Sass", "React"],
  },
  {
    title: "Bookmark Landing Page",
    img: "https://raw.githubusercontent.com/macluiggy/bookmark-langing-frontend-mentor/main/screenshot.jpeg",
    description:
      "Bookmark landing page, this was helpful to test my layout skills, and also for practice react components.",
    icon_name: ["logos:javascript", "logos:sass", "logos:react"],
    source_code:
      "https://github.com/macluiggy/bookmark-langing-frontend-mentor",
    project_live: "https://bookmark-langind-page.netlify.app/",
    technologies: ["JavaScript", "Sass", "React"],
  },
  {
    title: "Blogr Landing Page",
    img: "https://macluiggy.github.io/images/blogr.png",
    description:
      "Blogr Landing Page, practicing responsive web design, media queries, and javascript to call an event.",
    icon_name: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
    ],
    source_code: "https://github.com/macluiggy/blogrLandingPage",
    project_live: "https://macluiggy.github.io/blogrLandingPage",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Launch Countdown TImer",
    img: "https://macluiggy.github.io/images/countdown_timer.jpeg",
    description:
      "A countdown timer, when the time is less than zero, the countdown starts again from one year.",
    icon_name: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
      "logos:sass",
    ],
    source_code: "https://github.com/macluiggy/launch-countdown-timer-main-FM",
    project_live: "https://macluiggy.github.io/launch-countdown-timer-main-FM",
    technologies: ["HTML", "CSS", "JavaScript", "Sass"],
  },
  {
    title: "Insure Landing Page",
    img: "https://macluiggy.github.io/images/insure.png",
    description:
      "Product Landing Page built for fake Insure brand. This was useful to practice responsive web design.",
    icon_name: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
    ],
    source_code: "https://github.com/macluiggy/FM-insure-landing-page-master",
    project_live: "https://macluiggy.github.io/FM-insure-landing-page-master",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pricing Component with Toggle",
    img: "https://macluiggy.github.io/images/pricing_component.jpeg",
    description:
      "A pricing component where the user can toggle between monthly and annually payment.",
    icon_name: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
    ],
    source_code:
      "https://github.com/macluiggy/pricing-component-with-toggle-master",
    project_live:
      "https://macluiggy.github.io/pricing-component-with-toggle-master",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Interactive Pricing Component",
    img: "https://macluiggy.github.io/images/interactive_pricing.jpg",
    description:
      "In this project you can select a specific price, you can pay it monthly or annually, changing annually you can pay it with a discount.",
    icon_name: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
    ],
    source_code:
      "https://github.com/macluiggy/interactive-pricing-component-main",
    project_live:
      "https://macluiggy.github.io/interactive-pricing-component-main",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "URL Shortening API",
    img: "https://raw.githubusercontent.com/macluiggy/url-shortening-api-master-FM/main/desktop.jpeg",
    description:
      "This is a project where the user can shorten any valid link, this was made with the shortcode API.",
    icon_name: [
      "vscode-icons:file-type-html",
      "vscode-icons:file-type-css",
      "logos:javascript",
    ],
    source_code: "https://github.com/macluiggy/url-shortening-api-master-FM",
    project_live: "https://macluiggy.github.io/url-shortening-api-master-FM",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
/*let technologies = data.reduce((acum, currentTech) => {
	let { icon_name, technologies } = currentTech;
	return [...acum, { icon_name, technologies }];
}, [])*/

export default data;
