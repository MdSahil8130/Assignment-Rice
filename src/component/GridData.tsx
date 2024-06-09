import React, { useEffect, useState } from "react";

interface Plan {
  details: string;
  planType: string;
  gimmick: string;
  energyCharge: string;
  rates: {
    "500kWh": string;
    "1000kWh": string;
    "2000kWh": string;
  };
  baseCharge: string;
  usageFee: string;
  etf: string;
  billCredit: string;
}
const GridData = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetch("/plans.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPlans(data.plans))
      .catch((error) => console.error("Error loading plans:", error));
  }, []);

  return (
    <div className="mt-20 mb-20 overflow-x-auto">
      <table className="min-w-full border-collapse block md:table  ">
        <thead className="block md:table-header-group">
          <tr className="border-b block md:table-row">
            <th className="p-2 text-left block md:table-cell">Details</th>
            <th className="p-2 text-left block md:table-cell">Plan Type</th>
            <th className="p-2 text-left block md:table-cell">Gimmick</th>
            <th className="p-2 text-left block md:table-cell">Energy Charge</th>
            <th className="p-2 text-left block md:table-cell">500 kWh</th>
            <th className="p-2 text-left block md:table-cell">1000 kWh</th>
            <th className="p-2 text-left block md:table-cell">2000 kWh</th>
            <th className="p-2 text-left block md:table-cell">Base Charge</th>
            <th className="p-2 text-left block md:table-cell">Usage Fee</th>
            <th className="p-2 text-left block md:table-cell">ETF</th>
            <th className="p-2 text-left block md:table-cell">Bill Credit</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {plans.map((plan, index) => (
            <tr key={index} className="border-b block md:table-row border">
              <td className="p-2 block md:table-cell border">{plan.details}</td>
              <td className="p-2 block md:table-cell border">
                {plan.planType}
              </td>
              <td className="p-2 block md:table-cell border">{plan.gimmick}</td>
              <td className="p-2 block md:table-cell border">
                {plan.energyCharge}
              </td>
              <td className="p-2 block md:table-cell border">
                {plan.rates["500kWh"]}
              </td>
              <td className="p-2 block md:table-cell border">
                {plan.rates["1000kWh"]}
              </td>
              <td className="p-2 block md:table-cell border">
                {plan.rates["2000kWh"]}
              </td>
              <td className="p-2 block md:table-cell border">
                {plan.baseCharge}
              </td>
              <td className="p-2 block md:table-cell border">
                {plan.usageFee}
              </td>
              <td className="p-2 block md:table-cell border">{plan.etf}</td>
              <td className="p-2 block md:table-cell border">
                {plan.billCredit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridData;
