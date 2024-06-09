import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

interface Plan {
  details: string;
  energyCharge: string;
  baseCharge: string;
}

const ChartBar: React.FC = () => {
  const [usage, setUsage] = useState<number>(500);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/plans.json")
      .then((response) => response.json())
      .then((data) => setPlans(data.plans))
      .catch((error) => console.error("Error loading plans:", error));
  }, []);

  const calculateCosts = () => {
    let planACost = 0;
    let planBCost = 0;

    plans.forEach((plan) => {
      const energyCost = parseFloat(plan.energyCharge) * usage;
      const baseCharge =
        plan.baseCharge === "None" ? 0 : parseFloat(plan.baseCharge);
      const totalCost = energyCost + baseCharge;

      if (plan.details === "Plan A") {
        planACost = totalCost;
      } else if (plan.details === "Plan B") {
        planBCost = totalCost;
      }
    });

    setChartData([{ name: "Cost", "Plan A": planACost, "Plan B": planBCost }]);
  };

  const formatTickItem = (tickItem: any) => `$${tickItem}`;

  return (
    <div className="p-4">
      <div className="flex items-center mb-4 gap-20">
        <button>
          <p className="bg-slate-100 hover:bg-[#00B49D] hover:text-white  p-2 mt-3 rounded-full">USAGE</p>
        </button>
        <input
          type="number"
          value={usage}
          onChange={(e) => setUsage(Number(e.target.value))}
          className="mr-4 p-2 border rounded-md shadow-sm text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Usage in kWh"
        />
        <button
          onClick={calculateCosts}
          className="p-2 bbg-slate-100 hover:bg-[#00B49D] hover:text-white  mt-3 rounded-full"
        >
          Calculate
        </button>
      </div>
      <BarChart width={1000} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatTickItem} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Plan A"
          fill="#00B49D"
          barSize={150}
          radius={[15, 15, 0, 0]}
        />
        <Bar
          dataKey="Plan B"
          fill="#D5EEEA"
          barSize={150}
          radius={[15, 15, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default ChartBar;
