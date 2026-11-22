import type { Product, ProductData } from "../data/product";

// =====================================
// FILTER TYPES
// =====================================

export type SortOption =
  | "default"
  | "price-low"
  | "price-high"
  | "rating-high"
  | "title-asc"
  | "stock-low";

export type StockFilter = "all" | "in-stock" | "low-stock" | "out-of-stock";

export type ViewMode = "grid" | "list";

// =====================================
// PRODUCT SLICE
// =====================================

export interface ProductSlice {
  products: Product[];
  totalProducts: number;
  skip: number;
  limit: number;

  setProductData: (data: ProductData) => void;
}

// =====================================
// FILTER SLICE
// =====================================

export interface FilterSlice {
  searchQuery: string;
  selectedCategory: string;
  selectedBrands: string[];

  minPrice: number | null;
  maxPrice: number | null;
  minRating: number;

  stockFilter: StockFilter;
  availabilityFilter: string;

  sortBy: SortOption;
  viewMode: ViewMode;

  currentPage: number;
  pageSize: number;

  setSearchQuery: (value: string) => void;
  setCategory: (value: string) => void;
  toggleBrand: (brand: string) => void;
  setPriceRange: (min: number | null, max: number | null) => void;
  setMinRating: (value: number) => void;

  setStockFilter: (value: StockFilter) => void;
  setAvailabilityFilter: (value: string) => void;

  setSortBy: (value: SortOption) => void;
  setViewMode: (value: ViewMode) => void;

  setCurrentPage: (value: number) => void;
  setPageSize: (value: number) => void;

  resetFilters: () => void;
}

// =====================================
// CART SLICE
// =====================================

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartSlice {
  cartItems: CartItem[];

  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

// =====================================
// WISHLIST SLICE
// =====================================

export interface WishlistSlice {
  wishlistIds: number[];

  toggleWishlist: (productId: number) => void;
}

// =====================================
// COMPLETE STORE TYPE
// =====================================

export type AppStore = ProductSlice & FilterSlice & CartSlice & WishlistSlice;
