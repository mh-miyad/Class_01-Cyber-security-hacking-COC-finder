const FilterBox = () => {
  return (
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
  );
};

export default FilterBox;
