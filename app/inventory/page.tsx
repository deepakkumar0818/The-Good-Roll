"use client";

import { useState } from "react";
import { Package, Truck, Container } from "lucide-react";
import FIFOPicking from "@/components/inventory/FIFOPicking";
import ContainerPlanning from "@/components/inventory/ContainerPlanning";
import FreightForwarding from "@/components/inventory/FreightForwarding";

type ActiveTab = "picking" | "containers" | "freight";

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("picking");

  const tabs = [
    { id: "picking" as ActiveTab, label: "FIFO Picking", icon: Package },
    { id: "containers" as ActiveTab, label: "Container Planning", icon: Container },
    { id: "freight" as ActiveTab, label: "Freight & Shipping", icon: Truck },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Logistics</h1>
        <p className="text-gray-600 mt-2">FIFO picking, container planning and freight management</p>
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
          {activeTab === "picking" && <FIFOPicking />}
          {activeTab === "containers" && <ContainerPlanning />}
          {activeTab === "freight" && <FreightForwarding />}
        </div>
      </div>
    </div>
  );
}

