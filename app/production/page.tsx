"use client";

import { useState } from "react";
import { Factory, Layers, Calendar, AlertCircle, Settings, CheckSquare } from "lucide-react";
import ProductionStats from "@/components/production/ProductionStats";
import ProductionLines from "@/components/production/ProductionLines";
import MaterialRequisition from "@/components/production/MaterialRequisition";
import BatchTracking from "@/components/production/BatchTracking";
import MaintenanceSchedule from "@/components/production/MaintenanceSchedule";
import QualityCompliance from "@/components/production/QualityCompliance";

type ActiveTab = "overview" | "lines" | "materials" | "batches" | "maintenance" | "quality";

export default function ProductionPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  const tabs = [
    { id: "overview" as ActiveTab, label: "Overview", icon: Factory },
    { id: "lines" as ActiveTab, label: "Production Lines", icon: Layers },
    { id: "materials" as ActiveTab, label: "Material Requisition", icon: AlertCircle },
    { id: "batches" as ActiveTab, label: "Batch Tracking", icon: CheckSquare },
    { id: "maintenance" as ActiveTab, label: "Maintenance", icon: Settings },
    { id: "quality" as ActiveTab, label: "Quality & Compliance", icon: Calendar },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Factory & Production Management</h1>
        <p className="text-gray-600 mt-2">Manage production lines, material flow, and quality compliance</p>
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
          {activeTab === "overview" && <ProductionStats />}
          {activeTab === "lines" && <ProductionLines />}
          {activeTab === "materials" && <MaterialRequisition />}
          {activeTab === "batches" && <BatchTracking />}
          {activeTab === "maintenance" && <MaintenanceSchedule />}
          {activeTab === "quality" && <QualityCompliance />}
        </div>
      </div>
    </div>
  );
}

