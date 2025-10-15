"use client";

import { useState } from "react";
import { Plus, CheckCircle, XCircle, FileText, Download, Calendar } from "lucide-react";

interface QualityCheck {
  id: string;
  batchId: string;
  lotNumber: string;
  productType: string;
  factory: string;
  checkDate: string;
  checkTime: string;
  inspector: string;
  parameters: {
    moisture: { value: string; status: "Pass" | "Fail" };
    density: { value: string; status: "Pass" | "Fail" };
    strength: { value: string; status: "Pass" | "Fail" };
    purity: { value: string; status: "Pass" | "Fail" };
  };
  overallStatus: "Pass" | "Fail" | "Pending";
  grade: "A" | "B" | "C" | "-";
  complianceStatus: "Compliant" | "Non-Compliant" | "Pending Review";
  notes: string;
  approvedBy: string;
}

const mockQualityChecks: QualityCheck[] = [
  {
    id: "QC-001",
    batchId: "BATCH-001",
    lotNumber: "LOT-2024-10-09-001",
    productType: "Bamboo Pulp",
    factory: "Factory A - Kumasi",
    checkDate: "2024-10-09",
    checkTime: "10:30",
    inspector: "Dr. Kwame Asante",
    parameters: {
      moisture: { value: "12%", status: "Pass" },
      density: { value: "650 kg/m³", status: "Pass" },
      strength: { value: "85 MPa", status: "Pass" },
      purity: { value: "98%", status: "Pass" },
    },
    overallStatus: "Pass",
    grade: "A",
    complianceStatus: "Compliant",
    notes: "All parameters within acceptable range",
    approvedBy: "Quality Manager",
  },
  {
    id: "QC-002",
    batchId: "BATCH-002",
    lotNumber: "LOT-2024-10-09-002",
    productType: "Pulp Sheets",
    factory: "Factory A - Kumasi",
    checkDate: "2024-10-09",
    checkTime: "11:00",
    inspector: "Dr. Ama Sarpong",
    parameters: {
      moisture: { value: "15%", status: "Pass" },
      density: { value: "620 kg/m³", status: "Pass" },
      strength: { value: "80 MPa", status: "Pass" },
      purity: { value: "96%", status: "Pass" },
    },
    overallStatus: "Pending",
    grade: "-",
    complianceStatus: "Pending Review",
    notes: "Awaiting final approval",
    approvedBy: "-",
  },
  {
    id: "QC-003",
    batchId: "BATCH-005",
    lotNumber: "LOT-2024-10-08-016",
    productType: "Bamboo Pulp",
    factory: "Factory C - Takoradi",
    checkDate: "2024-10-08",
    checkTime: "16:45",
    inspector: "Dr. Kofi Mensah",
    parameters: {
      moisture: { value: "18%", status: "Fail" },
      density: { value: "580 kg/m³", status: "Fail" },
      strength: { value: "65 MPa", status: "Fail" },
      purity: { value: "88%", status: "Fail" },
    },
    overallStatus: "Fail",
    grade: "C",
    complianceStatus: "Non-Compliant",
    notes: "Multiple parameters below threshold - batch rejected",
    approvedBy: "Quality Manager",
  },
];

