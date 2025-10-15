"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, Package, DollarSign } from "lucide-react";
import ExecutiveDashboard from "@/components/analytics/ExecutiveDashboard";
import ProcurementAnalytics from "@/components/analytics/ProcurementAnalytics";
import ProductionAnalytics from "@/components/analytics/ProductionAnalytics";
import ExportAnalytics from "@/components/analytics/ExportAnalytics";
import FinancialAnalytics from "@/components/analytics/FinancialAnalytics";

type ActiveTab = "executive" | "procurement" | "production" | "export" | "financial";

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("executive");

  const tabs = [
    { id: "executive" as ActiveTab, label: "Executive Dashboard", icon: BarChart3 },
    { id: "procurement" as ActiveTab, label: "Procurement Analytics", icon: Package },
    { id: "production" as ActiveTab, label: "Production Efficiency", icon: TrendingUp },
    { id: "export" as ActiveTab, label: "Export Profitability", icon: DollarSign },
    { id: "financial" as ActiveTab, label: "Financial Analytics", icon: DollarSign },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Business Intelligence & Analytics</h1>
        <p className="text-gray-600 mt-2">Centralized dashboards powered by Zoho Analytics with AI-driven insights</p>
      </div>

      {/* Zoho Analytics Integration Banner */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
        <div className="flex items-center">
          <BarChart3 className="w-6 h-6 text-purple-600 mr-3" />
          <div>
            <p className="text-sm font-semibold text-purple-900">
              Zoho Analytics Integration Active
            </p>
            <p className="text-xs text-purple-700 mt-1">
              Real-time data from Zoho Books, Inventory, Creator, CRM, People, and Payroll • Powered by Zia AI
            </p>
          </div>
        </div>
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
                      ? "border-purple-600 text-purple-600"
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
          {activeTab === "executive" && <ExecutiveDashboard />}
          {activeTab === "procurement" && <ProcurementAnalytics />}
          {activeTab === "production" && <ProductionAnalytics />}
          {activeTab === "export" && <ExportAnalytics />}
          {activeTab === "financial" && <FinancialAnalytics />}
        </div>
      </div>
    </div>
  );
}

