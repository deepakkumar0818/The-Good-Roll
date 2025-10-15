"use client";

import { useState } from "react";
import { Award, TrendingUp, BookOpen, Target, Star } from "lucide-react";

export default function PerformanceManagement() {
  const [selectedEmployee, setSelectedEmployee] = useState("all");

  const performanceMetrics = [
    { metric: "Productivity", score: 85, target: 80, status: "Above Target" },
    { metric: "Quality", score: 92, target: 90, status: "Above Target" },
    { metric: "Attendance", score: 95, target: 95, status: "On Target" },
    { metric: "Safety Compliance", score: 88, target: 90, status: "Below Target" },
  ];

  const trainings = [
    { id: "1", name: "Safety & Compliance Training", type: "Mandatory", status: "Completed", date: "2024-09-15", participants: 9800 },
    { id: "2", name: "Quality Control Basics", type: "Technical", status: "Completed", date: "2024-08-20", participants: 500 },
    { id: "3", name: "Machine Operation Advanced", type: "Technical", status: "In Progress", date: "2024-10-01", participants: 200 },
    { id: "4", name: "Leadership Development", type: "Soft Skills", status: "Scheduled", date: "2024-11-01", participants: 50 },
  ];

  const goals = [
    { id: "1", goal: "Reduce production defects by 5%", owner: "Production Team", progress: 75, status: "On Track" },
    { id: "2", goal: "Improve attendance rate to 97%", owner: "All Employees", progress: 60, status: "At Risk" },
    { id: "3", goal: "Complete safety training", owner: "All Employees", progress: 98, status: "On Track" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Scheduled": return "bg-blue-100 text-blue-800";
      case "On Track": return "bg-green-100 text-green-800";
      case "At Risk": return "bg-red-100 text-red-800";
      case "Above Target": return "bg-green-100 text-green-800";
      case "On Target": return "bg-blue-100 text-blue-800";
      case "Below Target": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-sm font-medium text-blue-600">Avg Performance Score</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">90%</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-sm font-medium text-green-600">Training Completed</p>
          <p className="text-3xl font-bold text-green-900 mt-2">98%</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-sm font-medium text-purple-600">Goals On Track</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">2/3</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Star className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-sm font-medium text-orange-600">Top Performers</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">856</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Metrics</h3>
        <div className="space-y-4">
          {performanceMetrics.map((metric, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{metric.metric}</p>
                  <p className="text-xs text-gray-500">Target: {metric.target}%</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-gray-900">{metric.score}%</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    metric.score >= metric.target ? "bg-green-500" :
                    metric.score >= metric.target * 0.9 ? "bg-yellow-500" :
                    "bg-red-500"
                  }`}
                  style={{ width: `${metric.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Programs */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Programs</h3>
        <div className="space-y-3">
          {trainings.map((training) => (
            <div key={training.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">{training.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {training.type} • {training.date} • {training.participants.toLocaleString()} participants
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(training.status)}`}>
                  {training.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals & Objectives */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Goals & Objectives</h3>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{goal.goal}</p>
                  <p className="text-xs text-gray-500">Owner: {goal.owner}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-bold text-gray-900">{goal.progress}%</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(goal.status)}`}>
                    {goal.status}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    goal.progress >= 80 ? "bg-green-500" :
                    goal.progress >= 60 ? "bg-yellow-500" :
                    "bg-red-500"
                  }`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <Award className="w-5 h-5 mr-2 text-gray-700" />
          Performance Reviews
        </button>
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <BookOpen className="w-5 h-5 mr-2 text-gray-700" />
          Schedule Training
        </button>
        <button className="flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 text-gray-900 font-medium transition-colors" suppressHydrationWarning>
          <Target className="w-5 h-5 mr-2 text-gray-700" />
          Set Goals
        </button>
      </div>
    </div>
  );
}

