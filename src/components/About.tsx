import React from 'react'
import { motion } from 'framer-motion'
const About: React.FC = () => {
  const scrollY = window.scrollY
  return (
    <motion.div className='absolute bottom-[-75%] h-screen w-[100%] flex justify-center items-end'>
        <motion.div
          className={ 'bg-transparent  h-[75%] w-[75%]  rounded-lg  overflow-hidden flex flex-col shadow-xl drop-shadow-lg  md:flex-row' }
          initial={{ scale: scrollY > 50 ? 1 : 0.85 }}
          animate={{ scale: scrollY > 50 ? 1 : 0.85, transition: { duration: 1.3 } }}
          whileHover={{ scale: 1.01, boxShadow: '1px 1px #1de4dc', transition: { type: 'keyframes', duration: 1.4 } }}

        >
          <motion.div className=" md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-black uppercase relative bottom-10 left-10 font-Zilla text-cyan-600">About Me</h2>
            <p className="text-base font sans text-cyan-700 m-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </motion.div>
          <div className="md:w-1/2">
            <motion.img
              src="https://via.placeholder.com/600x400"
              alt="About Me"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.02, rotate: 12 }}
              transition={{ type: 'spring', stiffness: 1000 }}
            />
          </div>
        </motion.div>
    </motion.div>
  )
}

export default About
