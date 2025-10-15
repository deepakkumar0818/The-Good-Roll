"use client";

import { useState } from "react";
import { Building, CheckCircle, AlertCircle, Plus } from "lucide-react";

export default function BankReconciliation() {
  const [selectedBank, setSelectedBank] = useState("GHS-ACC-001");

  const bankAccounts = [
    { id: "GHS-ACC-001", name: "Ghana Commercial Bank - GHS", balance: 3480000 },
    { id: "USD-ACC-002", name: "Standard Chartered - USD", balance: 125000 },
  ];

  const transactions = [
    { id: "1", date: "2024-10-09", description: "Payment from USA Client", amount: 850000, type: "Credit", matched: true },
    { id: "2", date: "2024-10-09", description: "Vendor Payment - Bamboo Suppliers", amount: -250000, type: "Debit", matched: true },
    { id: "3", date: "2024-10-08", description: "Bank Charges", amount: -500, type: "Debit", matched: false },
    { id: "4", date: "2024-10-08", description: "Payment from Domestic Client", amount: 320000, type: "Credit", matched: true },
  ];

  const stats = {
    total: transactions.length,
    matched: transactions.filter(t => t.matched).length,
    unmatched: transactions.filter(t => t.matched === false).length,
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Bank Feed Integration:</strong> Automatic transaction import from bank feeds for reconciliation and VAT/GST compliance
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Transactions</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.total}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Matched</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.matched}</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm font-medium text-orange-600">Needs Review</p>
          <p className="text-2xl font-bold text-orange-900 mt-2">{stats.unmatched}</p>
        </div>
      </div>

      {/* Bank Account Selection */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Bank Account</h3>
        <select
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          suppressHydrationWarning
        >
          {bankAccounts.map(acc => (
            <option key={acc.id} value={acc.id}>{acc.name}</option>
          ))}
        </select>
      </div>

      {/* Transactions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Bank Transactions</h3>
          <button className="flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
            <Plus className="w-4 h-4 mr-2" />
            Manual Entry
          </button>
        </div>
        <div className="space-y-3">
          {transactions.map((txn) => (
            <div key={txn.id} className={`border-2 rounded-lg p-4 ${txn.matched ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  {txn.matched ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{txn.description}</p>
                    <p className="text-xs text-gray-600">{txn.date} • {txn.type}</p>
                  </div>
                </div>
                <div className="text-right mr-4">
                  <p className={`text-lg font-bold ${txn.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ₵{Math.abs(txn.amount).toLocaleString()}
                  </p>
                </div>
                {!txn.matched && (
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                    Match
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

