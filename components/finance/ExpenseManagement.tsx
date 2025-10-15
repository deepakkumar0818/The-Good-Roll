"use client";

import { useState } from "react";
import { Plus, CreditCard, CheckCircle, Clock } from "lucide-react";

interface Expense {
  id: string;
  date: string;
  employee: string;
  category: string;
  description: string;
  amount: number;
  currency: string;
  status: "Pending" | "Approved" | "Rejected" | "Reimbursed";
  receipt: boolean;
}

const mockExpenses: Expense[] = [
  {
    id: "EXP-001",
    date: "2024-10-09",
    employee: "Factory Manager - Jabalpur",
    category: "Travel",
    description: "Business trip to supplier location",
    amount: 5000,
    currency: "GHS",
    status: "Pending",
    receipt: true,
  },
  {
    id: "EXP-002",
    date: "2024-10-08",
    employee: "Production Manager",
    category: "Materials",
    description: "Emergency spare parts purchase",
    amount: 8500,
    currency: "GHS",
    status: "Approved",
    receipt: true,
  },
  {
    id: "EXP-003",
    date: "2024-10-07",
    employee: "Sales Manager",
    category: "Client Entertainment",
    description: "Client meeting expenses",
    amount: 3200,
    currency: "GHS",
    status: "Reimbursed",
    receipt: true,
  },
];

export default function ExpenseManagement() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredExpenses = filterStatus === "all"
    ? mockExpenses
    : mockExpenses.filter(exp => exp.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-blue-100 text-blue-800";
      case "Rejected": return "bg-red-100 text-red-800";
      case "Reimbursed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    total: mockExpenses.length,
    pending: mockExpenses.filter(e => e.status === "Pending").length,
    approved: mockExpenses.filter(e => e.status === "Approved").length,
    reimbursed: mockExpenses.filter(e => e.status === "Reimbursed").length,
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Zoho Expense Integration:</strong> Staff and factory managers can submit expenses for approval and reimbursement
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Expenses</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.total}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-600">Pending Approval</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.pending}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-600">Approved</p>
          <p className="text-2xl font-bold text-purple-900 mt-2">{stats.approved}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Reimbursed</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.reimbursed}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
          suppressHydrationWarning
        >
          <option value="all">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Reimbursed">Reimbursed</option>
        </select>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          New Expense
        </button>
      </div>

      {/* Expenses List */}
      <div className="space-y-4">
        {filteredExpenses.map((expense) => (
          <div key={expense.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3 flex-1">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{expense.description}</h3>
                  <p className="text-sm text-gray-600">{expense.employee} • {expense.category}</p>
                  <p className="text-xs text-gray-500 mt-1">{expense.date} • {expense.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">₵{expense.amount.toLocaleString()}</p>
                <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2 ${getStatusColor(expense.status)}`}>
                  {expense.status}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              {expense.receipt && (
                <span className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Receipt Attached
                </span>
              )}
            </div>

            <div className="flex space-x-2">
              {expense.status === "Pending" && (
                <>
                  <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                    Approve
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700" suppressHydrationWarning>
                    Reject
                  </button>
                </>
              )}
              {expense.status === "Approved" && (
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                  Process Reimbursement
                </button>
              )}
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

