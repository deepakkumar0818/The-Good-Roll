"use client";

import { useState } from "react";
import { Cpu, Activity, AlertTriangle, CheckCircle, Radio, Thermometer, Gauge, Zap } from "lucide-react";

export default function IoTMachineData() {
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);

  const machines = [
    {
      id: "MCH-001",
      name: "Pulp Processing Line A",
      location: "Factory A - Floor 1",
      status: "operational",
      temperature: 85,
      vibration: 2.3,
      power: 145,
      efficiency: 94,
      uptime: 98.5,
      lastMaintenance: "2024-05-28",
    },
    {
      id: "MCH-002",
      name: "Sheet Forming Machine B1",
      location: "Factory A - Floor 2",
      status: "operational",
      temperature: 92,
      vibration: 3.1,
      power: 168,
      efficiency: 91,
      uptime: 96.2,
      lastMaintenance: "2024-06-05",
    },
    {
      id: "MCH-003",
      name: "Drying Chamber C",
      location: "Factory B - Floor 1",
      status: "warning",
      temperature: 105,
      vibration: 4.5,
      power: 198,
      efficiency: 87,
      uptime: 92.8,
      lastMaintenance: "2024-04-15",
    },
    {
      id: "MCH-004",
      name: "Cutting & Packaging Unit",
      location: "Factory B - Floor 2",
      status: "operational",
      temperature: 78,
      vibration: 1.8,
      power: 125,
      efficiency: 96,
      uptime: 99.1,
      lastMaintenance: "2024-06-12",
    },
  ];

  const iotSensors = [
    { type: "Temperature Sensors", count: 48, protocol: "MQTT", status: "active", dataPoints: 288000 },
    { type: "Vibration Sensors", count: 32, protocol: "MQTT", status: "active", dataPoints: 192000 },
    { type: "Power Meters", count: 24, protocol: "Modbus TCP", status: "active", dataPoints: 144000 },
    { type: "Pressure Sensors", count: 16, protocol: "OPC UA", status: "active", dataPoints: 96000 },
    { type: "Flow Meters", count: 12, protocol: "MQTT", status: "active", dataPoints: 72000 },
  ];

  const alerts = [
    { 
      id: "ALT-456", 
      machine: "MCH-003", 
      severity: "high", 
      message: "Temperature exceeds threshold (105°C > 100°C)", 
      time: "5 mins ago",
      action: "Reduce speed by 15% and inspect cooling system"
    },
    { 
      id: "ALT-455", 
      machine: "MCH-003", 
      severity: "medium", 
      message: "Vibration levels elevated (4.5 mm/s)", 
      time: "12 mins ago",
      action: "Schedule maintenance check for bearings"
    },
    { 
      id: "ALT-454", 
      machine: "MCH-002", 
      severity: "low", 
      message: "Power consumption spike detected", 
      time: "1 hour ago",
      action: "Monitor for recurring pattern"
    },
  ];

  const realtimeData = [
    { timestamp: "14:30:00", mch001Temp: 85, mch002Temp: 92, mch003Temp: 105, mch004Temp: 78 },
    { timestamp: "14:31:00", mch001Temp: 86, mch002Temp: 91, mch003Temp: 104, mch004Temp: 79 },
    { timestamp: "14:32:00", mch001Temp: 85, mch002Temp: 93, mch003Temp: 106, mch004Temp: 78 },
    { timestamp: "14:33:00", mch001Temp: 84, mch002Temp: 92, mch003Temp: 105, mch004Temp: 77 },
    { timestamp: "14:34:00", mch001Temp: 85, mch002Temp: 91, mch003Temp: 104, mch004Temp: 78 },
  ];

  const protocols = [
    { name: "MQTT Broker", endpoint: "mqtt://iot.bamboo.local:1883", status: "connected", messages: 45678 },
    { name: "Modbus TCP Gateway", endpoint: "modbus://10.0.1.50:502", status: "connected", messages: 12345 },
    { name: "OPC UA Server", endpoint: "opc.tcp://10.0.1.60:4840", status: "connected", messages: 8901 },
    { name: "REST API Endpoint", endpoint: "https://api.bamboo.local/iot/v1", status: "connected", messages: 23456 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "text-green-600 bg-green-100";
      case "warning": return "text-yellow-600 bg-yellow-100";
      case "critical": return "text-red-600 bg-red-100";
      case "offline": return "text-gray-600 bg-gray-100";
      case "active": return "text-green-600 bg-green-100";
      case "connected": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-50 border-red-300 text-red-900";
      case "medium": return "bg-yellow-50 border-yellow-300 text-yellow-900";
      case "low": return "bg-blue-50 border-blue-300 text-blue-900";
      default: return "bg-gray-50 border-gray-300 text-gray-900";
    }
  };

  return (
    <div className="space-y-6">
      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <Cpu className="w-8 h-8 text-blue-600 mb-3" />
          <p className="text-sm font-medium text-blue-700">Connected Machines</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{machines.length}</p>
          <p className="text-sm mt-2 font-semibold text-blue-700">Across 3 factories</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <Radio className="w-8 h-8 text-green-600 mb-3" />
          <p className="text-sm font-medium text-green-700">Active Sensors</p>
          <p className="text-3xl font-bold text-green-900 mt-2">132</p>
          <p className="text-sm mt-2 font-semibold text-green-700">5 sensor types</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
          <Activity className="w-8 h-8 text-purple-600 mb-3" />
          <p className="text-sm font-medium text-purple-700">Data Points/Day</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">792K</p>
          <p className="text-sm mt-2 font-semibold text-purple-700">Real-time collection</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-orange-600 mb-3" />
          <p className="text-sm font-medium text-orange-700">Avg Uptime</p>
          <p className="text-3xl font-bold text-orange-900 mt-2">96.7%</p>
          <p className="text-sm mt-2 font-semibold text-orange-700">Last 30 days</p>
        </div>
      </div>

      {/* Machine Status Dashboard */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Cpu className="w-5 h-5 mr-2 text-blue-600" />
          Real-time Machine Monitoring
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {machines.map((machine) => (
            <div 
              key={machine.id}
              className={`border-2 rounded-lg p-5 cursor-pointer hover:shadow-lg transition-shadow ${
                machine.status === "warning" ? "border-yellow-300 bg-yellow-50" : "border-gray-200 bg-white"
              }`}
              onClick={() => setSelectedMachine(machine.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{machine.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{machine.id} • {machine.location}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(machine.status)}`}>
                  {machine.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 rounded p-3">
                  <div className="flex items-center mb-1">
                    <Thermometer className="w-4 h-4 text-blue-600 mr-1" />
                    <span className="text-xs text-gray-600">Temperature</span>
                  </div>
                  <p className={`text-lg font-bold ${machine.temperature > 100 ? 'text-red-600' : 'text-gray-900'}`}>
                    {machine.temperature}°C
                  </p>
                </div>

                <div className="bg-purple-50 rounded p-3">
                  <div className="flex items-center mb-1">
                    <Activity className="w-4 h-4 text-purple-600 mr-1" />
                    <span className="text-xs text-gray-600">Vibration</span>
                  </div>
                  <p className={`text-lg font-bold ${machine.vibration > 4 ? 'text-yellow-600' : 'text-gray-900'}`}>
                    {machine.vibration} mm/s
                  </p>
                </div>

                <div className="bg-green-50 rounded p-3">
                  <div className="flex items-center mb-1">
                    <Zap className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-xs text-gray-600">Power</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{machine.power} kW</p>
                </div>

                <div className="bg-orange-50 rounded p-3">
                  <div className="flex items-center mb-1">
                    <Gauge className="w-4 h-4 text-orange-600 mr-1" />
                    <span className="text-xs text-gray-600">Efficiency</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{machine.efficiency}%</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime (30d)</span>
                  <span className="font-semibold text-gray-900">{machine.uptime}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Maintenance</span>
                  <span className="font-semibold text-gray-900">{machine.lastMaintenance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IoT Sensor Network */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">IoT Sensor Network Status</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sensor Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protocol</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Points/Day</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {iotSensors.map((sensor, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sensor.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sensor.count}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                      {sensor.protocol}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(sensor.status)}`}>
                      {sensor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {sensor.dataPoints.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-time Alerts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
          Real-time Alerts & Notifications
        </h3>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className={`border-2 rounded-lg p-4 ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                      alert.severity === 'high' ? 'bg-red-200 text-red-900' :
                      alert.severity === 'medium' ? 'bg-yellow-200 text-yellow-900' :
                      'bg-blue-200 text-blue-900'
                    }`}>
                      {alert.severity}
                    </span>
                    <span className="text-sm font-semibold">{alert.machine}</span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-sm font-medium mb-2">{alert.message}</p>
                  <div className="bg-white bg-opacity-60 rounded p-2">
                    <p className="text-xs"><strong>Recommended Action:</strong> {alert.action}</p>
                  </div>
                </div>
                <button 
                  className="ml-4 px-3 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-semibold rounded hover:bg-gray-50 transition-colors"
                  suppressHydrationWarning
                >
                  Acknowledge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Integrations */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Industrial Protocol Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {protocols.map((protocol, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">{protocol.name}</h4>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(protocol.status)}`}>
                  {protocol.status}
                </span>
              </div>
              <p className="text-xs text-gray-600 font-mono mb-2">{protocol.endpoint}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Messages/Hour</span>
                <span className="text-sm font-bold text-blue-600">{protocol.messages.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Data Stream Preview */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-time Temperature Data Stream</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MCH-001</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MCH-002</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MCH-003</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MCH-004</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {realtimeData.map((data, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{data.timestamp}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{data.mch001Temp}°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{data.mch002Temp}°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">{data.mch003Temp}°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{data.mch004Temp}°C</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          <Activity className="w-3 h-3 inline mr-1" />
          Data updated every 1 minute via MQTT
        </p>
      </div>

      {/* Integration Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
          <Cpu className="w-5 h-5 mr-2" />
          IoT Integration Benefits
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Predictive Maintenance:</strong> Detect anomalies before breakdowns, reducing downtime by 40%.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Real-time Monitoring:</strong> Track 792K data points daily across temperature, vibration, power, and pressure.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Automated Alerts:</strong> Instant notifications when parameters exceed thresholds for immediate action.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Data-Driven Decisions:</strong> Historical trends help optimize machine settings for maximum efficiency.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Multi-Protocol Support:</strong> MQTT, Modbus TCP, OPC UA ensure compatibility with all industrial equipment.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

