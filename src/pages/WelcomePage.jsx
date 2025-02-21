import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-t from-gray-950 to-gray-800 text-white p-6 z-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center z-20"
      >
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-4sm text-gray-400 mb-6 font-extrabold">Master Your Data, Own Your Success!</p>
      </motion.div>

      <div 
      className='absolute opacity-2 w-screen h-screen flex items-center justify-center overflow-hidden z-0'>
        <img src="./src/assets/react.svg" className='w-4xl'/>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='z-20 flex gap-5'
      >
        <a href="https://github.com/muhmedv" target='_blank'><button 
        className="transition-all duration-300 border-3 border-sky-800 hover:bg-sky-950 hover:border-sky-950 text-gray-200 font-mono font-semibold px-4 py-1.5 text-3sm rounded-xl shadow-lg flex items-center gap-2 cursor-pointer">
          My GitHub
        </button></a>
        <button 
        onClick={handleClick}
        className="transition-all duration-300 bg-sky-800 hover:bg-sky-950 text-gray-200 font-mono font-semibold px-4 py-1.5 text-3sm rounded-xl shadow-lg flex items-center gap-2 cursor-pointer">
          Get Startted
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  )
}

export default WelcomePage