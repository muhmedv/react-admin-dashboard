import StatCards from "../components/common/StatCards"
import Header from "../components/common/Header"
import Footer from "../components/Footer"

import ProductTable from "../components/products/ProductTable"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesTrendChart from "../components/products/SalesTrendChart"

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="Products" />
      
      <main className="max-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
          {/* STATS */}
          <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          >
            <StatCards name="Total Products" icon={Package} value="1234" color="#6366f1" />
            <StatCards name="Top Selling" icon={TrendingUp} value="89" color="#10b981" />
            <StatCards name="Low Stock" icon={AlertTriangle} value="23" color="#f59e0b" />
            <StatCards name="Total Revenue" icon={DollarSign} value="$543,210" color="#ef4444" />
          </motion.div>

          <ProductTable />

          {/* CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SalesTrendChart />
            <CategoryDistributionChart />
            
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductsPage