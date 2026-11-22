import {
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { productData } from "../data/product";

const AddToCart = () => {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <p className="mt-1 text-xs text-slate-400">Your selected products</p>
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
  );
};

export default AddToCart;
