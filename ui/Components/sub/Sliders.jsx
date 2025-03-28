"use client";

import { Button } from "@nextui-org/react";
import { Heart } from "lucide-react";
import Link from "next/link";
import Slider from "react-slick";
import FavoriteButton from "../sub/FavoriteButton.jsx";
import AddToCartButton from "../sub/AddToCartButton";

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const featuredProduct = [
    {
      title: "shoes",
      shortDescription:
        "you can try for the new fashion and latest wears shoes and clothings",
      featureImageURL:
        "/ui/public/5296765_camera_instagram_instagram logo_icon.png",
    },
    {
      title: "shoes",
      shortDescription:
        "you can try for the new fashion and latest wears shoes and clothings",
      featureImageURL:
        "/ui/public/5296765_camera_instagram_instagram logo_icon.png",
    },
    {
      title: "shoes",
      shortDescription:
        "you can try for the new fashion and latest wears shoes and clothings",
      featureImageURL:
        "/ui/public/5296765_camera_instagram_instagram logo_icon.png",
    },
    {
      title: "shoes",
      shortDescription:
        "you can try for the new fashion and latest wears shoes and clothings",
      featureImageURL:
        "/ui/public/5296765_camera_instagram_instagram logo_icon.png",
    },
    {
      title: "shoes",
      shortDescription:
        "you can try for the new fashion and latest wears shoes and clothings",
      featureImageURL:
        "/ui/public/5296765_camera_instagram_instagram logo_icon.png",
    },
  ];
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {featuredProduct.map((product) => {
          return (
            <div>
              <div className="flex flex-col-reverse md:flex-row gap-4 bg-[#f8f8f8] p-5 md:px-24 md:py-20 w-full">
                <div className="flex-1 flex flex-col md:gap-10 gap-4">
                  <h2 className="text-gray-500 text-xs md:text-base">
                    NEW FASHION
                  </h2>
                  <div className="flex flex-col gap-4">
                    <Link href={``}>
                      <h1 className="md:text-4xl text-xl font-semibold">
                        {product.title}
                      </h1>
                    </Link>
                    <h1 className="text-gray-600 md:text-sm text-xs max-w-96 line-clamp-2">
                      {product.shortDescription}
                    </h1>
                  </div>
                    <div className="flex items-center gap-4">
                      <Link
                        href={``}
                      >
                        <button className="bg-blue-500 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg">
                          BUY NOW
                        </button>
                      </Link>
                      <AddToCartButton productId={product.id} type={"large"} />
                      <FavoriteButton productId={product.id} />
                    </div>
                </div>
                <div className="">
                  <Link href={``}>
                    <img
                      className="h-[14rem] md:h-[23rem]"
                      src={product.featureImageURL}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
