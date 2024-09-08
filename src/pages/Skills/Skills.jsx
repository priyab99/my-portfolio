import React from 'react';
import { Slide } from 'react-awesome-reveal';
import mongo from '../../assets/icons/mongo.png';
import react from '../../assets/icons/react.png';
import node from '../../assets/icons/nodejs.png';
import js from '../../assets/icons/js.png';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css-3.png';
import express from '../../assets/icons/icons8-express-js-64.png';
import redux from '../../assets/icons/icons8-redux-50.png';
import { Typed } from "react-typed";
import { useEffect, useRef } from 'react';

const Skills = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Skills"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const skills = [
    { img: html, name: "HTML", desc: "Proficient in HTML for creating structured and semantic web pages." },
    { img: css, name: "CSS", desc: "Skilled in using CSS for styling responsive and visually appealing web pages." },
    { img: node, name: "Node.js", desc: "Experience in server-side applications, REST APIs, and database operations using Node.js." },
    { img: mongo, name: "MongoDB", desc: "Familiar with MongoDB, designing database schemas, and performing CRUD operations." },
    { img: js, name: "JavaScript", desc: "Proficient in Vanilla JavaScript for dynamic web applications." },
    { img: react, name: "React", desc: "Skilled in building user interfaces using React to develop scalable applications." },
    { img: express, name: "Express.js", desc: "Experience in building server-side applications and APIs using Express.js." },
    { img: redux, name: "Redux", desc: "Familiar with Redux for managing complex application state in React apps." }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 text-center bg-dark-blue relative z-10"
    >
      <div className="text text-8xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 mt-5 font-serif">
        <span ref={el}></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <Slide direction="up" triggerOnce  key={index} delay={index * 100}>
            <div className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-xs mx-auto transition-transform transform hover:scale-105 min-h-[350px] flex flex-col justify-between">
              {/* Logo with fixed size */}
              <div className="flex justify-center items-center h-20 mb-4">
                <img src={skill.img} alt={skill.name} className="w-16 h-16" />
              </div>
              {/* Skill name and description */}
              <div className="text-center flex-grow">
                <p className="font-bold text-xl mt-4 mb-2 text-blue-950">{skill.name}</p>
                <p className="font-sans text-lg">{skill.desc}</p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};

export default Skills;
