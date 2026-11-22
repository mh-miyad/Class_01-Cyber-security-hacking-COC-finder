import {
  AdjustmentsHorizontalIcon,
  ListBulletIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

const ToolBox = () => {
  return (
    <div>
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
    </div>
  );
};

export default ToolBox;
