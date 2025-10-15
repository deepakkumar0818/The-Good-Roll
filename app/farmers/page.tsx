"use client";

import { useState } from "react";
import { Plus, Search, Filter, Download } from "lucide-react";
import FarmerRegistrationForm from "@/components/farmers/FarmerRegistrationForm";
import FarmersList from "@/components/farmers/FarmersList";

export default function FarmersPage() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farmer Registration & Profiling</h1>
          <p className="text-gray-600 mt-2">Manage farmer profiles, KYC, and land information</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Farmer
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">New Farmer Registration</h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <FarmerRegistrationForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, phone, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              suppressHydrationWarning
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" suppressHydrationWarning>
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" suppressHydrationWarning>
            <Download className="w-5 h-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      <FarmersList searchTerm={searchTerm} />
    </div>
  );
}

