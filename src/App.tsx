import AddToCart from "./components/AddToCart";
import CategoryBoxTabs from "./components/CategoryBoxTabs";
import FilterBox from "./components/FilterBox";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Pagination from "./components/Pagination";
import { ProductCard } from "./components/ProductCard";
import ToolBox from "./components/ToolBox";
import { productData } from "./data/product";

const ProductExplorer = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* HEADER */}
      <Header />
      <main className="mx-auto max-w-[1500px] px-5 py-8">
        {/* PAGE HEADING */}
        <PageHeader />
        {/* CATEGORY NAVIGATION */}
        <CategoryBoxTabs />
        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* FILTER SIDEBAR */}
          <FilterBox />
          {/* PRODUCT AREA */}
          <section className="min-w-0">
            <ToolBox />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <ProductCard product={productData.products[0]} />

              <ProductCard product={productData.products[1]} />

              <ProductCard product={productData.products[2]} />
            </div>
            {/* PAGINATION */}
            <Pagination />
          </section>
        </div>
        <AddToCart />
      </main>
    </div>
  );
};

export default ProductExplorer;
