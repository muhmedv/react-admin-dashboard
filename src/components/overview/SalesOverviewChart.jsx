import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";



const salesData = [
  { name: "Jan", sales: 2000 },
  { name: "Feb", sales: 4900 },
  { name: "Mar", sales: 1800 },
  { name: "Apr", sales: 3300 },
  { name: "May", sales: 5100 },
  { name: "Jun", sales: 7000 },
  { name: "Jul", sales: 4200 },
  { name: "Aug", sales: 1800 },
  { name: "Sep", sales: 5100 },
  { name: "Oct", sales: 4600 },
  { name: "Nov", sales: 5400 },
  { name: "Dec", sales: 7200 },
];


function SalesOverviewChart() {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
      <h2
      className="text-lg font-medium mb-4 text-gray-100"
      >
        Slaes Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='3 3' stroke="#4b5563"/>
            <XAxis dataKey={"name"} stroke="#9ca3af"/>
            <YAxis stroke="#9ca3af"/>
            <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4b5563",
            }}
            itemStyle={{ color: "#e5e7eb" }}
            />
              <Line 
              type="monotone"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", strokeWidth: 2, r:6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
              />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  )
}

export default SalesOverviewChart