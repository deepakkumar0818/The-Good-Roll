"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  MapPin,
  DollarSign,
  Scale,
  Sprout,
  Factory,
  Warehouse,
  UserCircle,
  BarChart3,
  Zap
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Farmer Registration", href: "/farmers", icon: Users },
  { name: "Geo-Location", href: "/geo-location", icon: MapPin },
  { name: "Production", href: "/production", icon: Factory },
  { name: "Logistics", href: "/inventory", icon: Warehouse },
  { name: "Workforce & HR", href: "/hr", icon: UserCircle },
  { name: "Business Intelligence", href: "/analytics", icon: BarChart3 },
  { name: "Integrations", href: "/integrations", icon: Zap },
  { name: "Payments", href: "/payments", icon: DollarSign },
  { name: "Quality & Weight", href: "/quality-tracking", icon: Scale },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gradient-to-b from-green-700 to-green-900 text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Sprout className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">AgriConnect</h1>
            <p className="text-xs text-green-200">Procurement System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-800 text-white"
                  : "text-green-100 hover:bg-green-800/50"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-green-800">
        <div className="bg-green-800/50 rounded-lg p-3">
          <p className="text-xs text-green-200 mb-1">System Status</p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">All Systems Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

