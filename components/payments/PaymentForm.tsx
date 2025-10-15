"use client";

import { useState } from "react";
import { Search, Calculator } from "lucide-react";

interface PaymentFormProps {
  onClose: () => void;
}

export default function PaymentForm({ onClose }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    farmerId: "",
    farmerName: "",
    amount: "",
    paymentType: "regular",
    paymentMethod: "bank",
    description: "",
    advanceAmount: "",
    deductionAmount: "",
    deductionReason: "",
  });

  const [netAmount, setNetAmount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Calculate net amount
    if (name === "amount" || name === "advanceAmount" || name === "deductionAmount") {
      const amount = name === "amount" ? parseFloat(value) || 0 : parseFloat(formData.amount) || 0;
      const advance = name === "advanceAmount" ? parseFloat(value) || 0 : parseFloat(formData.advanceAmount) || 0;
      const deduction = name === "deductionAmount" ? parseFloat(value) || 0 : parseFloat(formData.deductionAmount) || 0;
      setNetAmount(amount - advance - deduction);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment processed:", formData);
    alert("Payment processed successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Farmer Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Farmer Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Farmer ID *</label>
            <div className="relative">
              <input
                type="text"
                name="farmerId"
                required
                value={formData.farmerId}
                onChange={handleChange}
                placeholder="Search by ID or phone..."
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Farmer Name</label>
            <input
              type="text"
              name="farmerName"
              value={formData.farmerName}
              onChange={handleChange}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Payment Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Type *</label>
            <select
              name="paymentType"
              required
              value={formData.paymentType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="regular">Regular Payment</option>
              <option value="advance">Advance Payment</option>
              <option value="final">Final Settlement</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method *</label>
            <select
              name="paymentMethod"
              required
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="mtn">MTN Mobile Money</option>
              <option value="vodafone">Vodafone Cash</option>
              <option value="airteltigo">AirtelTigo Money</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Base Amount (₵) *</label>
            <input
              type="number"
              name="amount"
              required
              step="0.01"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g., Bamboo delivery - Oct 2024"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Advance & Deductions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Advances & Deductions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Previous Advance (₵)</label>
            <input
              type="number"
              name="advanceAmount"
              step="0.01"
              value={formData.advanceAmount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deduction Amount (₵)</label>
            <input
              type="number"
              name="deductionAmount"
              step="0.01"
              value={formData.deductionAmount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Deduction Reason</label>
            <textarea
              name="deductionReason"
              rows={2}
              value={formData.deductionReason}
              onChange={handleChange}
              placeholder="e.g., Quality issues, transportation charges"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Net Amount Calculation */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calculator className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Net Payable Amount</p>
              <p className="text-xs text-gray-500 mt-1">
                Base Amount - Advance - Deductions
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-green-600">
              ₵{netAmount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-4 border-t">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Process Payment
        </button>
      </div>
    </form>
  );
}

