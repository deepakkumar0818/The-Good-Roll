"use client";

import { useState } from "react";
import { Smartphone, CheckCircle, Clock, DollarSign, Users, TrendingUp } from "lucide-react";

export default function MobileMoneyIntegration() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const providers = [
    { 
      id: "mtn", 
      name: "MTN Mobile Money", 
      status: "active", 
      apiVersion: "v2.0",
      transactions: 3456,
      volume: 1285000,
      successRate: 98.5,
      avgTime: "3.2s",
      color: "yellow"
    },
    { 
      id: "vodafone", 
      name: "Vodafone Cash", 
      status: "active", 
      apiVersion: "v1.8",
      transactions: 2187,
      volume: 892000,
      successRate: 97.2,
      avgTime: "4.1s",
      color: "red"
    },
    { 
      id: "airteltigo", 
      name: "AirtelTigo Money", 
      status: "active", 
      apiVersion: "v1.5",
      transactions: 1654,
      volume: 645000,
      successRate: 96.8,
      avgTime: "4.5s",
      color: "blue"
    },
  ];

  const recentTransactions = [
    { id: "TXN-89234", farmer: "Kwame Asante", amount: 2450, provider: "MTN Mobile Money", status: "completed", time: "2 mins ago" },
    { id: "TXN-89233", farmer: "Ama Boateng", amount: 3180, provider: "Vodafone Cash", status: "completed", time: "5 mins ago" },
    { id: "TXN-89232", farmer: "Kofi Mensah", amount: 1950, provider: "MTN Mobile Money", status: "completed", time: "8 mins ago" },
    { id: "TXN-89231", farmer: "Akua Owusu", amount: 2780, provider: "AirtelTigo Money", status: "pending", time: "12 mins ago" },
    { id: "TXN-89230", farmer: "Yaw Adom", amount: 4200, provider: "MTN Mobile Money", status: "completed", time: "18 mins ago" },
  ];

  const paymentSchedule = [
    { date: "2024-06-10", farmers: 342, amount: 845000, status: "completed" },
    { date: "2024-06-17", farmers: 385, amount: 925000, status: "completed" },
    { date: "2024-06-24", farmers: 298, amount: 715000, status: "in-progress" },
    { date: "2024-07-01", farmers: 410, amount: 985000, status: "scheduled" },
  ];

  const apiEndpoints = [
    { name: "Payment Initiation", endpoint: "/api/v1/payments/initiate", method: "POST", status: "operational" },
    { name: "Transaction Status", endpoint: "/api/v1/payments/status", method: "GET", status: "operational" },
    { name: "Balance Inquiry", endpoint: "/api/v1/balance", method: "GET", status: "operational" },
    { name: "Webhook Callback", endpoint: "/api/v1/webhooks/payment", method: "POST", status: "operational" },
    { name: "Refund Processing", endpoint: "/api/v1/payments/refund", method: "POST", status: "operational" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-green-600 bg-green-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "failed": return "text-red-600 bg-red-100";
      case "completed": return "text-green-600 bg-green-100";
      case "in-progress": return "text-blue-600 bg-blue-100";
      case "scheduled": return "text-purple-600 bg-purple-100";
      case "operational": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getProviderColor = (color: string) => {
    switch (color) {
      case "yellow": return "from-yellow-50 to-yellow-100 border-yellow-300";
      case "red": return "from-red-50 to-red-100 border-red-300";
      case "blue": return "from-blue-50 to-blue-100 border-blue-300";
      default: return "from-gray-50 to-gray-100 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Ghana Mobile Money Information */}
      <div className="bg-gradient-to-r from-green-50 to-yellow-50 border-2 border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <Smartphone className="w-6 h-6 mr-2 text-green-600" />
          Ghana Mobile Money (MoMo) Payment System
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Mobile Money is Ghana&apos;s leading digital payment platform, enabling instant cashless transactions via mobile phones. 
          Over 80% of Ghanaians use MoMo for daily transactions, making it essential for farmer payments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white border border-yellow-300 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">MTN Mobile Money</h4>
                <p className="text-xs text-gray-600">Market Leader - 60% share</p>
              </div>
            </div>
            <p className="text-xs text-gray-700">
              Ghana&apos;s largest mobile money service with over 18 million active users. 
              Dial *170# to access. Supports instant transfers, bill payments, and merchant transactions.
            </p>
          </div>

          <div className="bg-white border border-red-300 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Vodafone Cash</h4>
                <p className="text-xs text-gray-600">Second Largest - 25% share</p>
              </div>
            </div>
            <p className="text-xs text-gray-700">
              Vodafone&apos;s mobile money service with wide acceptance across Ghana. 
              Dial *110# to access. Known for reliable transactions and excellent customer service.
            </p>
          </div>

          <div className="bg-white border border-blue-300 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">AirtelTigo Money</h4>
                <p className="text-xs text-gray-600">Growing Network - 15% share</p>
              </div>
            </div>
            <p className="text-xs text-gray-700">
              Combined AirtelTigo mobile money platform serving millions of Ghanaians. 
              Dial *110# to access. Competitive rates and expanding agent network nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <DollarSign className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm font-medium text-green-700">Total Volume (MTD)</p>
          <p className="text-3xl font-bold text-green-900 mt-2">₵2.82M</p>
          <p className="text-sm mt-2 font-semibold text-green-700">+18% from last month</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <Users className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm font-medium text-blue-700">Farmers Paid</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">1,025</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">This month</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm font-medium text-purple-700">Success Rate</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">97.8%</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">All providers avg</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <Clock className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm font-medium text-orange-700">Avg Processing</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">3.9s</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">Transaction time</p>
        </div>
      </div>

      {/* Mobile Money Providers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
          Mobile Money Provider Integrations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div 
              key={provider.id} 
              className={`bg-gradient-to-br ${getProviderColor(provider.color)} border-2 rounded-lg p-5 cursor-pointer hover:shadow-lg transition-shadow`}
              onClick={() => setSelectedProvider(provider.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-gray-900">{provider.name}</h4>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(provider.status)}`}>
                  {provider.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">API Version</span>
                  <span className="text-sm font-semibold text-gray-900">{provider.apiVersion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Transactions</span>
                  <span className="text-sm font-semibold text-gray-900">{provider.transactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Volume</span>
                  <span className="text-sm font-semibold text-gray-900">₵{(provider.volume / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Success Rate</span>
                  <span className="text-sm font-semibold text-green-600">{provider.successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg Time</span>
                  <span className="text-sm font-semibold text-blue-600">{provider.avgTime}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300">
                <button 
                  className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  suppressHydrationWarning
                >
                  View API Docs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Mobile Money Transactions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{txn.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{txn.farmer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₵{txn.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{txn.provider}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(txn.status)}`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{txn.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Automated Payment Schedule</h3>
        <div className="space-y-4">
          {paymentSchedule.map((schedule, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{schedule.date}</span>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Farmers</p>
                        <p className="text-sm font-bold text-gray-900">{schedule.farmers}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Amount</p>
                        <p className="text-sm font-bold text-green-600">₵{(schedule.amount / 1000).toFixed(0)}K</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(schedule.status)}`}>
                        {schedule.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Integration Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">API Endpoints Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {apiEndpoints.map((api, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">{api.name}</h4>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(api.status)}`}>
                      {api.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    <span className={`px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono font-semibold`}>
                      {api.method}
                    </span>
                    <span className="ml-2 font-mono">{api.endpoint}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Mobile Money Integration Benefits
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Instant Payments:</strong> Farmers receive payments within seconds, improving satisfaction and trust.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>No Bank Accounts Needed:</strong> 100% of farmers can receive payments via their mobile phones.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Automated Scheduling:</strong> Weekly/bi-weekly payment runs executed automatically via API.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Real-time Tracking:</strong> Monitor transaction status and handle failures immediately.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Cost Effective:</strong> Lower transaction fees compared to traditional banking methods.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

