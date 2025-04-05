// import Collections from "@/Components/sub/Collections";
import { NavBar } from "/Components/main/NavBar.jsx";

import FeaturedProductSlider from "../Components/sub/FeaturedSliders";
import Categories from "../Components/sub/Categories";
import ProductsGridView from "../Components/sub/Products";
import CustomerReviews from "../Components/sub/CustomerReviews";
import Brands from "../Components/sub/Brands";
import Footer from "../Components/main/Footer";
import SubHeader from "../Components/main/SubHeader";
import Collections from "../Components/sub/Collections";
import Header from "../Components/main/Header";
import FAQSection from "../Components/sub/FAQSection";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <NavBar />
      <SubHeader />
      <FeaturedProductSlider />
      <Collections />
      <Categories />
      <ProductsGridView />
      <CustomerReviews />
      <Brands />
      <FAQSection/>
      <Footer />
    </main>
  );
}
