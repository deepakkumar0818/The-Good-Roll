"use client";

import { useState } from "react";
import { Plus, Play, Pause, Settings, Users, Clock } from "lucide-react";

interface ProductionLine {
  id: string;
  name: string;
  factory: string;
  status: "Running" | "Idle" | "Maintenance" | "Setup";
  product: string;
  shift: string;
  operator: string;
  efficiency: number;
  output: string;
  startTime: string;
}

const mockLines: ProductionLine[] = [
  {
    id: "PL-001",
    name: "Line 1 - Pulp Processing",
    factory: "Factory A - Kumasi",
    status: "Running",
    product: "Bamboo Pulp",
    shift: "Morning (6 AM - 2 PM)",
    operator: "Kwabena Mensah",
    efficiency: 94,
    output: "4.2T",
    startTime: "06:00 AM",
  },
  {
    id: "PL-002",
    name: "Line 2 - Sheet Formation",
    factory: "Factory A - Kumasi",
    status: "Running",
    product: "Pulp Sheets",
    shift: "Morning (6 AM - 2 PM)",
    operator: "Akosua Boateng",
    efficiency: 89,
    output: "3.8T",
    startTime: "06:00 AM",
  },
  {
    id: "PL-003",
    name: "Line 3 - Drying Unit",
    factory: "Factory A - Kumasi",
    status: "Maintenance",
    product: "-",
    shift: "-",
    operator: "-",
    efficiency: 0,
    output: "0T",
    startTime: "-",
  },
  {
    id: "PL-004",
    name: "Line 4 - Packaging",
    factory: "Factory A - Kumasi",
    status: "Idle",
    product: "-",
    shift: "Morning (6 AM - 2 PM)",
    operator: "Waiting",
    efficiency: 0,
    output: "0T",
    startTime: "-",
  },
  {
    id: "PL-005",
    name: "Line 1 - Pulp Processing",
    factory: "Factory B - Accra",
    status: "Running",
    product: "Bamboo Pulp",
    shift: "Morning (6 AM - 2 PM)",
    operator: "Yaw Owusu",
    efficiency: 92,
    output: "4.1T",
    startTime: "06:00 AM",
  },
];

export default function ProductionLines() {
  const [showSetupForm, setShowSetupForm] = useState(false);
  const [selectedFactory, setSelectedFactory] = useState("all");

  const factories = ["all", "Factory A - Kumasi", "Factory B - Accra", "Factory C - Takoradi"];

  const filteredLines = selectedFactory === "all" 
    ? mockLines 
    : mockLines.filter(line => line.factory === selectedFactory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running": return "bg-green-100 text-green-800";
      case "Idle": return "bg-yellow-100 text-yellow-800";
      case "Maintenance": return "bg-red-100 text-red-800";
      case "Setup": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Factory</label>
            <select
              value={selectedFactory}
              onChange={(e) => setSelectedFactory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              suppressHydrationWarning
            >
              {factories.map((factory) => (
                <option key={factory} value={factory}>
                  {factory === "all" ? "All Factories" : factory}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={() => setShowSetupForm(!showSetupForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          Setup New Line
        </button>
      </div>

      {/* Setup Form */}
      {showSetupForm && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Production Line Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Factory</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Select Factory</option>
                <option>Factory A - Kumasi</option>
                <option>Factory B - Accra</option>
                <option>Factory C - Takoradi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Line Name</label>
              <input
                type="text"
                placeholder="e.g., Line 1 - Pulp Processing"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Select Product</option>
                <option>Bamboo Pulp</option>
                <option>Pulp Sheets</option>
                <option>Packaging</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Shift</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Morning (6 AM - 2 PM)</option>
                <option>Afternoon (2 PM - 10 PM)</option>
                <option>Night (10 PM - 6 AM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Line Supervisor</label>
              <input
                type="text"
                placeholder="Supervisor name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Capacity (Tons/Day)</label>
              <input
                type="number"
                placeholder="e.g., 5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                suppressHydrationWarning
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              onClick={() => setShowSetupForm(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              suppressHydrationWarning
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              suppressHydrationWarning
            >
              Setup Line
            </button>
          </div>
        </div>
      )}

      {/* Production Lines List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLines.map((line) => (
          <div key={line.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold text-gray-900">{line.name}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(line.status)}`}>
                    {line.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{line.factory}</p>
                <p className="text-xs text-gray-500 mt-1">ID: {line.id}</p>
              </div>
              <div className="flex space-x-2">
                {line.status === "Running" ? (
                  <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg" suppressHydrationWarning>
                    <Pause className="w-5 h-5" />
                  </button>
                ) : line.status === "Idle" ? (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg" suppressHydrationWarning>
                    <Play className="w-5 h-5" />
                  </button>
                ) : null}
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg" suppressHydrationWarning>
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Product</p>
                <p className="text-sm font-medium text-gray-900">{line.product}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Output Today</p>
                <p className="text-sm font-medium text-gray-900">{line.output}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 flex items-center">
                  <Users className="w-3 h-3 mr-1" /> Operator
                </p>
                <p className="text-sm font-medium text-gray-900">{line.operator}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> Shift
                </p>
                <p className="text-sm font-medium text-gray-900">{line.shift}</p>
              </div>
            </div>

            {line.status === "Running" && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">Line Efficiency</span>
                  <span className="text-sm font-semibold text-gray-900">{line.efficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      line.efficiency >= 90 ? "bg-green-500" :
                      line.efficiency >= 75 ? "bg-yellow-500" :
                      "bg-red-500"
                    }`}
                    style={{ width: `${line.efficiency}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

