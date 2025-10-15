import { Clock } from "lucide-react";

const activities = [
  { action: "New farmer registered", time: "5 min ago", type: "success" },
  { action: "Payment processed", time: "12 min ago", type: "info" },
  { action: "Quality check completed", time: "28 min ago", type: "success" },
  { action: "Pickup scheduled", time: "1 hour ago", type: "warning" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Clock className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              activity.type === "success" ? "bg-green-500" :
              activity.type === "info" ? "bg-blue-500" :
              "bg-orange-500"
            }`}></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

