"use client";

import { Eye, Edit2, Phone, MapPin } from "lucide-react";

interface FarmersListProps {
  searchTerm: string;
}

const mockFarmers = [
  {
    id: "F001",
    name: "Kwame Mensah",
    phone: "+233 24 567 8901",
    village: "Akim Oda",
    district: "Birim Central",
    state: "Eastern Region",
    landSize: "5.2 acres",
    status: "Active",
    registered: "2024-09-15",
  },
  {
    id: "F002",
    name: "Abena Osei",
    phone: "+233 20 123 4567",
    village: "Kumasi",
    district: "Kumasi Metro",
    state: "Ashanti Region",
    landSize: "3.8 acres",
    status: "Active",
    registered: "2024-09-20",
  },
  {
    id: "F003",
    name: "Kofi Asante",
    phone: "+233 27 890 1234",
    village: "Ejura",
    district: "Ejura-Sekyedumase",
    state: "Ashanti Region",
    landSize: "7.5 acres",
    status: "Pending",
    registered: "2024-10-01",
  },
  {
    id: "F004",
    name: "Ama Boateng",
    phone: "+233 26 456 7890",
    village: "Wenchi",
    district: "Wenchi Municipal",
    state: "Bono Region",
    landSize: "4.2 acres",
    status: "Active",
    registered: "2024-10-05",
  },
  {
    id: "F005",
    name: "Yaw Addo",
    phone: "+233 24 234 5678",
    village: "Techiman",
    district: "Techiman Municipal",
    state: "Bono East Region",
    landSize: "6.1 acres",
    status: "Active",
    registered: "2024-10-08",
  },
  {
    id: "F006",
    name: "Akosua Darko",
    phone: "+233 20 987 6543",
    village: "Dunkwa-on-Offin",
    district: "Upper Denkyira East",
    state: "Central Region",
    landSize: "4.8 acres",
    status: "Active",
    registered: "2024-10-10",
  },
];

export default function FarmersList({ searchTerm }: FarmersListProps) {
  const filteredFarmers = mockFarmers.filter(farmer =>
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.phone.includes(searchTerm) ||
    farmer.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Farmer ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Land Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredFarmers.map((farmer) => (
              <tr key={farmer.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{farmer.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{farmer.name}</div>
                  <div className="text-xs text-gray-500">Registered: {farmer.registered}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    {farmer.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <div>
                      <div>{farmer.village}</div>
                      <div className="text-xs text-gray-500">{farmer.district}, {farmer.state}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{farmer.landSize}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    farmer.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {farmer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900" suppressHydrationWarning>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900" suppressHydrationWarning>
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

