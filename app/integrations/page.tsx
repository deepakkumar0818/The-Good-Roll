"use client";

import { useState } from "react";
import { Smartphone, Cpu, Globe, FileText, Zap } from "lucide-react";
import MobileMoneyIntegration from "@/components/integrations/MobileMoneyIntegration";
import IoTMachineData from "@/components/integrations/IoTMachineData";
import SpanishOperations from "@/components/integrations/SpanishOperations";
import DocumentManagement from "@/components/integrations/DocumentManagement";

type ActiveTab = "mobile-money" | "iot" | "spanish-ops" | "documents";

export default function IntegrationsPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("mobile-money");

  const tabs = [
    { id: "mobile-money" as ActiveTab, label: "Mobile Money Payments", icon: Smartphone },
    { id: "iot" as ActiveTab, label: "IoT Machine Data", icon: Cpu },
    { id: "spanish-ops" as ActiveTab, label: "Spanish Operations", icon: Globe },
    { id: "documents" as ActiveTab, label: "Document Management", icon: FileText },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">External Integrations & Extensions</h1>
        <p className="text-gray-600 mt-2">Connect with payment providers, IoT devices, international operations, and document systems</p>
      </div>

      {/* Integration Status Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center">
          <Zap className="w-6 h-6 text-blue-600 mr-3" />
          <div>
            <p className="text-sm font-semibold text-blue-900">
              All External Systems Connected
            </p>
            <p className="text-xs text-blue-700 mt-1">
              Mobile Money APIs • IoT Sensors • Spanish ERP • Document Platform • All operating normally
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
                      ? "border-blue-600 text-blue-600"
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
          {activeTab === "mobile-money" && <MobileMoneyIntegration />}
          {activeTab === "iot" && <IoTMachineData />}
          {activeTab === "spanish-ops" && <SpanishOperations />}
          {activeTab === "documents" && <DocumentManagement />}
        </div>
      </div>
    </div>
  );
}

