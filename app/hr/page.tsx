"use client";

import { useState } from "react";
import { Users, Clock, Calendar, Wallet, UserCircle, Award } from "lucide-react";
import EmployeeManagement from "@/components/hr/EmployeeManagement";
import AttendanceTracking from "@/components/hr/AttendanceTracking";
import ShiftScheduling from "@/components/hr/ShiftScheduling";
import PayrollManagement from "@/components/hr/PayrollManagement";
import EmployeePortal from "@/components/hr/EmployeePortal";
import PerformanceManagement from "@/components/hr/PerformanceManagement";

type ActiveTab = "employees" | "attendance" | "scheduling" | "payroll" | "portal" | "performance";

export default function HRPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("employees");

  const tabs = [
    { id: "employees" as ActiveTab, label: "Employee Records", icon: Users },
    { id: "attendance" as ActiveTab, label: "Attendance", icon: Clock },
    { id: "scheduling" as ActiveTab, label: "Shift Scheduling", icon: Calendar },
    { id: "payroll" as ActiveTab, label: "Payroll", icon: Wallet },
    { id: "portal" as ActiveTab, label: "Employee Portal", icon: UserCircle },
    { id: "performance" as ActiveTab, label: "Performance", icon: Award },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Workforce & HR Management</h1>
        <p className="text-gray-600 mt-2">Complete HR management for 10,000+ workers with statutory compliance</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-green-600 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  suppressHydrationWarning
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "employees" && <EmployeeManagement />}
          {activeTab === "attendance" && <AttendanceTracking />}
          {activeTab === "scheduling" && <ShiftScheduling />}
          {activeTab === "payroll" && <PayrollManagement />}
          {activeTab === "portal" && <EmployeePortal />}
          {activeTab === "performance" && <PerformanceManagement />}
        </div>
      </div>
    </div>
  );
}

