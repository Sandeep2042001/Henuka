// Mock data for Henuka Jewelry E-commerce Website

// Categories
export const categories = [
  {
    id: 1,
    name: "Necklaces",
    slug: "necklaces",
    image: "/src/assets/HLylkxs4aIYN.jpg",
    description: "Elegant necklaces for every occasion"
  },
  {
    id: 2,
    name: "Earrings",
    slug: "earrings",
    image: "/src/assets/QPR9jh5hnF3Z.jpg",
    description: "Beautiful earrings to complement your style"
  },
  {
    id: 3,
    name: "Rings",
    slug: "rings",
    image: "/src/assets/xn9REBHoUKvy.jpeg",
    description: "Stunning rings for special moments"
  },
  {
    id: 4,
    name: "Bracelets",
    slug: "bracelets",
    image: "/src/assets/ROKaOZ0r1r5s.jpg",
    description: "Stylish bracelets for everyday elegance"
  },
  {
    id: 5,
    name: "Wedding Collection",
    slug: "wedding",
    image: "/src/assets/MLuxO0R5aXzf.jpg",
    description: "Exquisite pieces for your special day"
  },
  {
    id: 6,
    name: "Diamond Collection",
    slug: "diamonds",
    image: "/src/assets/9m9y96KxgAoH.jpg",
    description: "Premium diamond jewelry"
  }
];

// Products
export const products = [
  {
    id: 1,
    name: "Emerald Gold Necklace",
    slug: "emerald-gold-necklace",
    price: 2499,
    originalPrice: 2999,
    category: "necklaces",
    categoryId: 1,
    images: [
      "/src/assets/HLylkxs4aIYN.jpg",
      "/src/assets/f9Kn3b9LGEmb.jpg"
    ],
    description: "Premium 18K gold plated necklace with emerald stone. Tarnish-free and certified S925 silver base.",
    materials: ["18K Gold Plated", "S925 Silver", "Emerald Stone"],
    tags: ["new", "trending"],
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviews: 124,
    variants: [
      { id: 1, name: "Emerald", color: "#50C878", available: true },
      { id: 2, name: "Sapphire", color: "#0F52BA", available: true }
    ]
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    slug: "diamond-stud-earrings",
    price: 1899,
    originalPrice: 2299,
    category: "earrings",
    categoryId: 2,
    images: [
      "/src/assets/QPR9jh5hnF3Z.jpg",
      "/src/assets/pH6NWp0Nwdpw.jpg"
    ],
    description: "Lab-grown diamond earrings in 18K white gold setting. Perfect for everyday elegance.",
    materials: ["18K White Gold", "Lab-Grown Diamonds"],
    tags: ["bestseller", "offer"],
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviews: 89,
    variants: [
      { id: 1, name: "0.5 Carat", size: "0.5ct", available: true },
      { id: 2, name: "1 Carat", size: "1ct", available: true }
    ]
  },
  {
    id: 3,
    name: "Princess Cut Engagement Ring",
    slug: "princess-cut-engagement-ring",
    price: 3999,
    originalPrice: 4599,
    category: "rings",
    categoryId: 3,
    images: [
      "/src/assets/HJfvH8L379R0.jpg",
      "/src/assets/75tbqZ5w2qQv.jpg"
    ],
    description: "Stunning princess cut moissanite engagement ring with infinity design in white gold.",
    materials: ["14K White Gold", "Moissanite"],
    tags: ["wedding", "premium"],
    inStock: true,
    stockCount: 5,
    rating: 5.0,
    reviews: 67,
    variants: [
      { id: 1, name: "Size 6", size: "6", available: true },
      { id: 2, name: "Size 7", size: "7", available: true },
      { id: 3, name: "Size 8", size: "8", available: false }
    ]
  },
  {
    id: 4,
    name: "Gold Chain Bracelet Set",
    slug: "gold-chain-bracelet-set",
    price: 1299,
    originalPrice: 1599,
    category: "bracelets",
    categoryId: 4,
    images: [
      "/src/assets/ROKaOZ0r1r5s.jpg",
      "/src/assets/LlqiHf22KZUs.jpg"
    ],
    description: "14K real gold bracelet set with beaded and paperclip chain designs. Perfect for layering.",
    materials: ["14K Real Gold", "Stainless Steel"],
    tags: ["trending", "set"],
    inStock: true,
    stockCount: 12,
    rating: 4.7,
    reviews: 156,
    variants: [
      { id: 1, name: "Gold", color: "#FFD700", available: true },
      { id: 2, name: "Rose Gold", color: "#E8B4B8", available: true }
    ]
  },
  {
    id: 5,
    name: "Luxury Wedding Set",
    slug: "luxury-wedding-set",
    price: 5999,
    originalPrice: 7499,
    category: "wedding",
    categoryId: 5,
    images: [
      "/src/assets/MLuxO0R5aXzf.jpg",
      "/src/assets/7O5whGoDF84Q.jpeg"
    ],
    description: "Complete luxury wedding jewelry set including necklace, earrings, and bracelet.",
    materials: ["18K Gold", "Natural Diamonds", "Pearls"],
    tags: ["wedding", "luxury", "set"],
    inStock: true,
    stockCount: 3,
    rating: 4.9,
    reviews: 45,
    variants: [
      { id: 1, name: "Classic", style: "classic", available: true },
      { id: 2, name: "Modern", style: "modern", available: true }
    ]
  },
  {
    id: 6,
    name: "Diamond Halo Earrings",
    slug: "diamond-halo-earrings",
    price: 2799,
    originalPrice: 3299,
    category: "earrings",
    categoryId: 2,
    images: [
      "/src/assets/9m9y96KxgAoH.jpg",
      "/src/assets/9AdtICgXAjOm.jpg"
    ],
    description: "Cushion-cut diamond earrings with halo setting. Exceptional brilliance and fire.",
    materials: ["18K White Gold", "Natural Diamonds"],
    tags: ["diamonds", "premium"],
    inStock: true,
    stockCount: 6,
    rating: 4.8,
    reviews: 78,
    variants: [
      { id: 1, name: "1 Carat", size: "1ct", available: true },
      { id: 2, name: "1.5 Carat", size: "1.5ct", available: true }
    ]
  }
];

