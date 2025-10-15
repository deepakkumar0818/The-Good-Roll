"use client";

import { useState } from "react";
import { Container, Plus, Package, TrendingUp, AlertCircle, CheckCircle, Truck } from "lucide-react";

interface ContainerData {
  id: string;
  containerNumber: string;
  type: "20ft" | "40ft";
  maxCapacity: number; // in tons
  currentLoad: number; // in tons
  utilization: number; // percentage
  status: "Planning" | "Loading" | "Sealed" | "In Transit" | "Delivered";
  destination: string;
  loadedBatches: {
    batchId: string;
    productType: string;
    quantity: number;
    grade: string;
  }[];
  estimatedDepartureDate: string;
  portOfLoading: string;
  portOfDischarge: string;
}

const mockContainers: ContainerData[] = [
  {
    id: "CNT-001",
    containerNumber: "MSCU7654321",
    type: "20ft",
    maxCapacity: 20,
    currentLoad: 18.5,
    utilization: 92.5,
    status: "Loading",
    destination: "USA - California",
    loadedBatches: [
      { batchId: "BATCH-008", productType: "Bamboo Pulp - Grade A", quantity: 8.5, grade: "A" },
      { batchId: "BATCH-012", productType: "Bamboo Pulp - Grade A", quantity: 7.0, grade: "A" },
      { batchId: "BATCH-018", productType: "Pulp Sheets - Grade A", quantity: 3.0, grade: "A" },
    ],
    estimatedDepartureDate: "2024-10-15",
    portOfLoading: "Mumbai Port",
    portOfDischarge: "Los Angeles",
  },
  {
    id: "CNT-002",
    containerNumber: "HLCU4567890",
    type: "40ft",
    maxCapacity: 40,
    currentLoad: 12.0,
    utilization: 30,
    status: "Planning",
    destination: "Europe - Netherlands",
    loadedBatches: [
      { batchId: "BATCH-020", productType: "Pulp Sheets - Grade A", quantity: 7.0, grade: "A" },
      { batchId: "BATCH-022", productType: "Bamboo Pulp - Grade B", quantity: 5.0, grade: "B" },
    ],
    estimatedDepartureDate: "2024-10-20",
    portOfLoading: "Mumbai Port",
    portOfDischarge: "Rotterdam",
  },
  {
    id: "CNT-003",
    containerNumber: "TEMU1234567",
    type: "20ft",
    maxCapacity: 20,
    currentLoad: 20.0,
    utilization: 100,
    status: "Sealed",
    destination: "Japan - Tokyo",
    loadedBatches: [
      { batchId: "BATCH-015", productType: "Bamboo Pulp - Grade A", quantity: 10.0, grade: "A" },
      { batchId: "BATCH-016", productType: "Pulp Sheets - Grade A", quantity: 10.0, grade: "A" },
    ],
    estimatedDepartureDate: "2024-10-12",
    portOfLoading: "Mumbai Port",
    portOfDischarge: "Tokyo Port",
  },
];

interface AvailableBatch {
  batchId: string;
  productType: string;
  quantity: number;
  warehouse: string;
  grade: string;
}

const availableBatches: AvailableBatch[] = [
  { batchId: "BATCH-025", productType: "Bamboo Pulp - Grade A", quantity: 4.5, warehouse: "Central Warehouse", grade: "A" },
  { batchId: "BATCH-026", productType: "Pulp Sheets - Grade A", quantity: 3.2, warehouse: "Central Warehouse", grade: "A" },
  { batchId: "BATCH-027", productType: "Bamboo Pulp - Grade B", quantity: 5.0, warehouse: "Regional Hub Mandla", grade: "B" },
  { batchId: "BATCH-028", productType: "Pulp Sheets - Grade B", quantity: 2.8, warehouse: "Regional Hub Mandla", grade: "B" },
];

