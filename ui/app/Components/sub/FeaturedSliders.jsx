"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Slider from "react-slick";
import FavoriteButton from "./FavoriteButton.jsx.jsx";
import AddToCartButton from "./AddToCartButton.jsx";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function FeaturedProductSlider() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: inView,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    draggable: true,
  };

  const featuredProductsData = [
    {
      id: 1,
      title: "Stylish Sneakers",
      shortDescription: "Explore the latest sneaker trends and fashion styles.",
      featureImageURL: "/shoes.png",
    },
    {
      id: 2,
      title: "Caps",
      shortDescription:
        "Stylish and adjustable caps for everyday wear and sun protection.",
      featureImageURL: "/cap.png",
    },
    {
      id: 3,
      title: "Laptops",
      shortDescription: "Gaming Laptops with dedicated Graphics.",
      featureImageURL: "/laptop.webp",
    },

    {
      id: 4,
      title: "T-Shirts",
      shortDescription:
        "Trendy graphic tees with bold prints and comfortable fabric.",
      featureImageURL: "/tshirt.png",
    },
    {
      id: 5,
      title: "Denim Jackets",
      shortDescription: "Classic denim jackets for a cool and casual look.",
      featureImageURL: "/denim-jacket.png",
    },
    {
      id: 6,
      title: "Smart Watches",
      shortDescription:
        "Modern smartwatches with health tracking and notifications.",
      featureImageURL: "/smartwatch.png",
    },
    {
      id: 7,
      title: "Wireless Earbuds",
      shortDescription:
        "Compact and high-quality earbuds with noise cancellation.",
      featureImageURL: "/earbuds.png",
    },
    {
      id: 8,
      title: "Hoodies",
      shortDescription:
        "Comfortable and warm hoodies for casual wear in all seasons.",
      featureImageURL: "/hoodie.png",
    },
    {
      id: 9,
      title: "Sports Bras",
      shortDescription:
        "Supportive and breathable sports bras for active lifestyles.",
      featureImageURL: "/sports-bra.png",
    },
    {
      id: 10,
      title: "Fitness Trackers",
      shortDescription: "Wearable fitness devices to track workouts and steps.",
      featureImageURL: "/fitness-tracker.png",
    },
    {
      id: 11,
      title: "Leather Backpacks",
      shortDescription:
        "Stylish and durable backpacks made from genuine leather.",
      featureImageURL: "/leather-backpack.png",
    },
    {
      id: 12,
      title: "Casual Sneakers",
      shortDescription: "Everyday sneakers with versatile style and comfort.",
      featureImageURL: "/casual-sneakers.png",
    },
    {
      id: 13,
      title: "Beanies",
      shortDescription: "Soft and cozy beanies for warmth and style in winter.",
      featureImageURL: "/beanie.png",
    },
    {
      id: 14,
      title: "Summer Dresses",
      shortDescription:
        "Lightweight and breathable dresses perfect for summer days.",
      featureImageURL: "/summer-dress.png",
    },
   
  ];

  return (
    <div ref={ref} className="w-full flex justify-center items-center py-6">
      <div ref={ref} className="w-full max-w-7xl">
        <Slider ref={setSliderRef} {...settings}>
          {featuredProductsData.map((product) => (
            <div
              key={product.id}
              className="w-full flex justify-center items-center"
            >
              <div className="flex flex-col-reverse z-20 md:flex-row items-center gap-6 bg-white  rounded-md p-6 md:p-12 max-w-6xl">
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
                    <AddToCartButton type="large" />
                    <FavoriteButton />
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
    </div>
  );
}
