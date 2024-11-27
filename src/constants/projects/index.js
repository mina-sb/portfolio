import { VideoConfrance, UILibrary, TravelTracker, ShoppingPlatform } from '../../assets/images'

export const projectList = [
  {
    id: 0,
    imageUrl: VideoConfrance,
    title: ' Real-Time Video Conferencing System',
    desc: 'A Next.js app for real-time video conferencing and secure user management.',
    techs: [
      'NextJs',
      'ReactJs',
      'TypeScript',
      'Redux Toolkit',
      'MVVM Architecture',
      'Browser APIs'
    ],
    projectDetails: [
      'Managed camera and microphone integration with browser APIs, utilizing React and TypeScript for real-time media stream handling (video and audio) to ensure high-quality, synchronized communication across users.',
      'Utilized Redux Toolkit to manage the application state, handling hardware access, media streams, and user settings efficiently.',
      'Applied MVVM architecture to structure the application, separating concerns and ensuring clean, maintainable code while managing Redux Toolkit, hardware interactions, and view layers effectively.',
      'Implemented user authentication and authorization using Next.js to manage secure sign-ins and role-based access control.',
      'Used token validation with HTTP - only cookies to maintain session persistence.',
      'Added middleware to validate user roles and permissions, ensuring proper authorization for access to specific resources and pages.',
      'Built core meeting features (user management, sessions, video streaming) with React, TypeScript, and Next.js, optimizing performance using SSR and API routes for faster load times and improved responsiveness.'
    ]
  },
  {
    id: 1,
    imageUrl: UILibrary,
    title: 'Fully Customizable UI Component Library',
    desc: 'React-based component library with fully customizable properties',
    techs: ['React', 'Tailwind CSS', 'Storybook', 'TypeScript', 'Git', 'Jira'],
    projectDetails: [
      'Built a UI component library using React, based on designs provided in Figma.',
      'Used Tailwind CSS for flexible, responsive, and maintainable styling.',
      'Implemented Storybook for visual testing and component documentation.',
      'Integrated TypeScript for enhanced type safety and code maintainability.',
      'Collaborated with the team using Git for version control and Jira for project management in an Agile workflow.'
    ]
  },
  {
    id: 2,
    imageUrl: TravelTracker,
    title: 'TravelTracker Web Application',
    demo: 'https://mina-sb.github.io/placesFrontend/',
    video: 'https://drive.google.com/file/d/1OlBVp47gfKMKTf3qinE2stfTTcMLBG7L/view',
    desc: 'A MERN app for tracking travel locations with Google Maps.',
    techs: [
      'Google Maps API',
      'React',
      'JWT Authentication',
      'bcrypt',
      'Express-validator',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS SDK',
      'Multer',
      'Dark Mode',
      'Custom Hooks'
    ],
    projectDetails: [
      'Integrated Google Maps API for dynamic location logging and management using React.',
      'Implemented JWT authentication, bcrypt for password hashing, and Express-validator for input validation with Node.js and Express.',
      'Utilized MongoDB to store user data and location entries, with AWS SDK and Multer for secure image uploads.',
      "Enhanced UI with a dark mode feature, leveraging React's state management.",
      'Applied higher-order components and custom hooks in React for code abstraction and maintainability.'
    ]
  },
  {
    id: 3,
    imageUrl: ShoppingPlatform,
    title: 'A complete React-based platform with cart and wishlist features.',
    desc: 'Frontend',
    demo: 'https://mina-sb.github.io/handmade-ceramic-online-store/',
    video: 'https://drive.google.com/file/d/1XpNGypn_JCORn5dBxu4vYY58rUxj3xYx/view?usp=drive_link',
    techs: ['React', 'RESTful APIs', 'Sass', 'Local Storage'],
    projectDetails: [
      'Built a React-based application by efficiently integrating RESTful APIs to retrieve product data.',
      'Used Sass to create flexible and maintainable CSS for a polished UI.',
      'Implemented local storage to retain cart and wish list data between user sessions.'
    ]
  }
]
