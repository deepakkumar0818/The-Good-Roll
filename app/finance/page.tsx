"use client";

import { useState } from "react";
import { DollarSign, FileText, CreditCard, Building, Receipt, PieChart, Wallet } from "lucide-react";
import FinancialDashboard from "@/components/finance/FinancialDashboard";
import PurchaseBills from "@/components/finance/PurchaseBills";
import SalesInvoices from "@/components/finance/SalesInvoices";
import MultiCurrency from "@/components/finance/MultiCurrency";
import BankReconciliation from "@/components/finance/BankReconciliation";
import AssetManagement from "@/components/finance/AssetManagement";
import ExpenseManagement from "@/components/finance/ExpenseManagement";

type ActiveTab = "dashboard" | "purchases" | "sales" | "currency" | "banking" | "assets" | "expenses";

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("dashboard");

  const tabs = [
    { id: "dashboard" as ActiveTab, label: "Financial Dashboard", icon: PieChart },
    { id: "purchases" as ActiveTab, label: "Purchase Bills", icon: FileText },
    { id: "sales" as ActiveTab, label: "Sales & Invoices", icon: Receipt },
    { id: "currency" as ActiveTab, label: "Multi-Currency", icon: DollarSign },
    { id: "banking" as ActiveTab, label: "Bank Reconciliation", icon: Building },
    { id: "assets" as ActiveTab, label: "Fixed Assets", icon: Wallet },
    { id: "expenses" as ActiveTab, label: "Expenses", icon: CreditCard },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Finance</h1>
        <p className="text-gray-600 mt-2">Complete financial management with multi-currency support and compliance</p>
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
          {activeTab === "dashboard" && <FinancialDashboard />}
          {activeTab === "purchases" && <PurchaseBills />}
          {activeTab === "sales" && <SalesInvoices />}
          {activeTab === "currency" && <MultiCurrency />}
          {activeTab === "banking" && <BankReconciliation />}
          {activeTab === "assets" && <AssetManagement />}
          {activeTab === "expenses" && <ExpenseManagement />}
        </div>
      </div>
    </div>
  );
}

