import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { projects, ProjectType } from '../../cons'

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsInView(inView);
      }
    };

    handleScroll(); // Check view on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden mb-8"
    >
      <div className="relative">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
          style={{ scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-700">{project.description}</p>
        <div className="flex flex-wrap mt-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <a
            href={project.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline mr-4"
          >
            Source Code
          </a>
          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              Live Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Project: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 p-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-600">Projects</h2>
      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
