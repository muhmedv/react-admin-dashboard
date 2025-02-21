import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCards from "../components/common/StatCards"

import SalesOverviewChart from "../components/overview/SalesOverviewChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesChannelChart from "../components/overview/SalesChannelChart"

import Footer from "../components/Footer"

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        {/* STATS */}
        <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5 }}
        >
          <StatCards name="Total Sales" icon={Zap} value="$12,345" color="#6366f1" />
          <StatCards name="New Users" icon={Users} value="1,234" color="#8b5cf6" />
          <StatCards name="Total Products" icon={ShoppingBag} value="567" color="#ec4899" />
          <StatCards name="Conversion Rate" icon={BarChart2} value="12.5%" color="#10b981" />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default OverviewPage