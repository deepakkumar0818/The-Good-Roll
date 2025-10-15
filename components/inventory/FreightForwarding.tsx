"use client";

import { useState } from "react";
import { Truck, Ship, Plane, Package, MapPin, Clock, DollarSign, CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface Shipment {
  id: string;
  containerNumber: string;
  trackingNumber: string;
  mode: "Sea" | "Air" | "Road";
  carrier: string;
  status: "Booked" | "In Transit" | "At Port" | "Customs Clearance" | "Delivered" | "Delayed";
  origin: string;
  destination: string;
  currentLocation: string;
  departureDate: string;
  estimatedArrival: string;
  actualArrival: string | null;
  weight: string;
  value: string;
  documents: {
    billOfLading: boolean;
    commercialInvoice: boolean;
    packingList: boolean;
    certificateOfOrigin: boolean;
    customsDeclaration: boolean;
  };
  timeline: {
    date: string;
    time: string;
    status: string;
    location: string;
  }[];
}

const mockShipments: Shipment[] = [
  {
    id: "SHP-001",
    containerNumber: "MSCU7654321",
    trackingNumber: "MSKU7890123456",
    mode: "Sea",
    carrier: "Maersk Line",
    status: "In Transit",
    origin: "Mumbai Port, India",
    destination: "Los Angeles, USA",
    currentLocation: "Arabian Sea - En route",
    departureDate: "2024-10-05",
    estimatedArrival: "2024-10-25",
    actualArrival: null,
    weight: "18.5 Tons",
    value: "$45,000",
    documents: {
      billOfLading: true,
      commercialInvoice: true,
      packingList: true,
      certificateOfOrigin: true,
      customsDeclaration: true,
    },
    timeline: [
      { date: "2024-10-05", time: "08:00", status: "Container loaded", location: "Mumbai Port" },
      { date: "2024-10-05", time: "14:30", status: "Departed from port", location: "Mumbai Port" },
      { date: "2024-10-08", time: "10:00", status: "In transit", location: "Arabian Sea" },
    ],
  },
  {
    id: "SHP-002",
    containerNumber: "TEMU1234567",
    trackingNumber: "TEMU4567890123",
    mode: "Sea",
    carrier: "ONE (Ocean Network Express)",
    status: "At Port",
    origin: "Mumbai Port, India",
    destination: "Tokyo Port, Japan",
    currentLocation: "Tokyo Port - Awaiting customs",
    departureDate: "2024-10-01",
    estimatedArrival: "2024-10-10",
    actualArrival: null,
    weight: "20.0 Tons",
    value: "$52,000",
    documents: {
      billOfLading: true,
      commercialInvoice: true,
      packingList: true,
      certificateOfOrigin: true,
      customsDeclaration: false,
    },
    timeline: [
      { date: "2024-10-01", time: "09:00", status: "Container loaded", location: "Mumbai Port" },
      { date: "2024-10-01", time: "16:00", status: "Departed from port", location: "Mumbai Port" },
      { date: "2024-10-09", time: "08:00", status: "Arrived at destination port", location: "Tokyo Port" },
      { date: "2024-10-09", time: "14:00", status: "Awaiting customs clearance", location: "Tokyo Port" },
    ],
  },
  {
    id: "SHP-003",
    containerNumber: "HLCU4567890",
    trackingNumber: "HLCU7890456123",
    mode: "Sea",
    carrier: "Hapag-Lloyd",
    status: "Booked",
    origin: "Mumbai Port, India",
    destination: "Rotterdam, Netherlands",
    currentLocation: "Mumbai Port - Loading in progress",
    departureDate: "2024-10-12",
    estimatedArrival: "2024-11-05",
    actualArrival: null,
    weight: "12.0 Tons",
    value: "$28,000",
    documents: {
      billOfLading: false,
      commercialInvoice: true,
      packingList: true,
      certificateOfOrigin: false,
      customsDeclaration: false,
    },
    timeline: [
      { date: "2024-10-08", time: "10:00", status: "Booking confirmed", location: "Mumbai Port" },
      { date: "2024-10-10", time: "14:00", status: "Loading started", location: "Mumbai Port" },
    ],
  },
];

interface FreightProvider {
  id: string;
  name: string;
  logo: string;
  modes: string[];
  rating: number;
  apiStatus: "Connected" | "Disconnected" | "Error";
}

const freightProviders: FreightProvider[] = [
  { id: "1", name: "Maersk Line", logo: "🚢", modes: ["Sea"], rating: 4.8, apiStatus: "Connected" },
  { id: "2", name: "MSC Shipping", logo: "🚢", modes: ["Sea"], rating: 4.6, apiStatus: "Connected" },
  { id: "3", name: "DHL Express", logo: "✈️", modes: ["Air", "Road"], rating: 4.9, apiStatus: "Connected" },
  { id: "4", name: "FedEx", logo: "✈️", modes: ["Air", "Road"], rating: 4.7, apiStatus: "Disconnected" },
  { id: "5", name: "Blue Dart", logo: "🚚", modes: ["Air", "Road"], rating: 4.5, apiStatus: "Connected" },
];

export default function FreightForwarding() {
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredShipments = filterStatus === "all"
    ? mockShipments
    : mockShipments.filter(s => s.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Booked": return "bg-blue-100 text-blue-800";
      case "In Transit": return "bg-purple-100 text-purple-800";
      case "At Port": return "bg-yellow-100 text-yellow-800";
      case "Customs Clearance": return "bg-orange-100 text-orange-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Delayed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "Sea": return <Ship className="w-5 h-5" />;
      case "Air": return <Plane className="w-5 h-5" />;
      case "Road": return <Truck className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const getApiStatusColor = (status: string) => {
    switch (status) {
      case "Connected": return "bg-green-100 text-green-800";
      case "Disconnected": return "bg-gray-100 text-gray-800";
      case "Error": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    totalShipments: mockShipments.length,
    inTransit: mockShipments.filter(s => s.status === "In Transit").length,
    atPort: mockShipments.filter(s => s.status === "At Port").length,
    delivered: mockShipments.filter(s => s.status === "Delivered").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Shipments</p>
          <p className="text-2xl font-bold text-blue-900 mt-2">{stats.totalShipments}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">In Transit</p>
              <p className="text-2xl font-bold text-purple-900 mt-2">{stats.inTransit}</p>
            </div>
            <Ship className="w-8 h-8 text-purple-600 opacity-50" />
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-600">At Port</p>
          <p className="text-2xl font-bold text-yellow-900 mt-2">{stats.atPort}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Delivered</p>
          <p className="text-2xl font-bold text-green-900 mt-2">{stats.delivered}</p>
        </div>
      </div>

      {/* Freight Provider Integration Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Freight Provider Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {freightProviders.map((provider) => (
            <div key={provider.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{provider.logo}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{provider.name}</h4>
                    <p className="text-xs text-gray-500">⭐ {provider.rating}/5.0</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getApiStatusColor(provider.apiStatus)}`}>
                  {provider.apiStatus}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {provider.modes.map((mode) => (
                  <span key={mode} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {mode}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          suppressHydrationWarning
        >
          <option value="all">All Shipments</option>
          <option value="Booked">Booked</option>
          <option value="In Transit">In Transit</option>
          <option value="At Port">At Port</option>
          <option value="Customs Clearance">Customs Clearance</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button
          onClick={() => setShowBooking(!showBooking)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          suppressHydrationWarning
        >
          <Ship className="w-5 h-5 mr-2" />
          Book New Shipment
        </button>
      </div>

      {/* Booking Form */}
      {showBooking && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Freight Shipment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Container Number</label>
              <input type="text" placeholder="e.g., MSCU7654321" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mode of Transport</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                <option>Sea Freight</option>
                <option>Air Freight</option>
                <option>Road Transport</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Freight Provider</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning>
                {freightProviders.filter(p => p.apiStatus === "Connected").map(p => (
                  <option key={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Origin Port</label>
              <input type="text" placeholder="e.g., Mumbai Port" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination Port</label>
              <input type="text" placeholder="e.g., Los Angeles" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Departure Date</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" suppressHydrationWarning />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button onClick={() => setShowBooking(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Book Shipment
            </button>
          </div>
        </div>
      )}

      {/* Shipments List */}
      <div className="space-y-4">
        {filteredShipments.map((shipment) => (
          <div key={shipment.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  {getModeIcon(shipment.mode)}
                  <h3 className="text-lg font-semibold text-gray-900">{shipment.trackingNumber}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                    {shipment.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Container: {shipment.containerNumber} • {shipment.carrier}</p>
                <p className="text-xs text-gray-500 mt-1">ID: {shipment.id}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">{shipment.weight}</p>
                <p className="text-xs text-gray-600">Value: {shipment.value}</p>
              </div>
            </div>

            {/* Route */}
            <div className="flex items-center justify-between mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <div>
                  <p className="text-xs text-gray-500">Origin</p>
                  <p className="text-sm font-medium text-gray-900">{shipment.origin}</p>
                </div>
              </div>
              <div className="flex-1 mx-4">
                <div className="h-px bg-gray-300 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                    <span className="text-xs text-gray-500">→</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Destination</p>
                  <p className="text-sm font-medium text-gray-900">{shipment.destination}</p>
                </div>
              </div>
            </div>

            {/* Current Location */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-blue-900">
                  Current Location: <span className="font-semibold">{shipment.currentLocation}</span>
                </span>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Shipment Timeline</h4>
              <div className="space-y-2">
                {shipment.timeline.map((event, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 border-l-2 border-gray-200 pl-4 pb-4">
                      <p className="text-sm font-medium text-gray-900">{event.status}</p>
                      <p className="text-xs text-gray-600">{event.location}</p>
                      <p className="text-xs text-gray-500">{event.date} at {event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Shipping Documents</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries(shipment.documents).map(([doc, status]) => (
                  <div key={doc} className="flex items-center space-x-2">
                    {status ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600" />
                    )}
                    <span className="text-xs text-gray-700">
                      {doc.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-600 mr-2" />
                <div>
                  <p className="text-xs text-gray-500">Departure</p>
                  <p className="text-sm font-medium text-gray-900">{shipment.departureDate}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-600 mr-2" />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Est. Arrival</p>
                  <p className="text-sm font-medium text-gray-900">{shipment.estimatedArrival}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700" suppressHydrationWarning>
                Track Live
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                View Documents
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50" suppressHydrationWarning>
                Contact Carrier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

