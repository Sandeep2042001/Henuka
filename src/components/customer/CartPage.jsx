import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, Tag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { coupons } from '../../data/mockData'

const CartPage = () => {
  const { 
    items, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    appliedCoupon, 
    applyCoupon, 
    removeCoupon, 
    getCartTotal 
  } = useCart()
  
  const [couponCode, setCouponCode] = useState('')
  const [couponError, setCouponError] = useState('')
  
  const cartTotal = getCartTotal()

  const handleQuantityChange = (cartId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId)
    } else {
      updateQuantity(cartId, newQuantity)
    }
  }

  const handleApplyCoupon = () => {
    setCouponError('')
    const coupon = coupons.find(c => 
      c.code.toLowerCase() === couponCode.toLowerCase() && 
      c.active &&
      new Date(c.expiryDate) > new Date()
    )
    
    if (!coupon) {
      setCouponError('Invalid or expired coupon code')
      return
    }
    
    if (coupon.minAmount && cartTotal.subtotal < coupon.minAmount) {
      setCouponError(`Minimum order amount ₹${coupon.minAmount} required`)
      return
    }
    
    applyCoupon(coupon)
    setCouponCode('')
  }

  const handleRemoveCoupon = () => {
    removeCoupon()
    setCouponError('')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="mx-auto h-24 w-24 text-gray-400 mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">{items.length} item(s) in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.cartId} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      className="text-lg font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    
                    {item.selectedVariant && (
                      <p className="text-sm text-gray-600 mt-1">
                        {item.selectedVariant.name}
                        {item.selectedVariant.color && (
                          <span
                            className="inline-block w-3 h-3 rounded-full ml-2"
                            style={{ backgroundColor: item.selectedVariant.color }}
                          />
                        )}
                      </p>
                    )}
                    
                    <p className="text-lg font-bold text-yellow-600 mt-2">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.cartId, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Coupon Code */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Tag className="mr-2" size={20} />
                Coupon Code
              </h3>
              
              {appliedCoupon ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-green-800">{appliedCoupon.code}</p>
                      <p className="text-sm text-green-600">{appliedCoupon.description}</p>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-sm text-red-600">{couponError}</p>
                  )}
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{cartTotal.subtotal.toLocaleString()}</span>
                </div>
                
                {cartTotal.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{cartTotal.discount.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {cartTotal.subtotal >= 2500 ? 'Free' : '₹99'}
                  </span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-yellow-600">
                      ₹{(cartTotal.total + (cartTotal.subtotal >= 2500 ? 0 : 99)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all text-center block font-semibold"
              >
                Proceed to Checkout
              </Link>
            </div>

            {/* Available Coupons */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Available Coupons</h3>
              <div className="space-y-3">
                {coupons.filter(c => c.active).map(coupon => (
                  <div key={coupon.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{coupon.code}</p>
                        <p className="text-sm text-gray-600">{coupon.description}</p>
                        {coupon.minAmount && (
                          <p className="text-xs text-gray-500">Min. order: ₹{coupon.minAmount}</p>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setCouponCode(coupon.code)
                          handleApplyCoupon()
                        }}
                        className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage

