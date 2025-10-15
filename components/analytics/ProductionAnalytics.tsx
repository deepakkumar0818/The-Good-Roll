"use client";

import { Factory, TrendingUp, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function ProductionAnalytics() {
  const productionLines = [
    { id: "Line-01", factory: "Factory A", efficiency: 95, output: 28.5, target: 30, downtime: 2, status: "active" },
    { id: "Line-02", factory: "Factory A", efficiency: 92, output: 27.6, target: 30, downtime: 4, status: "active" },
    { id: "Line-03", factory: "Factory A", efficiency: 88, output: 26.4, target: 30, downtime: 6, status: "warning" },
    { id: "Line-04", factory: "Factory B", efficiency: 91, output: 27.3, target: 30, downtime: 5, status: "active" },
    { id: "Line-05", factory: "Factory B", efficiency: 89, output: 26.7, target: 30, downtime: 5, status: "active" },
    { id: "Line-06", factory: "Factory B", efficiency: 94, output: 28.2, target: 30, downtime: 3, status: "active" },
    { id: "Line-07", factory: "Factory C", efficiency: 82, output: 24.6, target: 30, downtime: 9, status: "warning" },
    { id: "Line-08", factory: "Factory C", efficiency: 96, output: 28.8, target: 30, downtime: 2, status: "active" },
  ];

  const factoryPerformance = [
    { name: "Factory A", lines: 3, avgEfficiency: 91.7, totalOutput: 82.5, utilization: 88, quality: 96.8 },
    { name: "Factory B", lines: 3, avgEfficiency: 91.3, totalOutput: 82.2, utilization: 89, quality: 95.2 },
    { name: "Factory C", lines: 2, avgEfficiency: 89.0, totalOutput: 53.4, utilization: 85, quality: 94.5 },
  ];

  const shiftPerformance = [
    { shift: "Morning (6AM-2PM)", efficiency: 93, output: 95.5, incidents: 1, quality: 97.2 },
    { shift: "Afternoon (2PM-10PM)", efficiency: 91, output: 92.8, incidents: 2, quality: 95.8 },
    { shift: "Night (10PM-6AM)", efficiency: 87, output: 89.3, incidents: 4, quality: 93.5 },
  ];

  const downtimeReasons = [
    { reason: "Scheduled Maintenance", hours: 12, percentage: 35, impact: "Low" },
    { reason: "Material Shortage", hours: 8, percentage: 24, impact: "High" },
    { reason: "Machine Breakdown", hours: 7, percentage: 21, impact: "High" },
    { reason: "Quality Issues", hours: 4, percentage: 12, impact: "Medium" },
    { reason: "Staff Shortage", hours: 3, percentage: 8, impact: "Medium" },
  ];

  const overallEfficiency = 91;
  const totalOutput = 218.1;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "down": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "warning": return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case "down": return <XCircle className="w-4 h-4 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <Factory className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm font-medium text-blue-700">Overall Efficiency</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{overallEfficiency}%</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">Target: 85%</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm font-medium text-green-700">Total Output (Today)</p>
          <p className="text-3xl font-bold text-green-900 mt-2">{totalOutput}T</p>
          <p className="text-sm mt-2 font-semibold text-green-700">+6% from yesterday</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm font-medium text-purple-700">Active Lines</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">6/8</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">75% utilization</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm font-medium text-orange-700">Total Downtime</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">34 hrs</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">This week</p>
        </div>
      </div>

      {/* Production Line Efficiency */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Production Line Efficiency Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Line ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output (T)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target (T)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downtime</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productionLines.map((line, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{line.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{line.factory}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-semibold mr-2 ${
                        line.efficiency >= 90 ? 'text-green-600' :
                        line.efficiency >= 85 ? 'text-blue-600' :
                        'text-yellow-600'
                      }`}>
                        {line.efficiency}%
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            line.efficiency >= 90 ? 'bg-green-500' :
                            line.efficiency >= 85 ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${line.efficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{line.output}T</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{line.target}T</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{line.downtime}h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(line.status)}
                      <span className={`ml-2 text-xs font-semibold ${getStatusColor(line.status)}`}>
                        {line.status.charAt(0).toUpperCase() + line.status.slice(1)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Factory Performance Comparison */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Factory Performance Comparison</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {factoryPerformance.map((factory, idx) => (
            <div key={idx} className="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{factory.name}</h4>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {factory.lines} Lines
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg Efficiency</span>
                  <span className={`text-sm font-bold ${factory.avgEfficiency >= 90 ? 'text-green-600' : 'text-blue-600'}`}>
                    {factory.avgEfficiency}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Output</span>
                  <span className="text-sm font-bold text-gray-900">{factory.totalOutput}T</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Utilization</span>
                  <span className="text-sm font-bold text-purple-600">{factory.utilization}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Quality Pass Rate</span>
                  <span className="text-sm font-bold text-green-600">{factory.quality}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shift Performance */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shift Performance Analysis</h3>
        <div className="space-y-4">
          {shiftPerformance.map((shift, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">{shift.shift}</h4>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500">Incidents: <strong>{shift.incidents}</strong></span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    shift.efficiency >= 90 ? 'bg-green-100 text-green-800' :
                    shift.efficiency >= 85 ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {shift.efficiency}% Efficient
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500">Output</p>
                  <p className="text-lg font-bold text-gray-900">{shift.output}T</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Quality</p>
                  <p className="text-lg font-bold text-green-600">{shift.quality}%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Safety</p>
                  <p className="text-lg font-bold text-blue-600">{shift.incidents === 0 ? 'Perfect' : 'Good'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downtime Analysis */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Downtime Root Cause Analysis</h3>
        <div className="space-y-3">
          {downtimeReasons.map((reason, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{reason.reason}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-gray-500">{reason.hours} hours</span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        reason.impact === 'High' ? 'bg-red-100 text-red-800' :
                        reason.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {reason.impact} Impact
                      </span>
                      <span className="text-lg font-bold text-gray-900">{reason.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    reason.impact === 'High' ? 'bg-red-500' :
                    reason.impact === 'Medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${reason.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

