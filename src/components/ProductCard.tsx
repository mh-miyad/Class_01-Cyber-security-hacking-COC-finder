import {
  EyeIcon,
  HeartIcon,
  ShoppingBagIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import type { Product } from "../data/product";
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
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
