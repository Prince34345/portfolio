import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const Introduction: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-white absolute top-[70%] w-full h-full flex justify-center items-center flex-col bg-transparent"
    >
      <h1 className="text-6xl font-bold text-cyan-100">Hi, I'm <span className='text-cyan-500'>Priyanshu</span></h1>
      <p className="mt-4  text-center text-xl">
        I am a regular-going student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}

        className="px-6 font-Playfair  py-3 mt-6 text-xl font-semibold text-white bg-gradient-to-r from-violet-500 via-blue-500 to-navy-500 rounded-lg shadow-lg"
      >
        Download CV
      </motion.button>
    </motion.div>
  )
}
interface Props {
  isVisible: boolean
}
const HeroSection: React.FC<Props> = ({ isVisible }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1100], [0, -1100])
  return <>
    <motion.img style={{ y }} src={require('../assets/logo.jpg')} className={`w-full ${!isVisible ? 'blur-sm' : ''} flex-1 resize`} />
  </>
}

const WelcomeScreen: React.FC = () => {
  return <>
    <div className="absolute top-[20%] flex items-center justify-center h-[50%] w-[100%] space-x-10 overflow-hidden">
      {/* Background Animation */}
      {/* <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-neutral-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      /> */}

      {/* Welcome Message */}
      <motion.div
        className="relative z-10 text-center text-white p-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-5xl font-bold tracking-[.5rem] uppercase font-Playfair "
          initial={{ scale: 0.5 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="mt-4 text-lg font-Quantico"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          You can Click on this Mouse Hover Icon to See My Project
        </motion.p>
        <div className="flex items-center justify-center">
          <motion.div
            className="p-1 bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-500 rounded-lg shadow-lg text-white text-center"
            whileHover={{ scale: 1.1, rotate: 180, boxShadow: '0px 0px 20px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <h1 className="text-xl font-black uppercase flex justify-center items-center">Click on Me <FaArrowUp className='m-1'/> </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-cyan-500 opacity-30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 opacity-30 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-30 rounded-full"
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
        <Introduction />
        {isVisible ? <WelcomeScreen /> : <></>}
      </div>
    </>
  )
}

export default Home
