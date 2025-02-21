import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion"

import Header from "../components/common/Header"
import Footer from "../components/Footer"
import StatCards from "../components/common/StatCards"

import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversitionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales" />

      <main className="max-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">

        {/* SALES STATS */}
        <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5 }} 
        > 
          <StatCards name="Total Revenue" icon={DollarSign} value={salesStats.totalRevenue} color="#6366f1" />
          <StatCards name="Avg. Order Value" icon={ShoppingCart} value={salesStats.averageOrderValue} color="#10b981" />
          <StatCards name="Conversion Rate" icon={TrendingUp} value={salesStats.conversitionRate} color="#f59e0b" />
          <StatCards name="Sales Growth" icon={CreditCard} value={salesStats.salesGrowth} color="#ef4444" />
        </motion.div>

        <SalesOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailySalesTrend />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default SalesPage