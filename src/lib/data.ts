export const personalInfo = {
  name: "Austin Cook",
  location: "Provo, Utah",
  email: "austin.cook.id@gmail.com",
  github: "https://github.com/austin-cook",
  linkedin: "https://www.linkedin.com/in/austin-cook-id/",
  originalAuthor: "Rishikesh S",
};

export const workExperience = [
  {
    company: "BYU Internet Security Research Lab",
    location: "Provo, Utah",
    position: "Research Assistant",
    period: "Aug 2022 - Aug 2023",
    achievements: [
      "Assisted in the development of an End-to-End Encryption program that gains exclusive access to keyboard input while in use to prevent keystroke interception by keyloggers",
      "Modified UI to improve user experience",
      "Developed new variations of the program for research and usability purposes",
      "Gained proficiency in C and acquired experience in working with large-scale codebases",
      "Researched and analyzed various security and authentication methods",
    ],
  },
];

export const education = [
  {
    institution: "Brigham Young University",
    location: "Provo, Utah",
    degree: "BS in Computer Science",
    period: "Aug 2021 - Apr 2025",
    achievements: [
      "Summa Cum Laude | GPA: 4.0",

    ],
  },
];

export const skills = {
  programmingLanguages: [
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "C",
    "C++",
  ],
  frontendDevelopment: [
    "Reactjs",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Nodejs", "Expressjs", "Flask"],
  databaseAndStorage: ["DynamoDB", "S3", "MongoDB", "Redis", "SQL"],
  cloudAndDevOps: ["AWS", "GitHub Actions", "Docker", "Terraform", "Serverless with AWS Lambda"],
  toolsAndServices: [
    "Linux", "ChatGPT API", "NumPy", "Scikit-Learn ML", "REST API"
  ],
};

export const projects = [
  {
    title: "Tweeter (Twitter Clone)",
    github: "https://github.com/austin-cook/cs-340-tweeter-project",
    description: [
      "A serverless Twitter clone built with React and TypeScript, developed from a starter UI and architected for scalability and maintainability",
      "Implemented core features including user registration/authentication, posting, following/unfollowing, and viewing feed, story, followees, and followers",
      "Applied established design patterns: Model-View-Presenter, Facade, Template Method, Factory, and generics with a strong emphasis on decoupling dependencies",
      "Incorporated AWS Lambda functions for serverless backend logic, used AWS DynamoDB and S3 for scalable data persistence, and leveraged AWS SQS to queue and process large-scale operations asynchronously",
      "Integrated password hashing and salting for secure authentication",
      "Wrote shell scripts to automate build and cloud resource deployment",
    ],
    image: "tweeter.png"
  },
  {
    title: "Java Constant Propagation",
    github: "https://github.com/austin-cook/cs-329-constant-propagation",
    description: [
      "Developed a Java code optimization compiler that eliminates redundancies through constant folding and constant propagation",
      "Utilized the Eclipse JDT Abstract Syntax Tree (AST) and API to parse, analyze, and transform Java source code",
      "Implemented a reaching definitions analysis module to support constant propagation",
      "Applied the visitor design pattern to modify AST components",
      "Gained hands-on experience with Maven for managing build cycles, project structure, and dependencies",
    ],
    image: "propagation.png",
  },
  {
    title: "Recipe App with MongoDB and Redis",
    github: "https://github.com/austin-cook/cs-252-elite-chef-recipies-server",
    description: [
      "Build a full-stack recipe-sharing application using React for the frontend and Python with Flask for the backend",
      "Integrated MongoDB (Atlas) and Redis (Redis Cloud) to provide scalability, highly available data storage, and caching",
      "Implemented a cache-aside strategy, querying Redis first to minimize MongoDB load and reduce latency",
      "Achieved robust performance targets: 5,000 read requests per second and failover recovery in under 60 seconds"
    ],
    image: "elitechef.png",
  },
  {
    title: "End-to-End Encryptor",
    github: "",
    description: [
      "Contributed to a research project at BYU's Internet Security Research Lab (IRSL) aimed at enhancing end-to-end encryption by securing the user's keyboard input from interception",
      "Began by improving the user interface while learning C and gaining experience with large-scale codebases",
      "Progressed to work on bug fixes and add new features to the core application",
      "Developed a variation of the program that uses a man-in-the-middle (MITM) proxy library to intercept the message and swap a temporary token with the ciphertext at the network level"
    ],
    image: "e2ee.png",
  },
  {
    title: "V1 Portfolio Website",
    github: "https://github.com/austin-cook/portfolio-website-2022",
    description: [
      "My Sophomore year portfolio website built from scratch with React and Framer Motion",
    ],
    image: "portfolio2022.png",
    extraLink: "https://austin-cook.github.io/portfolio-website-2022/",
  },
  {
    title: "Machine Learning Music Genre Classification",
    github: "https://github.com/austin-cook/cs-270-final-project",
    description: [
      "Collected lyrics from 4,200 songs across country, pop, and Christian genres using an API",
      "Engineered custom input features by processing and analyzing lyrical content",
      "Applied machine learning classifiers, including multi-layer perceptron, random forest, k-nearest neighbor, decision tree, Gaussian Naive Bayes, and perceptron, to perform genre classification",
      "Analyzed model performance and fine-tuned hyperparameters to improve classification accuracy",
    ],
  },
  {
    title: "Reversi Game Play Agent",
    github: "https://github.com/austin-cook/cs-470-reversi-agent",
    description: [
      "Developed two AI agents forReversi using the Minimax algorithm with Alpha-Beta Pruning and Monte Carlo Tree Search (MCTS)",
      "Designed and implemented custom heuristic functions to evaluate game state value and guide decision making",
      "🏆 Won 1st place in a class tournament, outperforming other Minimax-based agents",
    ],
    image: "reversi.png",
  },
  {
    title: "Robot Navigation with Bayes Filter and Value Iteration",
    github: "https://github.com/austin-cook/cs-470-bayes-filter-and-value-iteration",
    description: [
      "Implemented a Bayes filter to estimate the robots location based on a transition model (previous movement), sensor model (environmental readings), and motor noise",
      "Applied value iteration to compute the optimal movement policy for navigating to a goal location",
    ],
    image: "bayes.png",
  },
  {
    title: "Turing Complete Programming Language",
    github: "https://github.com/austin-cook/cs-330",
    description: [
      "Implemented a Turing-complete programming language using Shplait, a language in the Racket family",
      "Built a parser to convert source code into an Abstract Syntax Tree (AST)",
      "Added support for key programming constructs including conditionals, variable, functions, mutation, and exception handling",
      "Developed a desugarer to translate high-level surface syntax into a unified core representation, enabling easy extension of language features",
      "Created an interpreter to evaluate AST expressions and execute programs",
    ],
    image: "language.png"
  },
  {
    title: "Dafny Formal Verification",
    github: "https://github.com/austin-cook/cs-329-dafny-lab",
    description: [
      "Gained hands-on experience with Dafny, a language and a tool for formal verification of program correctness",
      "Developed intuition for identifying scenarios where formal verification methods are appropriate in high-assurance software development",
      "Learned how formal and informal specifications can guide implementation and improve software reliability"
    ],
    image: "dafny.png"
  },
  {
    title: "Branch and Bound Traveling Salesman Solver",
    github: "https://github.com/austin-cook/cs-312-project-5-tsp-branch-and-bound",
    description: [
      "Implemented a branch and bound algorithm to solve the Traveling Salesman Problem (TSP)",
      "The TSP seeks the shortest possible route through a set of cities and is NP-hard, meaning that both finding and verifying an optimal solution require exponential time",
      "Branch and Bound enables a more efficient (though not always optimal) solution by pruning paths that, based on heuristics, cannot outperform the best solution found so far",
      "Potential tours are explored during a limited timeframe, systematically eliminating suboptimal paths to reduce computational complexity",
    ],
    image: "tsp.png",
  },
  {
    title: "Hybrid Encryption Echo Server",
    github: "https://github.com/austin-cook/cs-465-hybrid-encryption-echo-server",
    description: [
      "Developed a hybrid encryption echo server in C# using RSA, AES, and HMAC cryptographic libraries",
      "Encrypted the AES session key using RSA, used AES for message encryption, and applied HMAC to verify message integrity and authenticity",
      "Used a secure and efficient architecture that combines the speed of symmetric encryption with the key exchange benefits of asymmetric encryption, ensuring robust protection against man-in-the-middle attacks",
    ],
  },
];

export const awards = [
  {
    name: "",
    issuer: "",
    date: "",
    type: "",
    position: "",
  },
];
