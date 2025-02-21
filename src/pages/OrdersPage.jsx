import Header from "../components/common/Header"
import StatCards from "../components/common/StatCards";
import Footer from "../components/Footer"

import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";

import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
      <motion.div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.5 }}
        >
          <StatCards name="Total Orders" icon={ShoppingBag} value={orderStats.totalOrders} color="#6366f1" />
          <StatCards name="Pending Orders" icon={Clock} value={orderStats.pendingOrders} color="#f59e0b" />
          <StatCards name="Completed Orders" icon={CheckCircle} value={orderStats.completedOrders} color="#10b981" />
          <StatCards name="Total Revenue" icon={DollarSign} value={orderStats.totalRevenue} color="#ef4444" />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<DailyOrders />
					<OrderDistribution />
				</div>

				<OrdersTable />

      </main>
      <Footer />
    </div>
  )
}

export default OrdersPage