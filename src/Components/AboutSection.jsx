import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaCode,
  FaRocket
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

const AboutSection = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 90 },
    { name: 'React', icon: <SiReact className="text-blue-400" />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 80 },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, level: 75 },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* ✨ Animated Spotlight Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_70%)] animate-pulse"></div>

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] animate-gradient-x">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto" />
          <div className="pt-6">
            <h3 className="text-3xl font-semibold">
              I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Shanzida Islam Shopna</span>
            </h3>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
              A passionate{" "}
              <span className="text-blue-400 font-semibold">
                <Typewriter
                  words={[
                    'Frontend Developer',
                    'JavaScript Specialist',
                    'React Enthusiast',
                    'UI/UX Lover'
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>{" "}
              dedicated to building futuristic, user-friendly, and visually stunning web applications.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image with Floating Glow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ rotateY: 8, rotateX: 4 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.5)] border-2 border-blue-500/20"
              >
                <img
                  src="https://i.ibb.co.com/NnTBdN55/Shanzida.jpg"
                  alt="Shanzida Islam"
                  className="w-full max-w-md object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-gray-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-700/50"
              >
                <SiReact className="text-blue-400 text-2xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-gray-800/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-700/50"
              >
                <SiJavascript className="text-yellow-400 text-2xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Feature Cards with Neon Glow */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <FaBrain className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
                  <p className="text-gray-300">
                    Strong logical thinking and technical expertise allow me to bridge design and development, creating optimized solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <FaCode className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Clean Code Advocate</h4>
                  <p className="text-gray-300">
                    Writing maintainable, scalable, and efficient code using modern frameworks and best practices is my top priority.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-5 bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <FaRocket className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Continuous Learner</h4>
                  <p className="text-gray-300">
                    Passionate about innovation, UI/UX design, and new technologies, always striving to enhance my skills and deliver better experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
