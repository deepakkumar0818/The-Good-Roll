"use client";

import { TrendingUp, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

export default function FinancialDashboard() {
  const currentMonth = "October 2024";
  
  const financialMetrics = {
    revenue: { value: "₹45.2L", change: "+23%", trend: "up" },
    expenses: { value: "₹28.5L", change: "+12%", trend: "up" },
    profit: { value: "₹16.7L", change: "+42%", trend: "up" },
    cashFlow: { value: "₹34.8L", change: "+15%", trend: "up" },
  };

  const accountsReceivable = {
    total: "₹12.5L",
    overdue: "₹2.3L",
    current: "₹10.2L",
    overdueCount: 8,
  };

  const accountsPayable = {
    total: "₹8.7L",
    overdue: "₹1.2L",
    current: "₹7.5L",
    overdueCount: 3,
  };

  const vatGst = {
    collected: "₹5.2L",
    paid: "₹3.1L",
    payable: "₹2.1L",
    nextDueDate: "2024-11-15",
  };

  const budgetVsActual = [
    { category: "Raw Materials", budget: 15000000, actual: 14200000, variance: -5.3 },
    { category: "Labor Costs", budget: 8000000, actual: 8500000, variance: 6.25 },
    { category: "Factory Expenses", budget: 3000000, actual: 2800000, variance: -6.67 },
    { category: "Marketing", budget: 2000000, actual: 2300000, variance: 15 },
    { category: "Administration", budget: 1500000, actual: 1400000, variance: -6.67 },
  ];

  const recentTransactions = [
    { id: "TXN-1001", date: "2024-10-09", type: "Sale", party: "Export - USA Client", amount: "₹8.5L", currency: "USD", status: "Completed" },
    { id: "TXN-1002", date: "2024-10-09", type: "Purchase", party: "Raw Material Supplier", amount: "₹2.3L", currency: "GHS", status: "Pending" },
    { id: "TXN-1003", date: "2024-10-08", type: "Sale", party: "Domestic - Mumbai", amount: "₹3.2L", currency: "GHS", status: "Completed" },
    { id: "TXN-1004", date: "2024-10-08", type: "Expense", party: "Factory Maintenance", amount: "₹45K", currency: "GHS", status: "Approved" },
  ];

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div className="space-y-6">
      {/* Key Financial Metrics */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Financial Metrics - {currentMonth}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-blue-600">Revenue</p>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-900">{financialMetrics.revenue.value}</p>
            <p className="text-sm text-blue-700 mt-2">
              <span className="font-semibold">{financialMetrics.revenue.change}</span> from last month
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-orange-600">Expenses</p>
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-3xl font-bold text-orange-900">{financialMetrics.expenses.value}</p>
            <p className="text-sm text-orange-700 mt-2">
              <span className="font-semibold">{financialMetrics.expenses.change}</span> from last month
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-green-600">Net Profit</p>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-900">{financialMetrics.profit.value}</p>
            <p className="text-sm text-green-700 mt-2">
              <span className="font-semibold">{financialMetrics.profit.change}</span> from last month
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-purple-600">Cash Flow</p>
              <DollarSign className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-900">{financialMetrics.cashFlow.value}</p>
            <p className="text-sm text-purple-700 mt-2">
              <span className="font-semibold">{financialMetrics.cashFlow.change}</span> from last month
            </p>
          </div>
        </div>
      </div>

      {/* Accounts Receivable & Payable */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accounts Receivable</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Outstanding</span>
              <span className="text-2xl font-bold text-gray-900">{accountsReceivable.total}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-sm text-red-900">Overdue ({accountsReceivable.overdueCount} invoices)</span>
              </div>
              <span className="text-lg font-semibold text-red-900">{accountsReceivable.overdue}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm text-green-900">Current</span>
              </div>
              <span className="text-lg font-semibold text-green-900">{accountsReceivable.current}</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Accounts Payable</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Outstanding</span>
              <span className="text-2xl font-bold text-gray-900">{accountsPayable.total}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
                <span className="text-sm text-orange-900">Overdue ({accountsPayable.overdueCount} bills)</span>
              </div>
              <span className="text-lg font-semibold text-orange-900">{accountsPayable.overdue}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-900">Current</span>
              </div>
              <span className="text-lg font-semibold text-blue-900">{accountsPayable.current}</span>
            </div>
          </div>
        </div>
      </div>

      {/* VAT/GST Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">VAT/GST Summary - {currentMonth}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">VAT Collected (Output)</p>
            <p className="text-2xl font-bold text-gray-900">{vatGst.collected}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">VAT Paid (Input)</p>
            <p className="text-2xl font-bold text-gray-900">{vatGst.paid}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">VAT Payable</p>
            <p className="text-2xl font-bold text-green-600">{vatGst.payable}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Next Due Date</p>
            <p className="text-xl font-semibold text-orange-600">{vatGst.nextDueDate}</p>
          </div>
        </div>
      </div>

      {/* Budget vs Actual */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget vs Actual - {currentMonth}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Budget</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actual</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Variance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {budgetVsActual.map((item) => (
                <tr key={item.category} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.category}</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900">{formatCurrency(item.budget)}</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900">{formatCurrency(item.actual)}</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <span className={`font-semibold ${item.variance < 0 ? "text-green-600" : "text-red-600"}`}>
                      {item.variance > 0 ? "+" : ""}{item.variance.toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Party</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Currency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{txn.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{txn.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{txn.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{txn.party}</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">{txn.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{txn.currency}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      txn.status === "Completed" ? "bg-green-100 text-green-800" :
                      txn.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {txn.status}
                    </span>
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

