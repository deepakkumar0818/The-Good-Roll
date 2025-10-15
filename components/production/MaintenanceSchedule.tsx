"use client";

import { useState } from "react";
import { Plus, Wrench, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface Maintenance {
  id: string;
  machine: string;
  factory: string;
  line: string;
  type: "Preventive" | "Corrective" | "Emergency";
  scheduledDate: string;
  scheduledTime: string;
  estimatedDuration: string;
  status: "Scheduled" | "In Progress" | "Completed" | "Overdue";
  priority: "High" | "Medium" | "Low";
  technician: string;
  description: string;
  lastMaintenance: string;
}

const mockMaintenance: Maintenance[] = [
  {
    id: "MNT-001",
    machine: "Pulping Machine A1",
    factory: "Factory A - Kumasi",
    line: "Line 1 - Pulp Processing",
    type: "Preventive",
    scheduledDate: "2024-10-09",
    scheduledTime: "14:00",
    estimatedDuration: "2 hours",
    status: "Scheduled",
    priority: "Medium",
    technician: "Emmanuel Osei",
    description: "Regular cleaning and lubrication",
    lastMaintenance: "2024-09-09",
  },
  {
    id: "MNT-002",
    machine: "Sheet Former B2",
    factory: "Factory A - Kumasi",
    line: "Line 2 - Sheet Formation",
    type: "Emergency",
    scheduledDate: "2024-10-09",
    scheduledTime: "10:00",
    estimatedDuration: "4 hours",
    status: "In Progress",
    priority: "High",
    technician: "Kwesi Mensah",
    description: "Hydraulic pump failure - urgent repair",
    lastMaintenance: "2024-09-25",
  },
  {
    id: "MNT-003",
    machine: "Drying Unit C3",
    factory: "Factory A - Kumasi",
    line: "Line 3 - Drying Unit",
    type: "Corrective",
    scheduledDate: "2024-10-09",
    scheduledTime: "08:00",
    estimatedDuration: "3 hours",
    status: "In Progress",
    priority: "High",
    technician: "Kofi Adjei",
    description: "Temperature control system adjustment",
    lastMaintenance: "2024-09-20",
  },
  {
    id: "MNT-004",
    machine: "Packaging Line D4",
    factory: "Factory B - Accra",
    line: "Line 4 - Packaging",
    type: "Preventive",
    scheduledDate: "2024-10-10",
    scheduledTime: "09:00",
    estimatedDuration: "1.5 hours",
    status: "Scheduled",
    priority: "Low",
    technician: "Samuel Boateng",
    description: "Belt replacement and calibration",
    lastMaintenance: "2024-08-10",
  },
  {
    id: "MNT-005",
    machine: "Pulping Machine B1",
    factory: "Factory B - Accra",
    line: "Line 1 - Pulp Processing",
    type: "Preventive",
    scheduledDate: "2024-10-08",
    scheduledTime: "15:00",
    estimatedDuration: "2 hours",
    status: "Completed",
    priority: "Medium",
    technician: "Emmanuel Osei",
    description: "Routine inspection and maintenance",
    lastMaintenance: "2024-09-08",
  },
];

export default function MaintenanceSchedule() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const filteredMaintenance = mockMaintenance.filter(mnt => {
    const matchesStatus = filterStatus === "all" || mnt.status === filterStatus;
    const matchesType = filterType === "all" || mnt.type === filterType;
    return matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Completed": return "bg-green-100 text-green-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Preventive": return "bg-green-50 border-green-200 text-green-700";
      case "Corrective": return "bg-orange-50 border-orange-200 text-orange-700";
      case "Emergency": return "bg-red-50 border-red-200 text-red-700";
      default: return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High": return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case "Medium": return <Clock className="w-4 h-4 text-orange-600" />;
      case "Low": return <CheckCircle className="w-4 h-4 text-green-600" />;
      default: return null;
    }
  };

  const stats = {
    scheduled: mockMaintenance.filter(m => m.status === "Scheduled").length,
    inProgress: mockMaintenance.filter(m => m.status === "In Progress").length,
    completedToday: mockMaintenance.filter(m => m.status === "Completed").length,
    overdue: mockMaintenance.filter(m => m.status === "Overdue").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-800">Scheduled</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.scheduled}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-800">In Progress</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.inProgress}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-800">Completed Today</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.completedToday}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-medium text-red-800">Overdue</p>
          <p className="text-2xl font-bold text-red-900 mt-2">{stats.overdue}</p>
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
            <option value="Scheduled">Scheduled</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Overdue">Overdue</option>
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Types</option>
            <option value="Preventive">Preventive</option>
            <option value="Corrective">Corrective</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          Schedule Maintenance
        </button>
      </div>

      {/* Schedule Form */}
      {showForm && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Maintenance</h3>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Machine/Equipment</label>
              <input type="text" placeholder="e.g., Pulping Machine A1" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Preventive</option>
                <option>Corrective</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Date</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Time</label>
              <input type="time" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Duration</label>
              <input type="text" placeholder="e.g., 2 hours" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Technician</label>
              <input type="text" placeholder="Technician name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea rows={2} placeholder="Describe the maintenance work..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning></textarea>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Schedule
            </button>
          </div>
        </div>
      )}

      {/* Maintenance List */}
      <div className="space-y-4">
        {filteredMaintenance.map((mnt) => (
          <div key={mnt.id} className={`bg-white border-2 rounded-lg p-6 ${getTypeColor(mnt.type)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Wrench className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{mnt.machine}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(mnt.status)}`}>
                    {mnt.status}
                  </span>
                  {getPriorityIcon(mnt.priority)}
                </div>
                <p className="text-sm text-gray-600">{mnt.factory} • {mnt.line}</p>
                <p className="text-xs text-gray-500 mt-1">ID: {mnt.id}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{mnt.scheduledDate}</div>
                <div className="text-xs text-gray-600">{mnt.scheduledTime}</div>
                <div className="text-xs text-gray-500 mt-1">Duration: {mnt.estimatedDuration}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Maintenance Type</p>
                <p className="text-sm font-medium text-gray-900">{mnt.type}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Assigned Technician</p>
                <p className="text-sm font-medium text-gray-900">{mnt.technician}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Last Maintenance</p>
                <p className="text-sm font-medium text-gray-900">{mnt.lastMaintenance}</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-50 rounded p-3 mb-4">
              <p className="text-xs text-gray-500 mb-1">Description</p>
              <p className="text-sm text-gray-900">{mnt.description}</p>
            </div>

            <div className="flex space-x-2">
              {mnt.status === "Scheduled" && (
                <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                  Start Maintenance
                </button>
              )}
              {mnt.status === "In Progress" && (
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                  Mark Complete
                </button>
              )}
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                View Details
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Edit Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

