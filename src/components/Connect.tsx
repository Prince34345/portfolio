import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FocusedState {
  name: boolean
  email: boolean
  subject: boolean
  message: boolean
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [focused, setFocused] = useState<FocusedState>({
    name: false,
    email: false,
    subject: false,
    message: false
  })
  const handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFocus: (Name: keyof FormData) => void = (Name) => {
    setFocused({ ...focused, [Name]: true })
  }

  const handleBlur: (Name: keyof FormData) => void = (Name) => {
    if (formData[Name] !== '') {
      setFocused({ ...focused, [Name]: false })
    }
  }

  const floatingLabelVariants = {
    initial: { y: 0, scale: 1, color: '#737373' },
    focused: { y: -20, scale: 0.8, color: '#06b6d4' }
  }
  const isNonEmptyString: (value: any) => boolean = (value) => value !== null && value !== ''
  return (
    <motion.div id='connect' className="min-h-screen bg-neutral-700 p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-cyan-600 font-Merienda ">Connect with me</h2>
      <motion.div
        className="w-full max-w-2xl bg-transparent shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, boxShadow: '15px 15px 20px rgb(0, 255, 255)' }}
        transition={{ duration: 1.2, type: 'keyframes', delay: 0.2 }}
      >
        <form onSubmit={(e) => { e.preventDefault(); console.log(formData) }} className="space-y-6">
          {['name', 'email', 'subject'].map((field) => (
            <div key={field} className="relative">
              <motion.label
                className="absolute left-4 top-4 px-1 pointer-events-none"
                htmlFor={field}
                variants={floatingLabelVariants}
                initial="initial"
                animate={isNonEmptyString(focused[field as keyof FocusedState] || formData[field as keyof FormData]) ? 'focused' : 'initial'}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </motion.label>
              <motion.input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                id={field}
                value={formData[field as keyof FormData]}
                onChange={(e) => { handleChange(e) }}
                onFocus={() => { handleFocus(field as keyof FormData) }}
                onBlur={() => { handleBlur(field as keyof FormData) }}
                className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
          ))}
          <div className="relative">
            <motion.label
              className="absolute left-4 top-4  px-1 pointer-events-none"
              htmlFor="message"
              variants={floatingLabelVariants}
              initial="initial"
              animate={isNonEmptyString(focused.message || formData.message) ? 'focused' : 'initial'}
            >
              Message
            </motion.label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={(e) => { handleChange(e) }}
              onFocus={() => { handleFocus('message') } }
              onBlur={() => { handleBlur('message') } }
              rows={5}
              className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full p-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default ContactSection
