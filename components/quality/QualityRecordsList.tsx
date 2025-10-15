"use client";

import { Award, AlertTriangle, Eye } from "lucide-react";

const mockRecords = [
  {
    id: "QC001",
    farmerId: "F001",
    farmerName: "Kwame Mensah",
    date: "2024-10-09",
    weight: 250,
    unit: "kg",
    grade: "A",
    moisture: 12.5,
    diameter: 8.5,
    barcodeId: "BAM2024001",
  },
  {
    id: "QC002",
    farmerId: "F002",
    farmerName: "Ama Sarpong",
    date: "2024-10-08",
    weight: 180,
    unit: "kg",
    grade: "B",
    moisture: 15.2,
    diameter: 7.2,
    barcodeId: "BAM2024002",
  },
  {
    id: "QC003",
    farmerId: "F003",
    farmerName: "Kofi Asante",
    date: "2024-10-08",
    weight: 320,
    unit: "kg",
    grade: "A",
    moisture: 11.8,
    diameter: 9.1,
    barcodeId: "BAM2024003",
  },
  {
    id: "QC004",
    farmerId: "F004",
    farmerName: "Akosua Boateng",
    date: "2024-10-07",
    weight: 145,
    unit: "kg",
    grade: "C",
    moisture: 18.5,
    diameter: 6.8,
    barcodeId: "BAM2024004",
  },
  {
    id: "QC005",
    farmerId: "F005",
    farmerName: "Yaw Owusu",
    date: "2024-10-07",
    weight: 285,
    unit: "kg",
    grade: "A",
    moisture: 13.2,
    diameter: 8.8,
    barcodeId: "BAM2024005",
  },
];

export default function QualityRecordsList() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                QC ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Farmer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Weight
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Moisture %
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Diameter (cm)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Barcode
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockRecords.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{record.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{record.farmerName}</div>
                  <div className="text-xs text-gray-500">{record.farmerId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">
                    {record.weight} {record.unit}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex items-center text-xs font-semibold rounded-full ${
                    record.grade === "A"
                      ? "bg-green-100 text-green-800"
                      : record.grade === "B"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {record.grade === "A" && <Award className="w-3 h-3 mr-1" />}
                    {record.grade === "C" && <AlertTriangle className="w-3 h-3 mr-1" />}
                    Grade {record.grade}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm ${
                    record.moisture < 15 ? "text-green-600" : "text-orange-600"
                  }`}>
                    {record.moisture}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{record.diameter} cm</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-mono text-gray-600">{record.barcodeId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

