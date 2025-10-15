"use client";

import { DollarSign, RefreshCw } from "lucide-react";

export default function MultiCurrency() {
  const currencies = [
    { code: "GHS", name: "Ghanaian Cedi", symbol: "₵", rate: 1.0, base: true },
    { code: "USD", name: "US Dollar", symbol: "$", rate: 0.082, base: false },
    { code: "EUR", name: "Euro", symbol: "€", rate: 0.076, base: false },
    { code: "GBP", name: "British Pound", symbol: "£", rate: 0.065, base: false },
  ];

  const accounts = [
    { currency: "GHS", balance: 3480000, accountNumber: "GHS-ACC-001", bank: "Ghana Commercial Bank" },
    { currency: "USD", balance: 125000, accountNumber: "USD-ACC-002", bank: "Standard Chartered" },
    { currency: "EUR", balance: 85000, accountNumber: "EUR-ACC-003", bank: "Ecobank" },
    { currency: "GBP", balance: 42000, accountNumber: "GBP-ACC-004", bank: "Barclays" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Multi-Currency Support:</strong> Handle local GHS, supplier USD, and export EUR/GBP transactions with automatic exchange rate updates
        </p>
      </div>

      {/* Exchange Rates */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Exchange Rates (Base: GHS)</h3>
          <button className="flex items-center px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
            <RefreshCw className="w-4 h-4 mr-2" />
            Update Rates
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currencies.map((currency) => (
            <div key={currency.code} className={`border-2 rounded-lg p-4 ${currency.base ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold">{currency.symbol}</span>
                <span className="text-xs font-semibold text-gray-600">{currency.code}</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{currency.name}</p>
              <p className="text-lg font-bold text-gray-900">
                {currency.base ? "1.00000" : currency.rate.toFixed(5)}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {currency.base ? "Base Currency" : `1 GHS = ${currency.rate} ${currency.code}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Currency Accounts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Multi-Currency Bank Accounts</h3>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.currency} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{account.currency} Account</h4>
                    <p className="text-sm text-gray-600">{account.bank}</p>
                    <p className="text-xs text-gray-500">{account.accountNumber}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Balance</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {currencies.find(c => c.code === account.currency)?.symbol} {account.balance.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currency Converter */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Currency Converter</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <div className="flex gap-2">
              <input type="number" placeholder="Amount" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
              <select className="w-32 px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning>
                {currencies.map(c => <option key={c.code}>{c.code}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="flex gap-2">
              <input type="number" placeholder="Result" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" readOnly suppressHydrationWarning />
              <select className="w-32 px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning>
                {currencies.map(c => <option key={c.code}>{c.code}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

