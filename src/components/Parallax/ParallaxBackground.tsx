import { motion } from 'framer-motion'

/**
 * Animated parallax background using Framer Motion.
 */
const ParallaxBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
    <motion.div
      className="absolute top-0 left-0 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute rounded-full not-visited:blur-2xl"
      style={{ width: 400, height: 400, top: '10%', left: '-10%' }}
      animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
      transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute rounded-full blur-2xl"
      style={{ width: 300, height: 300, bottom: '10%', right: '-8%' }}
      animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
      transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: 500,
        height: 500,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 30, ease: 'easeInOut' }}
    />
  </div>
)

export default ParallaxBackground
