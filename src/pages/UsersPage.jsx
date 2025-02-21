import { UserCheck, UserIcon, UserPlus, UserX } from "lucide-react"
import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCards from "../components/common/StatCards"
import Footer from "../components/Footer"

import UserTable from "../components/users/UserTable"
import UserActivityHeatmap from "../components/users/UserActivityHeatmap"
import UserDemographicsChart from "../components/users/UserDemographicsChart"
import UserGrowthChart from "../components/users/UserGrowthChart"

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="Users" />
      
      <main className="max-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
          {/* STATS */}
          <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          >
            <StatCards name="Total Users" icon={UserIcon} value={userStats.totalUsers.toLocaleString()} color="#6366f1" />
            <StatCards name="New Users Today" icon={UserPlus} value={userStats.newUsersToday} color="#10b981" />
            <StatCards name="Active Users" icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color="#f59e0b" />
            <StatCards name="Churn Rate" icon={UserX} value={userStats.churnRate} color="#ef4444" />
          </motion.div>
          <UserTable />

          {/* USER CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <UserGrowthChart />
            <UserActivityHeatmap />
            <UserDemographicsChart />
          </div>

          </main>
          <Footer />
          </div>
  )
}

export default UsersPage