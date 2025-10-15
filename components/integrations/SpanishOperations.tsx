"use client";

import { Globe, Package, DollarSign, Users, RefreshCw } from "lucide-react";

export default function SpanishOperations() {
  const syncStatus = [
    { module: "Customer Orders", lastSync: "2 mins ago", status: "synced", records: 156, direction: "bidirectional" },
    { module: "Inventory Levels", lastSync: "5 mins ago", status: "synced", records: 2340, direction: "bidirectional" },
    { module: "Financial Transactions", lastSync: "1 min ago", status: "syncing", records: 89, direction: "bidirectional" },
    { module: "Product Catalog", lastSync: "15 mins ago", status: "synced", records: 485, direction: "bidirectional" },
    { module: "Shipping Documents", lastSync: "3 mins ago", status: "synced", records: 45, direction: "export" },
  ];

  const spanishCustomers = [
    { id: "ES-C-001", name: "Barcelona Eco Products S.L.", location: "Barcelona", orders: 45, revenue: 285000, status: "active" },
    { id: "ES-C-002", name: "Madrid Green Solutions", location: "Madrid", orders: 38, revenue: 245000, status: "active" },
    { id: "ES-C-003", name: "Valencia Sustainable Materials", location: "Valencia", orders: 32, revenue: 198000, status: "active" },
    { id: "ES-C-004", name: "Sevilla Natural Products", location: "Sevilla", orders: 28, revenue: 175000, status: "active" },
  ];

  const pendingOrders = [
    { orderId: "ESP-ORD-2401", customer: "Barcelona Eco Products S.L.", product: "Bamboo Pulp", quantity: 15, value: 45000, status: "processing" },
    { orderId: "ESP-ORD-2402", customer: "Madrid Green Solutions", product: "Bamboo Sheets", quantity: 20, value: 58000, status: "processing" },
    { orderId: "ESP-ORD-2403", customer: "Valencia Sustainable Materials", product: "Bamboo Pulp", quantity: 12, value: 36000, status: "ready" },
  ];

  const financialSync = [
    { date: "2024-06-24", type: "Invoice", refNo: "INV-ESP-2401", amount: 45000, currency: "EUR", status: "synced", ghsEquiv: 53100 },
    { date: "2024-06-23", type: "Payment", refNo: "PAY-ESP-1245", amount: 38000, currency: "EUR", status: "synced", ghsEquiv: 44840 },
    { date: "2024-06-22", type: "Invoice", refNo: "INV-ESP-2398", amount: 52000, currency: "EUR", status: "synced", ghsEquiv: 61360 },
    { date: "2024-06-21", type: "Credit Note", refNo: "CN-ESP-156", amount: -3500, currency: "EUR", status: "synced", ghsEquiv: -4130 },
  ];

  const apiEndpoints = [
    { name: "Customer API", endpoint: "https://erp.spain.bamboo.local/api/v2/customers", method: "GET/POST", status: "active" },
    { name: "Orders API", endpoint: "https://erp.spain.bamboo.local/api/v2/orders", method: "GET/POST/PUT", status: "active" },
    { name: "Inventory Sync", endpoint: "https://erp.spain.bamboo.local/api/v2/inventory", method: "GET/POST", status: "active" },
    { name: "Financial Integration", endpoint: "https://erp.spain.bamboo.local/api/v2/accounting", method: "POST", status: "active" },
    { name: "Shipping API", endpoint: "https://erp.spain.bamboo.local/api/v2/shipments", method: "GET/POST", status: "active" },
  ];

  const currencyRates = {
    EUR_GHS: 1.18,
    EUR_USD: 1.09,
    GHS_EUR: 0.85,
    lastUpdated: "2024-06-24 14:30:00",
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "synced": return "text-green-600 bg-green-100";
      case "syncing": return "text-blue-600 bg-blue-100";
      case "error": return "text-red-600 bg-red-100";
      case "active": return "text-green-600 bg-green-100";
      case "processing": return "text-blue-600 bg-blue-100";
      case "ready": return "text-purple-600 bg-purple-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <Globe className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm font-medium text-blue-700">Active Customers</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{spanishCustomers.length}</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">Spanish market</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <DollarSign className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm font-medium text-green-700">Total Revenue</p>
          <p className="text-3xl font-bold text-green-900 mt-2">€903K</p>
          <p className="text-sm mt-2 font-semibold text-green-700">Year to date</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <Package className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm font-medium text-purple-700">Orders (YTD)</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">143</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">+24% vs last year</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <RefreshCw className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm font-medium text-orange-700">Sync Status</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">100%</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">All systems live</p>
        </div>
      </div>

      {/* Data Synchronization Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <RefreshCw className="w-5 h-5 mr-2 text-blue-600" />
          Real-time Data Synchronization
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Records</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Direction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {syncStatus.map((sync, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sync.module}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sync.lastSync}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(sync.status)}`}>
                      {sync.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{sync.records}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                      {sync.direction}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button 
                      className="text-blue-600 hover:text-blue-900 text-xs font-semibold"
                      suppressHydrationWarning
                    >
                      Force Sync
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Spanish Customers */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-purple-600" />
          Spanish Customer Accounts
        </h3>
        <div className="space-y-4">
          {spanishCustomers.map((customer) => (
            <div key={customer.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{customer.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{customer.id} • {customer.location}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-xs text-gray-500">Orders</p>
                        <p className="text-lg font-bold text-gray-900">{customer.orders}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-lg font-bold text-green-600">€{(customer.revenue / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Status</p>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(customer.status)}`}>
                          {customer.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Orders */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Package className="w-5 h-5 mr-2 text-orange-600" />
          Pending Spanish Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity (T)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value (EUR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingOrders.map((order) => (
                <tr key={order.orderId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.quantity}T</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    €{order.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Synchronization */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <DollarSign className="w-5 h-5 mr-2 text-green-600" />
          Financial Data Synchronization
        </h3>
        <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-900">Multi-Currency Exchange Rates</p>
              <p className="text-xs text-blue-700 mt-1">Last updated: {currencyRates.lastUpdated}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-xs text-blue-700">EUR → GHS</p>
                <p className="text-lg font-bold text-blue-900">{currencyRates.EUR_GHS}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-blue-700">EUR → USD</p>
                <p className="text-lg font-bold text-blue-900">{currencyRates.EUR_USD}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-blue-700">GHS → EUR</p>
                <p className="text-lg font-bold text-blue-900">{currencyRates.GHS_EUR}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (EUR)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GHS Equiv</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {financialSync.map((txn, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{txn.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">
                      {txn.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">{txn.refNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    €{txn.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-600">
                    ₵{txn.ghsEquiv.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(txn.status)}`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* API Integration Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Spanish ERP API Endpoints</h3>
        <div className="space-y-3">
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
                    <span className={`px-2 py-0.5 bg-green-100 text-green-800 rounded font-mono font-semibold`}>
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

      {/* Integration Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
          <Globe className="w-5 h-5 mr-2" />
          Spanish Operations Integration Benefits
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Unified Operations:</strong> Ghana production and Spanish sales managed from single platform with real-time sync.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Multi-Currency Handling:</strong> Automatic EUR/GHS/USD conversion with live exchange rates for accurate financials.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Order Fulfillment:</strong> Spanish customer orders automatically create production jobs in Ghana factories.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Inventory Visibility:</strong> Real-time stock levels synced between Ghana warehouses and Spanish distribution.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Compliance:</strong> Automated VAT handling for EU regulations and GRA compliance for Ghana operations.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

