"use client";

import { useState } from "react";
import { Package, Search, QrCode, TrendingUp, AlertCircle } from "lucide-react";

interface Batch {
  id: string;
  lotNumber: string;
  productType: "Pulp" | "Sheets";
  factory: string;
  productionLine: string;
  quantity: string;
  unit: string;
  productionDate: string;
  qualityGrade: "A" | "B" | "C";
  status: "In Production" | "Quality Check" | "Approved" | "Shipped" | "Rejected";
  shift: string;
  operator: string;
}

const mockBatches: Batch[] = [
  {
    id: "BATCH-001",
    lotNumber: "LOT-2024-10-09-001",
    productType: "Pulp",
    factory: "Factory A - Kumasi",
    productionLine: "Line 1",
    quantity: "4.2",
    unit: "Tons",
    productionDate: "2024-10-09",
    qualityGrade: "A",
    status: "Approved",
    shift: "Morning",
    operator: "Kwabena Mensah",
  },
  {
    id: "BATCH-002",
    lotNumber: "LOT-2024-10-09-002",
    productType: "Sheets",
    factory: "Factory A - Kumasi",
    productionLine: "Line 2",
    quantity: "3.8",
    unit: "Tons",
    productionDate: "2024-10-09",
    qualityGrade: "A",
    status: "Quality Check",
    shift: "Morning",
    operator: "Akosua Boateng",
  },
  {
    id: "BATCH-003",
    lotNumber: "LOT-2024-10-09-003",
    productType: "Pulp",
    factory: "Factory B - Accra",
    productionLine: "Line 1",
    quantity: "4.1",
    unit: "Tons",
    productionDate: "2024-10-09",
    qualityGrade: "B",
    status: "In Production",
    shift: "Morning",
    operator: "Yaw Owusu",
  },
  {
    id: "BATCH-004",
    lotNumber: "LOT-2024-10-08-015",
    productType: "Sheets",
    factory: "Factory A - Kumasi",
    productionLine: "Line 2",
    quantity: "3.5",
    unit: "Tons",
    productionDate: "2024-10-08",
    qualityGrade: "A",
    status: "Shipped",
    shift: "Afternoon",
    operator: "Kofi Asante",
  },
  {
    id: "BATCH-005",
    lotNumber: "LOT-2024-10-08-016",
    productType: "Pulp",
    factory: "Factory C - Takoradi",
    productionLine: "Line 1",
    quantity: "3.2",
    unit: "Tons",
    productionDate: "2024-10-08",
    qualityGrade: "C",
    status: "Rejected",
    shift: "Night",
    operator: "Ama Boateng",
  },
];

export default function BatchTracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterProduct, setFilterProduct] = useState("all");

  const filteredBatches = mockBatches.filter(batch => {
    const matchesSearch = batch.lotNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         batch.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || batch.status === filterStatus;
    const matchesProduct = filterProduct === "all" || batch.productType === filterProduct;
    return matchesSearch && matchesStatus && matchesProduct;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Production": return "bg-blue-100 text-blue-800";
      case "Quality Check": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-green-100 text-green-800";
      case "Shipped": return "bg-purple-100 text-purple-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A": return "bg-green-100 text-green-800 border-green-300";
      case "B": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "C": return "bg-red-100 text-red-800 border-red-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const stats = {
    totalBatches: mockBatches.length,
    inProduction: mockBatches.filter(b => b.status === "In Production").length,
    qualityCheck: mockBatches.filter(b => b.status === "Quality Check").length,
    approved: mockBatches.filter(b => b.status === "Approved").length,
    avgQuality: "A",
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Total Batches Today</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalBatches}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs text-blue-600 mb-1">In Production</p>
          <p className="text-2xl font-bold text-blue-900">{stats.inProduction}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-xs text-yellow-600 mb-1">Quality Check</p>
          <p className="text-2xl font-bold text-yellow-900">{stats.qualityCheck}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs text-green-600 mb-1">Approved</p>
          <p className="text-2xl font-bold text-green-900">{stats.approved}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-xs text-purple-600 mb-1">Avg Quality Grade</p>
          <p className="text-2xl font-bold text-purple-900">{stats.avgQuality}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by batch ID or lot number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              suppressHydrationWarning
            />
          </div>
          <select
            value={filterProduct}
            onChange={(e) => setFilterProduct(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Products</option>
            <option value="Pulp">Pulp</option>
            <option value="Sheets">Sheets</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Status</option>
            <option value="In Production">In Production</option>
            <option value="Quality Check">Quality Check</option>
            <option value="Approved">Approved</option>
            <option value="Shipped">Shipped</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Batches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBatches.map((batch) => (
          <div key={batch.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <QrCode className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-semibold text-gray-900">{batch.id}</span>
                </div>
                <p className="text-xs text-gray-500">{batch.lotNumber}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(batch.status)}`}>
                {batch.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Product Type</span>
                <span className="text-sm font-medium text-gray-900">{batch.productType}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Quantity</span>
                <span className="text-sm font-medium text-gray-900">{batch.quantity} {batch.unit}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Quality Grade</span>
                <span className={`px-2 py-1 text-xs font-bold rounded border ${getGradeColor(batch.qualityGrade)}`}>
                  Grade {batch.qualityGrade}
                </span>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Production Details</div>
                <div className="text-xs text-gray-700">{batch.factory}</div>
                <div className="text-xs text-gray-700">{batch.productionLine} • {batch.shift} Shift</div>
                <div className="text-xs text-gray-700">Operator: {batch.operator}</div>
                <div className="text-xs text-gray-500 mt-1">{batch.productionDate}</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
              <button className="flex-1 px-3 py-2 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50" suppressHydrationWarning>
                View Details
              </button>
              <button className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 border border-gray-300 rounded hover:bg-gray-50" suppressHydrationWarning>
                Print QR
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBatches.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No batches found matching your criteria</p>
        </div>
      )}
    </div>
  );
}

