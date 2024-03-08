type Experience = {
  id: number;
  title: string;
  location: string;
  description: string;
  buttonText: string;
  date: string;
  icon: string;
  color?: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Graduate Research Assistant",
    location: "SCI University of Utah",
    description:
      "Master's thesis at the Scientific Computing and Imaging Institute at University of Utah developing a new Cloud-Based User Interface for the astro-visualization software OpenSpace.",
    buttonText: "Details",
    date: "2024-Present",
    icon: "work",
    tech: ["React", "Next.js", "TailwindCSS", "Prisma", "NextAuth", "MongoDB"],
  },
  {
    id: 2,
    title: "Software Developer",
    location: "NIRA Dynamics",
    description:
      "Developed a cross-platform React Native app to display Road Surface Information from NIRA's API, including Road Surface Alerts and alert notifications.",
    buttonText: "Details",
    date: "2023-2024",
    icon: "work",
    tech: ["React Native", "API Integration"],
  },
  {
    id: 3,
    title: "Laboratory Assistant & Lecturer",
    location: "Linköping University",
    description:
      "Responsible for lectures, labs, and final programming projects in courses TNM040 and TNMK30, covering topics such as React, software development, version control, HTML, JavaScript, CSS, PHP, and MySQL.",
    buttonText: "Details",
    date: "2021-2024",
    icon: "work",
    tech: ["React", "HTML", "JavaScript", "CSS", "PHP", "MySQL", "Git"],
  },
  {
    id: 4,
    title: "Responsible for Web Application",
    location: "Career Fair Media Technology Day",
    description:
      "Mainly responsible for maintaining and contributing to the website for the program's career fair, working with React and Next.js.",
    buttonText: "Details",
    date: "2022-2023",
    icon: "work",
    tech: ["React", "Next.js", "SCSS", "Project Management"],
  },
  {
    id: 5,
    title: "Programming Tutor",
    location: "LiTHehack",
    description:
      "Participated in providing programming assistance to students, including guiding in school labs and personal projects, and delivering presentations on programming topics such as Git.",
    buttonText: "Details",
    date: "2022-2023",
    icon: "work",
    tech: [
      "Git",
      "Programming Assistance",
      "React",
      "C++",
      "PHP",
      "HTML",
      "CSS",
      "MySQL",
      "Java",
    ],
  },
  // {
  //   id: 6,
  //   title: "Board Member",
  //   location: "Medieteknikstyrelsen",
  //   description:
  //     "Duties included planning events for students, advocating on social and academic educational issues, and acting as project manager for a committee to plan and implement events.",
  //   buttonText: "Details",
  //   date: "2021-2022 & 2023-2024",
  //   icon: "work",
  //   tech: ["Event Planning", "Project Management"],
  // },
];

export default experiences;
