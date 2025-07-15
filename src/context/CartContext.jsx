import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        JSON.stringify(item.selectedVariant) === JSON.stringify(action.payload.selectedVariant)
      )
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && 
            JSON.stringify(item.selectedVariant) === JSON.stringify(action.payload.selectedVariant)
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        }
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload)
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      }
    
    case 'APPLY_COUPON':
      return {
        ...state,
        appliedCoupon: action.payload
      }
    
    case 'REMOVE_COUPON':
      return {
        ...state,
        appliedCoupon: null
      }
    
    case 'LOAD_CART':
      return action.payload
    
    default:
      return state
  }
}

const initialState = {
  items: [],
  appliedCoupon: null
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('henuka-cart')
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) })
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('henuka-cart', JSON.stringify(state))
  }, [state])

  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    const cartItem = {
      ...product,
      quantity,
      selectedVariant,
      cartId: `${product.id}-${Date.now()}-${Math.random()}`
    }
    dispatch({ type: 'ADD_TO_CART', payload: cartItem })
  }

  const removeFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartId })
  }

  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId)
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } })
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const applyCoupon = (coupon) => {
    dispatch({ type: 'APPLY_COUPON', payload: coupon })
  }

  const removeCoupon = () => {
    dispatch({ type: 'REMOVE_COUPON' })
  }

  const getCartTotal = () => {
    const subtotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    let discount = 0
    
    if (state.appliedCoupon) {
      if (state.appliedCoupon.type === 'percentage') {
        discount = Math.min(
          (subtotal * state.appliedCoupon.discount) / 100,
          state.appliedCoupon.maxDiscount || Infinity
        )
      } else {
        discount = state.appliedCoupon.discount
      }
    }
    
    return {
      subtotal,
      discount,
      total: subtotal - discount,
      itemCount: state.items.reduce((count, item) => count + item.quantity, 0)
    }
  }

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyCoupon,
    removeCoupon,
    getCartTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

