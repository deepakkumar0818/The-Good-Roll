"use client";

import { useState } from "react";
import { Package, Calendar, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";

interface StockItem {
  id: string;
  batchId: string;
  productType: string;
  warehouse: string;
  binLocation: string;
  quantity: string;
  unit: string;
  receivedDate: string;
  expiryDate: string;
  daysToExpiry: number;
  fifoSequence: number;
  grade: "A" | "B" | "C";
  status: "Available" | "Reserved" | "Near Expiry" | "Expired";
  qrCode: string;
}

const mockStock: StockItem[] = [
  {
    id: "STK-001",
    batchId: "BATCH-008",
    productType: "Bamboo Pulp",
    warehouse: "Central Warehouse Jabalpur",
    binLocation: "A-02-005",
    quantity: "2.0",
    unit: "Tons",
    receivedDate: "2024-09-20",
    expiryDate: "2025-03-20",
    daysToExpiry: 162,
    fifoSequence: 1,
    grade: "A",
    status: "Available",
    qrCode: "QR-2024-09-20-008",
  },
  {
    id: "STK-002",
    batchId: "BATCH-012",
    productType: "Bamboo Pulp",
    warehouse: "Central Warehouse Jabalpur",
    binLocation: "A-02-008",
    quantity: "3.5",
    unit: "Tons",
    receivedDate: "2024-09-25",
    expiryDate: "2025-03-25",
    daysToExpiry: 167,
    fifoSequence: 2,
    grade: "A",
    status: "Available",
    qrCode: "QR-2024-09-25-012",
  },
  {
    id: "STK-003",
    batchId: "BATCH-018",
    productType: "Pulp Sheets",
    warehouse: "Central Warehouse Jabalpur",
    binLocation: "B-01-003",
    quantity: "1.8",
    unit: "Tons",
    receivedDate: "2024-08-15",
    expiryDate: "2024-11-15",
    daysToExpiry: 37,
    fifoSequence: 1,
    grade: "A",
    status: "Near Expiry",
    qrCode: "QR-2024-08-15-018",
  },
  {
    id: "STK-004",
    batchId: "BATCH-020",
    productType: "Pulp Sheets",
    warehouse: "Regional Hub Mandla",
    binLocation: "C-03-001",
    quantity: "2.2",
    unit: "Tons",
    receivedDate: "2024-09-01",
    expiryDate: "2024-12-01",
    daysToExpiry: 53,
    fifoSequence: 2,
    grade: "B",
    status: "Available",
    qrCode: "QR-2024-09-01-020",
  },
  {
    id: "STK-005",
    batchId: "BATCH-005",
    productType: "Bamboo Pulp",
    warehouse: "Central Warehouse Jabalpur",
    binLocation: "A-01-012",
    quantity: "1.5",
    unit: "Tons",
    receivedDate: "2024-07-10",
    expiryDate: "2024-10-10",
    daysToExpiry: 1,
    fifoSequence: 1,
    grade: "B",
    status: "Near Expiry",
    qrCode: "QR-2024-07-10-005",
  },
];

interface PickingOrder {
  id: string;
  orderNumber: string;
  customer: string;
  productType: string;
  requestedQty: string;
  status: "Pending" | "In Progress" | "Completed";
  createdDate: string;
  suggestedBatches: string[];
}

const mockOrders: PickingOrder[] = [
  {
    id: "PICK-001",
    orderNumber: "ORD-2024-1001",
    customer: "Export - Container CNT-789",
    productType: "Bamboo Pulp",
    requestedQty: "5.0 Tons",
    status: "Pending",
    createdDate: "2024-10-09",
    suggestedBatches: ["BATCH-008", "BATCH-012"],
  },
  {
    id: "PICK-002",
    orderNumber: "ORD-2024-1002",
    customer: "Domestic - Mumbai Client",
    productType: "Pulp Sheets",
    requestedQty: "2.0 Tons",
    status: "In Progress",
    createdDate: "2024-10-09",
    suggestedBatches: ["BATCH-018"],
  },
];

export default function FIFOPicking() {
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [showPickingList, setShowPickingList] = useState(false);

  const filteredStock = selectedProduct === "all" 
    ? mockStock 
    : mockStock.filter(item => item.productType === selectedProduct);

  const sortedStock = [...filteredStock].sort((a, b) => a.fifoSequence - b.fifoSequence);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-green-100 text-green-800";
      case "Reserved": return "bg-blue-100 text-blue-800";
      case "Near Expiry": return "bg-orange-100 text-orange-800";
      case "Expired": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getExpiryIndicator = (days: number) => {
    if (days <= 7) return { color: "bg-red-500", text: "text-red-600", icon: <AlertTriangle className="w-4 h-4" /> };
    if (days <= 30) return { color: "bg-orange-500", text: "text-orange-600", icon: <Clock className="w-4 h-4" /> };
    return { color: "bg-green-500", text: "text-green-600", icon: <CheckCircle className="w-4 h-4" /> };
  };

  const nearExpiryCount = mockStock.filter(s => s.daysToExpiry <= 30).length;
  const availableCount = mockStock.filter(s => s.status === "Available").length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Available Items</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{availableCount}</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600">Near Expiry (≤30d)</p>
              <p className="text-2xl font-bold text-orange-900 mt-2">{nearExpiryCount}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-orange-600 opacity-50" />
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Pending Picks</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{mockOrders.filter(o => o.status === "Pending").length}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-600">FIFO Compliance</p>
          <p className="text-2xl font-bold text-purple-900 mt-2">98%</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowPickingList(false)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !showPickingList
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            suppressHydrationWarning
          >
            Stock FIFO View
          </button>
          <button
            onClick={() => setShowPickingList(true)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              showPickingList
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            suppressHydrationWarning
          >
            Picking Orders
          </button>
        </div>
        {!showPickingList && (
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Products</option>
            <option value="Bamboo Pulp">Bamboo Pulp</option>
            <option value="Pulp Sheets">Pulp Sheets</option>
          </select>
        )}
      </div>

      {/* Stock FIFO View */}
      {!showPickingList && (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <TrendingUp className="w-5 h-5 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-1">FIFO Picking Logic</h3>
                <p className="text-xs text-blue-700">
                  Items are automatically sorted by receipt date. Pick from top to bottom for optimal FIFO compliance.
                  Items near expiry are highlighted for priority picking.
                </p>
              </div>
            </div>
          </div>

          {sortedStock.map((item) => {
            const expiryStatus = getExpiryIndicator(item.daysToExpiry);
            return (
              <div
                key={item.id}
                className={`bg-white border-2 rounded-lg p-6 hover:shadow-lg transition-shadow ${
                  item.daysToExpiry <= 7 ? "border-red-300" : 
                  item.daysToExpiry <= 30 ? "border-orange-300" : 
                  "border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-green-700">#{item.fifoSequence}</span>
                      </div>
                      <p className="text-xs text-center text-gray-500 mt-1">Pick Order</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Package className="w-5 h-5 text-gray-600" />
                        <h3 className="text-lg font-semibold text-gray-900">{item.productType}</h3>
                        <span className="px-2 py-1 bg-gray-900 text-white text-xs font-bold rounded">
                          Grade {item.grade}
                        </span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.warehouse} • {item.binLocation}</p>
                      <p className="text-xs text-gray-500 mt-1">Batch: {item.batchId} • QR: {item.qrCode}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{item.quantity}</p>
                    <p className="text-sm text-gray-600">{item.unit}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500">Received</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.receivedDate}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500">Expiry Date</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.expiryDate}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      {expiryStatus.icon}
                      <p className={`text-xs ml-1 ${expiryStatus.text}`}>Days to Expiry</p>
                    </div>
                    <p className={`text-sm font-bold ${expiryStatus.text}`}>
                      {item.daysToExpiry} days
                    </p>
                  </div>
                </div>

                {item.daysToExpiry <= 30 && (
                  <div className={`p-3 rounded-lg mb-4 ${
                    item.daysToExpiry <= 7 ? "bg-red-50 border border-red-200" : "bg-orange-50 border border-orange-200"
                  }`}>
                    <div className="flex items-center">
                      <AlertTriangle className={`w-5 h-5 mr-2 ${item.daysToExpiry <= 7 ? "text-red-600" : "text-orange-600"}`} />
                      <p className={`text-sm font-medium ${item.daysToExpiry <= 7 ? "text-red-700" : "text-orange-700"}`}>
                        {item.daysToExpiry <= 7 
                          ? "⚠️ URGENT: Near expiry - Pick immediately!" 
                          : "⚡ Priority item - Pick soon to avoid wastage"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                    Create Pick Order
                  </button>
                  <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                    Reserve
                  </button>
                  <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Picking Orders View */}
      {showPickingList && (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === "Completed" ? "bg-green-100 text-green-800" :
                      order.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Order: {order.orderNumber}</p>
                  <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                  <p className="text-xs text-gray-500 mt-1">Created: {order.createdDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{order.requestedQty}</p>
                  <p className="text-sm text-gray-600">{order.productType}</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-green-900 mb-2">✅ FIFO Suggested Batches (Pick in order):</p>
                <div className="flex flex-wrap gap-2">
                  {order.suggestedBatches.map((batch, idx) => (
                    <div key={batch} className="flex items-center bg-white border border-green-300 rounded px-3 py-2">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-gray-900">{batch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                {order.status === "Pending" && (
                  <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                    Start Picking
                  </button>
                )}
                {order.status === "In Progress" && (
                  <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                    Complete Pick
                  </button>
                )}
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                  Print Pick List
                </button>
                <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

