"use client";

import { useState } from "react";
import { Calendar, Users, Clock, Plus } from "lucide-react";

export default function ShiftScheduling() {
  const [selectedWeek, setSelectedWeek] = useState("2024-W41");

  const shifts = [
    { id: "1", name: "Morning Shift", time: "06:00 - 14:00", color: "bg-blue-100 text-blue-800" },
    { id: "2", name: "Afternoon Shift", time: "14:00 - 22:00", color: "bg-green-100 text-green-800" },
    { id: "3", name: "Night Shift", time: "22:00 - 06:00", color: "bg-purple-100 text-purple-800" },
  ];

  const shiftAssignments = [
    { day: "Monday", morning: 3420, afternoon: 3250, night: 2830 },
    { day: "Tuesday", morning: 3410, afternoon: 3240, night: 2850 },
    { day: "Wednesday", morning: 3400, afternoon: 3260, night: 2840 },
    { day: "Thursday", morning: 3390, afternoon: 3270, night: 2860 },
    { day: "Friday", morning: 3380, afternoon: 3280, night: 2880 },
    { day: "Saturday", morning: 2100, afternoon: 2050, night: 1950 },
    { day: "Sunday", morning: 1200, afternoon: 1150, night: 1100 },
  ];

  const totalWorkers = 10000;
  const scheduledToday = 9500;
  const unassigned = totalWorkers - scheduledToday;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Workers</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{totalWorkers.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Scheduled Today</p>
          <p className="text-3xl font-bold text-green-900 mt-2">{scheduledToday.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
          <p className="text-sm font-medium text-orange-600">Unassigned</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">{unassigned.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-600">Active Shifts</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">3</p>
        </div>
      </div>

      {/* Week Selector */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Roster Schedule</h3>
          <div className="flex items-center space-x-4">
            <input
              type="week"
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              suppressHydrationWarning
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              <Plus className="w-4 h-4 inline mr-1" /> Auto-Generate
            </button>
          </div>
        </div>
      </div>

      {/* Shift Definitions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shift Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shifts.map((shift) => (
            <div key={shift.id} className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${shift.color}`}>
                  Active
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">{shift.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{shift.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Roster */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Day</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Morning (06-14)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Afternoon (14-22)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Night (22-06)</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {shiftAssignments.map((assignment, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{assignment.day}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded">
                      {assignment.morning.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">
                      {assignment.afternoon.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded">
                      {assignment.night.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-bold text-gray-900">
                      {(assignment.morning + assignment.afternoon + assignment.night).toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <Users className="w-5 h-5 mr-2 text-gray-700" />
          Bulk Assign Workers
        </button>
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <Calendar className="w-5 h-5 mr-2 text-gray-700" />
          Shift Swap Requests
        </button>
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <Clock className="w-5 h-5 mr-2 text-gray-700" />
          Overtime Management
        </button>
      </div>
    </div>
  );
}

