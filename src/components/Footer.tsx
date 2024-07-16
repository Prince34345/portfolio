import React from 'react'
import { motion } from 'framer-motion'
import { GiSplitCross } from 'react-icons/gi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <motion.footer className="bg-gradient-to-r from-neutral-700 via-cyan-500 to-neutral-700 text-white py-8   z-[50]">
      <div className=" flex justify-between items-center  flex-row">
          {/* Logo */}
          <motion.div
            className="flex justify-center items-center w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GiSplitCross size={35} />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center  w-1/3 flex justify-center items-center flex-col"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              <p className='font-Quantico'>1234 Street Name, City, State, 56789</p>
              <p className='font-Quantico'>Email: info@yourdomain.com</p>
              <p className='font-Quantico'>Phone: (123) 456-7890</p>
            </motion.div>
          {/* Social Media Links */}
          <motion.div
            className="space-x-4 flex justify-center items-center  w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-gray-300" size={20}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-gray-300" size={20}/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-gray-300" size={20}/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-gray-300" size={20}/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-300" size={20}/>
            </a>
          </motion.div>
        </div>
        <motion.div className='mt-5'>
          <hr />
        </motion.div>
        <motion.div className='flex justify-center items-center mt-5'>
        <p className='font-Quantico'>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </motion.div>
    </motion.footer>
  )
}
export default Footer
