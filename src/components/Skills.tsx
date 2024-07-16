import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../constant/constants'

const SkillCard: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <motion.div
      initial={{ scale: 1.1, boxShadow: '0px 0px 10px rgb(0, 255, 255)' }}
      whileHover={{ scale: 1, boxShadow: 'none' }}
      className="p-4 bg-transparent uppercase font-mono smallTextShadow text-cyan-500 rounded-lg m-4 shadow-lg cursor-pointer"
    >
      {skill}
    </motion.div>
  )
}
const Skills: React.FC = () => {
  return (
    <motion.div id='skills' className=" h-[75vh] bg-neutral-700 p-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-600 font-Merienda">Skills</h2>
      <div className="flex flex-wrap justify-center max-w-4xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
