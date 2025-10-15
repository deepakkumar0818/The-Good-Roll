"use client";

import { useState } from "react";
import { Wallet, DollarSign, FileText, CheckCircle, Clock } from "lucide-react";

export default function PayrollManagement() {
  const [selectedMonth, setSelectedMonth] = useState("2024-10");

  const payrollStats = {
    totalEmployees: 10000,
    processed: 9850,
    pending: 150,
    totalPayroll: 45200000,
    deductions: 6780000,
    netPayable: 38420000,
  };

  const statutoryCompliance = [
    { type: "SSNIT (Social Security)", rate: "13.5%", employee: "5.5%", employer: "13%", status: "Compliant" },
    { type: "PAYE (Income Tax)", rate: "Variable", employee: "0-30%", employer: "0%", status: "Compliant" },
    { type: "Tier 3 Pension", rate: "5%", employee: "5%", employer: "0%", status: "Compliant" },
  ];

  const payrollSummary = [
    { department: "Production", employees: 8000, grossPay: 32000000, deductions: 4800000, netPay: 27200000 },
    { department: "Quality Control", employees: 500, grossPay: 3500000, deductions: 525000, netPay: 2975000 },
    { department: "Warehouse", employees: 800, grossPay: 4000000, deductions: 600000, netPay: 3400000 },
    { department: "Administration", employees: 400, grossPay: 3200000, deductions: 480000, netPay: 2720000 },
    { department: "Sales & Marketing", employees: 200, grossPay: 1800000, deductions: 270000, netPay: 1530000 },
    { department: "Finance", employees: 100, grossPay: 700000, deductions: 105000, netPay: 595000 },
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `₵${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `₵${(amount / 1000).toFixed(0)}K`;
    return `₵${amount}`;
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Employees</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{payrollStats.totalEmployees.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Processed</p>
          <p className="text-3xl font-bold text-green-900 mt-2">{payrollStats.processed.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
          <p className="text-sm font-medium text-orange-600">Pending</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">{payrollStats.pending.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-600">Net Payable</p>
          <p className="text-2xl font-bold text-purple-900 mt-2">{formatCurrency(payrollStats.netPayable)}</p>
        </div>
      </div>

      {/* Month Selector */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Payroll for</h3>
          <div className="flex items-center space-x-4">
            <input
              type="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              suppressHydrationWarning
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Process Payroll
            </button>
          </div>
        </div>
      </div>

      {/* Statutory Compliance */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Statutory Compliance (Ghana)</h3>
        <div className="space-y-3">
          {statutoryCompliance.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900">{item.type}</h4>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <p className="text-xs text-gray-500">Total Rate</p>
                      <p className="text-sm font-medium text-gray-900">{item.rate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Employee Contribution</p>
                      <p className="text-sm font-medium text-gray-900">{item.employee}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Employer Contribution</p>
                      <p className="text-sm font-medium text-gray-900">{item.employer}</p>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full ml-4">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payroll Summary by Department */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Department-wise Payroll Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Employees</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Gross Pay</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Deductions</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Net Pay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payrollSummary.map((dept, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{dept.department}</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900">{dept.employees.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">{formatCurrency(dept.grossPay)}</td>
                  <td className="px-6 py-4 text-sm text-right text-red-600">{formatCurrency(dept.deductions)}</td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-green-600">{formatCurrency(dept.netPay)}</td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-bold">
                <td className="px-6 py-4 text-sm text-gray-900">TOTAL</td>
                <td className="px-6 py-4 text-sm text-right text-gray-900">{payrollStats.totalEmployees.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-right text-gray-900">{formatCurrency(payrollStats.totalPayroll)}</td>
                <td className="px-6 py-4 text-sm text-right text-red-600">{formatCurrency(payrollStats.deductions)}</td>
                <td className="px-6 py-4 text-sm text-right text-green-600">{formatCurrency(payrollStats.netPayable)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <FileText className="w-5 h-5 mr-2 text-gray-700" />
          Generate Payslips
        </button>
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <DollarSign className="w-5 h-5 mr-2 text-gray-700" />
          Bank Transfer File
        </button>
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <CheckCircle className="w-5 h-5 mr-2 text-gray-700" />
          Statutory Reports
        </button>
      </div>
    </div>
  );
}

