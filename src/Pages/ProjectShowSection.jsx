import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiReactrouter, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Travel Agency',
    desc: 'A sleek travel booking platform with event discovery, reservations, and user authentication for seamless travel planning.',
    image: "https://i.ibb.co.com/VY7xzkgY/travel2.png",
    github: 'https://github.com/shanzidaIslam',
    live: 'https://raihan51674.github.io/Travel-Agency/',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    name: 'MediCare',
    desc: 'Modern medical service platform featuring doctor profiles, responsive design, and smooth navigation using React and Tailwind.',
    image: "https://i.ibb.co.com/KcGq4kzh/hostpital-6.png",
    github: 'https://github.com/shanzidaIslam',
    live: 'https://raihan51674.github.io/Hospital/',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
];

const ProjectShowSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-28 overflow-hidden"
    >
      {/* ✨ Animated Background */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        ></div>
      ))}

      <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse"
        >
          🚀 Featured Projects
        </motion.h2>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-3 shadow-lg" />
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
          A curated selection of my top projects, built with cutting-edge technologies and elegant UI/UX.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-28 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-10 md:gap-14 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:shadow-[0_0_50px_rgba(59,130,246,0.45)] transition-all duration-500`}
          >
            {/* Image Preview */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:shadow-blue-500/40 transition-all"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Project Details */}
            <div className="flex-1 space-y-6 text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                {project.name}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(({ name, icon }, i) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-blue-500/20 border border-white/20 rounded-lg shadow-sm font-medium transition-all text-sm md:text-base"
                  >
                    <span className="text-lg md:text-xl">{icon}</span> {name}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black/70 hover:bg-black transition border border-white/30 text-sm md:text-base shadow-md font-semibold"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:opacity-90 transition text-sm md:text-base font-semibold shadow-md"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowSection;
