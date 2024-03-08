import React from "react";
import AboutItem from "./AboutItem";
import ScrollLink from "./ScrollLink";

const AboutItems = [
  {
    title: "What I'm Up To 📝",
    desc: "At the moment I am finishing up my Master's degree in Media Technology and Engineering with a major in Computer Science. Right now I'm in Salt Lake City, Utah, conducting my Master's thesis: Cloud-Based Tablet User Interface for Real-Time Touch Interaction in OpenSpace.",
  },
  {
    title: "Who Am I? 🔍",
    desc: "I'm Dennis. A cheerful guy passionate about all things software engineering. I was born and raised in the beautiful capital of Sweden, Stockholm. I moved to Norrköping to study Media Technology, where I found my interests in Web Development, Computer Vison and Data Visualization. I'm a firm believer that anything is possible, as long as you put in the time and effort!",
  },
  {
    title: "My Hobbies 🎨",
    desc: "When I'm not studying I'm either working on a side project, learning new technologies or being active in student groups trying to bring the student community together. Of course I have other hobbies to. Like Skateboarding, getting a sweaty workout at the gym and recently honing my skills in Jiu Jitsu and MMA.",
  },
];

const AboutSection = () => {
  return (
    <section className="divide-y divide-trinidad-400 scroll-smooth" id="about">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 ">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
        <p className="text-lg leading-7 text-gray-600 ">
          Let&apos;s explore what I&apos;m up to, who I am and my interests. 🚀
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-6 rounded-3xl px-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {AboutItems.map(({ title, desc }) => (
          <AboutItem title={title} desc={desc} key={title} />
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;
