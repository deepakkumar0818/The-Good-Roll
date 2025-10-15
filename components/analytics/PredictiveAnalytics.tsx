"use client";

import { Zap, TrendingUp, AlertTriangle, Target, Calendar, Brain } from "lucide-react";

export default function PredictiveAnalytics() {
  const predictions = [
    {
      category: "Procurement",
      metric: "Bamboo Supply",
      current: 605,
      predicted: 645,
      period: "Next Month",
      confidence: 92,
      trend: "up",
      insights: "Seasonal increase expected. Pre-book farmers now to secure supply at current rates.",
    },
    {
      category: "Production",
      metric: "Output Capacity",
      current: 312.5,
      predicted: 335,
      period: "Next Month",
      confidence: 88,
      trend: "up",
      insights: "Line efficiency improvements + reduced downtime will increase capacity by 7.2%.",
    },
    {
      category: "Sales",
      metric: "Export Demand",
      current: 5,
      predicted: 7,
      period: "Next Quarter",
      confidence: 85,
      trend: "up",
      insights: "European market showing strong demand signals. Plan for 2 additional containers.",
    },
    {
      category: "Finance",
      metric: "Profit Margin",
      current: 26.9,
      predicted: 28.5,
      period: "Next Quarter",
      confidence: 90,
      trend: "up",
      insights: "Cost optimization initiatives expected to improve margins by 1.6 percentage points.",
    },
  ];

  const riskAlerts = [
    {
      risk: "Raw Material Shortage",
      probability: "Medium (45%)",
      impact: "High",
      timeline: "2-3 weeks",
      mitigation: "Increase farmer advance payments by 15% to secure early commitments.",
      color: "yellow",
    },
    {
      risk: "Production Line Downtime",
      probability: "Low (25%)",
      impact: "Medium",
      timeline: "Next 2 months",
      mitigation: "Schedule preventive maintenance for Line-03 and Line-07 immediately.",
      color: "blue",
    },
    {
      risk: "Currency Fluctuation (GHS/EUR)",
      probability: "High (65%)",
      impact: "High",
      timeline: "Ongoing",
      mitigation: "Hedge 60% of Q4 export receivables using forward contracts.",
      color: "red",
    },
    {
      risk: "Quality Compliance Issue",
      probability: "Very Low (15%)",
      impact: "Critical",
      timeline: "Ongoing",
      mitigation: "Current QA processes are robust. Maintain current standards.",
      color: "green",
    },
  ];

  const demandForecast = [
    { month: "Jul", forecast: 340, lowerBound: 315, upperBound: 365 },
    { month: "Aug", forecast: 355, lowerBound: 330, upperBound: 380 },
    { month: "Sep", forecast: 365, lowerBound: 340, upperBound: 390 },
    { month: "Oct", forecast: 375, lowerBound: 350, upperBound: 400 },
    { month: "Nov", forecast: 385, lowerBound: 360, upperBound: 410 },
    { month: "Dec", forecast: 395, lowerBound: 370, upperBound: 420 },
  ];

  const optimizationOpportunities = [
    {
      opportunity: "Shift Production to High-Margin Products",
      potentialGain: "₵125K/month",
      effort: "Low",
      timeline: "2 weeks",
      priority: "High",
      description: "Increase bamboo sheets production by 15% and reduce pulp by 10%. Sheets have 8% higher margin.",
    },
    {
      opportunity: "Negotiate Bulk Freight Contracts",
      potentialGain: "₵45K/quarter",
      effort: "Medium",
      timeline: "1 month",
      priority: "Medium",
      description: "Lock in rates with freight forwarder for 25+ containers per quarter. Expected 6% cost reduction.",
    },
    {
      opportunity: "Implement Energy Efficiency Program",
      potentialGain: "₵32K/month",
      effort: "High",
      timeline: "3 months",
      priority: "Medium",
      description: "Solar panel installation + LED lighting upgrade across 3 factories. 18% energy cost reduction.",
    },
    {
      opportunity: "Automate Quality Inspection",
      potentialGain: "₵18K/month",
      effort: "High",
      timeline: "4 months",
      priority: "Low",
      description: "AI-powered visual inspection system. Reduces QA labor cost by 40% + improves accuracy.",
    },
  ];

  const getRiskColor = (color: string) => {
    switch (color) {
      case "red": return "bg-red-50 border-red-300 text-red-900";
      case "yellow": return "bg-yellow-50 border-yellow-300 text-yellow-900";
      case "blue": return "bg-blue-50 border-blue-300 text-blue-900";
      case "green": return "bg-green-50 border-green-300 text-green-900";
      default: return "bg-gray-50 border-gray-300 text-gray-900";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Zia AI Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="w-12 h-12 mr-4" />
            <div>
              <h2 className="text-2xl font-bold">Zia AI Predictive Analytics</h2>
              <p className="text-purple-100 mt-1">
                AI-powered forecasting and optimization powered by Zoho Analytics
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-purple-100">Model Accuracy</p>
            <p className="text-3xl font-bold">89.2%</p>
            <p className="text-xs text-purple-100 mt-1">Based on 24 months of historical data</p>
          </div>
        </div>
      </div>

      {/* Predictive Insights */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-purple-600" />
          AI Predictions & Forecasts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {predictions.map((pred, idx) => (
            <div key={idx} className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs font-semibold text-purple-600 uppercase">{pred.category}</span>
                  <h4 className="text-base font-semibold text-gray-900 mt-1">{pred.metric}</h4>
                </div>
                <span className="px-2 py-1 bg-purple-200 text-purple-900 text-xs font-bold rounded-full">
                  {pred.confidence}% confident
                </span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-600">Current</p>
                  <p className="text-2xl font-bold text-gray-900">{pred.current}</p>
                </div>
                <TrendingUp className={`w-8 h-8 ${pred.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                <div>
                  <p className="text-xs text-gray-600">{pred.period}</p>
                  <p className="text-2xl font-bold text-purple-600">{pred.predicted}</p>
                </div>
              </div>

              <div className="bg-white border border-purple-200 rounded p-3">
                <p className="text-xs font-semibold text-purple-900 mb-1 flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Zia Insight
                </p>
                <p className="text-xs text-gray-700">{pred.insights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Alerts */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
          Risk Alerts & Mitigation
        </h3>
        <div className="space-y-4">
          {riskAlerts.map((alert, idx) => (
            <div key={idx} className={`border-2 rounded-lg p-4 ${getRiskColor(alert.color)}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-sm font-bold">{alert.risk}</h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs">
                      <strong>Probability:</strong> {alert.probability}
                    </span>
                    <span className="text-xs">
                      <strong>Impact:</strong> {alert.impact}
                    </span>
                    <span className="text-xs">
                      <strong>Timeline:</strong> {alert.timeline}
                    </span>
                  </div>
                </div>
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="bg-white bg-opacity-60 rounded p-3 mt-2">
                <p className="text-xs font-semibold mb-1">Recommended Mitigation:</p>
                <p className="text-xs">{alert.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demand Forecast */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
          6-Month Production Demand Forecast (Tons)
        </h3>
        <div className="space-y-3">
          {demandForecast.map((month, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-3 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{month.month} 2024</span>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Lower Bound</p>
                        <p className="text-sm font-semibold text-gray-600">{month.lowerBound}T</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-purple-600 font-semibold">Forecast</p>
                        <p className="text-xl font-bold text-purple-600">{month.forecast}T</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Upper Bound</p>
                        <p className="text-sm font-semibold text-gray-600">{month.upperBound}T</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 relative">
                <div
                  className="absolute h-3 bg-purple-200 rounded-full"
                  style={{ 
                    left: `${(month.lowerBound / 450) * 100}%`,
                    width: `${((month.upperBound - month.lowerBound) / 450) * 100}%`
                  }}
                ></div>
                <div
                  className="absolute h-3 bg-purple-600 rounded-full"
                  style={{ 
                    left: `${(month.forecast / 450) * 100}%`,
                    width: '2px'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Opportunities */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-600" />
          AI-Recommended Optimization Opportunities
        </h3>
        <div className="space-y-4">
          {optimizationOpportunities.map((opp, idx) => (
            <div key={idx} className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-sm font-bold text-gray-900">{opp.opportunity}</h4>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(opp.priority)}`}>
                      {opp.priority} Priority
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-gray-700">
                      <strong>Potential Gain:</strong> {opp.potentialGain}
                    </span>
                    <span className="text-xs text-gray-700">
                      <strong>Effort:</strong> {opp.effort}
                    </span>
                    <span className="text-xs text-gray-700">
                      <strong>Timeline:</strong> {opp.timeline}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">{opp.potentialGain.split('/')[0]}</p>
                  <p className="text-xs text-gray-600">{opp.potentialGain.split('/')[1] || 'savings'}</p>
                </div>
              </div>
              <div className="bg-white border border-blue-200 rounded p-3">
                <p className="text-xs text-gray-700">{opp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Model Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Model Performance</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Accuracy</span>
              <span className="text-sm font-semibold text-green-600">89.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Precision</span>
              <span className="text-sm font-semibold text-green-600">91.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Recall</span>
              <span className="text-sm font-semibold text-green-600">87.8%</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Data Sources</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Zoho Books</span>
              <span className="text-sm font-semibold">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Zoho Inventory</span>
              <span className="text-sm font-semibold">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Zoho Creator</span>
              <span className="text-sm font-semibold">Connected</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Training Data</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Historical Period</span>
              <span className="text-sm font-semibold">24 months</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Data Points</span>
              <span className="text-sm font-semibold">125,000+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Last Updated</span>
              <span className="text-sm font-semibold">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
          <Brain className="w-5 h-5 mr-2" />
          Zia AI Strategic Recommendations
        </h3>
        <ul className="space-y-2 text-sm text-purple-800">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Immediate Action Required:</strong> Currency hedging is critical. EUR/GHS volatility poses high risk to Q4 profitability. Hedge 60% of export receivables now.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Growth Opportunity:</strong> Shifting 15% production to bamboo sheets could generate ₵125K additional monthly profit with minimal investment.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Capacity Planning:</strong> AI models predict 12% demand increase in Q4. Begin capacity expansion planning now to avoid supply shortages.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Cost Optimization:</strong> Combined optimization initiatives could reduce cost per ton by ₵28, improving profit margin to 29%+ by Q1 2025.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

