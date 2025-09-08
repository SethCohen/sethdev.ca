import React from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

/**
 * Footer with contact and copyright info.
 */
const Footer: React.FC = () => (
  <footer
    id="contact"
    aria-label="Contact and copyright information"
    className="px-6 py-8 text-center"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="mb-4">
        <Mail className="mr-2 inline" size={18} aria-hidden="true" />
        <br />
        <a
          href="mailto:sethcohen.dev@gmail.com"
          className="underline"
          aria-label="Send email to Seth"
        >
          sethcohen.dev@gmail.com
        </a>
      </p>
      <p className="text-sm">© 2025 Seth Dev. All rights reserved.</p>
    </motion.div>
  </footer>
)

export default Footer