// Hero Slider Data
export const heroSlides = [
  {
    id: 1,
    title: "Luxury Diamond Collection",
    subtitle: "Discover Timeless Elegance",
    description: "Explore our premium diamond jewelry crafted with precision and passion",
    image: "/src/assets/MLuxO0R5aXzf.jpg",
    buttonText: "Shop Diamonds",
    buttonLink: "/category/diamonds",
    overlay: true
  },
  {
    id: 2,
    title: "Wedding Collection",
    subtitle: "Your Perfect Day Deserves Perfect Jewelry",
    description: "Complete bridal sets for the most important day of your life",
    image: "/src/assets/7O5whGoDF84Q.jpeg",
    buttonText: "View Wedding Sets",
    buttonLink: "/category/wedding",
    overlay: true
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Fresh Designs Just In",
    description: "Be the first to discover our latest jewelry creations",
    image: "/src/assets/kgm302tXB9jX.jpeg",
    buttonText: "Explore New",
    buttonLink: "/new-arrivals",
    overlay: true
  }
];

// Coupons
export const coupons = [
  {
    id: 1,
    code: "WELCOME10",
    description: "10% off on first purchase",
    discount: 10,
    type: "percentage",
    minAmount: 1000,
    maxDiscount: 500,
    expiryDate: "2025-12-31",
    active: true
  },
  {
    id: 2,
    code: "DIAMOND20",
    description: "20% off on diamond jewelry",
    discount: 20,
    type: "percentage",
    minAmount: 2000,
    maxDiscount: 1000,
    expiryDate: "2025-08-31",
    active: true,
    category: "diamonds"
  },
  {
    id: 3,
    code: "FLAT500",
    description: "Flat ₹500 off",
    discount: 500,
    type: "flat",
    minAmount: 2500,
    expiryDate: "2025-07-31",
    active: true
  }
];

