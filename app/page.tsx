import { Users, MapPin, DollarSign, Scale, TrendingUp, AlertCircle } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to The Good Roll Procurement System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Farmers"
          value="1,284"
          change="+12%"
          trend="up"
          icon={<Users className="w-6 h-6" />}
          color="blue"
        />
        <StatsCard
          title="Active Locations"
          value="342"
          change="+8%"
          trend="up"
          icon={<MapPin className="w-6 h-6" />}
          color="green"
        />
        <StatsCard
          title="Total Payments"
          value="GH₵ 125K"
          change="+23%"
          trend="up"
          icon={<DollarSign className="w-6 h-6" />}
          color="purple"
        />
        <StatsCard
          title="Bamboo Collected"
          value="45.2T"
          change="+15%"
          trend="up"
          icon={<Scale className="w-6 h-6" />}
          color="orange"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">This Month</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">New Registrations</span>
              <span className="text-sm font-bold text-gray-900">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Pickups Completed</span>
              <span className="text-sm font-bold text-gray-900">423</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Payments Processed</span>
              <span className="text-sm font-bold text-gray-900">398</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Pending Actions</h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Pending Verifications</span>
              <span className="text-sm font-bold text-orange-600">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Pending Payments</span>
              <span className="text-sm font-bold text-orange-600">34</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-700">Quality Checks</span>
              <span className="text-sm font-bold text-orange-600">8</span>
            </div>
          </div>
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}
