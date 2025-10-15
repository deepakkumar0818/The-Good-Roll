"use client";

import { useState } from "react";
import { MapPin, Navigation, Route, Plus } from "lucide-react";
import MapView from "@/components/geo-location/MapView";
import LocationsList from "@/components/geo-location/LocationsList";

export default function GeoLocationPage() {
  const [view, setView] = useState<"map" | "list">("map");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Geo-Location Tracking</h1>
          <p className="text-gray-600 mt-2">Plot farmer fields and optimize pickup routes</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setView("map")}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              view === "map"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Map View
          </button>
          <button
            onClick={() => setView("list")}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              view === "list"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <Navigation className="w-5 h-5 mr-2" />
            List View
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Locations</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">342</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Routes</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">28</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Route className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Coverage Area</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1,245 km²</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Navigation className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {view === "map" ? <MapView /> : <LocationsList />}
    </div>
  );
}

