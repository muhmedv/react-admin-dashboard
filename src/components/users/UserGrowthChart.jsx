import { motion } from "framer-motion"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const userGrowthData = [
  { month: "Jan", users: 1500 },
  { month: "Feb", users: 3000 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 3500 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 6000 },
];

const UserGrowthChart = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">User Growth</h2>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray='3 3' stroke="#374151" />
              <XAxis dataKey='month' stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
                itemStyle={{ color: "#e5e7eb" }}
              />
              <Line 
              type='monotone'
              dataKey='users'
              stroke="#85bcf6"
              strokeWidth={2}
              dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
              activeDot={{ r:8 }}
              />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserGrowthChart