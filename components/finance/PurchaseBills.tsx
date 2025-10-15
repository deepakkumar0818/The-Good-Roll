"use client";

import { useState } from "react";
import { Plus, FileText, CheckCircle, Clock, XCircle, Download } from "lucide-react";

interface PurchaseBill {
  id: string;
  billNumber: string;
  vendor: string;
  date: string;
  dueDate: string;
  amount: number;
  currency: string;
  status: "Draft" | "Pending Approval" | "Approved" | "Paid" | "Overdue";
  category: string;
  paymentMethod: string;
  taxAmount: number;
  items: { description: string; quantity: number; rate: number; amount: number }[];
}

const mockBills: PurchaseBill[] = [
  {
    id: "PB-001",
    billNumber: "BILL/2024/10/001",
    vendor: "Bamboo Suppliers Ltd",
    date: "2024-10-05",
    dueDate: "2024-10-20",
    amount: 250000,
    currency: "GHS",
    status: "Pending Approval",
    category: "Raw Materials",
    paymentMethod: "Bank Transfer",
    taxAmount: 37500,
    items: [
      { description: "Raw Bamboo - Grade A", quantity: 10, rate: 25000, amount: 250000 }
    ]
  },
  {
    id: "PB-002",
    billNumber: "BILL/2024/10/002",
    vendor: "Chemical Supplies Inc",
    date: "2024-10-03",
    dueDate: "2024-10-18",
    amount: 85000,
    currency: "USD",
    status: "Approved",
    category: "Production Supplies",
    paymentMethod: "Bank Transfer",
    taxAmount: 12750,
    items: [
      { description: "Processing Chemicals", quantity: 500, rate: 170, amount: 85000 }
    ]
  },
  {
    id: "PB-003",
    billNumber: "BILL/2024/09/025",
    vendor: "Equipment Maintenance Co",
    date: "2024-09-20",
    dueDate: "2024-10-05",
    amount: 45000,
    currency: "GHS",
    status: "Overdue",
    category: "Maintenance",
    paymentMethod: "Cash",
    taxAmount: 6750,
    items: [
      { description: "Machine Maintenance Services", quantity: 1, rate: 45000, amount: 45000 }
    ]
  },
  {
    id: "PB-004",
    billNumber: "BILL/2024/10/003",
    vendor: "Packaging Materials Ltd",
    date: "2024-10-08",
    dueDate: "2024-10-23",
    amount: 120000,
    currency: "GHS",
    status: "Paid",
    category: "Packaging",
    paymentMethod: "Bank Transfer",
    taxAmount: 18000,
    items: [
      { description: "Export Packaging Materials", quantity: 1000, rate: 120, amount: 120000 }
    ]
  },
];

export default function PurchaseBills() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredBills = filterStatus === "all"
    ? mockBills
    : mockBills.filter(bill => bill.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft": return "bg-gray-100 text-gray-800";
      case "Pending Approval": return "bg-yellow-100 text-yellow-800";
      case "Approved": return "bg-blue-100 text-blue-800";
      case "Paid": return "bg-green-100 text-green-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount: number, currency: string) => {
    const formatted = new Intl.NumberFormat('en-US').format(amount);
    const symbols: { [key: string]: string } = { GHS: "₵", USD: "$", EUR: "€", GBP: "£" };
    return `${symbols[currency] || currency} ${formatted}`;
  };

  const stats = {
    totalBills: mockBills.length,
    pendingApproval: mockBills.filter(b => b.status === "Pending Approval").length,
    overdue: mockBills.filter(b => b.status === "Overdue").length,
    paid: mockBills.filter(b => b.status === "Paid").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Bills</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.totalBills}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-600">Pending Approval</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.pendingApproval}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-medium text-red-600">Overdue</p>
          <p className="text-2xl font-bold text-red-900 mt-2">{stats.overdue}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Paid This Month</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.paid}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          suppressHydrationWarning
        >
          <option value="all">All Status</option>
          <option value="Draft">Draft</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Approved">Approved</option>
          <option value="Paid">Paid</option>
          <option value="Overdue">Overdue</option>
        </select>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          New Purchase Bill
        </button>
      </div>

      {/* Bill Form */}
      {showForm && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Purchase Bill</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
              <input type="text" placeholder="Select or add vendor" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bill Date</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Raw Materials</option>
                <option>Production Supplies</option>
                <option>Maintenance</option>
                <option>Packaging</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>GHS</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Bank Transfer</option>
                <option>Cash</option>
                <option>Cheque</option>
                <option>Credit Card</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Line Items</label>
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="grid grid-cols-4 gap-2 mb-2">
                <input type="text" placeholder="Description" className="col-span-2 px-3 py-2 border border-gray-300 rounded" suppressHydrationWarning />
                <input type="number" placeholder="Quantity" className="px-3 py-2 border border-gray-300 rounded" suppressHydrationWarning />
                <input type="number" placeholder="Rate" className="px-3 py-2 border border-gray-300 rounded" suppressHydrationWarning />
              </div>
              <button className="text-sm text-green-600 hover:text-green-700" suppressHydrationWarning>+ Add Line Item</button>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700" suppressHydrationWarning>
              Save as Draft
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Create Bill
            </button>
          </div>
        </div>
      )}

      {/* Bills List */}
      <div className="space-y-4">
        {filteredBills.map((bill) => (
          <div key={bill.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{bill.billNumber}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(bill.status)}`}>
                    {bill.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{bill.vendor} • {bill.category}</p>
                <p className="text-xs text-gray-500 mt-1">ID: {bill.id}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(bill.amount, bill.currency)}</p>
                <p className="text-xs text-gray-500 mt-1">+ Tax: {formatCurrency(bill.taxAmount, bill.currency)}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs text-gray-500 mb-1">Bill Date</p>
                <p className="text-sm font-medium text-gray-900">{bill.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Due Date</p>
                <p className="text-sm font-medium text-gray-900">{bill.dueDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Payment Method</p>
                <p className="text-sm font-medium text-gray-900">{bill.paymentMethod}</p>
              </div>
            </div>

            {bill.status === "Overdue" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded mb-4">
                <p className="text-sm text-red-700 font-medium">⚠️ Payment overdue! Please process immediately.</p>
              </div>
            )}

            <div className="flex space-x-2">
              {bill.status === "Pending Approval" && (
                <>
                  <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                    <CheckCircle className="w-4 h-4 inline mr-1" /> Approve
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700" suppressHydrationWarning>
                    <XCircle className="w-4 h-4 inline mr-1" /> Reject
                  </button>
                </>
              )}
              {bill.status === "Approved" && (
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                  Record Payment
                </button>
              )}
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                View Details
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                <Download className="w-4 h-4 inline mr-1" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

