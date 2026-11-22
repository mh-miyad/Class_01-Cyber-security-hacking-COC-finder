import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
