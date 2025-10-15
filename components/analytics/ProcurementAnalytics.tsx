"use client";

import { TrendingDown, TrendingUp, MapPin, Package, DollarSign } from "lucide-react";

export default function ProcurementAnalytics() {
  const costAnalysis = [
    { month: "Jan", avgCost: 1920, volume: 450, totalSpent: 864000 },
    { month: "Feb", avgCost: 1880, volume: 520, totalSpent: 977600 },
    { month: "Mar", avgCost: 1850, volume: 580, totalSpent: 1073000 },
    { month: "Apr", avgCost: 1825, volume: 610, totalSpent: 1113250 },
    { month: "May", avgCost: 1850, volume: 590, totalSpent: 1091500 },
    { month: "Jun", avgCost: 1870, volume: 605, totalSpend: 1131350 },
  ];

  const regionPerformance = [
    { region: "Eastern Region", farmers: 342, avgCost: 1820, volume: 1250, quality: 96.5 },
    { region: "Ashanti Region", farmers: 289, avgCost: 1865, volume: 1180, quality: 94.2 },
    { region: "Central Region", farmers: 256, avgCost: 1890, volume: 980, quality: 95.8 },
    { region: "Volta Region", farmers: 215, avgCost: 1875, volume: 890, quality: 93.5 },
    { region: "Western Region", farmers: 182, avgCost: 1905, volume: 760, quality: 92.1 },
  ];

  const topFarmers = [
    { id: "FRM-2341", name: "Kwame Asante", volume: 125, avgCost: 1780, quality: 98.5, reliability: 95 },
    { id: "FRM-1523", name: "Ama Boateng", volume: 118, avgCost: 1795, quality: 97.8, reliability: 98 },
    { id: "FRM-3456", name: "Kofi Mensah", volume: 112, avgCost: 1810, quality: 96.2, reliability: 92 },
    { id: "FRM-0987", name: "Akua Owusu", volume: 108, avgCost: 1825, quality: 95.5, reliability: 94 },
    { id: "FRM-2198", name: "Yaw Adom", volume: 105, avgCost: 1805, quality: 97.1, reliability: 96 },
  ];

  const currentMonthAvg = 1850;
  const previousMonthAvg = 1870;
  const costChange = ((currentMonthAvg - previousMonthAvg) / previousMonthAvg * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <DollarSign className="w-8 h-8 text-green-600" />
            <TrendingDown className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm font-medium text-green-700">Avg Cost per Ton</p>
          <p className="text-3xl font-bold text-green-900 mt-2">₵{currentMonthAvg}</p>
          <p className="text-sm mt-2 font-semibold text-green-700">
            {costChange}% from last month
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <Package className="w-8 h-8 text-blue-600" />
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-sm font-medium text-blue-700">Total Volume (MTD)</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">605T</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">
            +2.5% from last month
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <MapPin className="w-8 h-8 text-purple-600" />
            <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-semibold">5</span>
          </div>
          <p className="text-sm font-medium text-purple-700">Active Regions</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">1,284</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">
            Farmers enrolled
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full font-semibold">96.2%</span>
          </div>
          <p className="text-sm font-medium text-orange-700">Quality Rate</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">Excellent</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">
            Above target (95%)
          </p>
        </div>
      </div>

      {/* Cost Trend Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bamboo Procurement Cost per Ton (Trend)</h3>
        <div className="space-y-3">
          {costAnalysis.map((month, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{month.month}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-gray-500">Volume: <strong>{month.volume}T</strong></span>
                      <span className="text-xs text-gray-500">Total: <strong>₵{(month.totalSpent / 1000).toFixed(0)}K</strong></span>
                      <span className={`text-lg font-bold ${month.avgCost < 1870 ? 'text-green-600' : 'text-orange-600'}`}>
                        ₵{month.avgCost}/T
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${month.avgCost < 1870 ? 'bg-green-500' : 'bg-orange-500'}`}
                  style={{ width: `${(month.avgCost / 2000) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Performance */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Performance Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Cost/Ton</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume (T)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {regionPerformance.map((region, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium text-gray-900">{region.region}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{region.farmers}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-semibold ${region.avgCost < 1870 ? 'text-green-600' : 'text-orange-600'}`}>
                      ₵{region.avgCost}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{region.volume}T</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-semibold ${region.quality >= 95 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {region.quality}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      region.avgCost < 1870 && region.quality >= 95 ? 'bg-green-100 text-green-800' :
                      region.avgCost < 1900 && region.quality >= 93 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {region.avgCost < 1870 && region.quality >= 95 ? 'Excellent' :
                       region.avgCost < 1900 && region.quality >= 93 ? 'Good' : 'Fair'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Performing Farmers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Farmers (by Volume & Quality)</h3>
        <div className="space-y-3">
          {topFarmers.map((farmer, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-purple-600 mr-3">#{idx + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{farmer.name}</p>
                      <p className="text-xs text-gray-500">{farmer.id}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-6 text-center">
                  <div>
                    <p className="text-xs text-gray-500">Volume</p>
                    <p className="text-lg font-bold text-gray-900">{farmer.volume}T</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Cost/Ton</p>
                    <p className="text-sm font-semibold text-green-600">₵{farmer.avgCost}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Quality</p>
                    <p className="text-sm font-semibold text-blue-600">{farmer.quality}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Reliability</p>
                    <p className="text-sm font-semibold text-purple-600">{farmer.reliability}%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

