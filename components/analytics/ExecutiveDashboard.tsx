"use client";

import { TrendingUp, TrendingDown, Users, Package, DollarSign, AlertCircle } from "lucide-react";

export default function ExecutiveDashboard() {
  const kpis = [
    { label: "Total Revenue", value: "₵45.2M", change: "+23%", trend: "up", icon: DollarSign, color: "blue" },
    { label: "Net Profit Margin", value: "16.7%", change: "+4.2%", trend: "up", icon: TrendingUp, color: "green" },
    { label: "Total Farmers", value: "1,284", change: "+156", trend: "up", icon: Users, color: "purple" },
    { label: "Production Output", value: "312.5T", change: "+18%", trend: "up", icon: Package, color: "orange" },
  ];

  const businessMetrics = [
    { metric: "Bamboo Procurement Cost/Ton", current: "₵1,850", target: "₵2,000", variance: "-7.5%", status: "Good" },
    { metric: "Production Efficiency", current: "91%", target: "85%", variance: "+6%", status: "Excellent" },
    { metric: "Export Profitability/Container", current: "₵185K", target: "₵150K", variance: "+23%", status: "Excellent" },
    { metric: "Payroll Cost per Ton Output", current: "₵145", target: "₵160", variance: "-9.4%", status: "Good" },
  ];

  const alerts = [
    { type: "warning", message: "Factory B efficiency dropped to 88% this week", priority: "Medium" },
    { type: "success", message: "Export shipment CNT-001 ahead of schedule", priority: "Low" },
    { type: "danger", message: "Raw material stock below reorder level", priority: "High" },
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case "danger": return "bg-red-50 border-red-200 text-red-800";
      case "warning": return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "success": return "bg-green-50 border-green-200 text-green-800";
      default: return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "text-green-600";
      case "Good": return "text-blue-600";
      case "Fair": return "text-yellow-600";
      case "Poor": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          const colorClasses = {
            blue: "from-blue-50 to-blue-100 text-blue-600",
            green: "from-green-50 to-green-100 text-green-600",
            purple: "from-purple-50 to-purple-100 text-purple-600",
            orange: "from-orange-50 to-orange-100 text-orange-600",
          }[kpi.color] || "from-gray-50 to-gray-100 text-gray-600";

          return (
            <div key={idx} className={`bg-gradient-to-br ${colorClasses} rounded-lg p-6`}>
              <div className="flex items-center justify-between mb-3">
                <Icon className={`w-8 h-8 ${colorClasses.split(' ')[2]}`} />
                {kpi.trend === "up" ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
              </div>
              <p className="text-sm font-medium opacity-80">{kpi.label}</p>
              <p className="text-3xl font-bold mt-2">{kpi.value}</p>
              <p className={`text-sm mt-2 font-semibold ${kpi.trend === 'up' ? 'text-green-700' : 'text-red-700'}`}>
                {kpi.change} from last month
              </p>
            </div>
          );
        })}
      </div>

      {/* Critical Business Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Business Metrics</h3>
        <div className="space-y-4">
          {businessMetrics.map((metric, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{metric.metric}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">Current: <strong>{metric.current}</strong></span>
                    <span className="text-xs text-gray-500">Target: <strong>{metric.target}</strong></span>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${getStatusColor(metric.status)}`}>{metric.variance}</p>
                  <p className={`text-xs ${getStatusColor(metric.status)}`}>{metric.status}</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    metric.status === "Excellent" ? "bg-green-500" :
                    metric.status === "Good" ? "bg-blue-500" :
                    "bg-yellow-500"
                  }`}
                  style={{ 
                    width: `${Math.min(100, Math.abs(parseFloat(metric.variance)) * 10)}%` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Alerts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Real-time Alerts & Insights</h3>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
            Powered by Zia AI
          </span>
        </div>
        <div className="space-y-3">
          {alerts.map((alert, idx) => (
            <div key={idx} className={`border-2 rounded-lg p-4 ${getAlertColor(alert.type)}`}>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 mr-3 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs mt-1 opacity-75">Priority: {alert.priority}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">This Month</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Farmers Paid</span>
              <span className="text-sm font-bold text-gray-900">1,156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Containers Shipped</span>
              <span className="text-sm font-bold text-gray-900">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Quality Pass Rate</span>
              <span className="text-sm font-bold text-gray-900">98.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Production Status</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Active Lines</span>
              <span className="text-sm font-bold text-gray-900">11/15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Avg Efficiency</span>
              <span className="text-sm font-bold text-gray-900">91%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Today&apos;s Output</span>
              <span className="text-sm font-bold text-gray-900">45.2T</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Inventory</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Raw Material</span>
              <span className="text-sm font-bold text-gray-900">850T</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Finished Goods</span>
              <span className="text-sm font-bold text-gray-900">620T</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Warehouse Util.</span>
              <span className="text-sm font-bold text-gray-900">78%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

