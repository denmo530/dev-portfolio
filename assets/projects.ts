export type Project = {
  id: number;
  title: string;
  githubSrc: string;
  description: string;
  img: string;
  website?: string;
  tech: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Korren",
    githubSrc: "https://github.com/denmo530/korren",
    description:
      "Choosing the right student housing can be a challenging task for new university students who aren't familiar with the choices at Linköping university. Korren is the handy web tool for new student's who are in need of guidance for making their choice. Student's can read and create their own reviews of student housings. With every review the student can upload images and write text descriptions of their experiences with the housing.",
    img: "/images/projects/korren1.png",
    tech: ["React", "Next.js", "TailwindCSS", "Prisma", "NextAuth", "MongoDB"],
  },
  {
    id: 2,
    title: "Masterval",
    githubSrc: "https://github.com/denmo530",
    description:
      "In a bachelor's project with four other students, we developed a tool to facilitate the selection of master's courses for media technology students at Linköping University. This tool validates courses and provides an overview of choices, which students typically manage in self-created Excel files. Initially, we planned to use a MERN architecture, but we ultimately decided on an ASP.NET framework with an MVC architecture, using React for the frontend and MongoDB as the database. The MVC pattern allowed for separation of concerns between the user interface, data, and application logic.",
    img: "/images/projects/project.jpg",
    tech: ["React", "ASP.NET", "MVC", "MongoDB", ".NET"],
  },
  {
    id: 3,
    title: "Twitter Sentiment Analysis",
    githubSrc: "https://github.com/denmo530/tweet-sentiment-analysis",
    description:
      " Twitter Sentiment Analysis tool utilizing machine learning models, including Random Forest Classifier, Multinomial Naive Bayes Classifier, and Stochastic Gradient Descent classifier, to analyze the sentiment of tweets. The dataset used for training and testing the model comprised 1.6 million tweets from Kaggle's Sentiment140, with additional data collected from the Twitter API using the Tweepy library. The project involved data preprocessing, feature engineering, and parameter tuning to optimize the model's performance. The TF-IDF method was employed to extract features from the tweet data. The final model achieved a best score of approximately 71% accuracy in sentiment prediction.",
    img: "/images/projects/tweet.png",
    tech: ["Python", "Random Forest", "Naive Bayes", "SGD", "Machine Learning"],
  },
  {
    id: 4,
    title: "Face Detection & Recognition Pipeline",
    githubSrc: "https://github.com/denmo530/Face-Detection-Recognition-",
    description:
      "Developed a face detection and recognition pipeline using image processing techniques. The pipeline begins with creating a database of face images, which are then preprocessed for lightning compensation and automatic white balancing. Facial features such as eyes and mouth are identified using chrominance and luminance components in the YCrCb color space, and a facemask is applied for better detection in cluttered backgrounds. The coordinates of eyes and mouth are determined to normalize the images, ensuring uniform rotation, scaling, tone, and size. The core of the recognition system is the Eigenfaces method, which uses Principal Component Analysis (PCA) to represent faces as linear combinations of eigenvectors, known as eigenfaces. Feature vectors are generated for each face, and classification is performed by comparing these vectors to identify the closest match in the database. The system was tested on various datasets with transformations like rotation, scaling, and tone adjustment to evaluate its accuracy in detecting and recognizing faces.",
    img: "/images/projects/face.png",
    tech: [
      "MATLAB",
      "Image Processing",
      "Face Detection",
      "Face Recognition",
      "PCA",
    ],
  },
];

export default projects;
