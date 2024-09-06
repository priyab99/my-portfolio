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

const Skills = () => {
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
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-300 mb-12">My Skills</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <Slide direction="up" triggerOnce key={index} delay={index * 100}>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 max-w-xs mx-auto transition-transform transform hover:scale-105 h-full flex flex-col justify-between">
              <img src={skill.img} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
              <div>
                <p className="font-bold text-lg mt-4 mb-2 text-white">{skill.name}</p>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};

export default Skills;
