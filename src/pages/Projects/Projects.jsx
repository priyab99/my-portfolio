import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Saved Pictures/Screenshot (300).png';
import image2 from '../../assets/Saved Pictures/Screenshot (301).png';
import image3 from '../../assets/Saved Pictures/Screenshot (302).png';
import image4 from '../../assets/Saved Pictures/Screenshot (303).png';
import image5 from '../../assets/Saved Pictures/Screenshot (304).png';
import image6 from '../../assets/Saved Pictures/Screenshot (305).png';
import image7 from '../../assets/Saved Pictures/Screenshot (379).png';
import image8 from '../../assets/Saved Pictures/Screenshot (380).png';
import image9 from '../../assets/Saved Pictures/Screenshot (382).png';
import image10 from '../../assets/Saved Pictures/Screenshot (376).png';
import image11 from '../../assets/Saved Pictures/Screenshot (377).png';
import image12 from '../../assets/Saved Pictures/Screenshot (378).png';

// Sample srcset images
const projects = [
  {
    name: "MindConnect",
    images: [image1, image2, image3],
    description: "MindConnect is an online platform designed to provide accessible and convenient mental health support to users.",
    liveLink: "https://mindconnect.web.app/"
  },
  {
    name: "WellnessNourish",
    images: [image4, image5, image6],
    description: "A website that provides users with diet plans and nutritional advice.",
    liveLink: "https://fantastic-chimera-583f8d.netlify.app/"
  },
  {
    name: "SportsZone Academy",
    images: [image7, image8, image9],
    description: "A summer camp school website offering various sports classes for students to enroll in.",
    liveLink: "https://assignment-twelve-f4bbd.web.app/"
  },
  {
    name: "ToyStore",
    images: [image10, image11, image12],
    description: "ToysStore is a toy marketplace website where users can sell and buy a wide variety of toys.",
    liveLink: "https://assignment-eleven-dff48.web.app/"
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="mt-10 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="mb-10">
            <div className="relative overflow-hidden" style={{ height: '300px' }}>
              {project.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${project.name} screenshot ${imgIndex + 1}`}
                  srcSet={`${img} 300w, ${img} 768w, ${img} 1200w`}
                  sizes="(max-width: 600px) 300px, (max-width: 1200px) 768px, 1200px"
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                    imgIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
