import React from 'react'
import { TrendingUp, Users, ShoppingBag, DollarSign, Calendar, Download } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Analytics = () => {
  // Mock analytics data
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 120, customers: 85 },
    { month: 'Feb', sales: 52000, orders: 140, customers: 95 },
    { month: 'Mar', sales: 48000, orders: 130, customers: 88 },
    { month: 'Apr', sales: 61000, orders: 165, customers: 110 },
    { month: 'May', sales: 55000, orders: 150, customers: 102 },
    { month: 'Jun', sales: 67000, orders: 180, customers: 125 },
    { month: 'Jul', sales: 72000, orders: 195, customers: 135 },
    { month: 'Aug', sales: 69000, orders: 185, customers: 128 },
    { month: 'Sep', sales: 78000, orders: 210, customers: 145 },
    { month: 'Oct', sales: 82000, orders: 220, customers: 155 },
    { month: 'Nov', sales: 89000, orders: 240, customers: 168 },
    { month: 'Dec', sales: 95000, orders: 260, customers: 180 }
  ]

  const categoryData = [
    { name: 'Necklaces', value: 35, color: '#FFD700' },
    { name: 'Earrings', value: 25, color: '#FFA500' },
    { name: 'Rings', value: 20, color: '#FF8C00' },
    { name: 'Bracelets', value: 12, color: '#FF7F50' },
    { name: 'Mangalsutra', value: 8, color: '#FF6347' }
  ]

  const topProducts = [
    { name: 'Golden Lotus Necklace', sales: 45, revenue: 225000 },
    { name: 'Diamond Stud Earrings', sales: 38, revenue: 190000 },
    { name: 'Royal Emerald Ring', sales: 32, revenue: 160000 },
    { name: 'Pearl Bracelet Set', sales: 28, revenue: 140000 },
    { name: 'Traditional Mangalsutra', sales: 25, revenue: 125000 }
  ]

  const revenueGrowth = [
    { period: 'Q1 2024', revenue: 145000, growth: 12 },
    { period: 'Q2 2024', revenue: 183000, growth: 26 },
    { period: 'Q3 2024', revenue: 219000, growth: 20 },
    { period: 'Q4 2024', revenue: 266000, growth: 21 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights into your jewelry business performance</p>
        </div>
        <div className="flex space-x-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center space-x-2">
            <Download size={20} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹8,13,000</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +18.2% from last year
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">2,185</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +22.5% from last year
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,421</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" />
                +15.8% from last year
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-900">₹3,722</p>
              <p className="text-sm text-red-600 flex items-center mt-1">
                <TrendingUp size={14} className="mr-1 rotate-180" />
                -2.1% from last year
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Sales']} />
              <Area type="monotone" dataKey="sales" stroke="#F59E0B" fill="#FEF3C7" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders vs Customers */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Orders vs New Customers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#3B82F6" strokeWidth={2} name="Orders" />
              <Line type="monotone" dataKey="customers" stroke="#10B981" strokeWidth={2} name="New Customers" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Growth */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quarterly Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip formatter={(value, name) => [
                name === 'revenue' ? `₹${value.toLocaleString()}` : `${value}%`,
                name === 'revenue' ? 'Revenue' : 'Growth'
              ]} />
              <Bar dataKey="revenue" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Products</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Units Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <tr key={product.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₹{product.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full" 
                        style={{ width: `${(product.sales / 50) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Customer Insights</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Repeat Customers</span>
              <span className="text-sm font-medium text-gray-900">68%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Customer Lifetime Value</span>
              <span className="text-sm font-medium text-gray-900">₹12,450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg. Time to Purchase</span>
              <span className="text-sm font-medium text-gray-900">3.2 days</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Inventory Insights</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Inventory Turnover</span>
              <span className="text-sm font-medium text-gray-900">4.2x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Stock Value</span>
              <span className="text-sm font-medium text-gray-900">₹2,45,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Fast Moving Items</span>
              <span className="text-sm font-medium text-gray-900">23</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Marketing Performance</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="text-sm font-medium text-gray-900">3.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Cost per Acquisition</span>
              <span className="text-sm font-medium text-gray-900">₹245</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Return on Ad Spend</span>
              <span className="text-sm font-medium text-gray-900">4.2x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics

