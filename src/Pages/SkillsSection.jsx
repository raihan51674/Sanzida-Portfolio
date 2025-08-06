import { motion } from 'framer-motion';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiNetlify, SiVercel
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-blue-400" />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
    gradient: "from-blue-700/30 to-blue-900/20"
  },
  {
    title: "Tools & Platforms",
    icon: <FaGitAlt className="text-red-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
    gradient: "from-purple-700/30 to-purple-900/20"
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Animated floating circles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        ></div>
      ))}

      {/* Rotating background orbs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-blue-500/5 rounded-full border border-blue-400/10 blur-3xl"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        className="absolute -left-64 -bottom-64 w-[700px] h-[700px] bg-purple-500/5 rounded-full border border-purple-400/10 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
            🚀 Technical Skills
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Cutting-edge tools and technologies I use to build stunning, responsive, and scalable web experiences.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${category.gradient} rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_35px_rgba(59,130,246,0.15)] hover:shadow-[0_0_55px_rgba(59,130,246,0.45)] transition-all backdrop-blur-xl hover:border-blue-500/40`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.08, x: 5 }}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all cursor-default shadow-sm"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <p className="font-medium">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-200">
             🏆 Achievements & Milestones
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Physics Poster Context', 'Math Olympiad', 'Project Showcase AIUB-Fest',]
              .map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all border border-white/5 shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
