"use client";

import { MapPin, Navigation, Phone } from "lucide-react";

const mockLocations = [
  {
    id: "L001",
    farmer: "Kwame Mensah",
    farmerId: "F001",
    coordinates: "6.0289° N, 0.9340° W",
    village: "Akim Oda",
    district: "Birim Central, Eastern Region",
    distance: "2.3 km",
    lastPickup: "2024-10-05",
    status: "Active",
  },
  {
    id: "L002",
    farmer: "Abena Osei",
    farmerId: "F002",
    coordinates: "6.6885° N, 1.6244° W",
    village: "Kumasi",
    district: "Kumasi Metro, Ashanti Region",
    distance: "18.7 km",
    lastPickup: "2024-10-07",
    status: "Active",
  },
  {
    id: "L003",
    farmer: "Kofi Asante",
    farmerId: "F003",
    coordinates: "7.3858° N, 1.3629° W",
    village: "Ejura",
    district: "Ejura-Sekyedumase, Ashanti Region",
    distance: "5.1 km",
    lastPickup: "2024-10-08",
    status: "Scheduled",
  },
  {
    id: "L004",
    farmer: "Ama Boateng",
    farmerId: "F004",
    coordinates: "7.7333° N, 2.1000° W",
    village: "Wenchi",
    district: "Wenchi Municipal, Bono Region",
    distance: "12.4 km",
    lastPickup: "2024-10-06",
    status: "Active",
  },
  {
    id: "L005",
    farmer: "Yaw Addo",
    farmerId: "F005",
    coordinates: "7.5833° N, 1.9333° W",
    village: "Techiman",
    district: "Techiman Municipal, Bono East Region",
    distance: "8.9 km",
    lastPickup: "2024-10-10",
    status: "Active",
  },
];

export default function LocationsList() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Farmer Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Coordinates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Distance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Pickup
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
            {mockLocations.map((location) => (
              <tr key={location.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{location.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{location.farmer}</div>
                  <div className="text-xs text-gray-500">{location.farmerId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-mono text-xs">{location.coordinates}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <div>
                      <div>{location.village}</div>
                      <div className="text-xs text-gray-500">{location.district}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{location.distance}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{location.lastPickup}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    location.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {location.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Navigation className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900">
                    <Phone className="w-4 h-4" />
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

