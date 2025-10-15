"use client";

import { useState } from "react";
import { Warehouse, Package, AlertTriangle, TrendingUp, Plus, Edit2, MapPin } from "lucide-react";

interface WarehouseData {
  id: string;
  name: string;
  location: string;
  type: "Main" | "Regional" | "Transit";
  capacity: string;
  utilization: number;
  totalBins: number;
  occupiedBins: number;
  products: {
    pulp: string;
    sheets: string;
  };
  status: "Active" | "Maintenance" | "Full";
}

const mockWarehouses: WarehouseData[] = [
  {
    id: "WH-001",
    name: "Central Warehouse Jabalpur",
    location: "Jabalpur, MP",
    type: "Main",
    capacity: "500 Tons",
    utilization: 78,
    totalBins: 120,
    occupiedBins: 94,
    products: {
      pulp: "280 Tons",
      sheets: "110 Tons",
    },
    status: "Active",
  },
  {
    id: "WH-002",
    name: "Regional Hub Mandla",
    location: "Mandla, MP",
    type: "Regional",
    capacity: "300 Tons",
    utilization: 62,
    products: {
      pulp: "150 Tons",
      sheets: "36 Tons",
    },
    totalBins: 80,
    occupiedBins: 50,
    status: "Active",
  },
  {
    id: "WH-003",
    name: "Export Warehouse Mumbai Port",
    location: "Mumbai, MH",
    type: "Transit",
    capacity: "200 Tons",
    utilization: 45,
    products: {
      pulp: "60 Tons",
      sheets: "30 Tons",
    },
    totalBins: 50,
    occupiedBins: 23,
    status: "Active",
  },
  {
    id: "WH-004",
    name: "Regional Hub Seoni",
    location: "Seoni, MP",
    type: "Regional",
    capacity: "250 Tons",
    utilization: 92,
    products: {
      pulp: "180 Tons",
      sheets: "50 Tons",
    },
    totalBins: 60,
    occupiedBins: 55,
    status: "Active",
  },
];

interface BinData {
  binId: string;
  location: string;
  productType: string;
  quantity: string;
  status: "Available" | "Full" | "Reserved" | "Empty";
  lastUpdated: string;
}

const mockBins: BinData[] = [
  {
    binId: "A-01-001",
    location: "Aisle A, Rack 01, Level 1",
    productType: "Bamboo Pulp - Grade A",
    quantity: "4.5 Tons",
    status: "Full",
    lastUpdated: "2024-10-09 08:30",
  },
  {
    binId: "A-01-002",
    location: "Aisle A, Rack 01, Level 2",
    productType: "Pulp Sheets - Grade A",
    quantity: "3.2 Tons",
    status: "Available",
    lastUpdated: "2024-10-09 09:15",
  },
  {
    binId: "A-01-003",
    location: "Aisle A, Rack 01, Level 3",
    productType: "Empty",
    quantity: "0 Tons",
    status: "Empty",
    lastUpdated: "2024-10-08 16:00",
  },
  {
    binId: "B-02-001",
    location: "Aisle B, Rack 02, Level 1",
    productType: "Bamboo Pulp - Grade B",
    quantity: "5.0 Tons",
    status: "Reserved",
    lastUpdated: "2024-10-09 07:00",
  },
];

export default function WarehouseOverview() {
  const [selectedWarehouse, setSelectedWarehouse] = useState<string>("WH-001");
  const [showBinView, setShowBinView] = useState(false);

  const totalCapacity = mockWarehouses.reduce((sum, wh) => sum + parseInt(wh.capacity), 0);
  const avgUtilization = Math.round(
    mockWarehouses.reduce((sum, wh) => sum + wh.utilization, 0) / mockWarehouses.length
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Maintenance": return "bg-yellow-100 text-yellow-800";
      case "Full": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getBinStatusColor = (status: string) => {
    switch (status) {
      case "Full": return "bg-green-100 text-green-800";
      case "Available": return "bg-blue-100 text-blue-800";
      case "Reserved": return "bg-yellow-100 text-yellow-800";
      case "Empty": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Total Warehouses</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">{mockWarehouses.length}</p>
            </div>
            <Warehouse className="w-12 h-12 text-blue-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Total Capacity</p>
              <p className="text-3xl font-bold text-green-900 mt-2">{totalCapacity}T</p>
            </div>
            <Package className="w-12 h-12 text-green-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Avg Utilization</p>
              <p className="text-3xl font-bold text-purple-900 mt-2">{avgUtilization}%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-purple-600 opacity-50" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600">Total Bins</p>
              <p className="text-3xl font-bold text-orange-900 mt-2">
                {mockWarehouses.reduce((sum, wh) => sum + wh.totalBins, 0)}
              </p>
            </div>
            <AlertTriangle className="w-12 h-12 text-orange-600 opacity-50" />
          </div>
        </div>
      </div>

      {/* Toggle View */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowBinView(false)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !showBinView
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            suppressHydrationWarning
          >
            Warehouse View
          </button>
          <button
            onClick={() => setShowBinView(true)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              showBinView
                ? "bg-green-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            suppressHydrationWarning
          >
            Bin-Level View
          </button>
        </div>
        <button
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Warehouse
        </button>
      </div>

      {/* Warehouse View */}
      {!showBinView && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockWarehouses.map((warehouse) => (
            <div
              key={warehouse.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Warehouse className="w-6 h-6 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{warehouse.name}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(warehouse.status)}`}>
                      {warehouse.status}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {warehouse.location}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {warehouse.id} • {warehouse.type} Warehouse
                  </p>
                </div>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded" suppressHydrationWarning>
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Capacity</p>
                  <p className="text-sm font-semibold text-gray-900">{warehouse.capacity}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Bin Status</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {warehouse.occupiedBins}/{warehouse.totalBins} Used
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Pulp Stock</p>
                  <p className="text-sm font-semibold text-gray-900">{warehouse.products.pulp}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Sheets Stock</p>
                  <p className="text-sm font-semibold text-gray-900">{warehouse.products.sheets}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">Utilization</span>
                  <span className="text-sm font-semibold text-gray-900">{warehouse.utilization}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      warehouse.utilization >= 90 ? "bg-red-500" :
                      warehouse.utilization >= 70 ? "bg-yellow-500" :
                      "bg-green-500"
                    }`}
                    style={{ width: `${warehouse.utilization}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  suppressHydrationWarning
                >
                  View Details
                </button>
                <button
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
                  suppressHydrationWarning
                >
                  Manage Bins
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bin-Level View */}
      {showBinView && (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <select
              value={selectedWarehouse}
              onChange={(e) => setSelectedWarehouse(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              suppressHydrationWarning
            >
              {mockWarehouses.map((wh) => (
                <option key={wh.id} value={wh.id}>
                  {wh.name}
                </option>
              ))}
            </select>
            <button
              className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              suppressHydrationWarning
            >
              <Package className="w-4 h-4 mr-2" />
              Add Bin
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bin ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockBins.map((bin) => (
                  <tr key={bin.binId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{bin.binId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{bin.location}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{bin.productType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">{bin.quantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getBinStatusColor(bin.status)}`}>
                        {bin.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xs text-gray-500">{bin.lastUpdated}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-900 text-sm" suppressHydrationWarning>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

