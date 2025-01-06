import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Arkanul Adelis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          WFH Programmer | IT Enthusiast | Creative Problem Solver
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 md:space-y-0 md:space-x-4"
        >
          <motion.a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out inline-flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Lihat Portofolio</span>
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              }}
            >
              <FiArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Saya
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-400 mb-4">Temukan saya di:</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiTwitter className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex flex-col items-center"
        >
          <span className="mb-2">Scroll ke bawah</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowRight className="w-6 h-6 transform rotate-90" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
