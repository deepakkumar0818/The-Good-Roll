"use client";

import { useState } from "react";
import { Clock, CheckCircle, XCircle, AlertCircle, Fingerprint } from "lucide-react";

export default function AttendanceTracking() {
  const [selectedDate, setSelectedDate] = useState("2024-10-09");

  const attendanceData = [
    { id: "1", empId: "EMP-001", name: "Kwame Mensah", checkIn: "06:05", checkOut: "14:10", status: "Present", hours: "8.1", location: "Factory A - Kumasi", device: "Biometric-001" },
    { id: "2", empId: "EMP-002", name: "Ama Sarpong", checkIn: "08:00", checkOut: "17:00", status: "Present", hours: "9.0", location: "Factory A - Kumasi", device: "Biometric-001" },
    { id: "3", empId: "EMP-003", name: "Kofi Asante", checkIn: "07:55", checkOut: "16:05", status: "Present", hours: "8.2", location: "Warehouse - Accra", device: "Biometric-002" },
    { id: "4", empId: "EMP-004", name: "Akosua Boateng", checkIn: "-", checkOut: "-", status: "Absent", hours: "0", location: "Head Office - Accra", device: "-" },
    { id: "5", empId: "EMP-005", name: "Yaw Owusu", checkIn: "06:30", checkOut: "-", status: "Half Day", hours: "4.0", location: "Factory A - Kumasi", device: "Biometric-001" },
  ];

  const stats = {
    total: attendanceData.length,
    present: attendanceData.filter(a => a.status === "Present").length,
    absent: attendanceData.filter(a => a.status === "Absent").length,
    halfDay: attendanceData.filter(a => a.status === "Half Day").length,
    late: attendanceData.filter(a => a.checkIn && a.checkIn > "06:30").length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present": return "bg-green-100 text-green-800";
      case "Absent": return "bg-red-100 text-red-800";
      case "Half Day": return "bg-yellow-100 text-yellow-800";
      case "Leave": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Employees</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.total.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Present</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.present}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-medium text-red-600">Absent</p>
          <p className="text-2xl font-bold text-red-900 mt-2">{stats.absent}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-600">Half Day</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.halfDay}</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm font-medium text-orange-600">Late</p>
          <p className="text-2xl font-bold text-orange-900 mt-2">{stats.late}</p>
        </div>
      </div>

      {/* Date Selector */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Attendance for</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            suppressHydrationWarning
          />
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check Out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Device</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {attendanceData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{record.name}</div>
                      <div className="text-xs text-gray-500">{record.empId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {record.checkIn !== "-" && (
                        <>
                          <Clock className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-900">{record.checkIn}</span>
                        </>
                      )}
                      {record.checkIn === "-" && <span className="text-sm text-gray-400">-</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {record.checkOut !== "-" && (
                        <>
                          <Clock className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-900">{record.checkOut}</span>
                        </>
                      )}
                      {record.checkOut === "-" && <span className="text-sm text-gray-400">-</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{record.hours}h</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Fingerprint className="w-4 h-4 mr-1" />
                      {record.device}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Biometric Devices */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Biometric Devices Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: "Biometric-001", location: "Factory A - Main Gate", status: "Online", lastSync: "2 mins ago" },
            { id: "Biometric-002", location: "Warehouse - Entry", status: "Online", lastSync: "1 min ago" },
            { id: "Biometric-003", location: "Factory B - Main Gate", status: "Online", lastSync: "3 mins ago" },
          ].map((device) => (
            <div key={device.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Fingerprint className="w-5 h-5 text-green-600" />
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {device.status}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-gray-900">{device.id}</h4>
              <p className="text-xs text-gray-600 mt-1">{device.location}</p>
              <p className="text-xs text-gray-500 mt-2">Last sync: {device.lastSync}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