export default function QualityCompliance() {
  const [showForm, setShowForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCompliance, setFilterCompliance] = useState("all");

  const filteredChecks = mockQualityChecks.filter(check => {
    const matchesStatus = filterStatus === "all" || check.overallStatus === filterStatus;
    const matchesCompliance = filterCompliance === "all" || check.complianceStatus === filterCompliance;
    return matchesStatus && matchesCompliance;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pass": return "bg-green-100 text-green-800";
      case "Fail": return "bg-red-100 text-red-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getComplianceColor = (status: string) => {
    switch (status) {
      case "Compliant": return "bg-green-100 text-green-800 border-green-300";
      case "Non-Compliant": return "bg-red-100 text-red-800 border-red-300";
      case "Pending Review": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const stats = {
    totalChecks: mockQualityChecks.length,
    passed: mockQualityChecks.filter(c => c.overallStatus === "Pass").length,
    failed: mockQualityChecks.filter(c => c.overallStatus === "Fail").length,
    pending: mockQualityChecks.filter(c => c.overallStatus === "Pending").length,
    complianceRate: 66.7,
  };

  return (
    <div className="space-y-6">
      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Total Checks</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalChecks}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs text-green-600 mb-1">Passed</p>
          <p className="text-2xl font-bold text-green-900">{stats.passed}</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-xs text-red-600 mb-1">Failed</p>
          <p className="text-2xl font-bold text-red-900">{stats.failed}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-xs text-yellow-600 mb-1">Pending Review</p>
          <p className="text-2xl font-bold text-yellow-900">{stats.pending}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs text-blue-600 mb-1">Compliance Rate</p>
          <p className="text-2xl font-bold text-blue-900">{stats.complianceRate}%</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Status</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
            <option value="Pending">Pending</option>
          </select>
          <select
            value={filterCompliance}
            onChange={(e) => setFilterCompliance(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            <option value="all">All Compliance</option>
            <option value="Compliant">Compliant</option>
            <option value="Non-Compliant">Non-Compliant</option>
            <option value="Pending Review">Pending Review</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          suppressHydrationWarning
        >
          <Plus className="w-5 h-5 mr-2" />
          New Quality Check
        </button>
      </div>

      {/* Quality Check Form */}
      {showForm && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Check Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Batch ID</label>
              <input type="text" placeholder="BATCH-XXX" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Bamboo Pulp</option>
                <option>Pulp Sheets</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inspector</label>
              <input type="text" placeholder="Inspector name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-3 mt-4 pb-2 border-b">Quality Parameters</h4>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Moisture Content (%)</label>
              <input type="number" step="0.1" placeholder="e.g., 12" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Density (kg/m³)</label>
              <input type="number" placeholder="e.g., 650" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Strength (MPa)</label>
              <input type="number" placeholder="e.g., 85" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Purity (%)</label>
              <input type="number" step="0.1" placeholder="e.g., 98" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>

            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quality Notes</label>
              <textarea rows={3} placeholder="Enter observations and notes..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning></textarea>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Submit Quality Check
            </button>
          </div>
        </div>
      )}

      {/* Quality Check Records */}
      <div className="space-y-4">
        {filteredChecks.map((check) => (
          <div key={check.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{check.id}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(check.overallStatus)}`}>
                    {check.overallStatus}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded border ${getComplianceColor(check.complianceStatus)}`}>
                    {check.complianceStatus}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{check.productType} - {check.factory}</p>
                <p className="text-xs text-gray-500 mt-1">Batch: {check.batchId} • Lot: {check.lotNumber}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {check.checkDate} at {check.checkTime}
                </div>
                <div className="text-xs text-gray-500 mt-1">Inspector: {check.inspector}</div>
                {check.grade !== "-" && (
                  <div className="mt-2">
                    <span className="px-3 py-1 bg-gray-900 text-white text-sm font-bold rounded">
                      Grade {check.grade}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Quality Parameters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Moisture</span>
                  {check.parameters.moisture.status === "Pass" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900">{check.parameters.moisture.value}</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Density</span>
                  {check.parameters.density.status === "Pass" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900">{check.parameters.density.value}</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Strength</span>
                  {check.parameters.strength.status === "Pass" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900">{check.parameters.strength.value}</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">Purity</span>
                  {check.parameters.purity.status === "Pass" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900">{check.parameters.purity.value}</p>
              </div>
            </div>

            {/* Notes and Actions */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs text-gray-500 mb-1">Notes:</p>
              <p className="text-sm text-gray-700 mb-3">{check.notes}</p>
              {check.approvedBy !== "-" && (
                <p className="text-xs text-gray-500">Approved by: {check.approvedBy}</p>
              )}
            </div>

            <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                View Full Report
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Download PDF
              </button>
              {check.overallStatus === "Pending" && (
                <>
                  <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700" suppressHydrationWarning>
                    Approve
                  </button>
                  <button className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700" suppressHydrationWarning>
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

