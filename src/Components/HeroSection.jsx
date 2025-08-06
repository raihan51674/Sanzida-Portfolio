import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Copy, Check, Code2, Sparkles } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";

const roles = ["Frontend Developer", "JavaScript Developer"];

const codeSnippet = `// Professional Profile
const developer = {
  name: 'Shanzida Islam Shopna',
  title: 'Junior Frontend Developer',
  expertise: ['HTML', 'CSS', 'JavaScript', 'Tailwindcss'],
  availability: 'Open for opportunities',
  contact: 'Shanzidashopna2017@gmail.com',
};

console.log('Ready to build amazing things! 🚀');`;

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/shanzidaIslam", color: "hover:text-gray-300" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
  { icon: FaFacebook, label: "Facebook", href: "#", color: "hover:text-blue-400" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/+8801956486761", color: "hover:text-green-400" },
];

function useTypewriter(words, speed = 100, deleteSpeed = 50, delaySpeed = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, speed, deleteSpeed, delaySpeed]);

  return currentText;
}

function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap z-50">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const typewriterText = useTypewriter(roles);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f1a] text-white">
      {/* Animated Aurora Lights */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-pink-600/10 to-blue-800/20 animate-pulse blur-3xl"></div>

      {/* Spotlight Animation */}
      <div className="absolute -top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.15)_0%,_transparent_70%)] animate-spin-slow"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 text-sm font-medium shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-slate-200">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-[#38bdf8] via-[#c084fc] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.4)] animate-gradient-x">
                Shanzida Islam Shopna
              </span>
            </h1>

            {/* Typewriter Role */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 min-h-[1.2em]">
                {typewriterText}
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }} className="text-blue-400 ml-1">
                  |
                </motion.span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl">
              I craft futuristic, scalable web applications using the latest technologies. My goal is to write clean, high-performing code that leaves a lasting impact on users.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a
                href="/"
                download={"/"}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#ec4899] hover:brightness-125 text-white font-semibold rounded-xl shadow-[0_0_35px_rgba(124,58,237,0.6)] transition-all duration-500 text-lg hover:scale-110 border border-transparent hover:border-pink-400/30"
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Tooltip key={index} content={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`inline-flex items-center justify-center w-12 h-12 bg-slate-900/60 border border-slate-700/50 text-slate-400 ${social.color} rounded-lg transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:text-pink-300`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Floating Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-transform hover:scale-[1.04] hover:shadow-[0_0_80px_rgba(236,72,153,0.4)]">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-mono">profile.js</span>
                  </div>
                </div>

                <button onClick={handleCopyCode} className="flex items-center gap-2 px-3 py-1 text-slate-400 hover:text-white transition-colors rounded hover:bg-slate-700/50">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-sm">Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">Copy</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-slate-950/50">
                <pre className="text-sm lg:text-base font-mono text-slate-300 leading-relaxed overflow-x-auto">
                  <code className="language-javascript">{codeSnippet}</code>
                </pre>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 py-3 bg-slate-800/30 border-t border-slate-700/50 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>ES6 JavaScript</span>
                </div>
                <div>Lines: 12 | Characters: 284</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
