"use client";

import { useState } from "react";
import { MapPin, Navigation2, Maximize2 } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import map component to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4 animate-pulse" />
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});

export default function MapView() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Farmer Locations Map</h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Navigation2 className="w-4 h-4 inline mr-1" />
              Optimize Route
            </button>
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Maximize2 className="w-4 h-4 inline mr-1" />
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className={`relative ${isFullscreen ? "h-[calc(100vh-200px)]" : "h-[600px]"}`}>
        <MapComponent />
      </div>

      {/* Location Info Panel */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Nearest Farmer</p>
            <p className="font-semibold text-gray-900">Kwame Mensah (2.3 km)</p>
          </div>
          <div>
            <p className="text-gray-600">Today&apos;s Pickups</p>
            <p className="font-semibold text-gray-900">12 Scheduled</p>
          </div>
          <div>
            <p className="text-gray-600">Route Efficiency</p>
            <p className="font-semibold text-green-600">94%</p>
          </div>
          <div>
            <p className="text-gray-600">Avg Distance</p>
            <p className="font-semibold text-gray-900">15.4 km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

