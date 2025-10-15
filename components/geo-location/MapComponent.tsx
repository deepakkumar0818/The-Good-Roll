"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in leaflet
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const activeIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const scheduledIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const farmerLocations = [
  {
    id: "L001",
    farmer: "Kwame Mensah",
    farmerId: "F001",
    lat: 6.0289,
    lng: -0.9340,
    village: "Akim Oda",
    district: "Birim Central, Eastern Region",
    distance: "2.3 km",
    lastPickup: "2024-10-05",
    status: "Active",
    phone: "+233 24 567 8901",
    cropType: "Bambusa bambos",
  },
  {
    id: "L002",
    farmer: "Abena Osei",
    farmerId: "F002",
    lat: 6.6885,
    lng: -1.6244,
    village: "Kumasi",
    district: "Kumasi Metro, Ashanti Region",
    distance: "18.7 km",
    lastPickup: "2024-10-07",
    status: "Active",
    phone: "+233 20 123 4567",
    cropType: "Dendrocalamus strictus",
  },
  {
    id: "L003",
    farmer: "Kofi Asante",
    farmerId: "F003",
    lat: 7.3858,
    lng: -1.3629,
    village: "Ejura",
    district: "Ejura-Sekyedumase, Ashanti Region",
    distance: "5.1 km",
    lastPickup: "2024-10-08",
    status: "Scheduled",
    phone: "+233 27 890 1234",
    cropType: "Bambusa vulgaris",
  },
  {
    id: "L004",
    farmer: "Ama Boateng",
    farmerId: "F004",
    lat: 7.7333,
    lng: -2.1000,
    village: "Wenchi",
    district: "Wenchi Municipal, Bono Region",
    distance: "12.4 km",
    lastPickup: "2024-10-06",
    status: "Active",
    phone: "+233 26 456 7890",
    cropType: "Oxytenanthera abyssinica",
  },
  {
    id: "L005",
    farmer: "Yaw Addo",
    farmerId: "F005",
    lat: 7.5833,
    lng: -1.9333,
    village: "Techiman",
    district: "Techiman Municipal, Bono East Region",
    distance: "8.9 km",
    lastPickup: "2024-10-09",
    status: "Active",
    phone: "+233 24 234 5678",
    cropType: "Bambusa balcooa",
  },
];

export default function MapComponent() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map centered on Ghana (Kumasi region)
    const map = L.map(mapContainerRef.current).setView([6.6885, -1.6244], 8);
    mapRef.current = map;

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add markers for each farmer location
    farmerLocations.forEach((location) => {
      const icon = location.status === "Active" ? activeIcon : scheduledIcon;
      
      const marker = L.marker([location.lat, location.lng], { icon }).addTo(map);

      // Create popup content
      const popupContent = `
        <div style="min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #111827;">
            ${location.farmer}
          </h3>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">
            ${location.farmerId}
          </div>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 8px; font-size: 13px;">
            <div style="margin-bottom: 4px;">
              <strong>📍 Location:</strong> ${location.village}, ${location.district}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>🎋 Bamboo Variety:</strong> ${location.cropType}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>📏 Distance:</strong> ${location.distance}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>📅 Last Pickup:</strong> ${location.lastPickup}
            </div>
            <div style="margin-bottom: 4px;">
              <strong>📞 Phone:</strong> ${location.phone}
            </div>
            <div style="margin-top: 8px;">
              <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 600; ${
                location.status === "Active"
                  ? "background-color: #d1fae5; color: #065f46;"
                  : "background-color: #dbeafe; color: #1e40af;"
              }">
                ${location.status}
              </span>
            </div>
          </div>
          <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
            <button style="width: 100%; padding: 6px 12px; background-color: #10b981; color: white; border: none; border-radius: 6px; font-size: 12px; cursor: pointer; font-weight: 500;">
              Navigate to Farm
            </button>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    // Add a circle to show coverage area
    L.circle([6.6885, -1.6244], {
      color: "green",
      fillColor: "#10b981",
      fillOpacity: 0.1,
      radius: 50000, // 50km radius
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full" />
      
      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-[1000]">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Map Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Active Farms ({farmerLocations.filter(f => f.status === "Active").length})</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Scheduled Pickups ({farmerLocations.filter(f => f.status === "Scheduled").length})</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 bg-opacity-20 rounded-full border-2 border-green-500 mr-2"></div>
            <span className="text-gray-700">Coverage Area (50 km)</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
          <div>Total Locations: <strong>{farmerLocations.length}</strong></div>
        </div>
      </div>
    </div>
  );
}