export default function ContainerPlanning() {
  const [showNewContainer, setShowNewContainer] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState<string | null>(null);
  const [showLoadingPlanner, setShowLoadingPlanner] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planning": return "bg-blue-100 text-blue-800";
      case "Loading": return "bg-yellow-100 text-yellow-800";
      case "Sealed": return "bg-purple-100 text-purple-800";
      case "In Transit": return "bg-orange-100 text-orange-800";
      case "Delivered": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUtilizationColor = (utilization: number) => {
    if (utilization >= 90) return "text-green-600";
    if (utilization >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const stats = {
    totalContainers: mockContainers.length,
    inPlanning: mockContainers.filter(c => c.status === "Planning").length,
    loading: mockContainers.filter(c => c.status === "Loading").length,
    avgUtilization: Math.round(mockContainers.reduce((sum, c) => sum + c.utilization, 0) / mockContainers.length),
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Containers</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.totalContainers}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-600">In Planning</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.inPlanning}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Currently Loading</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.loading}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Avg Utilization</p>
              <p className="text-2xl font-bold text-purple-900 mt-2">{stats.avgUtilization}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600 opacity-50" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={() => setShowNewContainer(!showNewContainer)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          Plan New Container
        </button>
        <button
          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          suppressHydrationWarning
        >
          <Package className="w-5 h-5 mr-2" />
          View Available Stock
        </button>
      </div>

      {/* New Container Form */}
      {showNewContainer && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan New Container</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Container Number</label>
              <input type="text" placeholder="e.g., MSCU7654321" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Container Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>20ft (20 Tons)</option>
                <option>40ft (40 Tons)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <input type="text" placeholder="e.g., USA - California" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Port of Loading</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Mumbai Port</option>
                <option>Chennai Port</option>
                <option>Kolkata Port</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Port of Discharge</label>
              <input type="text" placeholder="e.g., Los Angeles" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Est. Departure Date</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button onClick={() => setShowNewContainer(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Create Container Plan
            </button>
          </div>
        </div>
      )}

      {/* Container List */}
      <div className="space-y-4">
        {mockContainers.map((container) => (
          <div key={container.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Container className="w-6 h-6 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{container.containerNumber}</h3>
                  <span className="px-2 py-1 bg-gray-900 text-white text-xs font-bold rounded">
                    {container.type}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(container.status)}`}>
                    {container.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{container.destination}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {container.portOfLoading} → {container.portOfDischarge}
                </p>
              </div>
              <div className="text-right">
                <p className={`text-3xl font-bold ${getUtilizationColor(container.utilization)}`}>
                  {container.utilization}%
                </p>
                <p className="text-sm text-gray-600">Utilization</p>
                <p className="text-xs text-gray-500 mt-1">
                  {container.currentLoad}T / {container.maxCapacity}T
                </p>
              </div>
            </div>

            {/* Capacity Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    container.utilization >= 90 ? "bg-green-500" :
                    container.utilization >= 70 ? "bg-yellow-500" :
                    "bg-red-500"
                  }`}
                  style={{ width: `${container.utilization}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">0T</span>
                <span className="text-xs font-semibold text-gray-700">
                  {container.maxCapacity - container.currentLoad}T remaining
                </span>
                <span className="text-xs text-gray-500">{container.maxCapacity}T</span>
              </div>
            </div>

            {/* Loaded Batches */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Loaded Batches</h4>
              <div className="space-y-2">
                {container.loadedBatches.map((batch, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-white border border-gray-200 rounded p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <Package className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{batch.batchId}</p>
                        <p className="text-xs text-gray-600">{batch.productType}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{batch.quantity}T</p>
                      <p className="text-xs text-gray-500">Grade {batch.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departure Info */}
            <div className="flex items-center justify-between mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-900">
                  Est. Departure: <span className="font-semibold">{container.estimatedDepartureDate}</span>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              {container.status === "Planning" && (
                <button
                  onClick={() => {
                    setSelectedContainer(container.id);
                    setShowLoadingPlanner(true);
                  }}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  suppressHydrationWarning
                >
                  Add More Batches
                </button>
              )}
              {container.status === "Loading" && (
                <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                  Complete & Seal
                </button>
              )}
              {container.utilization < 90 && container.status === "Planning" && (
                <div className="flex items-center px-3 py-2 bg-orange-50 border border-orange-200 rounded text-sm text-orange-700">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Optimize capacity ({(container.maxCapacity - container.currentLoad).toFixed(1)}T space available)
                </div>
              )}
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                View Details
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Export Manifest
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loading Planner Modal */}
      {showLoadingPlanner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Add Batches to Container</h3>
            
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-900">
                <strong>Smart Loading Algorithm:</strong> System automatically suggests batches based on FIFO,
                expiry dates, and optimal container utilization.
              </p>
            </div>

            <div className="space-y-3">
              {availableBatches.map((batch) => (
                <div key={batch.batchId} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100">
                  <div className="flex items-center space-x-4">
                    <input type="checkbox" className="w-5 h-5 text-green-600" suppressHydrationWarning />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{batch.batchId}</p>
                      <p className="text-xs text-gray-600">{batch.productType}</p>
                      <p className="text-xs text-gray-500">{batch.warehouse}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{batch.quantity}T</p>
                    <p className="text-xs text-gray-500">Grade {batch.grade}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowLoadingPlanner(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                suppressHydrationWarning
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
                Add Selected Batches
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

