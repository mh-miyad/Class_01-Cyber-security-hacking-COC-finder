import { ShoppingBagIcon } from "@heroicons/react/16/solid";

const PageHeader = () => {
  return (
    <section className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Commerce / Inventory / Products
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Explore Products</h1>
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
  );
};

export default PageHeader;
