import { NavBar } from "/Components/main/NavBar.jsx";
// import FeaturedProductSlider from "./components/Sliders";
// import Collections from "./components/Collections";
// import Categories from "./components/Categories";
// import ProductsGridView from "./components/Products";
// import CustomerReviews from "./components/CustomerReviews";
// import Brands from "./components/Brands";
// import Footer from "./Components/main/Footer";

export const dynamic = "force-dynamic";

export default async function Home() {
  // const [featuredProducts, collections, categories, products, brands] =
  //   await Promise.all([
  //     getFeaturedProducts(),
  //     getCollections(),
  //     getCategories(),
  //     getProducts(),
  //     getBrands(),
  //   ]);

  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <NavBar />
      {/* <FeaturedProductSlider featuredProducts={featuredProducts} /> */}
      {/* <Collections collections={collections} /> */}
      {/* <Categories categories={categories} /> */}
      {/* <ProductsGridView products={products} /> */}
      {/* <CustomerReviews /> */}
      {/* <Brands brands={brands} /> */}
      {/* <Footer /> */}
    </main>
  );
}
