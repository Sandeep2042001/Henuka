import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Customer-facing components
import Header from './components/customer/Header'
import Footer from './components/customer/Footer'
import HomePage from './components/customer/HomePage'
import CategoryPage from './components/customer/CategoryPage'
import ProductPage from './components/customer/ProductPage'
import CartPage from './components/customer/CartPage'
import CheckoutPage from './components/customer/CheckoutPage'
import ProfilePage from './components/customer/ProfilePage'
import SearchPage from './components/customer/SearchPage'
import LoginPage from './components/customer/LoginPage'

// Admin components
import AdminDashboard from './components/admin/AdminDashboard'
import AdminLogin from './components/admin/AdminLogin'

// Context providers
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { WishlistProvider } from './context/WishlistContext'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
                
                {/* Customer Routes */}
                <Route path="/*" element={
                  <>
                    <Header />
                    <main className="min-h-screen">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/category/:category" element={<CategoryPage />} />
                        <Route path="/product/:slug" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/login" element={<LoginPage />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                } />
              </Routes>
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App

