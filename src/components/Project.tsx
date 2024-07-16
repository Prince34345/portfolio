import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { projects, type ProjectType } from '../constant/constants'

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  const controls = useAnimation()
  const cardRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const handleScroll: () => void = () => {
    if (cardRef.current !== null) {
      const rect = cardRef.current.getBoundingClientRect()
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0
      setIsInView(inView)
    }
  }
  const handleAnimation: () => Promise<void> = async () => {
    try {
      if (isInView) {
        await controls.start({ opacity: 1, y: 0 })
      }
    } catch (err) {
      throw new Error('message')
    }
  }
  useEffect(() => {
    handleScroll() // Check view on mount
    window.addEventListener('scroll', handleScroll)
    handleAnimation() as unknown
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [isInView, controls])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="shadow-2xl rounded-lg overflow-hidden mb-8"
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
        <h3 className="text-2xl font-bold mb-2 font-Quantico capitalize text-cyan-200 ">{project.name}</h3>
        <p className="text-cyan-100 font-thin font-mono">{project.description}</p>
        <div className="flex flex-wrap mt-4 textShadow">
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
          {(project.projectLink !== null) && (
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
  )
}

const Project: React.FC = () => {
  return (
    <motion.div id='projects' className="min-h-screen bg-neutral-700 p-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-600  font-Merienda">Projects</h2>
      <div className="w-full max-w-4xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  )
}

export default Project
