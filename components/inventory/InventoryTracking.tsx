"use client";

import { useState } from "react";
import { Plus, QrCode, Search, Download, Upload, CheckCircle, XCircle, Clock } from "lucide-react";

interface Movement {
  id: string;
  type: "Inward" | "Outward";
  date: string;
  time: string;
  warehouse: string;
  binLocation: string;
  productType: string;
  batchId: string;
  quantity: string;
  unit: string;
  qrCode: string;
  barcode: string;
  status: "Completed" | "Pending" | "In Progress";
  processedBy: string;
  notes: string;
}

const mockMovements: Movement[] = [
  {
    id: "INW-001",
    type: "Inward",
    date: "2024-10-09",
    time: "08:30",
    warehouse: "Central Warehouse Jabalpur",
    binLocation: "A-01-001",
    productType: "Bamboo Pulp - Grade A",
    batchId: "BATCH-001",
    quantity: "4.5",
    unit: "Tons",
    qrCode: "QR-2024-10-09-001",
    barcode: "BC-890123456789",
    status: "Completed",
    processedBy: "Ramesh Kumar",
    notes: "Fresh production batch from Factory A",
  },
  {
    id: "OUT-001",
    type: "Outward",
    date: "2024-10-09",
    time: "10:15",
    warehouse: "Central Warehouse Jabalpur",
    binLocation: "A-02-005",
    productType: "Pulp Sheets - Grade A",
    batchId: "BATCH-015",
    quantity: "2.0",
    unit: "Tons",
    qrCode: "QR-2024-09-28-015",
    barcode: "BC-890123456720",
    status: "Completed",
    processedBy: "Suresh Patel",
    notes: "Export order - Container CNT-456",
  },
  {
    id: "INW-002",
    type: "Inward",
    date: "2024-10-09",
    time: "11:00",
    warehouse: "Regional Hub Mandla",
    binLocation: "B-03-002",
    productType: "Bamboo Pulp - Grade B",
    batchId: "BATCH-002",
    quantity: "3.8",
    unit: "Tons",
    qrCode: "QR-2024-10-09-002",
    barcode: "BC-890123456790",
    status: "In Progress",
    processedBy: "Mahesh Singh",
    notes: "Transfer from Factory B - Line 2",
  },
  {
    id: "OUT-002",
    type: "Outward",
    date: "2024-10-09",
    time: "09:45",
    warehouse: "Export Warehouse Mumbai Port",
    binLocation: "C-01-010",
    productType: "Pulp Sheets - Grade A",
    batchId: "BATCH-008",
    quantity: "5.0",
    unit: "Tons",
    qrCode: "QR-2024-09-20-008",
    barcode: "BC-890123456701",
    status: "Completed",
    processedBy: "Prakash Verma",
    notes: "Export shipment - Ship SS Mumbai Express",
  },
];

export default function InventoryTracking() {
  const [showForm, setShowForm] = useState(false);
  const [movementType, setMovementType] = useState<"Inward" | "Outward">("Inward");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredMovements = mockMovements.filter(movement => {
    const matchesSearch = 
      movement.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.qrCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.barcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movement.batchId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || movement.type === filterType;
    const matchesStatus = filterStatus === "all" || movement.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getTypeColor = (type: string) => {
    return type === "Inward" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    inwardToday: mockMovements.filter(m => m.type === "Inward" && m.date === "2024-10-09").length,
    outwardToday: mockMovements.filter(m => m.type === "Outward" && m.date === "2024-10-09").length,
    inProgress: mockMovements.filter(m => m.status === "In Progress").length,
    completed: mockMovements.filter(m => m.status === "Completed").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Inward Today</p>
              <p className="text-2xl font-bold text-green-900 mt-2">{stats.inwardToday}</p>
            </div>
            <Upload className="w-8 h-8 text-green-600 opacity-50" />
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Outward Today</p>
              <p className="text-2xl font-bold text-blue-900 mt-2">{stats.outwardToday}</p>
            </div>
            <Download className="w-8 h-8 text-blue-600 opacity-50" />
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600">In Progress</p>
              <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.inProgress}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-600 opacity-50" />
          </div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Completed</p>
              <p className="text-2xl font-bold text-purple-900 mt-2">{stats.completed}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-600 opacity-50" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID, QR Code, Barcode, or Batch ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              suppressHydrationWarning
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Types</option>
            <option value="Inward">Inward</option>
            <option value="Outward">Outward</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            suppressHydrationWarning
          >
            <Plus className="w-5 h-5 mr-2" />
            New Movement
          </button>
        </div>
      </div>

      {/* Movement Form */}
      {showForm && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Record Inventory Movement</h3>
          
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setMovementType("Inward")}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                movementType === "Inward"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              suppressHydrationWarning
            >
              <Upload className="w-5 h-5 inline mr-2" />
              Inward Receipt
            </button>
            <button
              onClick={() => setMovementType("Outward")}
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                movementType === "Outward"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              suppressHydrationWarning
            >
              <Download className="w-5 h-5 inline mr-2" />
              Outward Issue
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Warehouse</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Central Warehouse Jabalpur</option>
                <option>Regional Hub Mandla</option>
                <option>Export Warehouse Mumbai Port</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bin Location</label>
              <input type="text" placeholder="e.g., A-01-001" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Bamboo Pulp - Grade A</option>
                <option>Bamboo Pulp - Grade B</option>
                <option>Pulp Sheets - Grade A</option>
                <option>Pulp Sheets - Grade B</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Batch ID</label>
              <input type="text" placeholder="BATCH-XXX" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <div className="flex gap-2">
                <input type="number" step="0.1" placeholder="0.0" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
                <select className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                  <option>Tons</option>
                  <option>Kg</option>
                  <option>Units</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Scan QR Code</label>
              <button className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors flex items-center justify-center" suppressHydrationWarning>
                <QrCode className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">Scan QR</span>
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Barcode</label>
              <input type="text" placeholder="Scan or enter barcode" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Processed By</label>
              <input type="text" placeholder="Operator name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
              <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea rows={2} placeholder="Additional notes..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning></textarea>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button onClick={() => setShowForm(false)} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Record Movement
            </button>
          </div>
        </div>
      )}

      {/* Movements List */}
      <div className="space-y-4">
        {filteredMovements.map((movement) => (
          <div key={movement.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {movement.type === "Inward" ? (
                    <Upload className="w-5 h-5 text-green-600" />
                  ) : (
                    <Download className="w-5 h-5 text-blue-600" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{movement.id}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(movement.type)}`}>
                    {movement.type}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(movement.status)}`}>
                    {movement.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{movement.warehouse} • {movement.binLocation}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {movement.date} at {movement.time} • By {movement.processedBy}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs text-gray-500 mb-1">Product</p>
                <p className="text-sm font-medium text-gray-900">{movement.productType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Batch ID</p>
                <p className="text-sm font-medium text-gray-900">{movement.batchId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Quantity</p>
                <p className="text-sm font-semibold text-gray-900">{movement.quantity} {movement.unit}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 flex items-center">
                  <QrCode className="w-3 h-3 mr-1" /> QR / Barcode
                </p>
                <p className="text-xs font-mono text-gray-900">{movement.qrCode}</p>
                <p className="text-xs font-mono text-gray-600">{movement.barcode}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs text-gray-500 mb-1">Notes:</p>
              <p className="text-sm text-gray-700">{movement.notes}</p>
            </div>

            <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                View Details
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Print Label
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Export
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

