import { NavLink } from 'react-router-dom';
import { 
  HiOutlineHome, 
  HiOutlineChip, 
  HiOutlineAcademicCap, 
  HiOutlineBriefcase, 
  HiOutlineChatAlt2,
  HiOutlineSparkles
} from 'react-icons/hi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'py-1' : 'py-2'}`}>
      <div className={`flex justify-center rounded-xl px-2 py-2 ${
        scrolled 
          ? 'bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-2xl border border-gray-600/30 shadow-2xl shadow-black/40' 
          : 'bg-gradient-to-br from-gray-900/60 to-gray-800/70 backdrop-blur-xl border border-gray-700/40 shadow-xl shadow-black/30'
      }`}>
        <ul className="flex items-center space-x-1 md:space-x-2">
          <NavItem 
            to="/" 
            icon={<HiOutlineHome className="w-5 h-5" />} 
            text="Home" 
            hoverState={[activeHover, setActiveHover]}
            index={0}
          />
          <NavItem 
            to="/skills" 
            icon={<HiOutlineChip className="w-5 h-5" />} 
            text="Skills" 
            hoverState={[activeHover, setActiveHover]}
            index={1}
          />
          <NavItem 
            to="/education" 
            icon={<HiOutlineAcademicCap className="w-5 h-5" />} 
            text="Education" 
            hoverState={[activeHover, setActiveHover]}
            index={2}
          />
          <NavItem 
            to="/projects" 
            icon={<HiOutlineBriefcase className="w-5 h-5" />} 
            text="Projects" 
            hoverState={[activeHover, setActiveHover]}
            index={3}
          />
          <NavItem 
            to="/contact" 
            icon={<HiOutlineChatAlt2 className="w-5 h-5" />} 
            text="Contact" 
            hoverState={[activeHover, setActiveHover]}
            index={4}
          />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, text, hoverState, index }) => {
  const [activeHover, setActiveHover] = hoverState;
  const isHovered = activeHover === index;
  
  return (
    <li 
      onMouseEnter={() => setActiveHover(index)}
      onMouseLeave={() => setActiveHover(null)}
      className="relative"
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium group ${
            isActive
              ? 'text-white bg-gradient-to-r from-indigo-500/30 to-purple-500/30 shadow-inner backdrop-blur-sm'
              : 'text-gray-300 hover:text-white'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {/* Animated background on hover */}
            <span className={`absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : ''
            }`}></span>
            
            {/* Icon with hover effect */}
            <span className={`relative z-10 transition-transform duration-300 ${
              isHovered ? 'text-purple-300 transform scale-110' : ''
            }`}>
              {icon}
            </span>
            
            {/* Text with subtle slide-in effect */}
            <span className="hidden md:inline-block text-sm relative z-10">
              <span className={`block transition-all duration-300 ${
                isHovered ? 'translate-x-1 text-purple-200' : ''
              }`}>
                {text}
              </span>
            </span>
            
            {/* Active indicator (sparkle effect) */}
            {isActive && (
              <span className="absolute -top-1 -right-1 text-yellow-300 opacity-70 animate-pulse">
                <HiOutlineSparkles className="w-3 h-3" />
              </span>
            )}
          </>
        )}
      </NavLink>
    </li>
  );
};

export default Navbar;