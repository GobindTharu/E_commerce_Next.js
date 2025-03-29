// import Collections from "@/Components/sub/Collections";
import { NavBar } from "/Components/main/NavBar.jsx";

import FeaturedProductSlider from "../Components/sub/Sliders";
import Categories from "../Components/sub/Categories";
import ProductsGridView from "../Components/sub/Products";
import CustomerReviews from "../Components/sub/CustomerReviews";
import Brands from "../Components/sub/Brands";
import Footer from "../Components/main/Footer"
import Header from "../Components/main/Header"
import Collections from "../Components/sub/Collections"


export default function Home() {
 
  return (
    <main className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      <NavBar />
      <Header/>
       <FeaturedProductSlider/> 
      <Collections/> 
      <Categories/>
      <ProductsGridView/>
      <CustomerReviews />
      <Brands/> 
      <Footer />
    </main>
  );
}