// User Reviews
export const reviews = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    userName: "Priya Sharma",
    rating: 5,
    comment: "Absolutely beautiful necklace! The quality is exceptional and it looks exactly like the pictures.",
    date: "2025-01-05",
    verified: true
  },
  {
    id: 2,
    productId: 2,
    userId: 2,
    userName: "Anita Patel",
    rating: 5,
    comment: "Perfect diamond earrings for everyday wear. Very comfortable and sparkly!",
    date: "2025-01-03",
    verified: true
  },
  {
    id: 3,
    productId: 3,
    userId: 3,
    userName: "Rajesh Kumar",
    rating: 5,
    comment: "Bought this for my fiancée and she absolutely loves it. Great quality and fast delivery.",
    date: "2024-12-28",
    verified: true
  }
];

// Newsletter subscribers (for admin analytics)
export const newsletterSubscribers = [
  { id: 1, email: "user1@example.com", date: "2025-01-01" },
  { id: 2, email: "user2@example.com", date: "2025-01-02" },
  { id: 3, email: "user3@example.com", date: "2025-01-03" }
];

// Mock orders for admin panel
export const orders = [
  {
    id: "HEN-2025-001",
    userId: 1,
    customerName: "Priya Sharma",
    customerEmail: "priya@example.com",
    customerPhone: "+91 9876543210",
    items: [
      { productId: 1, quantity: 1, price: 2499 },
      { productId: 4, quantity: 1, price: 1299 }
    ],
    subtotal: 3798,
    discount: 380,
    shipping: 0,
    total: 3418,
    status: "delivered",
    paymentMethod: "card",
    paymentStatus: "paid",
    shippingAddress: {
      name: "Priya Sharma",
      address: "123 MG Road",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "+91 9876543210"
    },
    orderDate: "2025-01-01T10:30:00Z",
    deliveryDate: "2025-01-05T14:20:00Z",
    trackingNumber: "HEN123456789"
  },
  {
    id: "HEN-2025-002",
    userId: 2,
    customerName: "Anita Patel",
    customerEmail: "anita@example.com",
    customerPhone: "+91 9876543211",
    items: [
      { productId: 2, quantity: 1, price: 1899 }
    ],
    subtotal: 1899,
    discount: 0,
    shipping: 99,
    total: 1998,
    status: "shipped",
    paymentMethod: "upi",
    paymentStatus: "paid",
    shippingAddress: {
      name: "Anita Patel",
      address: "456 Park Street",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001",
      phone: "+91 9876543211"
    },
    orderDate: "2025-01-03T15:45:00Z",
    estimatedDelivery: "2025-01-08T18:00:00Z",
    trackingNumber: "HEN123456790"
  }
];

// Analytics data for admin dashboard
export const analyticsData = {
  totalRevenue: 125000,
  totalOrders: 156,
  totalCustomers: 89,
  averageOrderValue: 2850,
  monthlyRevenue: [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 48000 },
    { month: "Apr", revenue: 61000 },
    { month: "May", revenue: 55000 },
    { month: "Jun", revenue: 67000 }
  ],
  topProducts: [
    { id: 1, name: "Emerald Gold Necklace", sales: 45 },
    { id: 2, name: "Diamond Stud Earrings", sales: 38 },
    { id: 3, name: "Princess Cut Ring", sales: 32 },
    { id: 4, name: "Gold Bracelet Set", sales: 28 },
    { id: 5, name: "Luxury Wedding Set", sales: 15 }
  ],
  categoryPerformance: [
    { category: "Necklaces", sales: 45, revenue: 112500 },
    { category: "Earrings", sales: 38, revenue: 72000 },
    { category: "Rings", sales: 32, revenue: 128000 },
    { category: "Bracelets", sales: 28, revenue: 36400 },
    { category: "Wedding", sales: 15, revenue: 90000 }
  ]
};

// Helper functions
export const getProductById = (id) => products.find(product => product.id === parseInt(id));
export const getProductsByCategory = (category) => products.filter(product => product.category === category);
export const getFeaturedProducts = () => products.filter(product => product.tags.includes('trending') || product.tags.includes('bestseller'));
export const getNewArrivals = () => products.filter(product => product.tags.includes('new'));
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

