"use client";

import { CheckCircle, Clock, XCircle, Download } from "lucide-react";

const mockPayments = [
  {
    id: "PMT001",
    farmerId: "F001",
    farmerName: "Kwame Mensah",
    amount: 1500,
    advance: 200,
    deduction: 50,
    netAmount: 1250,
    method: "MTN Mobile Money",
    status: "Completed",
    date: "2024-10-08",
    transactionId: "MTN789456123",
  },
  {
    id: "PMT002",
    farmerId: "F002",
    farmerName: "Ama Sarpong",
    amount: 1200,
    advance: 0,
    deduction: 0,
    netAmount: 1200,
    method: "Vodafone Cash",
    status: "Completed",
    date: "2024-10-07",
    transactionId: "VF852963741",
  },
  {
    id: "PMT003",
    farmerId: "F003",
    farmerName: "Kofi Asante",
    amount: 1850,
    advance: 300,
    deduction: 100,
    netAmount: 1450,
    method: "MTN Mobile Money",
    status: "Pending",
    date: "2024-10-09",
    transactionId: "-",
  },
  {
    id: "PMT004",
    farmerId: "F004",
    farmerName: "Akosua Boateng",
    amount: 850,
    advance: 100,
    deduction: 0,
    netAmount: 750,
    method: "AirtelTigo Money",
    status: "Completed",
    date: "2024-10-06",
    transactionId: "AT963258741",
  },
  {
    id: "PMT005",
    farmerId: "F005",
    farmerName: "Yaw Owusu",
    amount: 2200,
    advance: 400,
    deduction: 150,
    netAmount: 1650,
    method: "MTN Mobile Money",
    status: "Completed",
    date: "2024-10-05",
    transactionId: "MTN741258963",
  },
];

export default function PaymentsList() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Farmer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Base Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Advance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deduction
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Net Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockPayments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.id}</div>
                  <div className="text-xs text-gray-500">{payment.transactionId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.farmerName}</div>
                  <div className="text-xs text-gray-500">{payment.farmerId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">₵{payment.amount.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-orange-600">
                    {payment.advance > 0 ? `-₵${payment.advance.toLocaleString()}` : "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-red-600">
                    {payment.deduction > 0 ? `-₵${payment.deduction.toLocaleString()}` : "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-green-600">
                    ₵{payment.netAmount.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{payment.method}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${
                    payment.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : payment.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {payment.status === "Completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {payment.status === "Pending" && <Clock className="w-3 h-3 mr-1" />}
                    {payment.status === "Failed" && <XCircle className="w-3 h-3 mr-1" />}
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{payment.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Download className="w-4 h-4" />
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

