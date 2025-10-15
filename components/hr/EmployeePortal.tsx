"use client";

import { UserCircle, FileText, Calendar, DollarSign, Award, Bell } from "lucide-react";

export default function EmployeePortal() {
  const employeeData = {
    name: "Kwame Mensah",
    id: "EMP-001",
    department: "Production",
    designation: "Factory Worker",
    location: "Factory A - Kumasi",
  };

  const portalFeatures = [
    { icon: FileText, title: "View Payslips", description: "Access current and historical payslips", color: "bg-blue-50 border-blue-200 text-blue-600" },
    { icon: Calendar, title: "Leave Requests", description: "Apply for leave and track status", color: "bg-green-50 border-green-200 text-green-600" },
    { icon: DollarSign, title: "Tax Documents", description: "Download tax forms and certificates", color: "bg-purple-50 border-purple-200 text-purple-600" },
    { icon: UserCircle, title: "Profile Update", description: "Update personal information", color: "bg-orange-50 border-orange-200 text-orange-600" },
    { icon: Award, title: "Training Records", description: "View completed and upcoming training", color: "bg-pink-50 border-pink-200 text-pink-600" },
    { icon: Bell, title: "Announcements", description: "Company news and updates", color: "bg-indigo-50 border-indigo-200 text-indigo-600" },
  ];

  const recentPayslips = [
    { month: "September 2024", gross: 4000, net: 3400, status: "Paid" },
    { month: "August 2024", gross: 4000, net: 3400, status: "Paid" },
    { month: "July 2024", gross: 4000, net: 3400, status: "Paid" },
  ];

  const leaveBalance = [
    { type: "Annual Leave", total: 21, used: 8, remaining: 13 },
    { type: "Sick Leave", total: 10, used: 2, remaining: 8 },
    { type: "Casual Leave", total: 5, used: 1, remaining: 4 },
  ];

  return (
    <div className="space-y-6">
      {/* Employee Profile */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {employeeData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{employeeData.name}</h2>
            <p className="text-sm text-gray-600">{employeeData.designation} • {employeeData.department}</p>
            <p className="text-xs text-gray-500 mt-1">{employeeData.id} • {employeeData.location}</p>
          </div>
        </div>
      </div>

      {/* Portal Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Self-Service Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portalFeatures.map((feature, idx) => (
            <button
              key={idx}
              className={`border-2 rounded-lg p-6 text-left hover:shadow-lg transition-shadow ${feature.color}`}
              suppressHydrationWarning
            >
              <feature.icon className={`w-8 h-8 mb-3 ${feature.color.split(' ')[2]}`} />
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Payslips */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Payslips</h3>
        <div className="space-y-3">
          {recentPayslips.map((payslip, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">{payslip.month}</p>
                <p className="text-xs text-gray-500">Gross: ₵{payslip.gross.toLocaleString()} • Net: ₵{payslip.net.toLocaleString()}</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {payslip.status}
                </span>
                <button className="text-blue-600 hover:text-blue-800 text-sm" suppressHydrationWarning>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave Balance */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Leave Balance</h3>
        <div className="space-y-4">
          {leaveBalance.map((leave, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-900">{leave.type}</p>
                <p className="text-sm font-semibold text-green-600">{leave.remaining} days remaining</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(leave.remaining / leave.total) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">Used: {leave.used}</span>
                <span className="text-xs text-gray-500">Total: {leave.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

