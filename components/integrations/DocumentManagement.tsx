"use client";

import { useState } from "react";
import { FileText, Upload, CheckCircle, Clock, Users, Shield, Folder, PenTool } from "lucide-react";

export default function DocumentManagement() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const documentStats = [
    { label: "Total Documents", value: "3,456", icon: FileText, color: "blue" },
    { label: "Pending Signatures", value: "23", icon: PenTool, color: "orange" },
    { label: "Signed This Month", value: "156", icon: CheckCircle, color: "green" },
    { label: "Storage Used", value: "12.5 GB", icon: Folder, color: "purple" },
  ];

  const documentCategories = [
    { category: "Farmer Contracts", count: 1284, signed: 1256, pending: 28, template: "Bamboo Supply Agreement" },
    { category: "Purchase Orders", count: 456, signed: 445, pending: 11, template: "Standard PO Template" },
    { category: "Quality Certificates", count: 789, signed: 789, pending: 0, template: "QA Certification Form" },
    { category: "Export Documents", count: 234, signed: 228, pending: 6, template: "Export Declaration" },
    { category: "HR Documents", count: 693, signed: 685, pending: 8, template: "Employment Contract" },
  ];

  const recentDocuments = [
    { id: "DOC-8923", name: "Bamboo Supply Agreement - Kwame Asante", type: "Farmer Contract", uploadedBy: "John Mensah", uploadDate: "2024-06-24", status: "signed", signers: 2 },
    { id: "DOC-8922", name: "Purchase Order PO-2401", type: "Purchase Order", uploadedBy: "Sarah Owusu", uploadDate: "2024-06-24", status: "pending", signers: 1 },
    { id: "DOC-8921", name: "Quality Certificate QC-6789", type: "Quality Certificate", uploadedBy: "System Auto", uploadDate: "2024-06-23", status: "signed", signers: 1 },
    { id: "DOC-8920", name: "Export Declaration EXP-CNT-003", type: "Export Document", uploadedBy: "Michael Agyei", uploadDate: "2024-06-23", status: "signed", signers: 3 },
    { id: "DOC-8919", name: "Employment Contract - Ama Boateng", type: "HR Document", uploadedBy: "HR Department", uploadDate: "2024-06-22", status: "pending", signers: 2 },
  ];

  const pendingSignatures = [
    { docId: "DOC-8922", docName: "Purchase Order PO-2401", signer: "Factory Manager A", dueDate: "2024-06-26", role: "Approver" },
    { docId: "DOC-8919", docName: "Employment Contract - Ama Boateng", signer: "Ama Boateng", dueDate: "2024-06-25", role: "Employee" },
    { docId: "DOC-8918", docName: "Farmer Agreement - Kofi Mensah", signer: "Kofi Mensah", dueDate: "2024-06-27", role: "Farmer" },
  ];

  const workflows = [
    { name: "Farmer Onboarding", steps: 4, avgTime: "3 days", completionRate: 94, documents: 3 },
    { name: "Purchase Approval", steps: 3, avgTime: "1 day", completionRate: 98, documents: 2 },
    { name: "Quality Certification", steps: 2, avgTime: "4 hours", completionRate: 99, documents: 2 },
    { name: "Export Documentation", steps: 5, avgTime: "2 days", completionRate: 96, documents: 4 },
  ];

  const integrations = [
    { platform: "DocuSign", status: "connected", documentsProcessed: 2345, apiKey: "ds_live_*******" },
    { platform: "Adobe Sign", status: "connected", documentsProcessed: 1089, apiKey: "as_prod_*******" },
    { platform: "HelloSign", status: "connected", documentsProcessed: 567, apiKey: "hs_api_*******" },
    { platform: "AWS S3", status: "connected", documentsProcessed: 3456, apiKey: "AKIA*******" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "signed": return "text-green-600 bg-green-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "rejected": return "text-red-600 bg-red-100";
      case "draft": return "text-gray-600 bg-gray-100";
      case "connected": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "blue": return "from-blue-50 to-blue-100 text-blue-600";
      case "orange": return "from-orange-50 to-orange-100 text-orange-600";
      case "green": return "from-green-50 to-green-100 text-green-600";
      case "purple": return "from-purple-50 to-purple-100 text-purple-600";
      default: return "from-gray-50 to-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {documentStats.map((stat, idx) => {
          const Icon = stat.icon;
          const colorClass = getColorClass(stat.color);
          return (
            <div key={idx} className={`bg-gradient-to-br ${colorClass} rounded-lg p-6`}>
              <Icon className={`w-8 h-8 ${colorClass.split(' ')[2]} mb-3`} />
              <p className={`text-sm font-medium ${colorClass.split(' ')[2]}`}>{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Document Categories */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Folder className="w-5 h-5 mr-2 text-blue-600" />
          Document Categories & Templates
        </h3>
        <div className="space-y-4">
          {documentCategories.map((cat, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900">{cat.category}</h4>
                  <p className="text-xs text-gray-500 mt-1">Template: {cat.template}</p>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-lg font-bold text-gray-900">{cat.count}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Signed</p>
                    <p className="text-lg font-bold text-green-600">{cat.signed}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Pending</p>
                    <p className={`text-lg font-bold ${cat.pending > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                      {cat.pending}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${(cat.signed / cat.count) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Documents */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-purple-600" />
            Recent Documents
          </h3>
          <button 
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            suppressHydrationWarning
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uploaded By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signers</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.uploadedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{doc.signers}/{doc.signers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Signatures */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <PenTool className="w-5 h-5 mr-2 text-orange-600" />
          Pending E-Signatures
        </h3>
        <div className="space-y-3">
          {pendingSignatures.map((sig, idx) => (
            <div key={idx} className="border-2 border-orange-200 bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-semibold text-gray-900">{sig.docName}</span>
                    <span className="px-2 py-1 bg-orange-200 text-orange-900 text-xs font-semibold rounded">
                      {sig.role}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <span>Document ID: <strong>{sig.docId}</strong></span>
                    <span>Signer: <strong>{sig.signer}</strong></span>
                    <span>Due: <strong>{sig.dueDate}</strong></span>
                  </div>
                </div>
                <button 
                  className="ml-4 px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                  suppressHydrationWarning
                >
                  Send Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automated Workflows */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
          Automated Document Workflows
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflows.map((workflow, idx) => (
            <div key={idx} className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-gray-900">{workflow.name}</h4>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {workflow.completionRate}% Complete
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-white rounded p-3 text-center">
                  <p className="text-xs text-gray-500">Steps</p>
                  <p className="text-lg font-bold text-gray-900">{workflow.steps}</p>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <p className="text-xs text-gray-500">Avg Time</p>
                  <p className="text-sm font-bold text-blue-600">{workflow.avgTime}</p>
                </div>
                <div className="bg-white rounded p-3 text-center">
                  <p className="text-xs text-gray-500">Documents</p>
                  <p className="text-lg font-bold text-gray-900">{workflow.documents}</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${workflow.completionRate}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* E-Signature Platform Integrations */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-purple-600" />
          E-Signature & Storage Integrations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {integrations.map((integration, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">{integration.platform}</h4>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(integration.status)}`}>
                  {integration.status}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Documents Processed</span>
                  <span className="font-semibold text-gray-900">{integration.documentsProcessed.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">API Key</span>
                  <span className="font-mono text-xs text-gray-500">{integration.apiKey}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & Security */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-red-600" />
          Compliance & Security Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Encryption</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">At Rest</span>
                <span className="font-semibold text-green-600">AES-256</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">In Transit</span>
                <span className="font-semibold text-green-600">TLS 1.3</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Audit Trail</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">All Actions Logged</span>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Immutable Records</span>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Compliance</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">GDPR Compliant</span>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SOC 2 Type II</span>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          Document Digitization & E-Sign Benefits
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>100% Paperless:</strong> All 3,456 documents digitized with secure cloud storage and instant access.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Faster Turnaround:</strong> Farmer contracts signed in 3 days vs 2 weeks with physical signatures.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Legal Compliance:</strong> E-signatures legally binding with complete audit trail and timestamp verification.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Automated Workflows:</strong> 4 core workflows with 96%+ completion rates reduce manual intervention.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Multi-Platform:</strong> DocuSign, Adobe Sign, HelloSign integrations provide flexibility and redundancy.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

