"use client";

import { useState } from "react";
import { Plus, Receipt, Send, CheckCircle } from "lucide-react";

interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  date: string;
  dueDate: string;
  amount: number;
  currency: string;
  status: "Draft" | "Sent" | "Partially Paid" | "Paid" | "Overdue";
  orderNumber: string;
  paymentReceived: number;
}

const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    invoiceNumber: "INV/2024/10/001",
    customer: "USA Export Client - California",
    date: "2024-10-05",
    dueDate: "2024-11-05",
    amount: 85000,
    currency: "USD",
    status: "Sent",
    orderNumber: "SO-2024-1001",
    paymentReceived: 0,
  },
  {
    id: "INV-002",
    invoiceNumber: "INV/2024/10/002",
    customer: "Europe - Netherlands Buyer",
    date: "2024-10-03",
    dueDate: "2024-11-03",
    amount: 65000,
    currency: "EUR",
    status: "Partially Paid",
    orderNumber: "SO-2024-1002",
    paymentReceived: 30000,
  },
  {
    id: "INV-003",
    invoiceNumber: "INV/2024/09/015",
    customer: "Domestic - Mumbai Distributor",
    date: "2024-09-15",
    dueDate: "2024-10-15",
    amount: 320000,
    currency: "GHS",
    status: "Overdue",
    orderNumber: "SO-2024-0850",
    paymentReceived: 0,
  },
  {
    id: "INV-004",
    invoiceNumber: "INV/2024/10/003",
    customer: "UK Import Company",
    date: "2024-10-08",
    dueDate: "2024-11-08",
    amount: 42000,
    currency: "GBP",
    status: "Paid",
    orderNumber: "SO-2024-1005",
    paymentReceived: 42000,
  },
];

export default function SalesInvoices() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredInvoices = filterStatus === "all"
    ? mockInvoices
    : mockInvoices.filter(inv => inv.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft": return "bg-gray-100 text-gray-800";
      case "Sent": return "bg-blue-100 text-blue-800";
      case "Partially Paid": return "bg-yellow-100 text-yellow-800";
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
    totalInvoices: mockInvoices.length,
    sent: mockInvoices.filter(i => i.status === "Sent").length,
    overdue: mockInvoices.filter(i => i.status === "Overdue").length,
    paid: mockInvoices.filter(i => i.status === "Paid").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Invoices</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.totalInvoices}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-600">Sent (Awaiting Payment)</p>
          <p className="text-2xl font-bold text-purple-900 mt-2">{stats.sent}</p>
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

      {/* CRM Integration Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center">
          <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
          <p className="text-sm text-blue-900">
            <strong>Zoho CRM Integration Active:</strong> Sales orders automatically flow from CRM to create invoices
          </p>
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
          <option value="Sent">Sent</option>
          <option value="Partially Paid">Partially Paid</option>
          <option value="Paid">Paid</option>
          <option value="Overdue">Overdue</option>
        </select>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          New Invoice
        </button>
      </div>

      {/* Invoices List */}
      <div className="space-y-4">
        {filteredInvoices.map((invoice) => (
          <div key={invoice.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Receipt className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{invoice.invoiceNumber}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{invoice.customer}</p>
                <p className="text-xs text-gray-500 mt-1">Order: {invoice.orderNumber} • ID: {invoice.id}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(invoice.amount, invoice.currency)}</p>
                {invoice.paymentReceived > 0 && (
                  <p className="text-sm text-green-600 mt-1">Paid: {formatCurrency(invoice.paymentReceived, invoice.currency)}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs text-gray-500 mb-1">Invoice Date</p>
                <p className="text-sm font-medium text-gray-900">{invoice.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Due Date</p>
                <p className="text-sm font-medium text-gray-900">{invoice.dueDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Currency</p>
                <p className="text-sm font-medium text-gray-900">{invoice.currency}</p>
              </div>
            </div>

            {invoice.status === "Overdue" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded mb-4">
                <p className="text-sm text-red-700 font-medium">⚠️ Payment overdue! Follow up with customer.</p>
              </div>
            )}

            {invoice.status === "Partially Paid" && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600">Payment Progress</span>
                  <span className="text-xs font-semibold text-gray-900">
                    {Math.round((invoice.paymentReceived / invoice.amount) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-yellow-500"
                    style={{ width: `${(invoice.paymentReceived / invoice.amount) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex space-x-2">
              {invoice.status === "Draft" && (
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                  <Send className="w-4 h-4 inline mr-1" /> Send Invoice
                </button>
              )}
              {(invoice.status === "Sent" || invoice.status === "Partially Paid" || invoice.status === "Overdue") && (
                <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                  Record Payment
                </button>
              )}
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                View Details
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

