import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import About from './About'
import Project from './Project'
interface Props {
  isVisible: boolean
}
const HeroSection: React.FC<Props> = ({ isVisible }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1100], [0, -1100])
  return <>
    <motion.img style={{ y }} src={require('../assets/logo.jpg')} className={`w-full  ${!isVisible ? 'blur-sm' : ''}  `} />
  </>
}

const WelcomeScreenIntro: React.FC = () => {
  return <>
    <div className="sm:absolute sm:top-[20vw]  flex flex-col sm:flex-row items-center justify-center h-[50%] w-full overflow-hidden">
      <motion.div
        className="relative z-10 text-center text-white p-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className=" sm:block hidden md:text-[2.4vw] font-bold tracking-[.5rem] uppercase font-Playfair "
          initial={{ scale: 0.5 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="mt-10 font-Quantico text-4xl font-bold text-cyan-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I'm <span className='text-neutral-700 textShadow '>{'Priyanshu'}</span>
        </motion.p>
        <div className="flex items-center justify-center flex-col">
          <p className="mt-4 text-center text-[1.75vw]">
            I am a regular-going student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

            className="px-6 font-Playfair  py-3 mt-6 text-xl font-semibold text-white bg-gradient-to-r from-violet-500 via-blue-500 to-navy-500 rounded-lg shadow-lg"
          >
            Download CV
          </motion.button>
        </div>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="absolute lg:visible invisible top-0 left-0 w-40 h-40 bg-cyan-500 opacity-30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className="absolute lg:visible invisible bottom-0 right-0 w-60 h-60 bg-purple-500 opacity-30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.div
        className="absolute lg:visible invisible top-0 right-0 w-24 h-24 bg-blue-500 opacity-30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  </>
}
const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const handleScroll: () => void = () => {
      const scrollY = window.scrollY
      // Adjust the threshold value according to when you want to hide the component
      if (scrollY > 250) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div className='bg-neutral-700  w-full h-full '>
        <HeroSection isVisible={isVisible} />
        {isVisible ? <WelcomeScreenIntro /> : <></>}
      </div>
      <About/>
      <Project/>
    </>
  )
}

export default Home
