const CategoryBoxTabs = () => {
  return (
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
  );
};

export default CategoryBoxTabs;
