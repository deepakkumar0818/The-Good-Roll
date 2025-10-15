"use client";

import { useState } from "react";
import { Plus, Filter, Download, Scale } from "lucide-react";
import QualityCheckForm from "@/components/quality/QualityCheckForm";
import QualityRecordsList from "@/components/quality/QualityRecordsList";

export default function QualityTrackingPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quality & Weight Tracking</h1>
          <p className="text-gray-600 mt-2">Track bamboo quality, weight, and pickup records</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Quality Check
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today&apos;s Pickups</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              <p className="text-xs text-gray-500 mt-1">2.4 Tonnes</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Scale className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Grade A Quality</p>
              <p className="text-2xl font-bold text-green-600 mt-1">68%</p>
              <p className="text-xs text-gray-500 mt-1">Above target</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Scale className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">45.2T</p>
              <p className="text-xs text-gray-500 mt-1">423 deliveries</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Scale className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Weight/Pickup</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">186kg</p>
              <p className="text-xs text-gray-500 mt-1">+8% vs last month</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Scale className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">New Quality Check</h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <QualityCheckForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Records</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>All Grades</option>
            <option>Grade A</option>
            <option>Grade B</option>
            <option>Grade C</option>
            <option>Rejected</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ml-auto">
            <Filter className="w-5 h-5 mr-2" />
            More Filters
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      <QualityRecordsList />
    </div>
  );
}

