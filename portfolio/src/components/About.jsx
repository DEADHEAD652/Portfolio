import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full g-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a dedicated and skilled full-stack developer with 1.5 years of
          experience in the industry. I am currently pursuing his Bachelor of
          Computer Science degree, and in my 8th semester. Throughout my
          academic journey, I has shown a passion for coding and a willingness
          to learn and grow as a developer.
        </p>
        <br />
        <p className="text-xl">
          I have specialized in the MERN stack, which includes MongoDB,
          Express.js, React.js, and Node.js. My knowledge and experience in this
          stack have allowed me to create responsive and efficient web
          applications that cater to the needs of his clients.I am also
          proficient in various programming languages such as JavaScript, HTML,
          CSS,and frameworks like Tailwind, NextJS,ReactJS,ExpressJs,Node , and
          has experience with version control tools such as Git.
        </p>
      </div>
    </div>
  );
};

export default About;
