import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";

const Header = () => {
  return (
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
          <span className="whitespace-nowrap text-xs text-slate-400">⌘ K</span>
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
  );
};

export default Header;
