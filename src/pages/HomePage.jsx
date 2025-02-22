import { ArrowLeft } from "lucide-react"
import Header from "../components/common/Header"
import Footer from "../components/Footer"
import HomeCards from "../components/HomeCards"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
  <div className="w-screen h-screen overflow-auto z-10">
    <div className="flex-1 relative">
      <Header title="Home" />
    </div>
    <main className="max-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
      
        {/* STATS */}
        <motion.div
        className="flex justify-center mt-5"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5 }}
        >
          <p className="mb-3 text-2xl font-mono">
            DASHBOARDS
          </p>
        </motion.div>

        <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8 mt-5"
        initial={{ opacity:0, x:20 }}
        animate={{ opacity:1, x:0 }}
        transition={{ duration:0.5 }}
        >
          <HomeCards title="Overview Dashboard" src="/overview.png" des="Get a summarized view of everything you need to track your progress"/>
          <HomeCards title="Products Dashboard" src="/products.png" des="Browse, manage, and update your product inventory with full control"/>
          <HomeCards title="Users Dashboard" src="/users.png" des="View and manage all user accounts, permissions, and activity logs"/>
          <HomeCards title="Sales Dashboard" src="/sales.png" des="Track revenue, analyze trends, and optimize your sales performance"/>
          <HomeCards title="Orders Dashboard" src="/orders.png" des="Monitor, process, and fulfill customer orders with real-time updates"/>
          <HomeCards title="Analytics Dashboard" src="/analytics.png" des="Gain powerful insights and visualize key metrics with ease now"/>
        </motion.div>

        <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1 mb-8"
        initial={{ opacity:0, x:-20 }}
        animate={{ opacity:1, x:0 }}
        transition={{ duration:0.5 }}
        >
          <div>
          <button
          onClick={handleClick}
          className="transition-all duration-300 bg-gray-600 hover:bg-gray-900 text-gray-950 hover:text-gray-200 font-mono font-semibold px-4 py-1.5 text-3sm rounded-xl shadow-lg flex justify-center items-center gap-2 cursor-pointer">
          <ArrowLeft size={18} />
            Back
          </button>
          </div>
          
        </motion.div>

    </main>
    <Footer />
  </div>
  )
}

export default HomePage