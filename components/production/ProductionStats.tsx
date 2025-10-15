"use client";

import { Factory, Users, Package, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export default function ProductionStats() {
  const factories = [
    { id: 1, name: "Factory A - Kumasi", lines: 4, status: "Active", efficiency: 94 },
    { id: 2, name: "Factory B - Accra", lines: 4, status: "Active", efficiency: 91 },
    { id: 3, name: "Factory C - Takoradi", lines: 4, status: "Active", efficiency: 88 },
    { id: 4, name: "Factory D - Tamale", lines: 3, status: "Setup", efficiency: 0 },
    { id: 5, name: "Factory E - Sunyani", lines: 0, status: "Planned", efficiency: 0 },
  ];

  const todayStats = {
    totalProduction: "45.2T",
    activeLines: 11,
    efficiency: 91,
    qualityPass: 98.5,
    materialsRequested: 12,
    maintenancePending: 3,
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Today's Production</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">{todayStats.totalProduction}</p>
              <p className="text-xs text-blue-600 mt-1">Bamboo Processing</p>
            </div>
            <Package className="w-12 h-12 text-blue-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Active Production Lines</p>
              <p className="text-3xl font-bold text-green-900 mt-2">{todayStats.activeLines}/15</p>
              <p className="text-xs text-green-600 mt-1">Avg Efficiency: {todayStats.efficiency}%</p>
            </div>
            <Factory className="w-12 h-12 text-green-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Quality Pass Rate</p>
              <p className="text-3xl font-bold text-purple-900 mt-2">{todayStats.qualityPass}%</p>
              <p className="text-xs text-purple-600 mt-1">Last 7 Days Average</p>
            </div>
            <CheckCircle className="w-12 h-12 text-purple-600 opacity-50" />
          </div>
        </div>
      </div>

      {/* Alerts & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-orange-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Pending Actions</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-700">Material Requisitions Pending</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                {todayStats.materialsRequested}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-700">Maintenance Scheduled Today</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                {todayStats.maintenancePending}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Quality Checks Pending</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                2
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">This Week's Performance</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-700">Total Production</span>
              <span className="font-semibold text-gray-900">312.5T</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-700">Avg Line Efficiency</span>
              <span className="font-semibold text-gray-900">91.3%</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700">Material Wastage</span>
              <span className="font-semibold text-gray-900">2.1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Factory Overview */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Factory Network Overview</h3>
          <p className="text-sm text-gray-600 mt-1">Scalable model: 5 factories × 4 production lines each</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Factory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Production Lines</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Efficiency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {factories.map((factory) => (
                <tr key={factory.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Factory className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{factory.name}</div>
                        <div className="text-xs text-gray-500">ID: FAC-{factory.id.toString().padStart(3, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{factory.lines} Lines</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      factory.status === "Active" ? "bg-green-100 text-green-800" :
                      factory.status === "Setup" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {factory.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {factory.efficiency > 0 ? (
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className={`h-2 rounded-full ${
                              factory.efficiency >= 90 ? "bg-green-500" :
                              factory.efficiency >= 75 ? "bg-yellow-500" :
                              "bg-red-500"
                            }`}
                            style={{ width: `${factory.efficiency}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{factory.efficiency}%</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-green-600 hover:text-green-900 text-sm font-medium" suppressHydrationWarning>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

