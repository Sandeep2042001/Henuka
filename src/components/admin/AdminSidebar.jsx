import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  BarChart3, 
  Settings,
  LogOut
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const AdminSidebar = ({ isOpen }) => {
  const location = useLocation()
  const { logout } = useAuth()

  const menuItems = [
    {
      path: '/admin',
      icon: LayoutDashboard,
      label: 'Dashboard',
      exact: true
    },
    {
      path: '/admin/orders',
      icon: ShoppingBag,
      label: 'Orders'
    },
    {
      path: '/admin/products',
      icon: Package,
      label: 'Products'
    },
    {
      path: '/admin/users',
      icon: Users,
      label: 'Users'
    },
    {
      path: '/admin/analytics',
      icon: BarChart3,
      label: 'Analytics'
    },
    {
      path: '/admin/settings',
      icon: Settings,
      label: 'Settings'
    }
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      {/* Logo */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          {isOpen && (
            <div>
              <h1 className="text-xl font-bold text-gray-800">Henuka</h1>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path, item.exact)
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  {isOpen && <span className="font-medium">{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <button
          onClick={logout}
          className="flex items-center space-x-3 w-full px-3 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar

