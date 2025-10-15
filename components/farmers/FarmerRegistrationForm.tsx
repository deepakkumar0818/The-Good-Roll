"use client";

import { useState } from "react";
import { Upload, Camera } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  alternatePhone: string;
  email: string;
  ghanaCard: string;
  tin: string;
  address: string;
  gpsLatitude: string;
  gpsLongitude: string;
  village: string;
  district: string;
  region: string;
  farmingType: string;
  landSize: string;
  landUnit: string;
  landOwnership: string;
  cropsGrown: string;
  livestockType: string;
  cropCycles: string;
  paymentPreference: string;
  bankName: string;
  accountNumber: string;
  branchCode: string;
  mobileMoneyProvider: string;
  mobileMoneyNumber: string;
}

interface FarmerRegistrationFormProps {
  onClose: () => void;
}

export default function FarmerRegistrationForm({ onClose }: FarmerRegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    alternatePhone: "",
    email: "",
    ghanaCard: "",
    tin: "",
    address: "",
    gpsLatitude: "",
    gpsLongitude: "",
    village: "",
    district: "",
    region: "",
    farmingType: "crop",
    landSize: "",
    landUnit: "acres",
    landOwnership: "owned",
    cropsGrown: "",
    livestockType: "",
    cropCycles: "",
    paymentPreference: "bank",
    bankName: "",
    accountNumber: "",
    branchCode: "",
    mobileMoneyProvider: "",
    mobileMoneyNumber: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Farmer registered successfully!");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name as on Ghana Card"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ghana Card Number (National ID) *</label>
            <input
              type="text"
              name="ghanaCard"
              required
              value={formData.ghanaCard}
              onChange={handleChange}
              placeholder="GHA-XXXXXXXXX-X"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+233 24 123 4567"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone Number</label>
            <input
              type="tel"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleChange}
              placeholder="+233 20 987 6543"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="farmer@example.com"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tax Identification Number (TIN)</label>
            <input
              type="text"
              name="tin"
              value={formData.tin}
              onChange={handleChange}
              placeholder="C000XXXXXXXX"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Address & GPS Location */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Residential Address & Farm Location</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address *</label>
            <textarea
              name="address"
              required
              rows={2}
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full residential address with house number and street"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Village/Town *</label>
              <input
                type="text"
                name="village"
                required
                value={formData.village}
                onChange={handleChange}
                placeholder="Enter village or town name"
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
              <input
                type="text"
                name="district"
                required
                value={formData.district}
                onChange={handleChange}
                placeholder="Enter district name"
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region *</label>
              <select
                name="region"
                required
                value={formData.region}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Region</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                <option value="Western">Western</option>
                <option value="Western North">Western North</option>
                <option value="Volta">Volta</option>
                <option value="Oti">Oti</option>
                <option value="Northern">Northern</option>
                <option value="Savannah">Savannah</option>
                <option value="North East">North East</option>
                <option value="Upper East">Upper East</option>
                <option value="Upper West">Upper West</option>
                <option value="Bono">Bono</option>
                <option value="Bono East">Bono East</option>
                <option value="Ahafo">Ahafo</option>
              </select>
            </div>
          </div>
          
          {/* GPS Coordinates */}
          <div className="border-t pt-4 mt-2">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">GPS Location of Farm *</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPS Latitude *</label>
                <input
                  type="text"
                  name="gpsLatitude"
                  required
                  value={formData.gpsLatitude}
                  onChange={handleChange}
                  placeholder="e.g., 5.6037"
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                />
                <p className="text-xs text-gray-500 mt-1">Enter the farm's GPS latitude coordinate</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPS Longitude *</label>
                <input
                  type="text"
                  name="gpsLongitude"
                  required
                  value={formData.gpsLongitude}
                  onChange={handleChange}
                  placeholder="e.g., -0.1870"
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                />
                <p className="text-xs text-gray-500 mt-1">Enter the farm's GPS longitude coordinate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Farm Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Farm Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Type of Farming */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type of Farming *</label>
            <select
              name="farmingType"
              required
              value={formData.farmingType}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="crop">Bamboo Farming</option>
              <option value="livestock">Livestock Farming</option>
              <option value="mixed">Mixed Farming (Bamboo & Livestock)</option>
            </select>
          </div>

          {/* Land Ownership */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Land Ownership Status *</label>
            <select
              name="landOwnership"
              required
              value={formData.landOwnership}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="owned">Owned</option>
              <option value="leased">Leased</option>
              <option value="allocated">Government Allocated</option>
              <option value="family">Family Land</option>
            </select>
          </div>

          {/* Land Size */}
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Land Size *</label>
              <input
                type="number"
                name="landSize"
                required
                step="0.01"
                value={formData.landSize}
                onChange={handleChange}
                placeholder="10.5"
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
              />
            </div>
            <div className="w-32">
              <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
              <select
                name="landUnit"
                value={formData.landUnit}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="acres">Acres</option>
                <option value="hectares">Hectares</option>
              </select>
            </div>
          </div>

          {/* Crop Cycles */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Cycles per Year</label>
            <input
              type="number"
              name="cropCycles"
              value={formData.cropCycles}
              onChange={handleChange}
              placeholder="2"
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
            />
          </div>

          {/* Bamboo Varieties */}
          {(formData.farmingType === "crop" || formData.farmingType === "mixed") && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Bamboo Varieties Grown *</label>
              <input
                type="text"
                name="cropsGrown"
                required={formData.farmingType !== "livestock"}
                value={formData.cropsGrown}
                onChange={handleChange}
                placeholder="e.g., Bambusa vulgaris, Oxytenanthera abyssinica, Bambusa bambos"
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
              />
              <p className="text-xs text-gray-500 mt-1">List all bamboo varieties grown on the farm, separated by commas</p>
            </div>
          )}

          {/* Livestock Type */}
          {(formData.farmingType === "livestock" || formData.farmingType === "mixed") && (
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of Livestock *</label>
              <input
                type="text"
                name="livestockType"
                required={formData.farmingType !== "crop"}
                value={formData.livestockType}
                onChange={handleChange}
                placeholder="e.g., Cattle, Goats, Sheep, Poultry, Pigs"
                className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
              />
              <p className="text-xs text-gray-500 mt-1">List all livestock types, separated by commas</p>
            </div>
          )}
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Payment Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Preference *</label>
            <select
              name="paymentPreference"
              required
              value={formData.paymentPreference}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="bank">Bank Transfer</option>
              <option value="mobilemoney">Mobile Money</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          {formData.paymentPreference === "bank" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name *</label>
                <select
                  name="bankName"
                  required={formData.paymentPreference === "bank"}
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Bank</option>
                  <option value="GCB Bank">GCB Bank</option>
                  <option value="Ecobank Ghana">Ecobank Ghana</option>
                  <option value="Standard Chartered">Standard Chartered</option>
                  <option value="Barclays Bank">Absa Bank Ghana</option>
                  <option value="Stanbic Bank">Stanbic Bank</option>
                  <option value="Zenith Bank">Zenith Bank</option>
                  <option value="Fidelity Bank">Fidelity Bank</option>
                  <option value="CAL Bank">CAL Bank</option>
                  <option value="ADB Bank">ADB Bank</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number *</label>
                <input
                  type="text"
                  name="accountNumber"
                  required={formData.paymentPreference === "bank"}
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="0123456789012"
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branch Code</label>
                <input
                  type="text"
                  name="branchCode"
                  value={formData.branchCode}
                  onChange={handleChange}
                  placeholder="Branch code"
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                />
              </div>
            </div>
          )}

          {formData.paymentPreference === "mobilemoney" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Money Provider *</label>
                <select
                  name="mobileMoneyProvider"
                  required={formData.paymentPreference === "mobilemoney"}
                  value={formData.mobileMoneyProvider}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Provider</option>
                  <option value="MTN Mobile Money">MTN Mobile Money</option>
                  <option value="Vodafone Cash">Vodafone Cash</option>
                  <option value="AirtelTigo Money">AirtelTigo Money</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Money Number *</label>
                <input
                  type="tel"
                  name="mobileMoneyNumber"
                  required={formData.paymentPreference === "mobilemoney"}
                  value={formData.mobileMoneyNumber}
                  onChange={handleChange}
                  placeholder="+233 24 123 4567"
                  className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Document Upload */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Required Documents</h3>
        <p className="text-sm text-gray-600 mb-4">Please upload clear copies of the following documents (PDF, JPG, PNG - Max 5MB each)</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Ghana Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Ghana Card *</p>
            <p className="text-xs text-gray-500 mt-1">National ID (Front & Back)</p>
            <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG</p>
          </div>

          {/* Passport Photo */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
            <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Passport Photo *</p>
            <p className="text-xs text-gray-500 mt-1">Recent passport-size photo</p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG</p>
          </div>

          {/* Land Ownership Document */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Land Document *</p>
            <p className="text-xs text-gray-500 mt-1">Ownership/Lease/Allocation</p>
            <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG</p>
          </div>

          {/* TIN Certificate (Optional) */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">TIN Certificate</p>
            <p className="text-xs text-gray-500 mt-1">Tax Identification (Optional)</p>
            <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG</p>
          </div>

          {/* Bank Statement (Optional) */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Bank Statement</p>
            <p className="text-xs text-gray-500 mt-1">Recent statement (Optional)</p>
            <p className="text-xs text-gray-400 mt-1">PDF</p>
          </div>

          {/* Other Documents */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900">Other Documents</p>
            <p className="text-xs text-gray-500 mt-1">Additional documents</p>
            <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG</p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-800">
            <strong>Note:</strong> Documents marked with * are required. Ensure all documents are clear and legible. 
            Maximum file size: 5MB per document.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-4 border-t">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          suppressHydrationWarning
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          suppressHydrationWarning
        >
          Register Farmer
        </button>
      </div>
    </form>
  );
}

