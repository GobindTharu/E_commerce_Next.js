import Footer from "./Components/main/Footer";
import Header from "./Components/main/Header";
import NavBar  from "./Components/main/NavBar.jsx";
import SubHeader from "./Components/main/SubHeader";
import Brands from "./Components/sub/Brands";
import Categories from "./Components/sub/Categories";
import Collections from "./Components/sub/Collections";
import CustomerReviews from "./Components/sub/CustomerReviews";
import FAQSection from "./Components/sub/FAQSection";
import FeaturedProductSlider from "./Components/sub/FeaturedSliders";
import ProductsGridView from "./Components/sub/Products";

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
      <FAQSection />
      <Footer />
    </main>
  );
}
