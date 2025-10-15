"use client";

import { Container, TrendingUp, DollarSign, Ship } from "lucide-react";

export default function ExportAnalytics() {
  const containerAnalytics = [
    { 
      id: "CNT-001", 
      destination: "Rotterdam, NL", 
      weight: 19.8, 
      revenue: 185000, 
      cost: 142000, 
      profit: 43000, 
      margin: 23.2,
      status: "shipped" 
    },
    { 
      id: "CNT-002", 
      destination: "Hamburg, DE", 
      weight: 20.0, 
      revenue: 192000, 
      cost: 138000, 
      profit: 54000, 
      margin: 28.1,
      status: "shipped" 
    },
    { 
      id: "CNT-003", 
      destination: "Barcelona, ES", 
      weight: 19.5, 
      revenue: 178000, 
      cost: 145000, 
      profit: 33000, 
      margin: 18.5,
      status: "loading" 
    },
    { 
      id: "CNT-004", 
      destination: "Antwerp, BE", 
      weight: 20.0, 
      revenue: 195000, 
      cost: 135000, 
      profit: 60000, 
      margin: 30.8,
      status: "loading" 
    },
    { 
      id: "CNT-005", 
      destination: "Le Havre, FR", 
      weight: 19.7, 
      revenue: 188000, 
      cost: 140000, 
      profit: 48000, 
      margin: 25.5,
      status: "planned" 
    },
  ];

  const destinationPerformance = [
    { country: "Netherlands", containers: 8, avgRevenue: 187500, avgProfit: 45000, margin: 24.0 },
    { country: "Germany", containers: 6, avgRevenue: 190000, avgProfit: 52000, margin: 27.4 },
    { country: "Spain", containers: 5, avgRevenue: 175000, avgProfit: 32000, margin: 18.3 },
    { country: "Belgium", containers: 4, avgRevenue: 193000, avgProfit: 58000, margin: 30.1 },
    { country: "France", containers: 3, avgRevenue: 186000, avgProfit: 46000, margin: 24.7 },
  ];

  const costBreakdown = [
    { category: "Raw Material", amount: 85000, percentage: 61 },
    { category: "Production", amount: 25000, percentage: 18 },
    { category: "Packaging & Logistics", amount: 18000, percentage: 13 },
    { category: "Freight & Shipping", amount: 8000, percentage: 6 },
    { category: "Insurance & Compliance", amount: 4000, percentage: 2 },
  ];

  const totalRevenue = containerAnalytics.reduce((sum, c) => sum + c.revenue, 0);
  const totalProfit = containerAnalytics.reduce((sum, c) => sum + c.profit, 0);
  const avgMargin = ((totalProfit / totalRevenue) * 100).toFixed(1);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shipped": return "bg-green-100 text-green-800";
      case "loading": return "bg-blue-100 text-blue-800";
      case "planned": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <Container className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm font-medium text-blue-700">Total Containers (MTD)</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{containerAnalytics.length}</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">+2 from last month</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <DollarSign className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm font-medium text-green-700">Total Revenue</p>
          <p className="text-3xl font-bold text-green-900 mt-2">₵{(totalRevenue / 1000).toFixed(0)}K</p>
          <p className="text-sm mt-2 font-semibold text-green-700">From {containerAnalytics.length} containers</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm font-medium text-purple-700">Total Profit</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">₵{(totalProfit / 1000).toFixed(0)}K</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">{avgMargin}% margin</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <Ship className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm font-medium text-orange-700">Avg per Container</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">₵{(totalProfit / containerAnalytics.length / 1000).toFixed(0)}K</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">Profit per container</p>
        </div>
      </div>

      {/* Container Profitability Analysis */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Profitability by Container (20-Ton)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Container ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight (T)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Margin %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {containerAnalytics.map((container, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{container.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{container.destination}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{container.weight}T</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ₵{(container.revenue / 1000).toFixed(0)}K
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    ₵{(container.cost / 1000).toFixed(0)}K
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-bold ${container.profit > 50000 ? 'text-green-600' : 'text-blue-600'}`}>
                      ₵{(container.profit / 1000).toFixed(0)}K
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-semibold mr-2 ${
                        container.margin >= 25 ? 'text-green-600' :
                        container.margin >= 20 ? 'text-blue-600' :
                        'text-yellow-600'
                      }`}>
                        {container.margin}%
                      </span>
                      <div className="w-12 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            container.margin >= 25 ? 'bg-green-500' :
                            container.margin >= 20 ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${(container.margin / 35) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(container.status)}`}>
                      {container.status.charAt(0).toUpperCase() + container.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Destination Performance */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Destination</h3>
        <div className="space-y-4">
          {destinationPerformance.map((dest, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-blue-600 mr-3">#{idx + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{dest.country}</p>
                    <p className="text-xs text-gray-500">{dest.containers} containers shipped</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                  dest.margin >= 25 ? 'bg-green-100 text-green-800' :
                  dest.margin >= 20 ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {dest.margin}% Margin
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500">Avg Revenue</p>
                  <p className="text-lg font-bold text-gray-900">₵{(dest.avgRevenue / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg Profit</p>
                  <p className="text-lg font-bold text-green-600">₵{(dest.avgProfit / 1000).toFixed(0)}K</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Value</p>
                  <p className="text-lg font-bold text-blue-600">₵{(dest.avgRevenue * dest.containers / 1000).toFixed(0)}K</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown per Container (Average)</h3>
        <div className="space-y-3">
          {costBreakdown.map((cost, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{cost.category}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">₵{(cost.amount / 1000).toFixed(0)}K</span>
                      <span className="text-lg font-bold text-gray-900">{cost.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${cost.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t-2 border-gray-300">
          <div className="flex justify-between items-center">
            <span className="text-base font-bold text-gray-900">Total Cost per Container</span>
            <span className="text-2xl font-bold text-gray-900">₵140K</span>
          </div>
        </div>
      </div>

      {/* Optimization Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Container Utilization</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Weight</span>
              <span className="text-sm font-semibold">19.8T / 20T</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Utilization Rate</span>
              <span className="text-sm font-semibold text-green-600">99%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Wasted Capacity</span>
              <span className="text-sm font-semibold text-gray-900">0.2T avg</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Shipping Efficiency</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">On-Time Delivery</span>
              <span className="text-sm font-semibold text-green-600">96%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Transit Time</span>
              <span className="text-sm font-semibold">18 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Claims/Damages</span>
              <span className="text-sm font-semibold text-green-600">0.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

