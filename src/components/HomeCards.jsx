import { motion } from "framer-motion"

const HomeCards = ({title, src, des}) => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border-2 border-dashed border-gray-700"
    whileHover={{ y: -5, boxShadow: "0 15px 25px -12px rgba(0, 0, 0, 0.5)" }}>
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-md justify-center font-medium text-gray-400 mb-3">
          {title}
        </span>
        <motion.div className="flex flex-col justify-center">
          <img src={src} className="rounded-md mb-2 border border-gray-600 border-dotted"/>
          <p className="text-sm text-gray-400">{des}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomeCards