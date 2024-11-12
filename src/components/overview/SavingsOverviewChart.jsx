import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const savingsData = [
	{ name: "Jul", savings: 4200 },
	{ name: "Aug", savings: 3800 },
	{ name: "Sep", savings: 5100 },
	{ name: "Oct", savings: 4600 },
	{ name: "Nov", savings: 5400 },
	{ name: "Dec", savings: 7200 },
	{ name: "Jan", savings: 6100 },
	{ name: "Feb", savings: 5900 },
	{ name: "Mar", savings: 6800 },
	{ name: "Apr", savings: 6300 },
	{ name: "May", savings: 7100 },
	{ name: "Jun", savings: 7500 },
];

const SavingsOverviewChart = () => {
	return (
		<motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-800"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className="text-lg font-medium mb-4 text-gray-100">Contributions Overview</h2>

			<div className="h-80">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={savingsData}>
						<CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
						<XAxis dataKey="name" stroke="#9ca3af" />
						<YAxis stroke="#9ca3af" />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type="monotone"
							dataKey="savings"
							stroke="#6366F1"
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SavingsOverviewChart;

