"use client";

import { DollarSign, TrendingUp, TrendingDown, PieChart } from "lucide-react";

export default function FinancialAnalytics() {
  const payrollMetrics = [
    { category: "Production Workers", count: 8750, totalCost: 1275000, avgCost: 145.71, outputTons: 312.5 },
    { category: "Factory Managers", count: 45, totalCost: 225000, avgCost: 5000, outputTons: 312.5 },
    { category: "Admin Staff", count: 180, totalCost: 180000, avgCost: 1000, outputTons: 312.5 },
    { category: "QA/QC Team", count: 85, totalCost: 127500, avgCost: 1500, outputTons: 312.5 },
  ];

  const costRatios = [
    { metric: "Payroll Cost per Ton Output", current: 145, target: 160, variance: -9.4, trend: "improving" },
    { metric: "Material Cost per Ton Output", current: 272, target: 285, variance: -4.6, trend: "improving" },
    { metric: "Overhead Cost per Ton Output", current: 88, target: 95, variance: -7.4, trend: "improving" },
    { metric: "Total Cost per Ton Output", current: 505, target: 540, variance: -6.5, trend: "improving" },
  ];

  const profitabilityMetrics = [
    { period: "Jan", revenue: 4250000, cost: 3187500, profit: 1062500, margin: 25.0 },
    { period: "Feb", revenue: 4180000, cost: 3135000, profit: 1045000, margin: 25.0 },
    { period: "Mar", revenue: 4520000, cost: 3347000, profit: 1173000, margin: 25.9 },
    { period: "Apr", revenue: 4680000, cost: 3432000, profit: 1248000, margin: 26.7 },
    { period: "May", revenue: 4750000, cost: 3515000, profit: 1235000, margin: 26.0 },
    { period: "Jun", revenue: 4820000, cost: 3525000, profit: 1295000, margin: 26.9 },
  ];

  const revenueByCategory = [
    { category: "Bamboo Pulp Exports", revenue: 2850000, percentage: 59, growth: 18 },
    { category: "Bamboo Sheets/Products", revenue: 1420000, percentage: 29, growth: 22 },
    { category: "Local Sales", revenue: 385000, percentage: 8, growth: 12 },
    { category: "By-products", revenue: 165000, percentage: 4, growth: 8 },
  ];

  const cashFlowSummary = {
    operating: 1125000,
    investing: -285000,
    financing: -120000,
    netCashFlow: 720000,
  };

  const totalRevenue = 4820000;
  const totalProfit = 1295000;
  const profitMargin = 26.9;
  const totalPayrollCost = payrollMetrics.reduce((sum, p) => sum + p.totalCost, 0);
  const totalOutput = 312.5;

  return (
    <div className="space-y-6">
      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <DollarSign className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm font-medium text-green-700">Total Revenue (MTD)</p>
          <p className="text-3xl font-bold text-green-900 mt-2">₵{(totalRevenue / 1000000).toFixed(1)}M</p>
          <p className="text-sm mt-2 font-semibold text-green-700">+3.2% from May</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm font-medium text-blue-700">Net Profit</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">₵{(totalProfit / 1000000).toFixed(2)}M</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">{profitMargin}% margin</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <PieChart className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm font-medium text-purple-700">Total Payroll</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">₵{(totalPayrollCost / 1000000).toFixed(2)}M</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">9,060 employees</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <TrendingDown className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm font-medium text-orange-700">Cost per Ton</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">₵505</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">-6.5% vs target</p>
        </div>
      </div>

      {/* Payroll Cost vs Output Analysis */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payroll Cost vs Output Ratios</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output (T)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost/Ton</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payrollMetrics.map((payroll, idx) => {
                const costPerTon = (payroll.totalCost / payroll.outputTons).toFixed(2);
                return (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payroll.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payroll.count.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ₵{(payroll.totalCost / 1000).toFixed(0)}K
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₵{payroll.avgCost.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payroll.outputTons}T</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-bold ${
                        parseFloat(costPerTon) < 500 ? 'text-green-600' :
                        parseFloat(costPerTon) < 1000 ? 'text-blue-600' :
                        'text-purple-600'
                      }`}>
                        ₵{costPerTon}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">TOTAL</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  {payrollMetrics.reduce((sum, p) => sum + p.count, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  ₵{(totalPayrollCost / 1000).toFixed(0)}K
                </td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{totalOutput}T</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                  ₵{(totalPayrollCost / totalOutput).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Cost Efficiency Ratios */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Efficiency Ratios (per Ton of Output)</h3>
        <div className="space-y-4">
          {costRatios.map((ratio, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{ratio.metric}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">Current: <strong>₵{ratio.current}</strong></span>
                    <span className="text-xs text-gray-500">Target: <strong>₵{ratio.target}</strong></span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">{ratio.variance}%</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    {ratio.trend}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${(ratio.current / ratio.target) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profitability Trend */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Profitability Trend</h3>
        <div className="space-y-3">
          {profitabilityMetrics.map((month, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{month.period}</span>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-sm font-semibold text-gray-900">₵{(month.revenue / 1000000).toFixed(2)}M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Cost</p>
                        <p className="text-sm font-semibold text-gray-600">₵{(month.cost / 1000000).toFixed(2)}M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Profit</p>
                        <p className="text-sm font-semibold text-green-600">₵{(month.profit / 1000000).toFixed(2)}M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Margin</p>
                        <p className={`text-lg font-bold ${month.margin >= 26 ? 'text-green-600' : 'text-blue-600'}`}>
                          {month.margin}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${month.margin >= 26 ? 'bg-green-500' : 'bg-blue-500'}`}
                  style={{ width: `${month.margin * 3}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Breakdown */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Category</h3>
        <div className="space-y-3">
          {revenueByCategory.map((category, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{category.category}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">₵{(category.revenue / 1000000).toFixed(2)}M</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        +{category.growth}% YoY
                      </span>
                      <span className="text-lg font-bold text-gray-900">{category.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cash Flow Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cash Flow Summary (MTD)</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Operating Activities</p>
            <p className="text-2xl font-bold text-green-600">₵{(cashFlowSummary.operating / 1000).toFixed(0)}K</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Investing Activities</p>
            <p className="text-2xl font-bold text-blue-600">₵{(cashFlowSummary.investing / 1000).toFixed(0)}K</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-2">Financing Activities</p>
            <p className="text-2xl font-bold text-purple-600">₵{(cashFlowSummary.financing / 1000).toFixed(0)}K</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
            <p className="text-xs text-gray-600 mb-2">Net Cash Flow</p>
            <p className="text-2xl font-bold text-orange-600">₵{(cashFlowSummary.netCashFlow / 1000).toFixed(0)}K</p>
          </div>
        </div>
      </div>
    </div>
  );
}

