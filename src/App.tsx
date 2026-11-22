import {
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  HeartIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import type { Product } from "./data/product";
import { productData } from "./data/product";

// ==========================================
// PRODUCT CARD — PRESENTATIONAL COMPONENT
// তুমি এর data handling নিজে implement করবে
// ==========================================

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE AREA */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-50 p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Discount badge */}
        <span className="absolute left-3 top-3 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
          -{product.discountPercentage}%
        </span>

        {/* Wishlist button */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 rounded-full bg-white p-2.5 text-slate-500 shadow-sm transition hover:text-red-500"
        >
          <HeartIcon className="h-5 w-5" />
        </button>

        {/* Quick view */}
        <button
          type="button"
          className="absolute bottom-3 right-3 rounded-lg bg-white p-2 text-slate-600 shadow opacity-0 transition group-hover:opacity-100"
          aria-label="Quick view"
        >
          <EyeIcon className="h-5 w-5" />
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-bold uppercase text-indigo-600">
            {product.category}
          </span>

          <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
            <StarIcon className="h-4 w-4 fill-amber-400" />
            {product.rating}
          </span>
        </div>

        <p className="mb-1 text-xs text-slate-400">
          {product.brand ?? "Unbranded"}
        </p>

        <h3 className="min-h-10 text-sm font-bold leading-5 text-slate-800">
          {product.title}
        </h3>

        {/* PRICE */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-xs text-slate-400 line-through">
            Discount {product.discountPercentage}%
          </span>
        </div>

        {/* STOCK */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="text-xs text-slate-500">Stock: {product.stock}</span>

          <span className="text-xs font-semibold text-emerald-600">
            {product.availabilityStatus}
          </span>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <ShoppingBagIcon className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </article>
  );
};

// ==========================================
// MAIN PRODUCT EXPLORER DESIGN
// ==========================================

const ProductExplorer = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-black text-white">
              M0
            </div>

            <div>
              <h2 className="text-sm font-bold">M0 Commerce</h2>
              <p className="text-[11px] text-slate-400">Marketplace</p>
            </div>
          </div>

          {/* HEADER SEARCH */}
          <div className="hidden max-w-xl flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 md:flex">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
            <input
              placeholder="Search products, brands and SKU..."
              className="h-11 w-full bg-transparent text-sm outline-none"
            />
            <span className="whitespace-nowrap text-xs text-slate-400">
              ⌘ K
            </span>
          </div>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-xl p-2.5 text-slate-500 hover:bg-slate-100"
            >
              <HeartIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="relative rounded-xl bg-indigo-50 p-2.5 text-indigo-600"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold">
              MH
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-8">
        {/* PAGE HEADING */}
        <section className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Commerce / Inventory / Products
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Explore Products
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Discover, organize and manage your products.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              My Cart
            </button>
          </div>
        </section>

        {/* CATEGORY NAVIGATION */}
        <section className="mb-7 flex gap-2 overflow-x-auto pb-2">
          <button className="whitespace-nowrap rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white">
            All Products
          </button>
          <button className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-600">
            Beauty
          </button>
          <button className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-600">
            Fragrances
          </button>
          <button className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-600">
            Furniture
          </button>
          <button className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-600">
            Groceries
          </button>
        </section>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* FILTER SIDEBAR */}
          <aside className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Filters</h2>
              <button className="text-xs font-semibold text-indigo-600">
                Clear all
              </button>
            </div>

            {/* CATEGORY FILTER */}
            <div className="border-t border-slate-100 pt-5">
              <h3 className="mb-4 text-sm font-semibold">Categories</h3>

              <div className="space-y-3">
                <label className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-600" />
                    Beauty
                  </span>
                  <span className="text-xs text-slate-400">24</span>
                </label>

                <label className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-600" />
                    Fragrances
                  </span>
                  <span className="text-xs text-slate-400">12</span>
                </label>

                <label className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-600" />
                    Furniture
                  </span>
                  <span className="text-xs text-slate-400">18</span>
                </label>

                <label className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <input type="checkbox" className="accent-indigo-600" />
                    Groceries
                  </span>
                  <span className="text-xs text-slate-400">30</span>
                </label>
              </div>
            </div>

            {/* PRICE FILTER */}
            <div className="border-t border-slate-100 pt-5">
              <h3 className="mb-4 text-sm font-semibold">Price Range</h3>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="h-10 min-w-0 w-full rounded-lg border border-slate-200 px-2 text-sm outline-none focus:border-indigo-500"
                />
                <span className="text-slate-400">–</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="h-10 min-w-0 w-full rounded-lg border border-slate-200 px-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <input type="range" className="mt-4 w-full accent-indigo-600" />
            </div>

            {/* RATING FILTER */}
            <div className="border-t border-slate-100 pt-5">
              <h3 className="mb-4 text-sm font-semibold">Customer Rating</h3>

              <div className="space-y-3">
                <label className="flex gap-2 text-sm">
                  <input type="checkbox" className="accent-indigo-600" />
                  <span className="text-amber-500">★★★★★</span>
                  <span className="text-xs text-slate-500">5 stars</span>
                </label>
                <label className="flex gap-2 text-sm">
                  <input type="checkbox" className="accent-indigo-600" />
                  <span className="text-amber-500">★★★★☆</span>
                  <span className="text-xs text-slate-500">4+ stars</span>
                </label>
                <label className="flex gap-2 text-sm">
                  <input type="checkbox" className="accent-indigo-600" />
                  <span className="text-amber-500">★★★☆☆</span>
                  <span className="text-xs text-slate-500">3+ stars</span>
                </label>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="border-t border-slate-100 pt-5">
              <h3 className="mb-4 text-sm font-semibold">Availability</h3>

              <div className="space-y-3 text-sm text-slate-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  In Stock
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  Low Stock
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  Out of Stock
                </label>
              </div>
            </div>

            {/* FILTER BUTTON */}
            <button className="h-11 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-700">
              Apply Filters
            </button>
          </aside>

          {/* PRODUCT AREA */}
          <section className="min-w-0">
            {/* SEARCH BAR FOR MOBILE */}
            <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 md:hidden">
              <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
              <input
                placeholder="Search products..."
                className="h-11 w-full text-sm outline-none"
              />
            </div>

            {/* TOOLBAR */}
            <div className="mb-5 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-bold">All Products</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Product results will appear here
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs">
                  <AdjustmentsHorizontalIcon className="h-4 w-4" />
                  Filters
                </button>

                <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-xs outline-none">
                  <option>Sort by: Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Top Rated</option>
                </select>

                <button className="rounded-lg border border-slate-200 p-2">
                  <Squares2X2Icon className="h-5 w-5" />
                </button>

                <button className="rounded-lg border border-slate-200 p-2">
                  <ListBulletIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* ACTIVE FILTER CHIPS */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Active filters:</span>

              <span className="flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1.5 text-xs text-indigo-600">
                Beauty <XMarkIcon className="h-3 w-3" />
              </span>

              <span className="flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1.5 text-xs text-indigo-600">
                Rating 4+ <XMarkIcon className="h-3 w-3" />
              </span>

              <button className="text-xs font-semibold text-slate-500">
                Clear filters
              </button>
            </div>

            {/* PRODUCT GRID */}
            {/* TODO: Tumi ekhane nijer products.map() implement korbe */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <ProductCard product={productData.products[0]} />

              <ProductCard product={productData.products[1]} />

              <ProductCard product={productData.products[2]} />
            </div>

            {/* EMPTY STATE DESIGN REFERENCE */}
            {/*
              TODO:
              Filter/search result empty hole ei section show korbe.
            */}

            {/* PAGINATION */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="text-xs text-slate-500">
                Showing products / Total products
              </span>

              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-slate-200 p-2">
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>

                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">
                  1
                </button>

                <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs">
                  2
                </button>

                <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs">
                  3
                </button>

                <button className="rounded-lg border border-slate-200 p-2">
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* CART PREVIEW */}
        {/* TODO: Later connect this UI to your Zustand cart store */}

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Shopping Cart</h2>
              <p className="mt-1 text-xs text-slate-400">
                Your selected products
              </p>
            </div>

            <ShoppingBagIcon className="h-6 w-6 text-indigo-600" />
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white">
                <img
                  src={productData.products[0].thumbnail}
                  alt={productData.products[0].title}
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div>
                <h3 className="font-semibold">Selected Product</h3>
                <p className="mt-1 text-xs text-slate-400">Sample cart item</p>
                <p className="mt-2 font-bold text-indigo-600">Sample price</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-lg border bg-white p-2">
                <MinusIcon className="h-4 w-4" />
              </button>

              <span className="font-semibold">1</span>

              <button className="rounded-lg border bg-white p-2">
                <PlusIcon className="h-4 w-4" />
              </button>

              <button className="rounded-lg p-2 text-red-500">
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs text-slate-400">Cart total</p>
              <p className="mt-1 text-2xl font-bold">$0.00</p>
            </div>

            <button className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
              Proceed to Checkout
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductExplorer;
