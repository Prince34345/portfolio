import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header: React.FC = () => {
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Connect']
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="bg-neutral-700    p-4 flex flex-col md:flex-row   justify-between items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="shadow-xl max-md:m-5"
      >
        {/** Social Icons */}
        <div className="flex border-spacing-1 rounded-md items-center space-x-2">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-cyan-500"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl hover:bg-cyan-500 hover:text-white rounded-full p-2" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-cyan-500"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-3xl hover:bg-cyan-500 hover:text-white rounded-full p-2" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-cyan-500"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl hover:bg-cyan-500 hover:text-white rounded-full p-2" />
        </motion.a>
        </div>
      </motion.div>
      <motion.div>
      <nav className="flex flex-col md:flex-row">
        {navItems.map(item => (
          <li className='list-none m-5'>
            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
            <motion.ul
              key={item}
              whileHover={{ scale: 1.1 }} // Hover effect
              className="text-cyan-500 uppercase text-center  font-Zilla font-semibold hover:text-white transition-colors  duration-300"
            >
              {item.split('').map((char, index) => {
                return <motion.span
                key={index}
                className="inline-block"
                whileHover={{ scale: 1.5, color: 'white' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {char}
              </motion.span>
              })}
            </motion.ul>
            </Link>
          </li>
        ))}
      </nav>
      </motion.div>
    </motion.header>
  )
}

export default Header
