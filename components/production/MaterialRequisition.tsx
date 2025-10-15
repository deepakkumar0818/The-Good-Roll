"use client";

import { useState } from "react";
import { Plus, Package, Clock, CheckCircle, XCircle } from "lucide-react";

interface Requisition {
  id: string;
  requestedBy: string;
  factory: string;
  line: string;
  material: string;
  quantity: string;
  unit: string;
  requestDate: string;
  requiredBy: string;
  status: "Pending" | "Approved" | "In Transit" | "Delivered" | "Rejected";
  priority: "High" | "Medium" | "Low";
}

const mockRequisitions: Requisition[] = [
  {
    id: "MR-001",
    requestedBy: "Kwabena Mensah",
    factory: "Factory A - Kumasi",
    line: "Line 1 - Pulp Processing",
    material: "Raw Bamboo",
    quantity: "10",
    unit: "Tons",
    requestDate: "2024-10-09 08:00",
    requiredBy: "2024-10-09 14:00",
    status: "Pending",
    priority: "High",
  },
  {
    id: "MR-002",
    requestedBy: "Akosua Boateng",
    factory: "Factory A - Kumasi",
    line: "Line 2 - Sheet Formation",
    material: "Processing Chemicals",
    quantity: "50",
    unit: "Liters",
    requestDate: "2024-10-09 07:30",
    requiredBy: "2024-10-10 08:00",
    status: "Approved",
    priority: "Medium",
  },
  {
    id: "MR-003",
    requestedBy: "Yaw Owusu",
    factory: "Factory B - Accra",
    line: "Line 1 - Pulp Processing",
    material: "Raw Bamboo",
    quantity: "8",
    unit: "Tons",
    requestDate: "2024-10-09 06:00",
    requiredBy: "2024-10-09 12:00",
    status: "In Transit",
    priority: "High",
  },
  {
    id: "MR-004",
    requestedBy: "Kofi Asante",
    factory: "Factory A - Kumasi",
    line: "Line 4 - Packaging",
    material: "Packaging Material",
    quantity: "500",
    unit: "Units",
    requestDate: "2024-10-08 15:00",
    requiredBy: "2024-10-09 08:00",
    status: "Delivered",
    priority: "Low",
  },
];

export default function MaterialRequisition() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredRequisitions = filterStatus === "all"
    ? mockRequisitions
    : mockRequisitions.filter(req => req.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-blue-100 text-blue-800";
      case "In Transit": return "bg-purple-100 text-purple-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600";
      case "Medium": return "text-orange-600";
      case "Low": return "text-gray-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-800">Pending Approval</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">
            {mockRequisitions.filter(r => r.status === "Pending").length}
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-800">Approved</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">
            {mockRequisitions.filter(r => r.status === "Approved").length}
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-800">In Transit</p>
          <p className="text-2xl font-bold text-purple-900 mt-2">
            {mockRequisitions.filter(r => r.status === "In Transit").length}
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-800">Delivered Today</p>
          <p className="text-2xl font-bold text-green-900 mt-2">
            {mockRequisitions.filter(r => r.status === "Delivered").length}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          New Requisition
        </button>
      </div>

      {/* Requisition Form */}
      {showForm && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Material Requisition Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Factory</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Factory A - Kumasi</option>
                <option>Factory B - Accra</option>
                <option>Factory C - Takoradi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Production Line</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Line 1 - Pulp Processing</option>
                <option>Line 2 - Sheet Formation</option>
                <option>Line 3 - Drying Unit</option>
                <option>Line 4 - Packaging</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Material Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Raw Bamboo</option>
                <option>Processing Chemicals</option>
                <option>Packaging Material</option>
                <option>Machine Parts</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input type="number" placeholder="Enter quantity" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Tons</option>
                <option>Liters</option>
                <option>Units</option>
                <option>Kg</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Required By</label>
              <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <input type="text" placeholder="Additional notes..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Submit Requisition
            </button>
          </div>
        </div>
      )}

      {/* Requisitions Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Req ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Factory / Line</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Required By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRequisitions.map((req) => (
                <tr key={req.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{req.id}</div>
                    <div className="text-xs text-gray-500">{req.requestedBy}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Package className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{req.material}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{req.factory}</div>
                    <div className="text-xs text-gray-500">{req.line}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {req.quantity} {req.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900">
                      <Clock className="w-4 h-4 text-gray-400 mr-1" />
                      {req.requiredBy}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-semibold ${getPriorityColor(req.priority)}`}>
                      {req.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(req.status)}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      {req.status === "Pending" && (
                        <>
                          <button className="text-green-600 hover:text-green-900" suppressHydrationWarning>
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900" suppressHydrationWarning>
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button className="text-blue-600 hover:text-blue-900 text-sm" suppressHydrationWarning>
                        Details
                      </button>
                    </div>
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

