"use client";

import { useState } from "react";
import { Plus, Wallet, TrendingDown } from "lucide-react";

interface Asset {
  id: string;
  name: string;
  category: string;
  purchaseDate: string;
  purchaseValue: number;
  currentValue: number;
  depreciationMethod: string;
  usefulLife: number;
  monthlyDepreciation: number;
  accumulatedDepreciation: number;
}

const mockAssets: Asset[] = [
  {
    id: "AST-001",
    name: "Pulping Machine A1",
    category: "Production Equipment",
    purchaseDate: "2023-01-15",
    purchaseValue: 2500000,
    currentValue: 2083333,
    depreciationMethod: "Straight Line",
    usefulLife: 60,
    monthlyDepreciation: 41667,
    accumulatedDepreciation: 416667,
  },
  {
    id: "AST-002",
    name: "Factory Building - Jabalpur",
    category: "Buildings",
    purchaseDate: "2022-06-01",
    purchaseValue: 15000000,
    currentValue: 14062500,
    depreciationMethod: "Straight Line",
    usefulLife: 240,
    monthlyDepreciation: 62500,
    accumulatedDepreciation: 937500,
  },
  {
    id: "AST-003",
    name: "Delivery Truck - JAB-01",
    category: "Vehicles",
    purchaseDate: "2023-08-10",
    purchaseValue: 1200000,
    currentValue: 1050000,
    depreciationMethod: "Straight Line",
    usefulLife: 96,
    monthlyDepreciation: 12500,
    accumulatedDepreciation: 150000,
  },
];

export default function AssetManagement() {
  const [showForm, setShowForm] = useState(false);

  const totalAssetValue = mockAssets.reduce((sum, asset) => sum + asset.currentValue, 0);
  const totalDepreciation = mockAssets.reduce((sum, asset) => sum + asset.accumulatedDepreciation, 0);

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Fixed Asset Register:</strong> Track all fixed assets with automatic depreciation calculations and compliance reports
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Assets</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{mockAssets.length}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Current Asset Value</p>
          <p className="text-2xl font-bold text-green-900 mt-2">₵{(totalAssetValue / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm font-medium text-orange-600">Total Depreciation</p>
          <p className="text-2xl font-bold text-orange-900 mt-2">₵{(totalDepreciation / 1000000).toFixed(1)}M</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" suppressHydrationWarning>
          <TrendingDown className="w-4 h-4 inline mr-2" />
          Run Depreciation
        </button>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Asset
        </button>
      </div>

      {/* Assets List */}
      <div className="space-y-4">
        {mockAssets.map((asset) => (
          <div key={asset.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Wallet className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{asset.name}</h3>
                  <p className="text-sm text-gray-600">{asset.category} • {asset.id}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Active</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-xs text-gray-500 mb-1">Purchase Value</p>
                <p className="text-sm font-semibold text-gray-900">₵{asset.purchaseValue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Current Value</p>
                <p className="text-sm font-semibold text-green-600">₵{asset.currentValue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Monthly Depreciation</p>
                <p className="text-sm font-semibold text-orange-600">₵{asset.monthlyDepreciation.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Accumulated</p>
                <p className="text-sm font-semibold text-red-600">₵{asset.accumulatedDepreciation.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Purchase Date</p>
                <p className="font-medium">{asset.purchaseDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Method</p>
                <p className="font-medium">{asset.depreciationMethod}</p>
              </div>
              <div>
                <p className="text-gray-500">Useful Life</p>
                <p className="font-medium">{asset.usefulLife} months</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

