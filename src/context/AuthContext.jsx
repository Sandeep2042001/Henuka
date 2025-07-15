import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('henuka-user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('henuka-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('henuka-user')
    }
  }, [user])

  const login = async (email, password) => {
    // Mock login - in real app, this would call an API
    if (email === 'admin@henuka.com' && password === 'admin123') {
      const adminUser = {
        id: 1,
        email: 'admin@henuka.com',
        name: 'Admin User',
        role: 'admin',
        isAdmin: true
      }
      setUser(adminUser)
      return { success: true, user: adminUser }
    } else if (email === 'user@henuka.com' && password === 'user123') {
      const regularUser = {
        id: 2,
        email: 'user@henuka.com',
        name: 'John Doe',
        role: 'customer',
        isAdmin: false,
        phone: '+91 9876543210',
        addresses: [
          {
            id: 1,
            name: 'John Doe',
            address: '123 Main Street',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400001',
            phone: '+91 9876543210',
            isDefault: true
          }
        ]
      }
      setUser(regularUser)
      return { success: true, user: regularUser }
    } else {
      return { success: false, error: 'Invalid credentials' }
    }
  }

  const register = async (userData) => {
    // Mock registration - in real app, this would call an API
    const newUser = {
      id: Date.now(),
      ...userData,
      role: 'customer',
      isAdmin: false,
      addresses: []
    }
    setUser(newUser)
    return { success: true, user: newUser }
  }

  const logout = () => {
    setUser(null)
  }

  const updateProfile = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }))
  }

  const addAddress = (address) => {
    const newAddress = {
      id: Date.now(),
      ...address
    }
    setUser(prev => ({
      ...prev,
      addresses: [...(prev.addresses || []), newAddress]
    }))
  }

  const updateAddress = (addressId, updatedAddress) => {
    setUser(prev => ({
      ...prev,
      addresses: prev.addresses.map(addr =>
        addr.id === addressId ? { ...addr, ...updatedAddress } : addr
      )
    }))
  }

  const deleteAddress = (addressId) => {
    setUser(prev => ({
      ...prev,
      addresses: prev.addresses.filter(addr => addr.id !== addressId)
    }))
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

