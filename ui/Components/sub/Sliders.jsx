"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Slider from "react-slick";
import FavoriteButton from "../sub/FavoriteButton.jsx";
import AddToCartButton from "../sub/AddToCartButton";

export default function FeaturedProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const featuredProductsData = [
    {
      id: 1,
      title: "Stylish Sneakers",
      shortDescription: "Explore the latest sneaker trends and fashion styles.",
      featureImageURL: "/ui/public/logo.png",
    },
    {
      id: 2,
      title: "Casual Wear",
      shortDescription: "Upgrade your wardrobe with trendy casual outfits.",
      featureImageURL: "/5296765_camera_instagram_instagram_logo_icon.png",
    },
    {
      id: 3,
      title: "Elegant Heels",
      shortDescription: "Step up your fashion game with these stylish heels.",
      featureImageURL: "/5296765_camera_instagram_instagram_logo_icon.png",
    },
  ];

  return (
    <div className="overflow-hidden w-full bg-gray-100 py-10">
      <Slider>
        {featuredProductsData.map((product) => (
          <div key={product.id} className="w-full flex justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6 md:p-12 max-w-6xl">
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                <h2 className="text-blue-500 text-xs md:text-sm font-semibold uppercase tracking-widest">
                  New Arrival
                </h2>
                <div className="space-y-2">
                  <Link href="#">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-blue-500 transition">
                      {product.title}
                    </h1>
                  </Link>
                  <p className="text-gray-600 text-sm md:text-lg max-w-md">
                    {product.shortDescription}
                  </p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Link href="#">
                    <button className="bg-blue-600 text-white text-sm md:text-base px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                      Buy Now
                    </button>
                  </Link>
                  <AddToCartButton productId={product.id} type="large" />
                  <FavoriteButton productId={product.id} />
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center items-center">
                <Link href="#">
                  <img
                    className="h-48 md:h-80 object-contain drop-shadow-lg transition-transform transform hover:scale-105"
                    src={product.featureImageURL}
                    alt={product.title}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
