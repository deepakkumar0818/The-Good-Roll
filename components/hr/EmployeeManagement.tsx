"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";

interface Employee {
  id: string;
  employeeId: string;
  name: string;
  department: string;
  designation: string;
  location: string;
  joiningDate: string;
  status: "Active" | "Inactive" | "On Leave" | "Probation";
  phone: string;
  email: string;
  reportingManager: string;
}

const mockEmployees: Employee[] = [
  {
    id: "1",
    employeeId: "EMP-001",
    name: "Kwame Mensah",
    department: "Production",
    designation: "Factory Worker",
    location: "Factory A - Kumasi",
    joiningDate: "2023-01-15",
    status: "Active",
    phone: "+233 24 567 8901",
    email: "kwame.mensah@agriconnect.com",
    reportingManager: "Production Manager",
  },
  {
    id: "2",
    employeeId: "EMP-002",
    name: "Ama Sarpong",
    department: "Quality Control",
    designation: "QC Inspector",
    location: "Factory A - Kumasi",
    joiningDate: "2023-03-10",
    status: "Active",
    phone: "+233 20 123 4567",
    email: "ama.sarpong@agriconnect.com",
    reportingManager: "QC Manager",
  },
  {
    id: "3",
    employeeId: "EMP-003",
    name: "Kofi Asante",
    department: "Warehouse",
    designation: "Warehouse Supervisor",
    location: "Central Warehouse - Accra",
    joiningDate: "2022-11-20",
    status: "Active",
    phone: "+233 27 890 1234",
    email: "kofi.asante@agriconnect.com",
    reportingManager: "Warehouse Manager",
  },
  {
    id: "4",
    employeeId: "EMP-004",
    name: "Akosua Boateng",
    department: "Administration",
    designation: "HR Executive",
    location: "Head Office - Accra",
    joiningDate: "2023-06-01",
    status: "Probation",
    phone: "+233 26 456 7890",
    email: "akosua.boateng@agriconnect.com",
    reportingManager: "HR Manager",
  },
];

export default function EmployeeManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const filteredEmployees = mockEmployees.filter(emp => {
    const matchesSearch = 
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDepartment === "all" || emp.department === filterDepartment;
    return matchesSearch && matchesDept;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-gray-100 text-gray-800";
      case "On Leave": return "bg-yellow-100 text-yellow-800";
      case "Probation": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const departments = ["all", "Production", "Quality Control", "Warehouse", "Administration", "Sales", "Finance"];

  const stats = {
    total: mockEmployees.length,
    active: mockEmployees.filter(e => e.status === "Active").length,
    onLeave: mockEmployees.filter(e => e.status === "On Leave").length,
    probation: mockEmployees.filter(e => e.status === "Probation").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <p className="text-sm font-medium text-blue-600">Total Employees</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{stats.total.toLocaleString()}</p>
          <p className="text-xs text-blue-600 mt-1">Scalable to 10,000+</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <p className="text-sm font-medium text-green-600">Active</p>
          <p className="text-3xl font-bold text-green-900 mt-2">{stats.active}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-4">
          <p className="text-sm font-medium text-yellow-600">On Leave</p>
          <p className="text-3xl font-bold text-yellow-900 mt-2">{stats.onLeave}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
          <p className="text-sm font-medium text-purple-600">Probation</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">{stats.probation}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or employee ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              suppressHydrationWarning
            />
          </div>
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            suppressHydrationWarning
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === "all" ? "All Departments" : dept}
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowOnboarding(!showOnboarding)}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            suppressHydrationWarning
          >
            <Plus className="w-5 h-5 mr-2" />
            Onboard Employee
          </button>
        </div>
      </div>

      {/* Onboarding Form */}
      {showOnboarding && (
        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Onboarding</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
              <input type="text" placeholder="Auto-generated" className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning>
                {departments.filter(d => d !== "all").map(dept => (
                  <option key={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning>
                <option>Factory A - Jabalpur</option>
                <option>Factory B - Mandla</option>
                <option>Central Warehouse</option>
                <option>Head Office</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reporting Manager</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" suppressHydrationWarning />
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button onClick={() => setShowOnboarding(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50" suppressHydrationWarning>
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" suppressHydrationWarning>
              Complete Onboarding
            </button>
          </div>
        </div>
      )}

      {/* Employee List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Designation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joining Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        <div className="text-xs text-gray-500">{employee.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{employee.department}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{employee.designation}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.joiningDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-900" suppressHydrationWarning>
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

